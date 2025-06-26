import './App.css'

// import React, { Component, useState } from 'react'
import React, { Component } from 'react'

// // 함수형 컴포넌트에서 상태 관리하기
// const App = () => {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>useState으로 상태를 관리합니다</div>
//       <div>{count}</div>
//       <button onClick={() => setCount((prev) => prev + 1)}>+</button>
//       <button onClick={() => setCount((prev) => prev - 1)}>-</button>
//     </>
//   )
// }

class App extends Component {
  state = { counter: 0 }

  render() {
    return (
      <>
        <div>asdf</div>
        <div>count: {this.state.counter}</div>
        <button onClick={() => this.setState({ counter: this.state.counter + 1 })}>+</button>
        <button onClick={() => this.setState({ counter: this.state.counter - 1 })}>-</button>
      </>
    )
  }
}

export default App
