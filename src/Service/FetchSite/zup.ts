import axios from 'axios'

export const zup = async (): Promise<string> => {
  const zupJobURL = 'https://boards.greenhouse.io/zupinnovation'

  const { data: response } = await axios.get<string>(zupJobURL)

  return response
}
