import './App.css'

// import React, { Component, useState } from 'react'
import React, { Component } from 'react'

// // 함수형 컴포넌트에서 Props로 자식에게 속성 전달하기
// // 기본적으론 props 라는 객체가 매개변수로 있다. 이를 구조분해할당 하는 게 관례적 표현
// const CountDisplay = ({count}) => {
//   return (
//     <div>이 화면은 Props를 받습니다: {count}</div>
//   )
// }

// const App = () => {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>useState으로 상태를 관리합니다</div>
//       <CountDisplay count={count} />
//       <button onClick={() => setCount((prev) => prev + 1)}>+</button>
//       <button onClick={() => setCount((prev) => prev - 1)}>-</button>
//     </>
//   )
// }

class CountDisplay extends Component {
  //// 생략 가능
  // constructor(props) {
  //   super(props)
  // }

  render() {
    console.log("---- props in class component:", this.props)
    return (
      <div>이 화면은 Props를 받습니다: {this.props.counter}</div>
      // <div>이 화면은 Props를 받습니다: {count}</div>
    )
  }
}

class App extends Component {
  state = { counter: 0 }

  render() {
    return (
      <>
        <div>asdf</div>
        <CountDisplay counter={this.state.counter} />
        <button onClick={() => this.setState({ counter: this.state.counter + 1 })}>+</button>
        <button onClick={() => this.setState({ counter: this.state.counter - 1 })}>-</button>
      </>
    )
  }
}

export default App
