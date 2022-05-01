import { Job } from './Job'

export type Company = {
  name: CompanyName
  jobSite: string
  jobs: Job[]
}

export type CompanyName = 'zup'
