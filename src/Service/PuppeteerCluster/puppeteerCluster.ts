import { Cluster } from 'puppeteer-cluster'

export const clusterInstance = Cluster.launch({
  concurrency: Cluster.CONCURRENCY_BROWSER,
  maxConcurrency: 5,
  puppeteerOptions: {
    headless: true,
    args: ['--no-sandbox']
  },
  timeout: 60000
})

export const puppeteerCluster = () => clusterInstance
