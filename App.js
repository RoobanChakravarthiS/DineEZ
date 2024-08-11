import { React, Suspense, lazy} from 'react'
import { Route, BrowserRouter, Routes, Navigate} from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import Login from './components/login'
const FavouritePage = lazy(()=> import('./components/FavouritePage'))
const SignUp = lazy(() => import('./components/signup'))
const Home = lazy(()=> import('./components/Home'))
const MenuPage = lazy(()=> import('./components/MenuPg'))
function RedirectPage() {
    return <Navigate to='/login'/>
}

function App () {
  const [wishList,setWishList]=useState([])  
  const styles={
    button:{
        backgroundColor:"#321313",
        color:"#F9F5F0",
        border: 'none',                       
        fontWeight: 'bold',          
        cursor: 'pointer',           
        transition: 'all 0.4s ease', 
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)', 
        position: 'relative',        
        overflow: 'hidden', 
    },
    buttonHover: {
        backgroundColor: '#e38b00',    
      },
      buttonActive: {
        backgroundColor: '#c77500',  
        transform: 'scale(0.98)',   
      },
      ripple: {
        position: 'absolute',
        borderRadius: '50%',
        width: '300px',
        height: '300px',
        background: 'rgba(255, 255, 255, 0.5)',
        animation: 'ripple 0.6s linear',
        transform: 'translate(-50%, -50%)',
        pointerEvents: 'none',
    },
}
const handleClick = (e) => {
  const button = e.currentTarget;
  const rect = button.getBoundingClientRect();
  const ripple = document.createElement('span');

  ripple.style.left = `${e.clientX - rect.left}px`;
  ripple.style.top = `${e.clientY - rect.top}px`;

  ripple.style.position = styles.ripple.position;
  ripple.style.borderRadius = styles.ripple.borderRadius;
  ripple.style.width = styles.ripple.width;
  ripple.style.height = styles.ripple.height;
  ripple.style.background = styles.ripple.background;
  ripple.style.animation = styles.ripple.animation;
  ripple.style.transform = styles.ripple.transform;
  ripple.style.pointerEvents = styles.ripple.pointerEvents;

  button.appendChild(ripple);
  ripple.addEventListener('animationend', () => {
      ripple.remove();
    });
  }
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<RedirectPage/>}/>
        <Route path='/login' element={<Login styles={styles} handleClick={handleClick}/>}/>
        <Route path='/signup' element={<Suspense><SignUp styles={styles} handleClick={handleClick}/></Suspense>}/>
        <Route path='/home' element={<Suspense><Home styles={styles} wishList={wishList} setWishList={setWishList} handleClick={handleClick}/></Suspense>}/>
        <Route path='/favourite' element={<Suspense><FavouritePage styles={styles} wishList={wishList} setWishList={setWishList} handleClick={handleClick} /></Suspense>}/>
        <Route path='/menu' element={<Suspense><MenuPage styles={styles} wishList={wishList} setWishList={setWishList} handleClick={handleClick} /></Suspense>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
