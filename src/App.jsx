import { Component, useState } from 'react'
import './App.css'



class CountBox extends Component {
  constructor(props) {
    super(props)
    console.log("---- constructed")
  }

  state = {count: 1}

  componentDidMount() {
    console.log("---- mounted")
  }

  componentDidUpdate() {
    console.log("---- updated")
  }

  componentWillUnmount() {
    console.log("---- will unmount")
  }

  handleClick () {
    this.setState({ count: this.state.count + 1})
    console.log("---- clicked")
  }

  render() {
    return (
      <>
        아하하
        <p>{`count: ${this.state.count}`}</p>
        <button onClick={() => this.handleClick()}>up</button>
      </>
    )
  }
}

const App = () => {
  const [doShow, setDoShow] = useState(true)
  return (
    <>
    {/* <CountBox /> */}
    {doShow && <CountBox />}
    <button onClick={() => setDoShow((prev) => !prev)}>toggle do show</button>
    </>
  )
}

export default App
