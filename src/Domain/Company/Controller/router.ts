import { Router } from 'express'
import * as CompanyController from 'Domain/Company/Controller'

export const router = Router()

router.get('/companies', CompanyController.listCompanies)
router.get('/companies/formatted', CompanyController.listFormattedCompanies)
router.get(
  '/companies/formatted/whatsapp',
  CompanyController.listFormattedCompaniesToWhatsapp
)
