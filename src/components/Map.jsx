import { useState } from "react";
import {
    APIProvider,
    Map,
    AdvancedMarker,
    Pin,
    InfoWindow,
} from "@vis.gl/react-google-maps";
import useLocationFetch from '../hooks/useLocationFetch';

const EmbededMap = ({ newData }) => {
    const location = useLocationFetch();
    const userLatitude = Number(location.userLocation.coordinates.latitude);
    const userLongitude = Number(location.userLocation.coordinates.longitude);

    const position = { lat: userLatitude, lng: userLongitude }


    const [open, setOpen] = useState(false);

    const style = {
        height: '100%',
        width: '33%',
        right: 0,
        top: '11.5vh',
        position: 'absolute',
    }

    console.log(newData)
    return (
        <APIProvider apiKey="///AIzaSyAwR7DLNCBpRs-vdVSzECotAGvKKXx745k">

            <div style={{ height: "100vh", width: "100%" }}>
                <Map zoom={9} center={position} mapId="30c45397d92e6144" style={style} >
                    {newData.data &&
                        newData.data
                            .filter((item) => item.photos_sample[0].photo_url !== null)
                            .map((data, index) => (
                                <AdvancedMarker position={{ lat: data.latitude, lng: data.longitude }} onClick={() => setOpen(true)}>
                                    <Pin background={"pink"} borderColor={"black"} glyphColor={"red"} />
                                    {open && <InfoWindow position={{ lat: data.latitude, lng: data.longitude }} onCloseClick={() => setOpen(false)}>
                                        <p>{data.about.summary}</p>
                                    </InfoWindow>}
                                </AdvancedMarker>

                            ))}
                </Map>
            </div>
        </APIProvider>
    );
}
export default EmbededMap;
