import axios from 'axios'

export const getHtml = async (): Promise<string> => {
  const zupJobURL = 'https://boards.greenhouse.io/zupinnovation'

  const { data: response } = await axios.get<string>(zupJobURL)

  return response
}
