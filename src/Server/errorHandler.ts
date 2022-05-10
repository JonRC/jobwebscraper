import { ErrorRequestHandler } from 'express'

export const errorHandler: ErrorRequestHandler = (
  error,
  request,
  response,
  next
) => {
  return response
    .status(500)
    .json({ error: 'unexpected server error | working on specific errors' })
}
