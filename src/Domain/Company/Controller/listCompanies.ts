import * as CompanyUsecase from 'Domain/Company/Usecase'
import * as CompanyView from 'Domain/Company/View'
import { Response } from 'express'
import * as yup from 'yup'
import { E } from 'Util'

const availableFormats = ['json', 'html', 'whatsapp'] as const
type AvailableFormats = typeof availableFormats[number]

const listCompaniesQuerySchema = yup.object({
  format: yup.mixed<AvailableFormats>().oneOf([...availableFormats])
})

type ListCompaniesQuery = yup.InferType<typeof listCompaniesQuerySchema>

export const listCompanies = async (
  request: E.RequestQuery<ListCompaniesQuery>,
  response: Response
) => {
  const companies = await CompanyUsecase.listCompanies()

  if (!listCompaniesQuerySchema.isValidSync(request.query))
    throw new Error('invalid request')

  const { format = 'json' } = request.query

  if (format === 'html') {
    const htmlFormattedCompanies = CompanyView.html(companies)
    response.setHeader('Content-Type', 'text/html')
    return response.send(htmlFormattedCompanies)
  }

  if (format === 'whatsapp') {
    const htmlFormattedCompanies = CompanyView.whatsapp(companies)
    response.setHeader('Content-Type', 'text/html')
    return response.send(htmlFormattedCompanies)
  }

  return response.json({ companies })
}
