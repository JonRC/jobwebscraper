import {Cluster} from 'puppeteer-cluster'

export const cluster = () => {
  const puppeteerCluster = Cluster.launch({
    concurrency: Cluster.CONCURRENCY_BROWSER,
    maxConcurrency: 3
  })
}