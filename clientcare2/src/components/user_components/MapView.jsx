import React from 'react'
import { APIProvider, Map, Pin, InfoWindow, AdvancedMarker } from "@vis.gl/react-google-maps";
import { useState, useEffect } from 'react';

const MapView = () => {
    const [ position, setPosition ] = useState({ lat: 33.086730, lng: -96.830510 }) // jpmc location
    // const [ open, setOpen ] = useState(false)
    // const mockClinics = [
    //     { id: 1, name: "Abide Clinic", location: { lat: 32.767280, lng: -96.770100 } },
    // ]
    
    // useEffect(() => {
    //     // Get user's location
    //     if (navigator.geolocation) {
    //         navigator.geolocation.getCurrentPosition(
    //             (position) => {
    //                 setUserLocation({
    //                     lat: position.coords.latitude,
    //                     lng: position.coords.longitude
    //                 });
    //             },
    //             (error) => {
    //                 console.error("Error getting user location:", error);
    //             }
    //         );
    //     }
    // }, []);

    return (
        <APIProvider apiKey={import.meta.env.VITE_MAPS_API_KEY}>
            <div className='h-lvh w-full'>
                <Map zoom={11} 
                    center={position}
                    mapId={import.meta.env.VITE_MAP_ID}
                >
                    <AdvancedMarker 
                        position={position}
                        onClick={()=>{setOpen(true)}}
                    >
                        <Pin 
                            background={"blue"} 
                            borderColor={"white"} 
                            glyphColor={"white"}
                        >
                        </Pin>
                    </AdvancedMarker>
                    {open && <InfoWindow position={position}>
                        <div>
                            <h3 className='font-bold'>Clinic Info</h3>
                            <ul>
                                <li>available appt</li>
                                <li>available appt</li>
                            </ul>
                        </div>
                    </InfoWindow>
                    }
                </Map>
            </div>
        </APIProvider>
    )
}

export default MapView