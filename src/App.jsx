// import { useState } from 'react'
import LandingPage from './Pages/LandingPage'
import HackathonForm from './Component/HackathonForm'
import Navbar from './Component/Navbar'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<LandingPage />}></Route>
        <Route path='/create' element={<HackathonForm />}>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
