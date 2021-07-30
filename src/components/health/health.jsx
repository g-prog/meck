import "./health.css"
import {Notifications, Person, Home, Watch, Minimize, Clear} from "@material-ui/icons";
import WhatshotIcon from '@material-ui/icons/Whatshot';
import DirectionsWalkIcon from '@material-ui/icons/DirectionsWalk';
import NightsStayIcon from '@material-ui/icons/NightsStay';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import RedeemIcon from '@material-ui/icons/Redeem';
import AirportShuttleIcon from '@material-ui/icons/AirportShuttle';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

export default function health() {
    return (
        <div className="bg-white shadow-2xl ">
            <div className="p-12">
                <h2 className="text-center font-medium">HOW TO REPORT AN EMERGENCY</h2>

            </div>
            
            <div className="header">
                <div className="flex flex-col p-4 pl-11">
                    <p >on tap</p>
                    <p>"Report an Emergency"</p>
                </div>
                <div className="pr-12">
                    <p>"Allow Location access"</p>
                    <p className="pr-14">on 1st time use</p>
                </div>
                <div className="pr-28">
                    <p>Double tap sends</p>
                    <p>toast notification</p>
                </div>
                
            </div>

            

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
                        <div className="bg-white shadow-2xl flex flex-row p-5 rounded-lg">
                            <div className="bg-blue-400 rounded-full px-1 py-1 bg-opacity-80">
                                <Person style={{color: "blue"}}/>
                            </div>
                            <div className="pl-7">
                                <p>Get Checked</p> 
                                <p className="text-xs text-gray-400">Take the virtual assessment</p>
                            </div>
                        </div>

                        <div className="bg-white shadow-2xl flex flex-row p-5 rounded-lg">
                                <div className="bg-blue-400 rounded-full px-1 py-1 bg-opacity-80">
                                    <RedeemIcon style={{color: "blue"}}/>
                                </div>

                                <div className="pl-7">
                                    <p>See a Doctor</p>
                                    <p className="text-xs text-gray-400">Book an appointment</p>
                                </div>
                        </div>


                        <div className="bg-white shadow-2xl flex flex-row p-5 rounded-lg">
                            <div className="bg-blue-400 rounded-full px-1 py-1 bg-opacity-80">
                                    <AirportShuttleIcon style={{color: "red"}}/>
                                </div>
                                <div className="pl-7">
                                    <p>Report  Emergency</p>
                                    <p className="text-xs text-gray-400">Tap twice to alert the hospital </p>
                                </div>
                        </div> 
                    </div>
                </section>

                
                <section className="flex flex-row justify-around mt-16">
                    <div className="flex flex-col">
                        <Minimize style={{color: "blue"}} />
                        <Home style={{color: "blue"}} />
                        <p className="text-base text-blue-700">HOME</p>
                    </div>
                    
                    <div className="flex flex-col mt-6">
                        <Watch style={{color: "gray"}} />
                        <p className="text-base text-gray-400">TRACK</p>
                    </div>

                    <div className="flex flex-col mt-6">
                        <img className="profile"
                        src="assets/skin.jpg"
                        alt="glammed up"/>
                        <p className="text-base text-gray-400">ACCOUNT</p>
                    </div>
                    

                </section>



                

                 
            </div>


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
                        <div className="bg-white shadow-2xl flex flex-row p-5 rounded-lg">
                            <div className="bg-blue-400 rounded-full px-1 py-1 bg-opacity-80">
                                <Person style={{color: "blue"}}/>
                            </div>
                            <div className="pl-7">
                                <p>Get Checked</p> 
                                <p className="text-xs text-gray-400">Take the virtual assessment</p>
                            </div>
                        </div>

                        <div className="bg-white shadow-2xl flex flex-row p-5 rounded-lg">
                                <div className="bg-blue-400 rounded-full px-1 py-1 bg-opacity-80">
                                    <RedeemIcon style={{color: "blue"}}/>
                                </div>

                                <div className="pl-7">
                                    <p>See a Doctor</p>
                                    <p className="text-xs text-gray-400">Book an appointment</p>
                                </div>
                        </div>


                        <div className="bg-white shadow-2xl flex flex-row p-5 rounded-lg">
                            <div className="bg-blue-400 rounded-full px-1 py-1 bg-opacity-80">
                                    <AirportShuttleIcon style={{color: "red"}}/>
                                </div>
                                <div className="pl-7">
                                    <p>Report  Emergency</p>
                                    <p className="text-xs text-gray-400">Tap twice to alert the hospital </p>
                                </div>
                        </div> 
                    </div>
                </section>

                
                <section className="flex flex-row justify-around mt-16">
                    <div className="flex flex-col">
                        <Minimize style={{color: "blue"}} />
                        <Home style={{color: "blue"}} />
                        <p className="text-base text-blue-700">HOME</p>
                    </div>
                    
                    <div className="flex flex-col mt-6">
                        <Watch style={{color: "gray"}} />
                        <p className="text-base text-gray-400">TRACK</p>
                    </div>

                    <div className="flex flex-col mt-6">
                        <img className="profile"
                        src="assets/skin.jpg"
                        alt="glammed up"/>
                        <p className="text-base text-gray-400">ACCOUNT</p>
                    </div>
                </section>
            </div>


             

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
                        <div className="bg-white shadow-2xl flex flex-row p-5 rounded-lg">
                            <div className="bg-blue-400 rounded-full px-1 py-1 bg-opacity-80">
                                <Person style={{color: "blue"}}/>
                            </div>
                            <div className="pl-7">
                                <p>Get Checked</p> 
                                <p className="text-xs text-gray-400">Take the virtual assessment</p>
                            </div>
                        </div>

                        <div className="bg-white shadow-2xl flex flex-row p-5 rounded-lg">
                                <div className="bg-blue-400 rounded-full px-1 py-1 bg-opacity-80">
                                    <RedeemIcon style={{color: "blue"}}/>
                                </div>

                                <div className="pl-7">
                                    <p>See a Doctor</p>
                                    <p className="text-xs text-gray-400">Book an appointment</p>
                                </div>
                        </div>


                        <div className="bg-white shadow-2xl flex flex-row p-5 rounded-lg">
                            <div className="bg-blue-400 rounded-full px-1 py-1 bg-opacity-80">
                                    <AirportShuttleIcon style={{color: "red"}}/>
                                </div>
                                <div className="pl-7">
                                    <p>Report  Emergency</p>
                                    <p className="text-xs text-gray-400">Tap twice to alert the hospital </p>
                                </div>
                        </div> 
                    </div>

                    <div className="flex flex-row justify-between p-2 mt-3 bg-white shadow-lg">
                    <div>
                        <CheckCircleIcon style={{color: "green"}}/>

                    </div>
                    <div className="flex flex-col pl-2">
                        <div><h4>Help is on the way</h4></div>
                        <div>
                            <p className="text-xs text-gray-400">The Hospital and your next of kin has been notified</p>
                        </div>
                    </div>
                    <div className="pl-4">
                     <Clear style={{color: "gray"}}/>
                    </div>
                </div>
                </section>

                
                <section className="flex flex-row justify-around mt-16">
                    <div className="flex flex-col">
                        <Minimize style={{color: "blue"}} />
                        <Home style={{color: "blue"}} />
                        <p className="text-base text-blue-700">HOME</p>
                    </div>
                    
                    <div className="flex flex-col mt-6">
                        <Watch style={{color: "gray"}} />
                        <p className="text-base text-gray-400">TRACK</p>
                    </div>

                    <div className="flex flex-col mt-6">
                        <img className="profile"
                        src="assets/skin.jpg"
                        alt="glammed up"/>
                        <p className="text-base text-gray-400">ACCOUNT</p>
                    </div>
                </section>

                
            </div>






            
            </div>
            


            
        </div>
    )
}


