import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react';
// import hotels from '../hotels.json' 
const Cards = () => {
    const [wishList,setWishList]=useState([])  
    const [obj,setObj] = useState([]);
    const [loading,setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        fetch('/hotels.json')
          .then((response) =>response.json())
          .then((data)=>{
            // const newData = [data]
                setObj(data);
                setLoading(false);
            })  
            .catch((error) => {
                setError(error);
                console.log(error)
                setLoading(false);
            });
        }, []);
        
    
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
            // transform: 'scale(1.05)',   
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
    
    
    const addWishlist = (index)=>{
        
        const newlist = [...wishList, obj[index]]; // Create a new array with the updated items
    setWishList(newlist);
    console.log(obj[index])
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
        };
  return (
    <>
        <section className='h-[73%]  overflow-y-auto'>
        <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-center lg:grid-cols-4 gap-8">

            {obj && obj.map((element, index) => (
                <div key={index} className=" rounded  shadow-xl bg-white flex flex-col justify-between">
                    <div>
                            <img className="w-full" src={element.imageLink} alt={element.hotelName} />
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
                        <button style={styles.button} className="mb-2 rounded-lg mx-2 w-full px-4 py-2 justify-items-end  text-white "  onMouseEnter={(e) => Object.assign(e.currentTarget.style, styles.buttonHover)}     
                            onMouseLeave={(e) => Object.assign(e.currentTarget.style, styles.button)}
                            onMouseDown={(e) => Object.assign(e.currentTarget.style, styles.buttonActive)}
                            onMouseUp={(e) => Object.assign(e.currentTarget.style, styles.buttonHover)}
                            onClick={handleClick}>BOOK NOW!</button>
                        <button style={styles.button} className=" mb-2 rounded-lg mx-2 px-4 py-2 justify-items-end  text-white "  onMouseEnter={(e) => Object.assign(e.currentTarget.style, styles.buttonHover)}     
                            onMouseLeave={(e) => Object.assign(e.currentTarget.style, styles.button)}
                            onMouseDown={(e) => Object.assign(e.currentTarget.style, styles.buttonActive)}
                            onMouseUp={(e) => Object.assign(e.currentTarget.style, styles.buttonHover)}
                            onClick={(e)=>{handleClick(e);addWishlist(index)}}><span className="material-symbols-outlined">heart_plus</span></button>
                    </div>
                </div>
            ))}

            </div>
        </section>
    </>
  )
}

export default Cards