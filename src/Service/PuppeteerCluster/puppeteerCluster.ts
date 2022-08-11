import { Cluster } from 'puppeteer-cluster'

const createClusterInstance = () =>
  Cluster.launch({
    concurrency: Cluster.CONCURRENCY_BROWSER,
    maxConcurrency: 2,
    puppeteerOptions: {
      headless: true,
      args: ['--no-sandbox']
    },
    timeout: 60000
  })

export const clusterInstance = createClusterInstance()
  .then(() => createClusterInstance())
  .catch(error => {
    console.error(error)
    return createClusterInstance()
  })

export const puppeteerCluster = () => clusterInstance
