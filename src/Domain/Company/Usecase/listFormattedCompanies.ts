import { Dom, FetchSite, Format } from 'Service'

export const listFormattedCompanies = async () => {
  const company = await FetchSite.zup()
    .then(Dom.fromHtml)
    .then(Dom.toCompany.zup)
  const companies = [company]

  const formattedCompanies = Format.companies(companies)

  return formattedCompanies
}
