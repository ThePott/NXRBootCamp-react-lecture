import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'

const useCounter = (initialValue) => {
  const [count, setCount] = useState(initialValue)

  const increase = () => { setCount(count + 1) }
  const decrease = () => { setCount(count - 1) }

  return { count, increase, decrease }
}

const getWithAxios = async (url, setDataArray, setError, setIsLoading) => {
  try {
    const response = await axios.get(url)
    setDataArray(response)
  } catch (error) {
    setError(error)
  } finally {
    setIsLoading(false)
  }
}

const useGet = (url) => {
  const [dataArray, setDataArray] = useState(null)
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  // 1. define async function inside useEffect
  // 2. call it inside of useEffect
  useEffect(
    () => {
      // effect function은 cleanup funtion 말고 다른 건 리던하면 안 된다.
      // () => effectFunction
      // () => getWithAxios(url, setDataArray, setError, setIsLoading) <-- return Promise
      // () => { getWithAxios... } <--- doesn't return anything
      getWithAxios(url, setDataArray, setError, setIsLoading)
    },
    [url]
  )

  return { dataArray, error, isLoading }
}

const App = () => {
  const { count, increase, decrease } = useCounter(100)

  const { dataArray, error, isLoading } = useGet("localhost:3030/book")

  return (
    <>
      {/* Custom Hook 1: counter */}
      <p>{count}</p>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>

      {isLoading && <p>...Loading</p>}
      {error && <p>ERROR! {JSON.stringify(error)}</p>}
      {dataArray && <p>DATA: {JSON.stringify(dataArray)}</p>}
    </>
  )
}

export default App
