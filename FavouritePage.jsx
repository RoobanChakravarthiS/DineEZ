import React from 'react'
import Header from './header'
import Search from './Search'
import Favourites from './Favourites'
import Footer from './Footer'
const FavouritePage = (props) => {
  return (
    <div className='h-dvh bg-[#fff7ed]'>
      <Header styles={props.styles} wishList={props.wishList} setWishList={props.setWishList} handleClick={props.handleClick}/>
      <Search styles={props.styles} wishList={props.wishList} setWishList={props.setWishList} handleClick={props.handleClick}/>
      <Favourites styles={props.styles} wishList={props.wishList} setWishList={props.setWishList} handleClick={props.handleClick}/>
      <Footer styles={props.styles} wishList={props.wishList} setWishList={props.setWishList} handleClick={props.handleClick}/>
    </div>
  )
}

export default FavouritePage