import Home from './Pages/Home/Home.jsx'
import React from 'react'
import {Routes , Route} from 'react-router-dom'
import Login from './Pages/Login/Login.jsx'

function App() {
 

  return (
    <>
      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='/login' element={<Login></Login>} ></Route>
      </Routes>
    </>
  )
}
import { Form } from 'react-router-dom'

export default App
