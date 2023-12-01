import { useState } from "react";
import {
    APIProvider,
    Map,
    AdvancedMarker,
    Pin,
    InfoWindow,
} from "@vis.gl/react-google-maps";
import useLocationFetch from '../hooks/useLocationFetch';

export default function EmbededMap() {
    const location = useLocationFetch();
    var userLatitude, userLongitude;

    if(location.userLocation.loadedin)
  {
  userLatitude = Number(location.userLocation.coordinates.latitude);
  userLongitude = Number(location.userLocation.coordinates.longitude);
  }
  else {
  userLatitude = 49.27855565599999;
  userLongitude = -122.91953997726202;
  }
    const position = {lat:userLatitude,lng:userLongitude}
    
    const[open, setOpen] = useState(false);

        const style = {
        height: '100%',
        width: '33%',
        right: 0,
        top: '11.5vh',
        position: 'absolute',
    }

    return (
    <APIProvider apiKey="AIzaSyAwR7DLNCBpRs-vdVSzECotAGvKKXx745k"> 

        <div style={{height: "100vh", width: "100%"}}> 
            <Map zoom={9} center={position} mapId="30c45397d92e6144" style={style} >
                <AdvancedMarker position={position} onClick={() => setOpen(true)}>
                    <Pin background={"pink"} borderColor={"black"} glyphColor={"red"}/>
                </AdvancedMarker>

                {open && <InfoWindow position={position} onCloseClick={() => setOpen(false)}>
                    <p>some random information</p>
                </InfoWindow>}
            </Map>
        </div>
    </APIProvider>
    );
}