import { Component, useEffect, useState } from 'react'
import './App.css'



const CountBox = () => {
  const [count, setCount] = useState(0)

  useEffect(
    () => {
      console.log("---- effect function called")
      const timer = setTimeout(() => console.log("---- waited for 10 sec"), 10000)

      return () => {
        clearTimeout(timer)
        console.log("---- cleaned up timeout")
      }
    }
  )

  const handleClick = () => {
    setCount(count + 1)
    console.log("---- clicked")
  }

  console.log("---- mounted")
  return (
    <>
      아하하
      <p>{`count: ${count}`}</p>
      <button onClick={() => handleClick()}>up</button>
    </>
  )

}

const App = () => {
  const [doShow, setDoShow] = useState(true)
  return (
    <>
      {doShow && <CountBox />}
      <button onClick={() => setDoShow((prev) => !prev)}>toggle do show</button>
    </>
  )
}

export default App
