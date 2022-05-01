import { Request, Response } from 'express'

import * as CompanyUsecase from 'Domain/Company/Usecase'

export const listFormattedCompaniesToWhatsapp = async (
  request: Request,
  response: Response
) => {
  const formattedCompaniesHTML =
    await CompanyUsecase.listFormattedCompaniesToWhatsapp()

  response.setHeader('Content-Type', 'text/html')

  response.send(formattedCompaniesHTML)
}
