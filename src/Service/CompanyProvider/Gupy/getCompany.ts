import { Company, CompanyName, Job } from 'Entities'
import { ElementHandle, Page } from 'puppeteer'
import { task } from 'Service/PuppeteerCluster'
import { isNotNull } from 'Util'
import * as R from 'ramda'
import { getSelectOptionValues } from 'Util/Puppeteer'
import { pipe } from 'fp-ts/function'
import * as A from 'fp-ts/lib/Array'

type GupyInput = {
  subdomain: string
  companyName: CompanyName
  fields?: string[]
  jobSiteShortenURL: string
  jobSiteURL: string
}

export const getCompany = ({
  fields,
  companyName,
  subdomain,
  jobSiteShortenURL,
  jobSiteURL
}: GupyInput) =>
  task(async page => {
    const url = `https://${subdomain}.gupy.io/`
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 })

    const selectId = '#filter-department'
    await page.waitForSelector(selectId)

    const jobElementList = await page.$('.job-list')
    if (!jobElementList) throw new Error('jobElementList not found')

    const jobElements = await jobElementList.$$<HTMLTableRowElement>('tr')

    const allJobsProcessing = jobElements.map(jobFromJobElement)
    const allJobs = await Promise.all(allJobsProcessing)

    const jobs = pipe(
      allJobs,
      A.filter(isNotNull),
      A.filter(job => (fields ? fields.includes(job.area) : true)),
      A.filter(job => !job.area.match(/banco\s+de\s+talentos/i)),
      R.uniqBy(R.prop('link')),
      R.uniqBy(R.prop('name'))
    )

    const company: Company = {
      jobs,
      jobSiteShortenURL,
      jobSiteURL,
      name: companyName,
      createdAt: new Date()
    }

    return company
  })

const jobFromJobElement = async (
  jobElement: ElementHandle<HTMLTableRowElement>
) => {
  const area = await jobElement.evaluate(element =>
    element.getAttribute('data-department')
  )
  if (!area) return null

  const name = await jobElement.$eval('a span', element => element.textContent)
  if (!name) return null

  const link = await jobElement.$eval(
    'a',
    element => (element as HTMLAnchorElement).href
  )

  const job: Job = {
    name,
    area,
    link
  }

  return job
}
