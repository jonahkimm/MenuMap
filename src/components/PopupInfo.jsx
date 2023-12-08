import React from 'react'

var pinImage = require('../assets/mappin.png');

const PopupInfo = ({open, onClose, restaurant}) => {


if(!open) return null;
  return (
    <div data-testid = 'popup'>
      
      {/* Overlay to darken the background */}
      <div className="fixed inset-0 bg-black opacity-50 z-40"></div>
      
      {/* Popup */}
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="absolute w-2/3 h-2/3 rounded-xl bg-white text-gray-700 shadow-md">

        <div className = "font-sans">
        <h5 className = "pl-6 pt-6 pr-6 inline-block text-4xl font-bold leading-snug tracking-normal text-blue-gray-900 antialiased"> {restaurant.name}</h5>
        <h6 className = "inline-block font-thin text-4xl leading-snug tracking-normal text-blue-gray-900 antialiased ">{restaurant.review}☆</h6>
        <img src={pinImage} alt="pinImage" className='object-scale-down h-9 w-9 absolute top-8 right-40' />
        <h6 className = "absolute font-thin text-2xl leading-snug tracking-normal text-blue-gray-900 antialiased top-8 right-0 overflow-hidden">{restaurant.location}</h6>
        </div>

        <p className = "pl-6 block font-sans text-xl font-bold leading-snug tracking-normal text-blue-gray-900 antialiased"> {restaurant.cuisine}</p>
        <p className = "pl-6 block font-sans text-base font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased"> {restaurant.description}</p>
        <a href= {restaurant.website} className = "pl-6 block font-sans text-base font-bold leading-snug tracking-normal text-pink-700 antialiased">Restaurant Website</a>
        <p className = "pl-6 block font-sans text-base font-bold leading-snug tracking-normal text-blue-gray-900 antialiased">{restaurant.phonenum}</p>
        
        <img
            src={restaurant.image}
            className="relative left-1/4 h-1/2 w-1/2 align-middle overflow-hidden rounded-xl  text-white shadow-lg shadow-gray"
            alt={restaurant.name}
        />

        <button
          onClick={onClose}
          data-ripple-light="true"
          type="button"
          className="container relative top-5 select-none flex flex-col items-center rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-gray-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          data-testid = 'popupClose'
          >
          Close
        </button>
    
          </div>
        </div>
      </div>
   
  )

}

export default PopupInfo
