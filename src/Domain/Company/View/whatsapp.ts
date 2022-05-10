import { Job, Company } from 'Entities'

type whatsapp = (inputs: Company[]) => string

export const whatsapp: whatsapp = inputs =>
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
