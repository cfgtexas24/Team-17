import React from 'react'
import { APIProvider, Map, Pin, InfoWindow, AdvancedMarker } from "@vis.gl/react-google-maps"
import { useState, useEffect } from 'react'

const MapView = () => {
    const [position, setPosition] = useState({ lat: 33.086730, lng: -96.830510 }) // jpmc location
    const [open, setOpen] = useState(false)
    const [selectedClinic, setSelectedClinic] = useState(null)

    // mock data: ideally get it from an api
    const mockClinics = [
        { id: 1, name: "Abide Clinic", location: { lat: 32.7672321, lng: -96.7704808 } },
        { id: 2, name: "Abide Clinic 2", location: { lat: 33.0917213, lng: -96.8438494 } },
    ]

    useEffect(() => {
        // Get user's current location
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setPosition({
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    })
                },
            )
        }
    }, [])

    const handleClinicMarkerClick = (clinic) => {
        setSelectedClinic(clinic);
        setOpen((prev) => !prev);
    }

    return (
        <APIProvider apiKey={import.meta.env.VITE_MAPS_API_KEY}>
            <div className='m-5'>
                <h1 className='font-bold text-3xl'>Abide Clinics Near You</h1>
            </div>
            <div className='h-lvh w-full'>
                <Map zoom={10.5} 
                    center={position}
                    mapId={import.meta.env.VITE_MAP_ID}
                >
                    {/* current position marker */}
                    <AdvancedMarker 
                        position={position}
                    >
                        <Pin 
                            background={"blue"} 
                            borderColor={"white"} 
                            glyphColor={"white"}
                        />
                    </AdvancedMarker>
                    
                    {/* create marker for each clinic */}
                    {mockClinics.map((clinic) => (
                        <AdvancedMarker
                            key={clinic.id}
                            position={clinic.location}
                            onClick={() => handleClinicMarkerClick(clinic)}
                        >
                            <Pin 
                                background={"red"} 
                                borderColor={"white"} 
                                glyphColor={"white"}
                            />
                        </AdvancedMarker>
                    ))}

                    {/* show info for clicked clinic */}
                    {open && selectedClinic && (
                        <InfoWindow 
                            position={selectedClinic.location}
                            onCloseClick={() => setOpen(false)}
                        >
                            <div>
                                <h3 className='font-bold'>{selectedClinic.name}</h3>
                                <ul>
                                    <li>available appt 1</li>
                                    <li>available appt 2</li>
                                </ul>
                            </div>
                        </InfoWindow>
                    )}
                </Map>
            </div>
        </APIProvider>
    )
}

export default MapView