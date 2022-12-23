import * as prismic from '@prismicio/client'

const repoName = 'srijankgupta'

// @ts-ignore
const createClient = ({ request, fetch } = {}) => {
  const clientOptions = {
    fetch,
  }
  const client = prismic.createClient(repoName, clientOptions)

  if (request) {
    client.enableAutoPreviewsFromReq(request)
  }

  return client
}

const client = createClient()
export default client
