import './App.css'

import React, { Component, useState } from 'react'
// import React, { Component } from 'react'

// 상태 끌어올리기 함수형 컴포넌트

const Display = ({ whatToShow }) => {
  return (
    <div>what to show: {whatToShow}</div>
  )
}

const PushButton = ({ array, setArray }) => {
  const push = () => {
    // ---- 잘못된 코드
    array.push(9)
    setArray(array) // <-- 이렇게 하면 같은 참조 주소가 들어가니 같은 값이라 판단하여 리렌더링이 안 된다.
    // ---- 여기까지
    setArray((prev) => [...prev, 9]) // <--- 이렇게 주소가 다른 새로운 배열을 넣어야
  }

  return (
    <button onClick={push}>+</button>
  )
}

const App = () => {
  const [array, setArray] = useState([1, 2, 3])

  return (
    <>
      <div>useState으로 상태를 관리합니다</div>
      <Display whatToShow={array} />

      <PushButton array={array} setArray={setArray} />
    </>
  )
}

export default App
