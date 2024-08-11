import React from 'react'
import Header from './header'
import Menu from './Menu'
import Footer from './Footer'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'
const MenuPage = () => {
  const location = useLocation();
  const { obj, index,styles,handleclick } = location.state || {}; // Use optional chaining to handle the case where state might be undefined

  // State to store the data for further use
  const [hotelData, setHotelData] = useState(obj);
  return (
    <div className='h-dvh bg-[#fff7ed]'>
        <Header />
        <Menu hotelData={hotelData} index={index} />
        <Footer />
    </div>
  )
}

export default MenuPage