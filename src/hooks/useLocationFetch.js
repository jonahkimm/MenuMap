import { useState, useEffect} from "react";
import Geolocation from "@react-native-community/geolocation";

const useLocationFetch = () => {
const [userLocation, setUserLocation] = useState(
{
    coordinates: {
        longitude:"",
        latitude:""
    },
    loadedin: ""
});

const onError = () => {
    
    setUserLocation({
        loadedin: false
    });
    
};

const onretrieveLocation = (userLocation) => {
    setUserLocation({
        coordinates: {
            longitude: userLocation.coords.longitude,
            latitude: userLocation.coords.latitude
        },
        loadedin: true
    });
};

useEffect(()=>{
    if(!("geolocation" in navigator))
    onError();
    else
    navigator.geolocation.getCurrentPosition(onretrieveLocation, onError);
},[]);;


  return {userLocation};
}

export default useLocationFetch