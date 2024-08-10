import { useState } from "react";
import { useForm } from 'react-hook-form';
import '../App.css';
import logo from '../assets/logo.png';
import bg from "../assets/background.jpg";
import { useNavigate } from "react-router-dom";

function Signup() {
    
    const { register, handleSubmit, formState: { errors } } = useForm()
    const navigate = useNavigate()

    const [passWordToggle,setPassWordToggle] = useState(true)

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
                transform: 'scale(1.05)',   
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

      
    const onSubmit = (data) => {
        console.log(data)
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
    return(
        <>
        <section className="h-dvh background-lg">  
            <div className="h-dvh sm:backdrop-brightness-75 sm:backdrop-blur-sm flex justify-center items-center">
                <div className="h-full w-full sm:w-3/4 sm:border sm:rounded-xl sm:h-fit md:h-fit md:w-[40rem] flex flex-col space-y-8 md:space-y-4 justify-center bg-[#fdfaf2] sm:bg-[#f0f0f0] p-8 md:px-10">
                    <h1 className="text-4xl font-bold">Sign up</h1>
                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-6 ">
                        <div>
                            <input id="userName" placeholder="Username" className={`w-full  p-4 md:p-2 px-6 md:px-6 text-xl rounded-xl shadow-lg focus:outline-none ${errors.userName && "border border-red-500"}`}
                                {...register("userName", { required: "Username is Required!" })}
                                />
                            {errors.userName && <p className="text-red-500 pl-6 pt-1">{errors.userName.message}</p>}
                        </div>
                        <div>
                            <input id="number" placeholder="Mobile Number" className={`w-full p-4 md:p-2 px-6 md:px-6 text-xl rounded-xl shadow-lg focus:outline-none ${errors.number && "border border-red-500"}`}
                                {...register("number", 
                                    { required: "Mobile Number is Required!" ,
                                      pattern :{
                                        value: /^\d+$/,
                                        message:"Invaild Mobile Number"
                                    }
                                })}
                                />
                            {errors.number && <p className="text-red-500 pl-6 pt-1">{errors.number.message}</p>}
                        </div>
                        <div className="relative">
                            <input id="passWord" type={passWordToggle ? "password" : "text"} placeholder="Password" className={`w-full p-4 md:p-2 px-6 md:px-6 text-xl rounded-xl shadow-lg focus:outline-none ${errors.passWord && "border border-red-500"}`}
                            {...register("passWord", { required: "Password is Required!" })}/>
                            {errors.passWord && <p className="text-red-500 pl-6 pt-1">{errors.passWord.message}</p>}
                            <div className="absolute w-fit h-fit top-3 md:top-1.5 right-4 cursor-pointer" onClick={() => setPassWordToggle((prev) => !prev)}>
                                {passWordToggle ? <span className="material-symbols-outlined text-3xl">lock</span> : <span className="material-symbols-outlined text-3xl">lock_open</span>}
                            </div>
                        </div>
                        <button className="button py-2 rounded-xl w-[96%] mx-auto" style={styles.button} type="submit"
                            onMouseEnter={(e) => Object.assign(e.currentTarget.style, styles.buttonHover)}     
                            onMouseLeave={(e) => Object.assign(e.currentTarget.style, styles.button)}
                            onMouseDown={(e) => Object.assign(e.currentTarget.style, styles.buttonActive)}
                            onMouseUp={(e) => Object.assign(e.currentTarget.style, styles.buttonHover)}
                            onClick={handleClick}>Signup
                        </button>
                        <i className="self-end text-[#ffa000] cursor-pointer" onClick={() => navigate('/login')}>Already been Here? Sign In</i>
                    </form>
                </div>
            </div>
        </section>
        </>
    )
    


}
export default Signup
