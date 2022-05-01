import express from 'express'
import 'express-async-errors'
import cors from 'cors'
import { router } from './router'

export const init = () => {
  const server = express()
  const port = process.env.PORT || 3000

  server.use(cors())
  server.use(express.json())
  server.use(router)

  server.listen(port, () => console.log(`Server running on port ${port}`))

  return server
}
