import React from 'react'
import '../App.css'
function Header() {
  return (
    <>
        <section className=' sm:h-max h-fit background-lg'>
            <div className=' bg-white  flex flex-row  justify-between relative '>
                <div className='rounded-lg  sm:shadow-2xl my-3 sm:p-2'>
                        <button className="self-end cursor-pointer"><span className="material-symbols-outlined  text-5xl">account_circle</span></button>
                </div>
                {/* <div className='rounded-lg  sm:shadow-2xl my-3 sm:p-2 '>
                    <h2 className=" text-4xl font-bold ">DINE EZ</h2>
                </div> */}
                <div className='rounded-lg sm:shadow-2xl  my-3 sm:p-2'>
                    
                <button className=" self-end  cursor-pointer"><span className="material-symbols-outlined  text-5xl " >logout</span></button>
                    
                </div>
                
            </div>
            
        </section>
    </>
  )
}

export default Header