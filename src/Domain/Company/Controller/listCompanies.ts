import * as CompanyUsecase from 'Domain/Company/Usecase'
import { Request, Response } from 'express'

export const listCompanies = async (request: Request, response: Response) => {
  const companies = await CompanyUsecase.listCompanies()

  response.json(companies)
}
