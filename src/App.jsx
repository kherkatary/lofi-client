import { useState } from 'react'
import { Menu, Scene } from './Components'
import SignUp from '../Auth/SignUp'
import { Route, Routes } from 'react-router-dom'
import {AuthProvider} from './Context/AuthContext'
import Protected from './Pages/Protected/Protected'
import SignIn from '../Auth/SignIn'

function App() {

  return (
    <>
    <AuthProvider>
    <Routes>
    <Route path='signup' element={<SignUp/>}/>
    <Route path='login' element={<SignIn/>}/>
     <Route element={<Protected/>}>
             <Route path='/' element={<Scene/>}/>
    </Route>
    </Routes>
    </AuthProvider>
    </>
  )
}

export default App
