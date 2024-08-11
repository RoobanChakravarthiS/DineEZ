import React from 'react'

const Favourites = (props) => {
    
  return (
    <>

        <section className='h-[73%] flex-1 overflow-y-auto'>
        <div className="p-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 justify-items-center lg:grid-cols-4 gap-8">

            {props.wishList && props.wishList.map((element, index) => (
                <div key={index} className=" rounded  shadow-xl bg-white flex flex-col justify-between">
                    <div>
                            <img className="w-full h-48" src={element.imageLink} alt={element.hotelName} />
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">{element.hotelName}</div>
                                <p className="text-gray-700 text-base">{element.description}</p>
                            </div>
                            
                            <div className="px-6 py-2 flex items-center">
                                <span className='text-lg'>Rating:{element.rating}</span>
                                <span className="p-px material-symbols-outlined">hotel_class</span>
                            </div>
                    </div>
                    <div className='flex flex-row '>
                        <button style={props.styles.button} className="mb-2 rounded-lg mx-2 w-full px-4 py-2 justify-items-end  text-white "  onMouseEnter={(e) => Object.assign(e.currentTarget.style, props.styles.buttonHover)}     
                            onMouseLeave={(e) => Object.assign(e.currentTarget.style, props.styles.button)}
                            onMouseDown={(e) => Object.assign(e.currentTarget.style, props.styles.buttonActive)}
                            onMouseUp={(e) => Object.assign(e.currentTarget.style, props.styles.buttonHover)}
                            onClick={props.handleClick}>BOOK NOW!</button>
                        <button style={props.styles.button} className=" mb-2 rounded-lg mx-2 px-4 py-2 justify-items-end  text-white "  onMouseEnter={(e) => Object.assign(e.currentTarget.style, props.styles.buttonHover)}     
                            onMouseLeave={(e) => Object.assign(e.currentTarget.style, props.styles.button)}
                            onMouseDown={(e) => Object.assign(e.currentTarget.style, props.styles.buttonActive)}
                            onMouseUp={(e) => Object.assign(e.currentTarget.style, props.styles.buttonHover)}
                            onClick={(index)=>{props.handleClick()}}><span className="material-symbols-outlined">heart_plus</span></button>
                    </div>
                </div>
            ))}

            </div>
        </section>
    </>
  )
}

export default Favourites