import React from 'react'
import Rescard from './Rescard'

// MiddleSearch is a container for the dynamically generating ResCard items. Has a search bar and will allow for
// scrolling to see more restaurant cards.

//Just testing dynamic generation
const restaurants = [
    {name: "Tim Hortons", location: "Vancouver, BC", cuisine: "Canadian", price: "$", reviews: "Alright"},
    {name: "Miku", location: "Vancouver, BC", cuisine: "Japanese", price: "$$$", reviews: "Amazing"},
    {name: "Cactus Club", location: "Vancouver, BC", cuisine: "Multi", price: "$$", reviews: "Not bad"},
];
const MiddleSearch = () => {
  return (
    <div className = "absolute h-screen w-2/5 p-5 bg-slate-900 top-0 left-64 overflow-auto">

    <div>
    <input type="text" className = "border-none h-full w-fit" id="restaurantSearch" placeholder="Search for a Restaurant" />
    </div>
    {
        restaurants.map((restaurants) => <Rescard name = {restaurants.name} location = {restaurants.location} cuisine = {restaurants.cuisine}
        price = {restaurants.price} reviews = {restaurants.reviews}/>)
    }
    </div>
  )
}

export default MiddleSearch