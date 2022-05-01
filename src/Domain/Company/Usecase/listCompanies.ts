import { Company } from 'Entities/Company'
import { Dom, FetchSite } from 'Service'

type listCompanies = () => Promise<Company[]>

export const listCompanies: listCompanies = async () => {
  const company = await FetchSite.zup()
    .then(Dom.fromHtml)
    .then(Dom.toCompany.zup)

  const companies = [company]

  return companies
}
