import React from 'react'
import Header from './header'
import Footer from './Footer'
import Cards from './Cards'
import Search from './Search'



function Home() {
  
  return (
    <>
    <div className='h-dvh bg-[#fff7ed]'>
      <Header/>
      <Search />
      <Cards/>
      <Footer/>
    </div>
    </>
  )
}

export default Home