import { Company } from 'Entities'
import { Dom } from 'Service'
import { domToCompany } from './domToCompany'
import { getHtml } from './getHtml'

export const getCompany = (): Promise<Company> => {
  return getHtml().then(Dom.fromHtml).then(domToCompany)
}
