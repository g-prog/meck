import "./trial.scss"
import useGeoLocation from "../hook/useGeoLocation";

export default function Trial() {
    const location = useGeoLocation();
    
    return (
        <div className="trial">
            <div>
                <h1>{location.loaded ? JSON.stringify(location): "Location data not available yet"}</h1>
            </div>
            <div></div>
            
        </div>
    )
}










