import React, { useEffect, useRef } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  DirectionsService,
  DirectionsRenderer,
} from "@react-google-maps/api";

function Map() {
  const mapContainerStyle = { height: "400px", width: "100%" };
  const center = { lat: 32.2396, lng: 77.1887 }; // Coordinates for Manali
  const origin = { lat: 27.5603, lng: 77.7045 }; // Coordinates for GLA University, Mathura
  const destination = center;

  const directionsRendererRef = useRef(null);

  useEffect(() => {
    if (directionsRendererRef.current) {
      directionsRendererRef.current.setMap(null); // Reset map when the component is mounted
    }
  }, []);

  return (
    <div className="container mx-auto my-10">
      <h2 className="text-2xl font-bold text-center mb-6">Our Location</h2>
      <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={10}
        >
          {/* DirectionsService to calculate the route */}
          <DirectionsService
            options={{
              origin: origin,
              destination: destination,
              travelMode: "DRIVING", // You can use DRIVING, WALKING, BICYCLING, or TRANSIT
            }}
            callback={(result, status) => {
              if (status === "OK") {
                directionsRendererRef.current.setDirections(result);
              }
            }}
          />
          {/* DirectionsRenderer to display the route */}
          <DirectionsRenderer
            ref={directionsRendererRef}
            options={{
              directions: undefined, // We'll set this dynamically in the callback
            }}
          />
          <Marker position={origin} />
          <Marker position={destination} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
}

export default Map;
