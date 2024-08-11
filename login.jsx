import { useState } from "react";
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";
import '../App.css';

function Login(props) {

    const { register, handleSubmit, formState: { errors } } = useForm()
    const navigate = useNavigate()

    const [passWordToggle,setPassWordToggle] = useState(true)
    const onSubmit = (data) => {
            console.log(data)
    }
   
        const loginUser = ()=>{
            navigate('/home');
        }
    return(
        <>
        <section className="h-dvh background-lg">  
            <div className="h-dvh sm:backdrop-brightness-75 sm:backdrop-blur-sm flex justify-center items-center">
                <div className="h-full w-full sm:w-3/4 sm:border sm:rounded-xl sm:h-fit md:h-fit md:w-[40rem] flex flex-col space-y-8 justify-center bg-[#fdfaf2] sm:bg-[#f0f0f0] p-8 md:px-10">
                    <h1 className="text-4xl font-bold">Sign in</h1>
                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-6 ">
                        <div>
                            <input id="userName" placeholder="Username" className={`w-full  p-4 md:p-2 px-6 md:px-6 text-xl rounded-xl shadow-lg focus:outline-none ${errors.userName && "border border-red-500"}`}
                                {...register("userName", { required: "Username is Required!" })}
                                />
                            {errors.userName && <p className="text-red-500 pl-6 pt-1">{errors.userName.message}</p>}
                        </div>
                        <div className="relative">
                            <input id="passWord" type={passWordToggle ? "password" : "text"} placeholder="Password" className={`w-full p-4 md:p-2 px-6 md:px-6 text-xl rounded-xl shadow-lg focus:outline-none ${errors.passWord && "border border-red-500"}`}
                            {...register("passWord", { required: "Password is Required!" })}/>
                            {errors.passWord && <p className="text-red-500 pl-6 pt-1">{errors.passWord.message}</p>}
                            <div className="absolute w-fit h-fit top-3 md:top-1.5 right-4 cursor-pointer" onClick={() => setPassWordToggle((prev) => !prev)}>
                                {passWordToggle ? <span className="material-symbols-outlined text-3xl">lock</span> : <span className="material-symbols-outlined text-3xl">lock_open</span>}
                            </div>
                        </div>
                        <button className="button py-2 rounded-xl w-[96%] mx-auto" style={props.styles.button} type="submit"
                            onMouseEnter={(e) => Object.assign(e.currentTarget.style, props.styles.buttonHover)}     
                            onMouseLeave={(e) => Object.assign(e.currentTarget.style, props.styles.button)}
                            onMouseDown={(e) => Object.assign(e.currentTarget.style, props.styles.buttonActive)}
                            onMouseUp={(e) => Object.assign(e.currentTarget.style, props.styles.buttonHover)}
                            onClick={(e)=>{props.handleClick(e);loginUser()}}>Login
                        </button>
                        <div className="flex justify-between">
                            <i className="self-start text-[#ffa000] cursor-pointer" onClick={() => navigate('/signup')}>New Here?</i>
                            <i className="self-end text-[#ffa000] cursor-pointer">Forgot Password?</i>
                        </div>
                    </form>
                </div>
            </div>
        </section>
        </>
    )


}
export default Login
