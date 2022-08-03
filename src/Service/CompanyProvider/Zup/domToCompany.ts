import { Job } from 'Entities'
import { Company } from 'Entities/Company'
import * as Util from 'Util'

type domToCompany = (document: Document) => Company

export const domToCompany: domToCompany = document => {
  const jobGroupList = document.querySelectorAll<HTMLSelectElement>('.level-0')
  const jobGroups = Array.from(jobGroupList)

  const jobs = jobGroups.flatMap(jobGroupToJobs)

  const company: Company = {
    jobSiteURL: 'https://boards.greenhouse.io/zupinnovation',
    jobSiteShortenURL: 'bit.ly/3bgQAfg',
    jobs,
    name: 'zup'
  }

  return company
}

const jobGroupToJobs = (jobGroup: HTMLSelectElement): Job[] => {
  const area = jobGroup.querySelector('h3')?.textContent?.trim()
  if (!area) return []

  const openings = Array.from(
    jobGroup.querySelectorAll<HTMLDivElement>('.opening')
  )

  const jobs: Job[] = openings
    .map(opening => {
      const jobAnchor = opening.querySelector<HTMLAnchorElement>('a')
      const name = jobAnchor?.text.trim()
      const link = `https://boards.greenhouse.io${jobAnchor?.href}`

      if (!name || !link) return null
      return { name, link, area }
    })
    .filter(Util.isNotNull)

  return jobs
}
