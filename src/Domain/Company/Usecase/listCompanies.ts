import { Company } from 'Entities/Company'
import { LocalDatabase } from 'LocalDatabase/LocalDatabase'

type listCompanies = () => Promise<Company[]>

export const listCompanies: listCompanies = async () => {
  const companies = LocalDatabase.getCompanies()

  return companies
}
