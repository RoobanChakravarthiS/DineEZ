import React from 'react'

function Footer() {
  return (
    <>
        <section className='  h-16 background-lg bg-white'>
            <div className="bg-white h-full flex flex-row justify-between">

                <div id='home'>
                <button><span className="material-symbols-outlined text-5xl">home</span></button>
                </div>
                <div id='favourites'>
                <button><span className="material-symbols-outlined  text-5xl">favorite</span></button>
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