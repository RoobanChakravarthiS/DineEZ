import React from 'react'

const Menu = (props) => {

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
        <section className="h-[82%] overflow-y-auto">
        <div className=" rounded  shadow-xl bg-white flex flex-row justify-between ">
                    
                <img className="w-[40%] sm:h-48" src={props.hotelData.imageLink} alt={props.hotelData.hotelName} />
                <div className="px-6 py-4 w-[60%]">
                    <div className="font-bold text-xl mb-2">{props.hotelData.hotelName}</div>
                    {/* <p className="text-gray-700 text-base">{hotelData.description}</p> */}
                    {/* <p className="text-gray-700 text-base">{hotelData.location}</p> */}
                    {/* <p className="text-gray-700 text-base">{hotelData.timing}</p> */}
                    <div className='sm:flex sm:flex-row text-lg sm:justify-between '>
                    <p className="text-gray-700 text-lg font-bold">Table Count:{props.hotelData.tableCount}</p>
                    <p className="text-gray-700 text-lg font-bold">AC: {(props.hotelData.ac)? "Available":"not Available"}</p>
                    <button style={styles.button} className="mb-2 rounded-lg w-full px-4 py-2 justify-items-end  text-white "  onMouseEnter={(e) => Object.assign(e.currentTarget.style, styles.buttonHover)}     
                            onMouseLeave={(e) => Object.assign(e.currentTarget.style, styles.button)}
                            onMouseDown={(e) => Object.assign(e.currentTarget.style, styles.buttonActive)}
                            onMouseUp={(e) => Object.assign(e.currentTarget.style, styles.buttonHover)}
                            onClick={(e)=>{handleClick(e)}}>RESERVE</button>
                    </div>
                </div>
        </div>
        <div className='p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-center lg:grid-cols-4 gap-8'>    
            {
                props.hotelData.menu.map((element,index) => (
                    <div key={index}>
                        <div className="rounded shadow-lg bg-white p-4 flex flex-col justify-center">
                            <img className="w-full h-28" src={element.foodImage} alt={element.foodName}></img>
                            <div className="font-bold text-xl mb-2">{element.foodName}</div>
                            <p className="text-gray-700 text-base">{element.ingredients}</p>
                            <div className="px-6 py-2 flex items-center">
                                <span className='text-lg'>Preparation Time:{element.preparationTime}</span>
                                <span className='text-lg'>Rating:{element.rating}</span>
                                <span className="p-px material-symbols-outlined">hotel_class</span>
                            </div>
                            <button style={styles.button} className="mb-2 rounded-lg w-full px-4 py-2 justify-items-end  text-white "  onMouseEnter={(e) => Object.assign(e.currentTarget.style, styles.buttonHover)}     
                            onMouseLeave={(e) => Object.assign(e.currentTarget.style, styles.button)}
                            onMouseDown={(e) => Object.assign(e.currentTarget.style, styles.buttonActive)}
                            onMouseUp={(e) => Object.assign(e.currentTarget.style, styles.buttonHover)}
                            onClick={(e)=>{handleClick(e)}}>ADD</button>
                        </div>
                    </div>
                ))

            }
            
        </div>
        </section>
    </>
    
)
}

export default Menu