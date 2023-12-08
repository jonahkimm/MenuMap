import { useState } from "react";
import { useParams } from "react-router-dom";
import {
    APIProvider,
    Map,
    AdvancedMarker,
    Pin,
    InfoWindow,
} from "@vis.gl/react-google-maps";

const EmbededMap = ({ newData }) => {
    const { lat, lng } = useParams();

    const position = { lat: parseFloat(lat), lng: parseFloat(lng) }

    const [openPin, setOpenPin] = useState(null);
    

    const style = {
        height: '885px',
        width: '33%',
        right: 0,
        top: '11.5vh',
        position: 'absolute',
    }
    return (
        <APIProvider apiKey="IzaSyAwR7DLNCBpRs-vdVSzECotAGvKKXx745k">

            <div className="">
                <div className="mt-10">
                    <p className="text-xl font-thin text-rose-500">Your Latitude:{position.lat}</p>
                    <p className="text-xl font-thin mt-4 text-rose-500">Your Longitude:{position.lng}</p>
                </div>


                <Map zoom={13} center={position} mapId="30c45397d92e6144" style={style} >
                    {newData.data &&
                        newData.data
                            .filter((item) => 
                            item.name !== null &&
                            item.street_address !== null &&
                            item.subtypes[0] !== null &&
                            item.price_level !== null &&
                            item.rating !== null &&
                            item.photos_sample[0]?.photo_url !== null &&
                            item.phone_number !== null &&
                            item.about?.summary !== null &&
                            item.website !== null
                            )
                            .map((data, index) => (
                                <AdvancedMarker key={index} position={{ lat: data.latitude, lng: data.longitude }} onClick={() => setOpenPin(index)}>
                                <Pin background={"pink"} borderColor={"black"} glyphColor={"red"} />
                                {openPin === index && (
                                  <InfoWindow position={{ lat: data.latitude, lng: data.longitude }} onCloseClick={() => setOpenPin(null)}>
                                    <p className="text-xl font-semibold">{data.name}</p>
                                    <p>{data.about.summary}</p>
                                  </InfoWindow>
                                )}
                              </AdvancedMarker>

                            ))}
                </Map>
            </div>
        </APIProvider>
    );
}
export default EmbededMap;
