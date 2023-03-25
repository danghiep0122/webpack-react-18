import * as request from '../ultilities/request'

const fetch = async (query) => {
  try {
    const response = await request.get(query)
    return response.data
  } catch (error) {
    console.error(error)
  }
}

export default fetch
