import React from 'react'


const PopupInfo = ({open, onClose, restaurant}) => {
if(!open) return null;
  return (
    <div  className ='font-sans h-2/3 w-2/3 top-24 left-48 fixed tp bg-white mb-2 border-4 z-50 border-pink-300'>
            <h1 className = 'text-3xl font-bold absolute top-4 left-4'> {restaurant.name}
            </h1>
            <button onClick = {onClose} className="bg-white hover:bg-gray-100 font-bold text-xl text-gray-800 py-2 px-4 border border-gray-400 rounded shadow absolute right-2 top-2">X</button>
    </div>
    
  )

}

export default PopupInfo
