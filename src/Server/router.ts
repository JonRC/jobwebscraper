import { Router } from 'express'
import * as CompanyController from 'Domain/Company/Controller'

export const router = Router()

router.use(CompanyController.router)
