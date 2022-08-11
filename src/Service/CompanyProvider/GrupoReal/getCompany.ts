import * as Gupy from '../Gupy'

export const getCompany = Gupy.getCompany({
  fields: [
    'Marketing',
    'Tecnologia da Informação ',
    'Vendas Externas',
    'Vendas Internas'
  ],
  companyName: 'grupoReal',
  jobSiteShortenURL: 'bit.ly/3gtXkWB',
  jobSiteURL: 'https://gruporeal.gupy.io/',
  subdomain: 'gruporeal'
})
