import React, { useState } from 'react';

function Map() {
    const [mapSrc, setMapSrc] = useState(
        "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d21912825.348242326!2d14.852362549999997!3d47.35685375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1716295749893!5m2!1sen!2sus"
    );
    const [locationInput, setLocationInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [currentLocation, setCurrentLocation] = useState(null);

    const findMyLocation = () => {
        setIsLoading(true);
        setError(null);
        setCurrentLocation(null);

        if (!navigator.geolocation) {
            setError('Geolocation is not supported by your browser');
            setIsLoading(false);
            return;
        }

        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                setMapSrc(`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15000!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1648061240174!5m2!1sen!2sus`);
                setIsLoading(false);

                fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&zoom=18&addressdetails=1`)
                    .then(response => response.json())
                    .then(data => {
                        setCurrentLocation(data.display_name);
                    })
                    .catch(err => {
                        console.error("Error getting location name:", err);
                        setCurrentLocation(`Location at coordinates: ${latitude.toFixed(4)}, ${longitude.toFixed(4)}`);
                    });
            },
            (error) => {
                setError(`Error getting location: ${error.message}`);
                setIsLoading(false);
            },
            { enableHighAccuracy: true }
        );
    };

    const searchLocation = (e) => {
        e.preventDefault();
        if (!locationInput.trim()) return;

        setIsLoading(true);
        setError(null);
        setCurrentLocation(null);

        const encodedLocation = encodeURIComponent(locationInput);
        fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodedLocation}`)
            .then(response => response.json())
            .then(data => {
                if (data && data.length > 0) {
                    const { lat, lon, display_name } = data[0];
                    setMapSrc(`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15000!2d${lon}!3d${lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1648061240174!5m2!1sen!2sus`);
                    setCurrentLocation(display_name);
                } else {
                    setError('Location not found. Please try again.');
                }
                setIsLoading(false);
            })
            .catch(err => {
                console.error("Error searching location:", err);
                setError('An error occurred while searching for the location.');
                setIsLoading(false);
            });
    };

    return (
        <div className="page map-page">
            <h1>Map</h1>

            <div style={{ marginBottom: '20px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                    <div>
                        <button 
                            onClick={findMyLocation} 
                            disabled={isLoading}
                            style={{
                                padding: '8px 16px',
                                backgroundColor: '#4285f4',
                                color: 'white',
                                border: 'none',
                                borderRadius: '4px',
                                cursor: 'pointer',
                                fontSize: '16px'
                            }}
                        >
                            {isLoading ? 'Finding location...' : 'Find where I am'}
                        </button>
                    </div>

                    <div style={{ maxWidth: '500px' }}>
                        <form onSubmit={searchLocation} style={{ display: 'flex' }}>
                            <input
                                type="text"
                                value={locationInput}
                                onChange={(e) => setLocationInput(e.target.value)}
                                placeholder="Enter a location name"
                                style={{
                                    padding: '8px',
                                    fontSize: '16px',
                                    border: '1px solid #ccc',
                                    borderRadius: '4px 0 0 4px',
                                    width: '250px'
                                }}
                            />
                            <button 
                                type="submit"
                                style={{
                                    padding: '8px 16px',
                                    backgroundColor: '#4285f4',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: '0 4px 4px 0',
                                    cursor: 'pointer',
                                    fontSize: '16px'
                                }}
                            >
                                Search
                            </button>
                        </form>
                    </div>
                </div>

                {error && (
                    <div style={{ color: 'red', marginTop: '10px' }}>
                        {error}
                    </div>
                )}
            </div>

            <div className="map-container" style={{ width: '100%', height: '500px', border: '1px solid #ccc', marginTop: '20px' }}>
                <iframe 
                    src={mapSrc}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Map"
                ></iframe>
            </div>

            {currentLocation && (
                <div style={{ 
                    marginTop: '15px', 
                    padding: '10px',
                    backgroundColor: '#f5f5f5',
                    borderRadius: '4px',
                    fontSize: '16px'
                }}>
                    <strong>Your location:</strong> {currentLocation}
                </div>
            )}
        </div>
    );
}

export default Map;