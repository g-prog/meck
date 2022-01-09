import React from 'react';
import "./health.scss";
import {Notifications, Person, Home, Watch, Minimize, } from "@material-ui/icons";
import WhatshotIcon from '@material-ui/icons/Whatshot';
import DirectionsWalkIcon from '@material-ui/icons/DirectionsWalk';
import NightsStayIcon from '@material-ui/icons/NightsStay';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import RedeemIcon from '@material-ui/icons/Redeem';
import AirportShuttleIcon from '@material-ui/icons/AirportShuttle';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Box from '@material-ui/core/Box'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import useGeoLocation from "../hook/useGeoLocation";
import {  useState } from "react"



  
const HelpToast = ( closeToast ) => {
      
    return(
        <div className="flex flex-row justify-between p-3 mt-3 bg-white shadow-lg">
            
            <div>
                <Box pt={0.2}>
                    <CheckCircleIcon style={{color:"green"}}/>
                </Box>
            </div>
            <div className="help">
                <div><h4 className="text-xs text-black font-semibold text-center" >Help is on the way!</h4></div>
                <div>
                    <p className="text-xs text-black text-center">The Hospital and your </p>
                    <p className="text-xs text-black text-center">next of kin has been notified</p> 
                </div>
            </div>
            <div></div>
        
        </div> 

    )
}

  
toast.configure()
export default function Health() {
      
    const notify = () => {
        toast.success(<HelpToast/>, {position: toast.POSITION.BOTTOM_LEFT, autoClose: false} )
    }
      
    const location = useGeoLocation();
    const [show, setShow] = useState(false)

      
    const [toggle, setToggle] = useState(false);
    const toggleButton = () => setToggle(!toggle);

    
   
    return (
        <div className="bg-white shadow-2xl">
            <div className="location">
                <h1 className="block">{location.loaded ? JSON.stringify(location): "."}</h1>
            </div>
    
            <div className="p-12">
                <h2 className="text-center font-bold">HOW TO REPORT AN EMERGENCY</h2>
            </div>
            <div>

        </div>
            
            {/* First div */}
            <div className="content">
            <div className="shadow-2xl bg-white p-6 rounded-lg">
               <div className="flex flex-row justify-between">
                    <div>
                        <h1 className="text-blue-600 text-xl">meck</h1>
                    </div>

                    <div>
                        <Notifications/>   
                    </div>

               </div>

                <section className="flex flex-row justify-center p-4">
                    <div>
                        <p className="text-center">Today</p>      
                    </div>
                </section>
               
               
                
                <div className="flex flex-row justify-around">
                    <div className="calories">
                        <WhatshotIcon/> 
                    </div>
                    <div className="steps">
                        <Box >
                            <DirectionsWalkIcon  />

                        </Box>     
                        
                                      

                    </div>
                    <div className="sleep">
                        <NightsStayIcon/>
                    </div>
                </div>

                <div className="flex flex-row justify-around">
                    <div className="py-2">
                        <p>213</p>
                        <p className="text-gray-400">Cals</p>
                    </div>

                    <div className="py-2">
                        <p className="ml-5">5,022</p>
                        <p className="text-gray-400 ml-5">Steps</p>
                    </div>
                    <div className="py-2 text-center">
                        <p>4Hr55</p>
                        <p className="text-gray-400">Minutes</p>
                    </div>
                </div>



                <div className="flex flex-row justify-center">
                    <p className="text-gray-500">More <span className="arrow"><ArrowForwardIosIcon style={{fontSize : 10}}/></span> </p>
                </div>
                <h3>Services</h3>

                

                <section className="bg-blue-300 bg-opacity-5 border-opacity-0 border-2 border-blue-100 p-10 pb-24 mt-6">
                    <div className="flex flex-col  justify-center gap-y-4">
                        <div className="bg-white  border-2 border-blue-300 border-opacity-50 shadow-2xl flex flex-row p-2 rounded-lg">
                            <div className="bg-blue-400 rounded-full xs:pt-2 mb-3  px-1 py-1 bg-opacity-40">

                                <Box pt={0.4} >
                                    <Person style={{color: "blue"}}/>
                                </Box>
                            </div>

                            <div className="pl-7">
                                <p>Get Checked</p> 
                                <p className="text-xs text-gray-400">Take the virtual assessment</p>
                            </div>
                        </div>

                        <div className="bg-white border-2 border-blue-300 border-opacity-50  shadow-2xl flex flex-row p-2 rounded-lg">
                                <div className="bg-blue-400 xs:rounded-sm rounded-full mb-3 px-1 py-1 bg-opacity-40">
                                    <RedeemIcon style={{color: "blue"}}/>
                                </div>

                                <div className="pl-7">
                                    <p>See a Doctor</p>
                                    <p className="text-xs text-gray-400">Book an appointment</p>
                                </div>
                        </div>


                        <div className="bg-white border-2 border-blue-300 border-opacity-50 shadow-2xl flex flex-row p-2 rounded-lg xs:"  onDoubleClick={notify}>
                            <div className="bg-blue-400   rounded-2xl md:mt-2 mt-6 mb-3 px-1 py-0 pb-0 bg-opacity-40">
                                   
                                    <Box pt={0.6}>
                                        <AirportShuttleIcon style={{color: "red"}}/>
                                        
                                    </Box>
                                </div>

                                <div className="pl-7">
                                    <p>Report  Emergency</p>
                                    
                                    <p className="text-xs text-gray-400 ">Tap twice to alert the Hospital </p>
                                    
                                </div>
                        </div> 
                    </div>
                </section>

                
                <section className="flex flex-row justify-around mt-16">
                   
                    <div className="flex flex-col">
                        
                    {
                        show?<Minimize style={{color: "blue"}} />:null
                    }
                        
                             
                        
                        <Home style={{color: "blue"}} />
                        <button  className={"text-sm text-blue-700" } onClick={()=>setShow(!show)}>HOME</button> 
                    </div>
                    
                    <div className="flex flex-col ">
                    {
                        show?<Minimize style={{color: "blue"}} />:null
                    }
                        
                        
                        
                        <Box ml={2}>
                            <Watch style={{color: toggle ? 'blue' : 'gray'}} onClick={toggleButton} />

                        </Box>
                        <button  className={"text-sm text-gray-400" } onClick={()=>setShow(!show)}>TRACK</button>
                        
                       
                    </div>

                    <div className="flex flex-col">
                    {
                        show?<Minimize style={{color: "blue"}} />:null
                    }
                        
                        <Box ml={2}>
                            <img className="profile"
                            src="assets/skin.jpg"
                            alt="glammed up"/>
                        </Box>
                        <button  className={"text-sm text-gray-400" } onClick={()=>setShow(!show)}>ACCOUNT</button>
                        
                        
                        
                    </div>
                    

                </section>



                

                 
            </div>

        

            


                {/* Second div */}

            
                {/* Third div */}

            
            
            </div>



            

            
        </div>
    )
}


