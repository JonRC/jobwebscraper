import { FetchSite, Dom } from 'Service'

FetchSite.zup()
  .then(Dom.fromHtml)
  .then(Dom.toCompany.zup)
  .then(company => {})
