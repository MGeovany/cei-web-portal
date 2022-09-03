import { useEffect, useState } from 'react'

export const useCasos = (module) => {
  let url = `https://cei1.herokuapp.com/1.0.0/${module}`

  const [data, setData] = useState([])

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(url)
      const data = await response.json()

      setData(data)
    }

    getData()
  }, [url])

  return data
}
