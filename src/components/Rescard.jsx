import React from 'react';

var pinImage = require('../assets/mappin.png');
var foodImage = require('../assets/testpic.jpg');

// Rescard is a class-based component that will pull class objects from API query
export default class Rescard extends React.Component {
  render() {
    const { name, location, price, cuisine, reviews } = this.props;

    return (
      <div className='font-sans h-96 p-5 relative top-1 bg-gray-100 mb-2 border-4 border-gray-200 hover:border-pink-400'>
        <div id="resname">
          <h1 className='text-xl font-bold absolute text-blue'>{name}</h1>
        </div>

        <div id="location">
          <img src={pinImage} className='object-scale-down h-7 w-7 absolute right-32' alt="Map Pin" />
          <div className="absolute right-5">{location}</div>
        </div>

        <div id="foodpic">
          <img src={foodImage} className='object-scale-down h-2/5 w-2/5 absolute top-24' alt="Food" />
        </div>

        <div id="price" className="font-bold text-xl absolute right-10 top-12">
          {price}
        </div>

        <div id="cuisine" className="absolute top-10">
          {cuisine}
        </div>

        <div id="review" className="absolute bottom-20">
          <h1 className="font-bold">Reviews: </h1>
          <div>
            <p>{reviews}</p>
          </div>
        </div>
      </div>
    );
  }
}
