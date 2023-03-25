import axios from 'axios'

export const request = axios.create({
  baseURL: 'https://63948b2c86829c49e81fec54.mockapi.io/',
})

export const get = async (path, options = {}) => {
  const response = await request.get(path, options)
  return response
}
