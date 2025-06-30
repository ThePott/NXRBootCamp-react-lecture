import { Link, Route, Routes, useLocation, useParams, useSearchParams } from 'react-router'
import './App.css'

const Woohoo = () => {
  const params = useParams()
  console.log(params)
  const [searchParams, setSearchParams] = useSearchParams()
  const age = searchParams.get("age")
  console.log("---- age:", age)
  return (
    <div>whoohoo</div>
  )
}


const App = () => {
  const location = useLocation()
  console.log("---- location:", location, location.path, location.params)
  return (
    <>
    <Link to="/woohoo/김오즈?age=36">woohoo</Link>
    <Link to="/yahoo">yahoo</Link>
    <Link to="/wahoo">wahoo</Link>
    <Routes>
      <Route path="/woohoo/:name" element={<Woohoo />} />
      <Route path="/yahoo" element={<div>yahoo</div>} />
      <Route path="/wahoo" element={<div>wahoo</div>} />
    </Routes>
    </>
  )
}

export default App

