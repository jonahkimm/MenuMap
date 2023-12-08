import React from 'react'
const PopupInfo = ({open, onClose, restaurant}) => {


if(!open) return null;
  return (
    <div data-testid = 'popup'>
      
      {/*restaurant.name,review,location,cusine,description,phonenum/*}
      {/* Overlay to darken the background */}
      <div className="fixed inset-0 bg-black opacity-50 z-40"></div>
      
      {/* Popup */}
      <div className="fixed inset-0 flex items-center justify-center z-50 xl:scale-100 lg:scale-75">
        <div className="absolute w-1/4 h-2/3 rounded-xl bg-white text-gray-700 shadow-md">

        <div className = "font-sans">
        <h5 className = "pl-6 pt-6 pr-2 inline-block text-4xl font-bold leading-snug tracking-normal text-blue-gray-900 antialiased"> {restaurant.name}</h5>
        <h6 className = "pl-6 font-thin text-2xl leading-snug tracking-normal text-blue-gray-900 antialiased ">☆ {restaurant.review}</h6>
        <div>
        <h6 className = "pl-6 mb-6">{restaurant.location}</h6>
        </div>

        </div>

        <p className = "pl-6 block font-sans text-xl font-bold leading-snug tracking-normal text-blue-gray-900 antialiased"> {restaurant.cuisine}</p>
        <p className = "pl-6 block font-sans text-base font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased"> {restaurant.description}</p>
        <a href= {restaurant.website} className = "pl-6 block font-sans text-base font-bold leading-snug tracking-normal text-pink-700 antialiased">Restaurant Website</a>
        <p className = "pl-6 block font-sans text-base font-bold leading-snug tracking-normal text-blue-gray-900 antialiased">{restaurant.phonenum}</p>
        
        <div className='relative mx-4 top-5 h-2/5  overflow-hidden rounded-xl bg-clip-border text-white shadow-lg bg-gradient-to-r from-blue-500 to-blue-600'>
          <img
            src={restaurant.image}
            alt='food'
            className='object-cover w-full h-full'
          />
        </div>
        <button
          onClick={onClose}
          data-ripple-light="true"
          type="button"
          className="container mx-auto relative top-5 select-none flex flex-col items-center mt-10 rounded-lg bg-rose-400 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-gray-500/20 transition-all hover:shadow-lg hover:shadow-rose-500/40 focus:opacity-[0.85] w-20 focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
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
