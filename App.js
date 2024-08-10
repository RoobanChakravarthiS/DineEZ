import { React, Suspense, lazy} from 'react'
import { Route, BrowserRouter, Routes, Navigate} from 'react-router-dom'
import './App.css'
import Login from './components/login'

const SignUp = lazy(() => import('./components/signup'))

function RedirectPage() {
    return <Navigate to='/login'/>
}

function App () {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<RedirectPage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Suspense><SignUp/></Suspense>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
