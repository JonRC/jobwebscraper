import { Company } from 'Entities/Company'
import { CompanyProvider } from 'Service'

type listCompanies = () => Promise<Company[]>

type LastSearch = {
  companies: Company[]
  searchedAt?: Date
}

const lastSearch: LastSearch = {
  companies: []
}

export const listCompanies: listCompanies = async () => {
  // Temporary cache solution
  const elapsedTime = Date.now() - (lastSearch.searchedAt?.getTime() || 0)
  const cacheTimeout = 1000 * 60 * 30 // 30 minutes
  if (elapsedTime < cacheTimeout) return Promise.resolve(lastSearch.companies)

  const getCompanyProcesses = companyProviders.map(companyProvider =>
    companyProvider()
  )

  const companies = await Promise.allSettled(getCompanyProcesses).then(
    results => results.filter(isFulfilled).map(result => result.value)
  )

  if (companies.length > 0) {
    lastSearch.companies = companies
    lastSearch.searchedAt = new Date()
  }

  return companies
}

const companyProviders: Array<() => Promise<Company>> = [
  CompanyProvider.Tqi.getCompany,
  CompanyProvider.Zup.getCompany
]

const isFulfilled = <T>(
  result: PromiseSettledResult<T>
): result is PromiseFulfilledResult<T> => result.status === 'fulfilled'
