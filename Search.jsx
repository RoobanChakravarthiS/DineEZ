import React from 'react'
import { useState } from 'react';
const Search = (props) => {
    
      const [query, setQuery] = useState('');
  return (
    
    <>
        
        <section className='h-max  bg-[#f6f0e5]'>
          <div>
            <div className='flex flex-row  w-full ' id="searchBar">
              <button dir='ltr' type="submit" style={props.styles.button} className="rounded-full   mx-auto px-4 py-2  text-white rounded-r-md"  onMouseEnter={(e) => Object.assign(e.currentTarget.style, props.styles.buttonHover)}     
                            onMouseLeave={(e) => Object.assign(e.currentTarget.style, props.styles.button)}
                            onMouseDown={(e) => Object.assign(e.currentTarget.style, props.styles.buttonActive)}
                            onMouseUp={(e) => Object.assign(e.currentTarget.style, props.styles.buttonHover)}
                            onClick={props.handleClick}><span className="material-symbols-outlined"> person_pin_circle </span> </button>
              <input type="text" value={query} onChange={(e)=> setQuery(e.target.value)} placeholder="...eg:Thalapakatti" className="w-full px-4 py-2 border rounded-l-md "/>
              <button dir='rtl' type="submit" style={props.styles.button} className=" rounded-full   mx-auto px-4 py-2  text-white rounded-l-md"  onMouseEnter={(e) => Object.assign(e.currentTarget.style, props.styles.buttonHover)}     
                            onMouseLeave={(e) => Object.assign(e.currentTarget.style, props.styles.button)}
                            onMouseDown={(e) => Object.assign(e.currentTarget.style, props.styles.buttonActive)}
                            onMouseUp={(e) => Object.assign(e.currentTarget.style, props.styles.buttonHover)}
                            onClick={props.handleClick}><span className="material-symbols-outlined ">search</span> </button>
            </div>

          </div>
        </section>
    </>
  )
}

export default Search
