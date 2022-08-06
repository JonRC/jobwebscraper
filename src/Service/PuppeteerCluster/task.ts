import { Page } from 'puppeteer'
import { puppeteerCluster } from './puppeteerCluster'
import os from 'os'

export const task =
  <Input, Output>(
    taskFunction: (page: Page, input?: Input) => Promise<Output>
  ) =>
  (input?: Input) =>
    puppeteerCluster().then(
      cluster =>
        cluster.execute(input, ({ page }) =>
          taskFunction(page, input)
        ) as Promise<Output>
    )
