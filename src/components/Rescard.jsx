import React from 'react'

//Function to create restaurnt cards that will appear with query from user input filters.
//Each card will contain the restaurant name, price, reviews, pictures and location
var pinImage = require('../assets/mappin.png')
var foodImage = require('../assets/testpic.jpg')

// Will need to pass values into this function from API such as img source, restaruant name, ..etc
const Rescard = () => {
  return (
    <div className = 'font-sans h-96 w-2/5 p-5 relative top-40 left-96 bg-gray-200'>
        
        <div id ="resname">
            <h1 className = 'text-xl font-bold absolute text-blue'>Restaurant Name</h1>
        </div>

        <div id="location">
        <img src = {pinImage} className = 'object-scale-down h-7 w-7 absolute right-32'/>
            <div className = "absolute right-5">Vancouver, BC</div>
        </div>

        <div id="foodpic">
        <img src = {foodImage} className = 'object-scale-down h-2/5 w-2/5 absolute top-24'/>
        </div>

        <div id="price" className = "font-bold text-xl absolute right-10 top-12">$$$</div>

        <div id="cuisine" className = "absolute top-10">American</div>

        <div id="review" className = "absolute bottom-20">
            <h1 className="font-bold">Reviews: </h1>
            <div>
                <p>Cool I guess</p>
            </div>
        </div>


    
    </div>
  )
}

export default Rescard