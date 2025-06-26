import './App.css'

import React, { Component, useState } from 'react'
// import React, { Component } from 'react'

// 상태 끌어올리기 함수형 컴포넌트

const CountDisplay = ({ count }) => {
  return (
    <div>이 화면은 Props를 받습니다: {count}</div>
  )
}

const PlusButton = ({ setCount }) => {
  return (
    <button onClick={() => setCount((prev) => prev + 1)}>+</button>
  )
}

const MinusButton = ({ setCount }) => {
  return (
    <button onClick={() => setCount((prev) => prev - 1)}>-</button>
  )
}

const CounterInput = ({ setCount }) => {
  return (
    <input type="number" onKeyUp={(event) => setCount(event.target.value)} />
  )
}

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>useState으로 상태를 관리합니다</div>
      <CountDisplay count={count} />

      <PlusButton setCount={setCount} />
      <MinusButton setCount={setCount} />

      <CounterInput setCount={setCount} />
    </>
  )
}

//// 상태 끌어올리기 클래스형 컴포넌트
// class CountDisplay extends Component {
//   //// 생략 가능
//   // constructor(props) {
//   //   super(props)
//   // }

//   render() {
//     console.log("---- props in class component:", this.props)
//     return (
//       <div>이 화면은 Props를 받습니다: {this.props.counter}</div>
//     )
//   }
// }

// class PlusButton extends Component {
//   render() {
//     return (
//       <>
//         <button onClick={this.props.increase}>+</button>
//       </>
//     )
//   }
// }

// class MinusButton extends Component {
//   render() {
//     return (
//       <>
//         <button onClick={this.props.decrease}>-</button>
//       </>
//     )
//   }
// }

// class App extends Component {
//   state = { counter: 0 }

//   // useState와 달리 prev가 주어지지 않기에 미리 함수를 작성하고 내려보낸다.
//   increase = () => this.setState({counter: this.state.counter + 1})
//   decrease = () => this.setState({counter: this.state.counter - 1})

//   render() {
//     return (
//       <>
//         <div>asdf</div>
//         <CountDisplay counter={this.state.counter} />

//         <PlusButton increase={this.increase} />
//         <MinusButton decrease={this.decrease} />
//       </>
//     )
//   }
// }

export default App
