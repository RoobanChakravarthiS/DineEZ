import React from 'react'
import { useState } from 'react';
import Cards from './Cards';
// import '../App.css';
const Search = () => {
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
      const [query, setQuery] = useState('');
  return (
    
    <>
        
        <section className='h-max  bg-[#f6f0e5]'>
          <div>
            <div className='flex flex-row  w-full ' id="searchBar">
              <button dir='ltr' type="submit" style={styles.button} className="rounded-full   mx-auto px-4 py-2  text-white rounded-r-md"  onMouseEnter={(e) => Object.assign(e.currentTarget.style, styles.buttonHover)}     
                            onMouseLeave={(e) => Object.assign(e.currentTarget.style, styles.button)}
                            onMouseDown={(e) => Object.assign(e.currentTarget.style, styles.buttonActive)}
                            onMouseUp={(e) => Object.assign(e.currentTarget.style, styles.buttonHover)}
                            onClick={handleClick}><span className="material-symbols-outlined"> person_pin_circle </span> </button>
              <input type="text" value={query} onChange={(e)=> setQuery(e.target.value)} placeholder="...eg:Thalapakatti" className="w-full px-4 py-2 border rounded-l-md "/>
              <button dir='rtl' type="submit" style={styles.button} className=" rounded-full   mx-auto px-4 py-2  text-white rounded-l-md"  onMouseEnter={(e) => Object.assign(e.currentTarget.style, styles.buttonHover)}     
                            onMouseLeave={(e) => Object.assign(e.currentTarget.style, styles.button)}
                            onMouseDown={(e) => Object.assign(e.currentTarget.style, styles.buttonActive)}
                            onMouseUp={(e) => Object.assign(e.currentTarget.style, styles.buttonHover)}
                            onClick={handleClick}><span className="material-symbols-outlined ">search</span> </button>
            </div>

          </div>
        </section>
    </>
  )
}

export default Search