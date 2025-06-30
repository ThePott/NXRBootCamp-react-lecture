import { useCallback, useState } from 'react'
import './App.css'


const App = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [scrollPercentage, setScrollPercentage] = useState(0)

  const mouseMoveEventListener = useCallback(
    (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY })
    },
    []
  )

  const scrollEventListener = useCallback(
    (event) => {
      const scrollOffset = event.target.scrollTop
      const scrollHeight = event.target.scrollHeight
      const screenHeight = event.target.clientHeight
      const scrollPercentage = scrollOffset / (scrollHeight - screenHeight) * 100

      setScrollPercentage(scrollPercentage)
      console.log(scrollPercentage)
    },
    []
  )


  return (
    <div style={{ position: "relative" }}
      onMouseMove={mouseMoveEventListener}>
      <div style={{ width: "100px", height: "100px", backgroundColor: "yellow", position: "fixed", top: mousePosition.y, left: mousePosition.x }}></div>
      <div style={{ height: "10px", width: `${scrollPercentage}%`, backgroundColor: "red", position: "fixed", top: 0, left: 0 }}></div>
      <div
        style={{ height: "300px", backgroundColor: "salmon", overflowY: "scroll" }}
        onScroll={scrollEventListener}>
        <div>
          <p> 아ㅏ아아</p>
          <p> 아ㅏ아아</p>
          <p> 아ㅏ아아</p>
          <p> 아ㅏ아아</p>
          <p> 아ㅏ아아</p>
          <p> 아ㅏ아아</p>
          <p> 아ㅏ아아</p>
          <p> 아ㅏ아아</p>
          <p> 아ㅏ아아</p>
          <p> 아ㅏ아아</p>
          <p> 아ㅏ아아</p>
          <p> 아ㅏ아아</p>
          <p> 아ㅏ아아</p>
          <p> 아ㅏ아아</p>
          <p> 아ㅏ아아</p>
          <p> 아ㅏ아아</p>
          <p> 아ㅏ아아</p>
          <p> 아ㅏ아아</p>
          <p> 아ㅏ아아</p>
          <p> 아ㅏ아아</p>
          <p> 아ㅏ아아</p>
          <p> 아ㅏ아아</p>
          <p> 아ㅏ아아</p>
          <p> 아ㅏ아아</p>
          <p> 아ㅏ아아</p>
          <p> 아ㅏ아아</p>
          <p> 아ㅏ아아</p>
          <p> 아ㅏ아아</p>
          <p> 아ㅏ아아</p>
          <p> 아ㅏ아아</p>
          <p> 아ㅏ아아</p>
          <p> 아ㅏ아아</p>
          <p> 아ㅏ아아</p>
          <p> 아ㅏ아아</p>
          <p> 아ㅏ아아</p>
          <p> 아ㅏ아아</p>
          <p> 아ㅏ아아</p>
          <p> 아ㅏ아아</p>
          <p> 아ㅏ아아</p>
          <p> 아ㅏ아아</p>
          <p> 아ㅏ아아</p>
          <p> 아ㅏ아아</p>
          <p> 아ㅏ아아</p>
          <p> 아ㅏ아아</p>
          <p> 아ㅏ아아</p>
          <p> 아ㅏ아아</p>
          <p> 아ㅏ아아</p>
          <p> 아ㅏ아아</p>
          <p> 아ㅏ아아</p>
          <p> 아ㅏ아아</p>
        </div>
      </div>
    </div>
  )
}

export default App
