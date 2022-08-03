import { Company } from 'Entities/Company'
import { CompanyProvider } from 'Service'

type listCompanies = () => Promise<Company[]>

export const listCompanies: listCompanies = () => {
  const getCompanyProcesses = companyProviders.map(companyProvider =>
    companyProvider()
  )

  const companies = Promise.allSettled(getCompanyProcesses).then(results =>
    results.filter(isFulfilled).map(result => result.value)
  )

  return companies
}

const companyProviders: Array<() => Promise<Company>> = [
  CompanyProvider.Tqi.getCompany,
  CompanyProvider.Zup.getCompany
]

const isFulfilled = <T>(
  result: PromiseSettledResult<T>
): result is PromiseFulfilledResult<T> => result.status === 'fulfilled'
