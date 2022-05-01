import { Job, Company } from 'Entities'

type companiesToWhatsapp = (inputs: Company[]) => string

export const companiesToWhatsapp: companiesToWhatsapp = inputs =>
  inputs.reduce(
    (formattedText, company) =>
      formattedText +
      `
        <strong> ${formatJobs(company.jobs)} </strong>
        🏛️<strong> *${company.name}* </strong> <br>
        💜<strong> *Dar match ${company.jobSiteShortenURL}* </strong> <br>
        <br>
      `,
    ''
  )

const formatJobs = (jobs: Job[]): string =>
  jobs.reduce(
    (formattedText, job, index) =>
      formattedText +
      `
        👾<strong> *${job.name}* </strong> <br>
      `,
    ''
  )
