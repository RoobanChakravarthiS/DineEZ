import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { useState } from 'react'; 
const Cards = (props) => { 
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
    const navigate = useNavigate();
    const addWishlist = (index)=>{
        let present = false;
        props.wishList.forEach(element => {
            if (obj[index].hotelName===element.hotelName) {
                console.log("yes")
                present=true;
            }
            
        });
        if (!present) {
            
            const newlist = [...props.wishList, obj[index]]; // Create a new array with the updated items
            props.setWishList(newlist);
            console.log(props.wishList)
        }
    }
    const move = (index)=>{
        // console.log(obj[index])
        navigate('/menu', { state: { obj: obj[index], index } })
    }
    console.log(props.query)
    console.log(typeof props.query)
  return (
    <>
        <section className='h-[73%]  overflow-y-auto'>
        <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-center lg:grid-cols-4 gap-8">

            { obj.map((element, index) => (
                (props.query==='')?
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
                            onClick={(e)=>{props.handleClick(e);move(index)}}>BOOK NOW!</button>
                        <button style={props.styles.button} className=" mb-2 rounded-lg mx-2 px-4 py-2 justify-items-end  text-white "  onMouseEnter={(e) => Object.assign(e.currentTarget.style, props.styles.buttonHover)}     
                            onMouseLeave={(e) => Object.assign(e.currentTarget.style, props.styles.button)}
                            onMouseDown={(e) => Object.assign(e.currentTarget.style, props.styles.buttonActive)}
                            onMouseUp={(e) => Object.assign(e.currentTarget.style, props.styles.buttonHover)}
                            onClick={(e)=>{props.handleClick(e);addWishlist(index)}}><span className="material-symbols-outlined">heart_plus</span></button>
                    </div>
                </div>
            :
            (element.hotelName.toLowerCase().includes(props.query.toLowerCase())) &&
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
                            onClick={(e)=>{props.handleClick(e);move(index)}}>BOOK NOW!</button>
                        <button style={props.styles.button} className=" mb-2 rounded-lg mx-2 px-4 py-2 justify-items-end  text-white "  onMouseEnter={(e) => Object.assign(e.currentTarget.style, props.styles.buttonHover)}     
                            onMouseLeave={(e) => Object.assign(e.currentTarget.style, props.styles.button)}
                            onMouseDown={(e) => Object.assign(e.currentTarget.style, props.styles.buttonActive)}
                            onMouseUp={(e) => Object.assign(e.currentTarget.style, props.styles.buttonHover)}
                            onClick={(e)=>{props.handleClick(e);addWishlist(index)}}><span className="material-symbols-outlined">heart_plus</span></button>
                    </div>
                </div>
            ))
            }

            </div>
        </section>
    </>
  )
}

export default Cards
