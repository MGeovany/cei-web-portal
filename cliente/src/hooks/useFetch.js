import { useEffect, useState } from 'react'
import axios from 'axios'

export const useFetch = (url) => {
  const [data, setData] = useState([''])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    ;(async function () {
      try {
        setLoading(true)
        const response = await axios.get(url)
        setData(response.data)
      } catch (err) {
        setError(err)
      } finally {
        setLoading(false)
      }
    })()
  }, [url])

  return { data, error, loading }
}
