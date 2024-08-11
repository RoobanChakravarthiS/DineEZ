import React from 'react'
import { Navigate, useNavigate, } from 'react-router-dom'
function Footer(props) {
  const navigate = useNavigate();
  return (
    <>
        <section className='  h-16 background-lg bg-white'>
            <div className="bg-white h-full flex flex-row justify-between">

                <div id='home'>
                <button onClick={()=>navigate('/home')}><span className="material-symbols-outlined text-5xl">home</span></button>
                </div>

                <div id='favourites'>

                <button onClick={()=>navigate('/favourite')}><span className="material-symbols-outlined  text-5xl">favorite</span></button>
                </div>
                <div id='cart'>
                <button><span className="material-symbols-outlined text-5xl">shopping_cart</span></button>
                </div>
                <div id='myBooking'>
                <button><span className="material-symbols-outlined text-5xl">event_seat</span></button>
                </div>
                <div id="chat">
                <button><span className="material-symbols-outlined text-5xl">chat</span></button>
                </div>
            </div>
        </section>
    </>
  )
}

export default Footer
