import { updateCompaniesJob } from './updateCompanies'

export const init = () => {
  updateCompaniesJob().then(job => job.start())
}
