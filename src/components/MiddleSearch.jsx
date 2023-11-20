import React from 'react'
import Rescard from './Rescard'
import { useState } from 'react'

// MiddleSearch is a container for the dynamically generating ResCard items. Has a search bar and will allow for
// scrolling to see more restaurant cards.

//Just testing dynamic generation
const restaurants = [
    {name: "Tim Hortons", location: "Vancouver, BC", cuisine: "Canadian", price: "$", reviews: "Alright"},
    {name: "Miku", location: "Vancouver, BC", cuisine: "Japanese", price: "$$$", reviews: "Amazing"},
    {name: "Cactus Club", location: "Vancouver, BC", cuisine: "Multi", price: "$$", reviews: "Not bad"},
    {name: "Tim Hortons", location: "Vancouver, BC", cuisine: "Canadian", price: "$", reviews: "Alright"},
    {name: "Miku", location: "Vancouver, BC", cuisine: "Japanese", price: "$$$", reviews: "Amazing"},
    {name: "Cactus Club", location: "Vancouver, BC", cuisine: "Multi", price: "$$", reviews: "Not bad"},
];

//   p-5 bg-slate-900 top-0 left-64 overflow-auto
const MiddleSearch = () => {
  const [searchParam, setSearchParam] = useState("");
  return (
    <div>
      <input placeholder="Type to search" type="search" onChange = {event => setSearchParam(event.target.value)} className="border border-gray-300 focus:ring-indigo-600
    focus:border-indigo-600 sm:text-sm w-full rounded-lg pt-2 pb-2 pl-10 px-3 py-2 lg:block mr-auto ml-40 hidden absolute top-3 max-w-xs"/>

    <div className = "absolute h-5/6 w-2/5 top-20 left-64 overflow-auto ">
    <p className='text-xl font-bold mb-4 mt-7'>Results for:</p>
    {
        restaurants.filter((restaurants)=> {
          if (searchParam == "")
          {
            return restaurants
          }
          else if (restaurants.name.toLowerCase().includes(searchParam.toLowerCase()))
          {
            return restaurants
          }

        }).map((restaurants) => <Rescard name = {restaurants.name} location = {restaurants.location} cuisine = {restaurants.cuisine}
        price = {restaurants.price} reviews = {restaurants.reviews}/>)
    }
    </div></div>
  )
}

export default MiddleSearch