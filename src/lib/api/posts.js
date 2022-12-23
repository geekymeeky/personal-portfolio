import client from '.'

export const getAllPosts = async (/** @type {String} */ type) => {
  const response = await client.getAllByType(type)
  return response
}

export const getPostByUID = async (
  /** @type {String} */ type,
  /** @type {String} */ uid
) => {
  const response = await client.getByUID('blogpost', uid)
  return JSON.parse(JSON.stringify(response))
}

export const getPostBySlug = async (
  /** @type {String} */ type,
  /** @type {String} */ slug
) => {
  const response = await client.getByUID(type, slug)
  return response
}
