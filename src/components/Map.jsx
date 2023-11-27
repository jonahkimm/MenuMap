"use-client";

import { useState } from "react";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
} from "@vis.gl/react-google-maps";
import useLocationFetch from "../hooks/useLocationFetch";

export default function Intro() {
  const location = useLocationFetch();
  const userLatitude = Number(location.userLocation.coordinates.latitude);
  const userLongitude = Number(location.userLocation.coordinates.longitude);

  const style = {
    height: "88.5vh",
    width: "33%",
    right: 0,
    top: "11.5vh",
    position: "absolute",
    zIndex: -10,
  };

  const position = { lat: userLatitude, lng: userLongitude };
  const { open, setOpen } = useState(false);
  return (
    <APIProvider apiKey="////AIzaSyAIi0GfFZUi95zJ-QQtMe_RY1nZgEcUDhc">
      <div>
        <Map zoom={15} center={position} style={style} mapId="30c45397d92e6144">
          <AdvancedMarker position={position} onClick={() => setOpen(true)}>
            <Pin
              background={"red"}
              borderColor={"black"}
              glyphColor={"yellow"}
            />
          </AdvancedMarker>
          {open && (
            <InfoWindow position={position} onCloseClick={() => setOpen(false)}>
              <p>Current location</p>
            </InfoWindow>
          )}
        </Map>
      </div>
    </APIProvider>
  );
}
