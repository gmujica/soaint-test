import React, { useState, useEffect } from 'react'
import axios from 'axios'

const BASE_URL = 'https://api.github.com/users/workshopsjsmvd'

function App() {

  const [data, setData] = useState(false)

  useEffect(() => {
    const fechData = async() => {
      const res = await axios({
        url:BASE_URL,
        method:'GET',
      })

      setData(res.data)
    }
    fechData()
  }, [])

  return (
    <>
      <div>{`Nombre: ${data?.name}`}</div>
      <div>{`País: ${data?.location}`}</div>
    </>
  );
}

export default App
