"use-client";
import {
    APIProvider,
    Map,
} from '@vis.gl/react-google-maps'

export default function Intro()
{
    const position = {lat:54.32,lng:10}
    return (
        <APIProvider apiKey="AIzaSyAIi0GfFZUi95zJ-QQtMe_RY1nZgEcUDhc">
            <div style={{height:"100vh"}}>
                <Map zoom={9} center={position}></Map>  
            </div>

        </APIProvider>
    );
    
}