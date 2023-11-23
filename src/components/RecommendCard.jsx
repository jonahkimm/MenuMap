import React from 'react';
var foodImage = require('../assets/testpic.jpg');

// Rescard is a class-based component that will pull class objects from API query
export default class RecommendCard extends React.Component {
  render() {
    const { name, author, image } = this.props;

    return (
      <div className='font-sans h-40 p-5 relative top-1 bg-gray-100 mb-2 border-4 border-gray-200 hover:border-pink-400'>
        <div id="resname">
          <h1 className='text-xl font-bold absolute text-blue left-32'>{name}</h1>
        </div>

        <div id="foodpic">
          <img src={image} className='object-scale-down h-3/4 w-2/5 absolute top-2 left-0 pr-7'  alt={foodImage} />
        </div>

        <div id="review" className="absolute left-32 top-20 flex">
          <h1 className="font-bold">Author: </h1>
          <div>
            <p>{author}</p>
          </div>
        </div>
      </div>
    );
  }
}
