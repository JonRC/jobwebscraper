import { Company } from 'Entities'

let companies: Company[]

// It's a temporary solution to avoid cost and time of creating a real database.
export const LocalDatabase = {
  getCompanies: () => companies || [],
  setCompanies: (newCompanies: Company[]) => {
    companies = newCompanies
  }
}
