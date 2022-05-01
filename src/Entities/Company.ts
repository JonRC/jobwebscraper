import { Job } from './Job'

export type Company = {
  name: CompanyName
  jobSiteURL: string
  jobSiteShortenURL: string
  jobs: Job[]
}

export type CompanyName = 'zup'
