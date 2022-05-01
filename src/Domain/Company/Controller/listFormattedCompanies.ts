import { Request, Response } from 'express'

import * as CompanyUsecase from 'Domain/Company/Usecase'

export const listFormattedCompanies = async (
  request: Request,
  response: Response
) => {
  const formattedCompaniesHTML = await CompanyUsecase.listFormattedCompanies()

  response.setHeader('Content-Type', 'text/html')

  response.send(formattedCompaniesHTML)
}
