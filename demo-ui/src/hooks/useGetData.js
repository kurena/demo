import axios from 'axios'
import { useQuery } from 'react-query'

export default function UseGetData() {
  return useQuery(
    [],
    async () => {
      try {
      const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/data`)
      return data
      } catch (error) {
        console.log('ERROR CALLING API', error)
        return []
      }
    },
    {
      enabled: true,
      keepPreviousData: true
    }
  )
}
