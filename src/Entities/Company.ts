import { Job } from './Job'

export type Company = {
  name: CompanyName
  jobSiteURL: string
  jobSiteShortenURL: string
  jobs: Job[]
}

export const validCompanyNames = [
  'zup',
  'tqi',
  't10',
  'valeCard',
  'ipeDigital',
  'martins',
  'grupoReal',
  'socialBank',
  'sankhya',
  'tribanco'
] as const

export type CompanyName = typeof validCompanyNames[number]
