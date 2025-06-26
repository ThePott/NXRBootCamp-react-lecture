import './App.css'

const Bread = () => {
  return (
    <div className="bread">
      <mark>밀가루</mark>
      <span>물</span>
      <span>계란</span>
      <span>이스트</span>
    </div>
  )
}
const Patty = () => {
  return (
    <div className="patty">
      <mark>소고기</mark>
      <span>후추</span>
      <span>소금</span>
    </div>
  )
}
const Leaf = () => {
  return (
    <div className="leaf">
      <mark>잎사귀</mark>
      <span>줄기</span>
    </div>
  )
}
const Tomato = () => {
  return (
    <div className="tomato">
      <mark>껍질</mark>
      <span>과육</span>
      <span>씨앗</span>
    </div>
  )
}
const Cheese = () => {
  return (

    <div className="cheese">
      <mark>우유</mark>
      <span>소금</span>
      <span>색소</span>
    </div>
  )
}

const Hamburger = () => {
  return (
    <>
      <Bread />
      <Patty />
      <Leaf />
      <Tomato />
      <Cheese />
      <Bread />
    </>
  )
}

const App = () => {
  return (
    <>
      <div>안녕하세요! 이건 함수형 컴포넌트입니다.</div>
      <Hamburger />
    </>
  )
}

export default App
