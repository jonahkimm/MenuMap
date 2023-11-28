"use-client";
import {
    APIProvider,
    Map,
} from '@vis.gl/react-google-maps'
import useLocationFetch from '../hooks/useLocationFetch';

export default function Intro()
{
    const location = useLocationFetch();
    const userLatitude = Number(location.userLocation.coordinates.latitude);
    const userLongitude = Number(location.userLocation.coordinates.longitude);

    const style = {
        height: '88.5vh',
        width: '33%',
        right: 0,
        top: '11.5vh',
        position: 'absolute',
        zIndex: -10
    }
   
    const position = {lat:userLatitude,lng:userLongitude}
    return (
        <APIProvider apiKey="///AIzaSyAIi0GfFZUi95zJ-QQtMe_RY1nZgEcUDhc">
            <div>
                <Map zoom={15} center={position} style={style}></Map>  
            </div>

        </APIProvider>
    );
    
}