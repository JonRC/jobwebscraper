import axios from 'axios'
import { writeFileSync } from 'fs'
import puppeteer from 'puppeteer'

export const tqi = async () => {
  const browser = await puppeteer.launch({ headless: false })
  const page = await browser.newPage()
  await page.goto('https://vagas.tqi.com.br/')
  await page.waitForNetworkIdle()
  const html = await page.$eval('*', allDocument => allDocument.innerHTML)
  console.log(html)
  writeFileSync('test.html', html)
  return html
}

tqi().then(console.log)
