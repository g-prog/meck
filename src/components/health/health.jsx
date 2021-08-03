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


  






const HelpToast = ( closeToast ) => {
    return(
        <div className="flex flex-row justify-between p-3 mt-3 bg-white shadow-lg">
            
            <div>
                <Box pt={0.2}>
                    <CheckCircleIcon style={{color:"green"}}/>
                </Box>
            </div>
            <div className="flex flex-col pl-1">
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

    return (
        <div className="bg-white shadow-2xl">
            <div className="location">
                <h1>{location.loaded ? JSON.stringify(location): "."}</h1>
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
    
                        <DirectionsWalkIcon />

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

                <section>

                </section>

                <section className="bg-blue-100 bg-opacity-50 p-8 pb-24 mt-6">
                    <div className="flex flex-col justify-center gap-y-4">
                        <div className="bg-white shadow-2xl flex flex-row p-5 rounded-lg">
                            <div className="bg-blue-400 xs:rounded-sm md:rounded-full xs:pt-2 md:pt-2 px-1 py-1 bg-opacity-80">

                                <Box pt={0.2} >
                                    <Person style={{color: "blue"}}/>
                                </Box>
                            </div>

                            <div className="pl-7">
                                <p>Get Checked</p> 
                                <p className="text-xs text-gray-400">Take the virtual assessment</p>
                            </div>
                        </div>

                        <div className="bg-white shadow-2xl flex flex-row p-5 rounded-lg">
                                <div className="bg-blue-400 xs:rounded-sm md:rounded-full  px-1 py-1 bg-opacity-80">
                                    <RedeemIcon style={{color: "blue"}}/>
                                </div>

                                <div className="pl-7">
                                    <p>See a Doctor</p>
                                    <p className="text-xs text-gray-400">Book an appointment</p>
                                </div>
                        </div>


                        <div className="bg-white shadow-2xl flex flex-row p-5 rounded-lg"  onDoubleClick={notify}>
                            <div className="bg-blue-400 xs:rounded-sm md:rounded-full xs:pt-2 md:pt-2 px-1 py-1 bg-opacity-80">
                                   
                                    <Box pt={0.2}>
                                        <AirportShuttleIcon style={{color: "red"}}/>
                                        
                                    </Box>
                                </div>

                                <div className="pl-7">
                                    <p>Report  Emergency</p>
                                    
                                    <button><p className="text-xs text-gray-400">Tap twice to alert the hospital </p></button>
                                    
                                </div>
                        </div> 
                    </div>
                </section>

                
                <section className="flex flex-row justify-around mt-16">
                    <div className="flex flex-col">
                        <Minimize style={{color: "blue"}} />
                        <Home style={{color: "blue"}} />
                        <p className="text-sm text-blue-700">HOME</p>
                    </div>
                    
                    <div className="flex flex-col mt-6">
                        <Box ml={2}>
                            <Watch style={{color: "gray"}} />

                        </Box>
                        
                        <p className="text-sm text-gray-400">TRACK</p>
                    </div>

                    <div className="flex flex-col mt-6">
                        <Box ml={2}>
                            <img className="profile"
                            src="assets/skin.jpg"
                            alt="glammed up"/>
                        </Box>
                        
                        <p className="text-base text-gray-400">ACCOUNT</p>
                    </div>
                    

                </section>



                

                 
            </div>

        

            


                {/* Second div */}

            <div className="shadow-2xl bg-white p-6 rounded-lg mt-44 md:mt-0">
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
    
                        <DirectionsWalkIcon/>

                    </div>
                    <div className="sleep">
                        <NightsStayIcon/>
                    </div>
                </div>

                <div className="flex flex-row justify-around">
                    <div className="py-2">
                        <p>213</p>
                        <p className="text-gray-600">Cals</p>
                    </div>

                    <div className="py-2">
                        <p className="ml-5">5,022</p>
                        <p className="text-gray-600 ml-5">Steps</p>
                    </div>
                    <div className="py-2 text-center">
                        <p>4Hr55</p>
                        <p className="text-gray-600">Minutes</p>
                    </div>
                </div>

              

                <div className="flex flex-row justify-center">
                    <p className="text-gray-500">More <span className="arrow"><ArrowForwardIosIcon style={{fontSize : 10}}/></span> </p>
                </div>
                <h3>Services</h3>

                <section className="bg-black bg-opacity-5 p-8 pb-24 mt-6">
                    <div className="flex flex-col justify-center gap-y-4">
                        <div className="bg-white  shadow-2xl flex flex-row p-5 rounded-lg">
                            <div className="bg-blue-400 xs:rounded-sm md:rounded-full xs:pt-2 md:pt-2 px-1 py-1 bg-opacity-80">
                                
                                <Box pt={0.2}>
                                    <Person style={{color: "blue"}}/>
     
                                </Box>

                                
                            </div>
                            <div className="pl-7">
                                <p>Get Checked</p> 
                                <p className="text-xs text-gray-600">Take the virtual assessment</p>
                            </div>
                        </div>

                        <div className="bg-white  shadow-2xl flex flex-row p-5 rounded-lg">
                                <div className="bg-blue-400 xs:rounded-sm md:rounded-full xs:pt-4 md:pt-2 px-1 py-1 bg-opacity-80">
                                    <RedeemIcon style={{color: "blue"}}/>
                                </div>

                                <div className="pl-7">
                                    <p>See a Doctor</p>
                                    <p className="text-xs text-gray-600">Book an appointment</p>
                                </div>
                        </div>


                        <div className="bg-white shadow-2xl flex flex-row p-5 rounded-lg " onDoubleClick={notify}>
                                <div className="bg-blue-400 xs:rounded-sm md:rounded-full xs:pt-2 md:pt-2 px-1 py-1 bg-opacity-80">
                                    
                                    <Box pt={0.2}>
                                        <AirportShuttleIcon style={{color: "red"}}/>
                                    
                                    </Box>

                                </div>
                                <div className="pl-7">
                                    <p>Report  Emergency</p>
                                    <button><p className="text-xs text-gray-400">Tap twice to alert the hospital </p></button>
                                    
                                </div>
                        </div> 

                        
                    </div>

                    
                </section>

                
                <section className="flex flex-row justify-around mt-16">
                    <div className="flex flex-col">
                        <Minimize style={{color: "blue"}} />
                        <Home style={{color: "blue"}} />
                        <p className="text-sm text-blue-700">HOME</p>
                    </div>
                    
                    <div className="flex flex-col mt-6">
                        <Box ml={2}>
                            <Watch style={{color: "gray"}} />

                        </Box>
                        <p className="text-sm text-gray-400">TRACK</p>
                    </div>

                    <div className="flex flex-col mt-6">
                        <Box ml={2}>
                            <img className="profile"
                            src="assets/skin.jpg"
                            alt="glammed up"/>
                        
                        </Box>
                        <p className="text-base text-gray-400">ACCOUNT</p>
                    </div>
                </section>
            </div>


                {/* Third div */}

            <div className="shadow-2xl bg-white p-6 rounded-lg mt-44 md:mt-0">
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
    
                        <DirectionsWalkIcon/>

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

                <section className="bg-blue-100 bg-opacity-50 p-8 pb-24 mt-6">
                    <div className="flex flex-col justify-center gap-y-4">
                        <div className="bg-white shadow-2xl flex flex-row  p-5 rounded-lg">
                            <div className="bg-blue-400 xs:rounded-md md:rounded-full xs:pt-4 md:pt-2 px-1 py-1 bg-opacity-80">
                                
                                <Box pt={0.2}>
                                    <Person style={{color: "blue"}}/> 
                                </Box>
                            </div>
                            <div className="pl-7">
                                <p>Get Checked</p> 
                                <p className="text-xs text-gray-400">Take the virtual assessment</p>
                            </div>
                        </div>

                        <div className="bg-white shadow-2xl flex flex-row p-5 rounded-lg">
                                <div className="bg-blue-400 xs:rounded-sm md:rounded-full px-1 py-1 bg-opacity-80">
                                    <RedeemIcon style={{color: "blue"}}/>
                                </div>

                                <div className="pl-7">
                                    <p>See a Doctor</p>
                                    <p className="text-xs text-gray-400">Book an appointment</p>
                                </div>
                        </div>


                        <div className="bg-white shadow-2xl flex flex-row p-5 rounded-lg" onDoubleClick={notify}>
                            <div className="bg-blue-400 xs:rounded-sm md:rounded-full xs:pt-4 md:pt-2 px-1 py-1 bg-opacity-80">
                                    
                                    <Box pt={0.2}>
                                        <AirportShuttleIcon style={{color: "red"}}/>
                                        
                                    </Box>
                                </div>
                                <div className="pl-7">
                                    <p>Report  Emergency</p>
                                    <button><p className="text-xs text-gray-400">Tap twice to alert the hospital </p></button>
                                    
                                </div>
                        </div> 
                    </div>

                    
                </section>

                
                <section className="flex flex-row justify-around mt-16">
                    <div className="flex flex-col">
                        <Minimize style={{color: "blue"}} />
                        <Home style={{color: "blue"}} />
                        <p className="text-sm text-blue-700">HOME</p>
                    </div>
                    
                    <div className="flex flex-col mt-6">
                        <Box ml={2}>
                            <Watch style={{color: "gray"}} />

                        </Box>
                        <p className="text-sm text-gray-400">TRACK</p>
                    </div>

                    <div className="flex flex-col mt-6">
                        <Box ml={2}>
                            <img className="profile"
                            src="assets/skin.jpg"
                            alt="glammed up"/>
                        </Box>
                        <p className="text-base text-gray-400">ACCOUNT</p>
                    </div>
                </section>

                
            </div>






            
            </div>



            

            
        </div>
    )
}


