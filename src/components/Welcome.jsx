import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng
} from 'react-places-autocomplete'
import React, { useState } from 'react'
import { useNavigate  } from 'react-router-dom';
import MappinPng from '../assets/mappin.png'
import testpic from '../assets/testpic.jpg'

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
        <div className='grid grid-cols-2'>
            <div className='text-neutral-800 relative overflow-hidden flex flex-col justify-center h-screen items-center content-center bg-rose-100 rounded-lg bg-neutral-50 p-3 px-6'>
            <img className='w-20' src={MappinPng} alt=''/>
            <p className='text-xl font-bold pb-20'>MenuMap</p>
            <p>Enter Your Address...</p>
            <PlacesAutocomplete
                value={address}
                onChange={setAddress}
                onSelect={handleSelect}
            >
                {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                    <div className='left-20'> 
                        <input
                            {...getInputProps({
                                placeholder: 'Search Places',
                                className: 'bg-transparent ring-0 outline-none border border-neutral-600 font-thin text-neutral-900 placeholder-rose-700 text-sm rounded-lg focus:ring-violet-500 placeholder-opacity-60 focus:placeholder-rose-700 focus:border-rose-300 block w-80 p-2.5 checked:bg-emerald-500',
                            })}
                        />
                        <div className="fixed w-80 h-20 font-thin overflow-auto">
                            {loading && <div>Loading...</div>}
                            {suggestions.map(suggestion => {
                                const className = suggestion.active
                                    ? 'suggestion-item--active'
                                    : 'suggestion-item';
                                // inline style for demonstration purpose
                                const style = suggestion.active
                                    ? { backgroundColor: '#f7949b', cursor: 'pointer' }
                                    : { backgroundColor: '#FFE4E6', cursor: 'pointer' };
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
            <div className='pt-20'>
                <button className='pl-3 pr-3 rounded border-neutral-500 border hover:bg-rose-300 hover:text-neutral hover:text-neutral-100 ' onClick={handleClick}>Enter</button>   

            </div>
            </div>
            <img src={testpic} alt=''/>
        </div>

    )
}

export default Welcome
