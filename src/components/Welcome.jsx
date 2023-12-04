import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng
} from 'react-places-autocomplete'
import React, { useState } from 'react'
import { useNavigate  } from 'react-router-dom';

const Welcome = () => {
    const [coordinates, setCoordinates] = useState({
        lat: 49.27855565599999,
        lng: -122.91953997726202
    }
    )
    const navigate = useNavigate();

    const handleClick = () => {
      // Navigate to the '/' route
      navigate(`/app/${coordinates.lat}/${coordinates.lng}`);
    };
    const [address, setAddress] = useState("")

    const handleSelect = async value => {
        const result = await geocodeByAddress(value)
        const ll = await getLatLng(result[0])
        setAddress(value)
        setCoordinates(ll)
    }
    return (
        <div>
            <p>lat: {coordinates.lat}</p>
            <p>lng: {coordinates.lng}</p>
            <p>address: {address}</p>
            <PlacesAutocomplete
                value={address}
                onChange={setAddress}
                onSelect={handleSelect}
            >
                {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                    <div>
                        <input
                            {...getInputProps({
                                placeholder: 'Search Places',
                                className: 'location-search-input',
                            })}
                        />
                        <div className="autocomplete-dropdown-container">
                            {loading && <div>Loading...</div>}
                            {suggestions.map(suggestion => {
                                const className = suggestion.active
                                    ? 'suggestion-item--active'
                                    : 'suggestion-item';
                                // inline style for demonstration purpose
                                const style = suggestion.active
                                    ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                                    : { backgroundColor: '#ffffff', cursor: 'pointer' };
                                return (
                                    <div
                                        {...getSuggestionItemProps(suggestion, {
                                            className,
                                            style,
                                        })}
                                    >
                                        <span>{suggestion.description}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}
            </PlacesAutocomplete>
            <button onClick={handleClick}>Button</button>        
        </div>

    )
}

export default Welcome
