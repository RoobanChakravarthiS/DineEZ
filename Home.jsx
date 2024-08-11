import React from 'react'
import Header from './header'
import Footer from './Footer'
import Cards from './Cards'
import Search from './Search'



function Home(props) {
  
  return (
    <>
    <div className='h-dvh bg-[#fff7ed]'>
      <Header styles={props.styles} wishList={props.wishList} setWishList={props.setWishList} handleClick={props.handleClick}/>
      <Search styles={props.styles} wishList={props.wishList} setWishList={props.setWishList} handleClick={props.handleClick}/>
      <Cards styles={props.styles} wishList={props.wishList} setWishList={props.setWishList} handleClick={props.handleClick}/>
      <Footer styles={props.styles} wishList={props.wishList} setWishList={props.setWishList} handleClick={props.handleClick}/>
    </div>
    </>
  )
}

export default Home
