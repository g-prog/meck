import "./health.css"
import {Notifications, Fire} from "@material-ui/icons";
import WhatshotIcon from '@material-ui/icons/Whatshot';
import DirectionsWalkIcon from '@material-ui/icons/DirectionsWalk';
import NightsStayIcon from '@material-ui/icons/NightsStay';

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
                <span className="float-left">
                    <h1 className="text-blue-700">meck</h1>
                </span>

                <span className="float-right ml-52">
                    <Notifications/>   
                </span>
                <p className="text-center p-2.5">Today</p>
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


