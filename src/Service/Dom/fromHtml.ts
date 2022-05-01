import { JSDOM } from 'jsdom'

export const fromHtml = (html: string): Document => {
  const { window } = new JSDOM(html)
  const { document } = window
  return document
}
