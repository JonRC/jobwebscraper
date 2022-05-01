import { Dom, FetchSite, Format } from 'Service'

export const listFormattedCompaniesToWhatsapp = async () => {
  const company = await FetchSite.zup()
    .then(Dom.fromHtml)
    .then(Dom.toCompany.zup)
  const companies = [company]

  const formattedCompanies = Format.companiesToWhatsapp(companies)

  return formattedCompanies
}
