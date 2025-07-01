import { useRef, useState } from 'react'
import './App.css'

const UseRefInput = () => {
  // useRef 사용처 1. DOM Node 를 만들고 여기와 직접 상호작용하여 리렌더를 줄임
  const inputRef = useRef(null)
  console.log("---- rendered")
  
  const printCurrentValue = () => {
    const value = inputRef.current.value
    console.log("---- value:", value)
  }
  
  // useRef 사용처 2. 리렌더에도 변하지 않는 값을 만드는 용도 - useMemo와 비슷
  const [count, setCount] = useState(0)
  const countRef = useRef(null)

  // useMemo를 쓴다면? ---> useMemo는 비싼 계산의 결괏값을 저장하기 위한 것이다. 이런 매뉴얼 기록을 위한 게 아니다.
  // const storedCount = useMemo(
  //   () => count,
  //   []
  // )

  return (
    <>
      {/* 1번 예제 */}
      <input ref={inputRef} />
      <button onClick={printCurrentValue}></button>

      {/* 2번 예제 */}
      <p>{`count: ${count}`}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => countRef.current = count}>store</button>
      {/* <button onClick={() => console.log("---- stored:", countRef.current)}>print</button>
      <button onClick={storedCount}>store</button>
      <button onClick={() => console.log("---- memo:", storedCount)}>print memo</button> */}
    </>
  )
}

const App = () => {
  // const [inputValue, setInputValue] = useState("")

  return (
    <>
      <UseRefInput />
    </>
  )
}

export default App
