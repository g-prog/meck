import "./health.css"
import {Notifications, Person} from "@material-ui/icons";
import WhatshotIcon from '@material-ui/icons/Whatshot';
import DirectionsWalkIcon from '@material-ui/icons/DirectionsWalk';
import NightsStayIcon from '@material-ui/icons/NightsStay';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

export default function health() {
    return (
        <div className="bg-white">
            <h2 className="text-center">HOW TO REPORT AN EMERGENCY</h2>
            <div className="header">
                <div>
                    <p>on tap</p>
                    <p>"Report an Emergency"</p>
                </div>
                <div>
                    <p>on tap</p>
                    <p>"Report an Emergency"</p>
                </div>
                <div>
                    <p>on tap</p>
                    <p>"Report an Emergency"</p>
                </div>
                
            </div>

            

            <div className="content">
            <div className="shadow-2xl bg-white p-10 rounded-lg">
               <div className="flex flex-row justify-between">
                    <div>
                        <h1 className="text-blue-700 font-semibold">meck</h1>
                    </div>

                    <div>
                        <Notifications/>   
                    </div>

               </div>

                <section className="flex flex-row justify-center p-4">
                        
                        <div className="">
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
                        <p>Cals</p>
                    </div>

                    <div className="py-2">
                        <p>5,022</p>
                        <p>Steps</p>
                    </div>
                    <div className="py-2 text-center">
                        <p>4Hr55</p>
                        <p>Minutes</p>
                    </div>


                </div>

                <div className="flex flex-row justify-center">
                    <p>More <span className="arrow"><ArrowForwardIosIcon style={{fontSize : 10}}/></span> </p>
                </div>
                <p>Services</p>

                <section className="bg-blue-100 bg-opacity-50 p-5 mt-6">
                    

                    <div className="flex flex-col justify-center gap-y-4">
                        <div className="bg-white shadow-2xl flex flex-row p-5">
                            <div className="bg-blue-400 rounded-full px-1 py-1 bg-opacity-80">
                                <Person/>
                            </div>
                            <div className="pl-7">
                                <p>Get Checked</p> 
                                <p className="text">Take the virtual assessment</p>
                            </div>
                        </div>

                        <div className="bg-white shadow-2xl flex flex-row p-5">
                            <div className="bg-blue-400 rounded-full px-1 py-1 bg-opacity-80">
                                    <Person/>
                                </div>
                                <div className="pl-7">
                                    <p>Get Checked</p>
                                    <p className="text">Take the virtual assessment</p>
                                </div>
                        </div>


                        <div className="bg-white shadow-2xl flex flex-row p-5">
                            <div className="bg-blue-400 rounded-full px-1 py-1 bg-opacity-80">
                                    <Person/>
                                </div>
                                <div className="pl-7">
                                    <p>Get Checked</p>
                                    <p className="text">Take the virtual assessment</p>
                                </div>
                        </div>


                       
                    </div>


                </section>
                

                 
            </div>


            <div>
                <h1>meck</h1>
            </div>
            <div>
                <h1>meck</h1>
            </div>
            </div>
            


            
        </div>
    )
}


