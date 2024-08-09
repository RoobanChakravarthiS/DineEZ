import { useState } from "react";
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import logo from './logo.png';
import bg from "./background.jpg";
function Signup() {
    const [username,setUsername] = useState("");
    const[number,setNumber] = useState();
    const[password,setPassword] = useState("");
    const[otp,setOtp] = useState();
    const[otpshaker,setOtpShaker] = useState(false);
    const[nameshaker,setNameShaker] = useState(false);
    const[numbershaker,setNumberShaker] = useState(false);
    
    const[passwordDisplayer,setpasswordDisplayer]=useState(false);
    const styles={
            loginbox:{
                width:"100vw",
                height:"100vh",
                // backgroundColor:"#eeeeee",
                backgroundImage:`url(${bg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                color:"black",
//                 background:" rgb(57,62,70)",
// background: "linear-gradient(90deg, rgba(57,62,70,1) 33%, rgba(253,112,20,1) 100%)",
            },  
            box:{
                height:"50%",
                width:"60%",
                borderRadius:"50px",
                boxShadow:" 0 5px 15px rgba(0,0,0,0.8)",
                
                // background: "rgb(249,245,240)",
                // background: "linear-gradient(90deg, rgba(249,245,240,1) 0%, rgba(244,153,26,1) 0%, rgba(41,40,61,1) 56%)",
                background: "rgb(253,112,20)",
                background: "linear-gradient(90deg, rgba(253,112,20,1) 0%, rgba(200,98,34,1) 40%, rgba(242,234,211,1) 100%)",
            },
            boxdivider:{
                height:"100%",
                width:"50%",
                // backgroundColor:"#F9F5F0",
                color:"#eeeeee",
                
            },
            form:{
                height:"100%",
                width:"50%",
                // backgroundColor:"#F4991A",
                color:"#321313"
                
                
            },
            button:{
                backgroundColor:"#321313",
                height:"5vh",
                width:"10vw",
                color:"#F9F5F0",
                border: 'none',              
                borderRadius: '5px',         
                fontSize: '16px',           
                fontWeight: 'bold',          
                cursor: 'pointer',           
                transition: 'all 0.4s ease', 
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)', 
                position: 'relative',        
                overflow: 'hidden', 
            },
            label:{
                width:"35%"
            },
            input:{
                height:"3vh",
                width:"65%",

            },
            checkbox:{
                width:"5vw",
                height:"3vh"
            },
            logo:{
                height:"25vh",
            },
            inputs:{
                width:"80%",
            },
            buttonHover: {
                backgroundColor: '#e38b00',  // Darker on hover
                transform: 'scale(1.05)',    // Slightly enlarge on hover
              },
              buttonActive: {
                backgroundColor: '#c77500',  // Even darker when pressed
                transform: 'scale(0.98)',    // Slightly shrink on press
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
    return(
        <>
            <div style={styles.loginbox}className="flex flex-row justify-center items-center font-sans text-2xl font-bold">
                
                <div className="flex flex-row  " style={styles.box}>
                    <div className="flex flex-col justify-evenly items-center" style={styles.boxdivider}>
                        <h1 className="">SIGN-UP</h1>
                        <div className="text-sm flex justify-center items-center w-3/6 "><p>Welcome to the platform that books and cooks your food and serves you at the right time</p></div>
                        <div>
                            <img src={logo} alt="" style={styles.logo}></img>
                        </div>
                        {/* <div className="toggle-switch flex flex">
                            <input style={styles.input} type="checkbox" id="toggle" onClick={()=>{setLoginmethod(!loginmethod)}}/>
                            <label for="toggle" className="toggle-switch-label"><span className="toggle-switch-handle"></span></label>
                        </div> */}
                            {/* <p>login with <span>{loginmethod?`number`:`username` }</span></p> */}
                    </div>
                    
                    <div id="form" style={styles.form}className="flex flex-col items-center flex-col justify-evenly">
                        
                        <div className="username items-center flex flex-row " style={styles.inputs}>
                            <label style={styles.label}>Username</label>
                            <input style={styles.input} type="text" className="" onChange={(e)=>setUsername(e.target.value)}></input>
                        </div>
                        
                        <div className="number items-center flex flex-row " style={styles.inputs}>
                            <label style={styles.label}>Number</label>
                            <input style={styles.input} type="number"  onChange={(e)=>setNumber(e.target.value)} ></input>
                        </div>
                        <div className="number items-center flex flex-row " style={styles.inputs}>
                            <label style={styles.label}>OTP</label>
                            <input style={styles.input} type="number"  onChange={(e)=>setOtp(e.target.value)}></input>
                        </div>
                        

                    <div className="flex flex-evenly space-x-12">
                        <button className="button" style={styles.button}
                            onMouseEnter={(e) => Object.assign(e.currentTarget.style, styles.buttonHover)}     
                            onMouseLeave={(e) => Object.assign(e.currentTarget.style, styles.button)}
                            onMouseDown={(e) => Object.assign(e.currentTarget.style, styles.buttonActive)}
                            onMouseUp={(e) => Object.assign(e.currentTarget.style, styles.buttonHover)}
                            onClick={handleClick}>Verify
                        </button>
                        <button className="button" style={styles.button} 
                            onMouseEnter={(e) => Object.assign(e.currentTarget.style, styles.buttonHover)}     
                            onMouseLeave={(e) => Object.assign(e.currentTarget.style, styles.button)}
                            onMouseDown={(e) => Object.assign(e.currentTarget.style, styles.buttonActive)}
                            onMouseUp={(e) => Object.assign(e.currentTarget.style, styles.buttonHover)}
                            onClick={handleClick}>Login
                        </button>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
    


}
export default Signup