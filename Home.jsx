import React from 'react'
import Header from './header'
import Footer from './Footer'
import Cards from './Cards'
import Search from './Search'
import { useState } from 'react'


function Home(props) {
  const [query, setQuery] = useState('');
  return (
    <>
    <div className='h-dvh bg-[#fff7ed]'>
      <Header styles={props.styles} wishList={props.wishList} setWishList={props.setWishList} handleClick={props.handleClick}/>
      <Search query={query} setQuery={setQuery} styles={props.styles} wishList={props.wishList} setWishList={props.setWishList} handleClick={props.handleClick}/>
      <Cards query={query} styles={props.styles} wishList={props.wishList} setWishList={props.setWishList} handleClick={props.handleClick}/>
      <Footer styles={props.styles} wishList={props.wishList} setWishList={props.setWishList} handleClick={props.handleClick}/>
    </div>
    </>
  )
}

export default Home
