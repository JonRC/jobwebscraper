import { Company, Job } from 'Entities'
import puppeteer from 'puppeteer'
import { task } from 'Service/PuppeteerCluster'

type TqiJob = {
  id: string
  uri: string
  name: string
  local: string
  area: string
  description: string
}

export const getCompany = task(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox'] })
  const page = await browser.newPage()
  await page.goto('https://vagas.tqi.com.br/')
  await page.waitForFunction(
    () => !!this?.['webpackJsonphotsite-vagas'][1][1]['./src/jobsList.json']
  )

  const tqiJsonJobs = await page.evaluate(() => {
    const getJsonParseParam = (text: string) => {
      const [, parseParam] =
        text.match(/JSON\.parse\("(.*)"\)/) || ([] as undefined[])
      return parseParam
    }

    const jobFunction: Function = this?.['webpackJsonphotsite-vagas'][1][1][
      './src/jobsList.json'
    ] as any

    const jobsJson = getJsonParseParam(jobFunction.toString())?.replace(
      /\\/g,
      ''
    )

    return jobsJson || JSON.stringify([])
  })

  const tqiJobs: TqiJob[] = JSON.parse(tqiJsonJobs)

  const jobs: Job[] = tqiJobs.map(tqiJob => ({
    area: tqiJob.area,
    name: tqiJob.name,
    link: `https://vagas.tqi.com.br/vaga/${tqiJob.uri}`
  }))

  const company: Company = {
    jobs,
    jobSiteURL: 'https://vagas.tqi.com.br/',
    jobSiteShortenURL: 'bit.ly/2RKOg9C',
    name: 'tqi'
  }

  await page.close()
  await browser.close()

  return company
})
