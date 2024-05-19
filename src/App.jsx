import Home from './Pages/Home/Home.jsx'
import React from 'react'
import {Routes , Route} from 'react-router-dom'
import Login from './Pages/Login/Login.jsx'
import Player from './Pages/Player/Player.jsx'

function App() {
 

  return (
    <>
      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='/login' element={<Login></Login>} ></Route>
        <Route path='/player/:id' element= {<Player></Player>}></Route>
      </Routes>
    </>
  )
}
import { Form } from 'react-router-dom'

export default App
