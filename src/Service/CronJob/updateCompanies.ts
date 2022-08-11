import cron from 'cron'
import { Company } from 'Entities'
import { LocalDatabase } from 'LocalDatabase/LocalDatabase'
import * as CompanyProvider from 'Service/CompanyProvider'

export const updateCompaniesJob = async () => {
  await updateCompanies()
  return cron.job('0 30 * * * *', updateCompanies)
}

const updateCompanies = async () => {
  const getCompanyProcesses = companyProviders.map(companyProvider =>
    companyProvider()
  )

  const companies = await Promise.allSettled(getCompanyProcesses).then(
    results => results.filter(isFulfilled).map(result => result.value)
  )

  LocalDatabase.setCompanies(companies)
}

const companyProviders: Array<() => Promise<Company>> = [
  CompanyProvider.GrupoReal.getCompany,
  CompanyProvider.IpeDigital.getCompany,
  CompanyProvider.Martins.getCompany,
  CompanyProvider.Sankhya.getCompany,
  CompanyProvider.SocialBank.getCompany,
  CompanyProvider.T10.getCompany,
  CompanyProvider.Tqi.getCompany,
  CompanyProvider.Tribanco.getCompany,
  CompanyProvider.ValeCard.getCompany,
  CompanyProvider.Zup.getCompany
]

const isFulfilled = <T>(
  result: PromiseSettledResult<T>
): result is PromiseFulfilledResult<T> => result.status === 'fulfilled'
