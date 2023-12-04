import React from 'react';
import RecommendPopup from './RecommendPopup';
var foodImage = require('../assets/testpic.jpg');

// Rescard is a class-based component that will pull class objects from API query
export default class RecommendCard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      openResCard: false
    };
  }
  render() {
    const { name, author, image, nutrition, description, cuisine } = this.props;

    return (
      <div className='font-sans h-40 p-5 relative top-1 bg-gray-100 mb-2 xl:ml-0 lg:ml-1' >
        <div data-testid='recocard' className='absolute rounded-lg left-0 top-0 p-5 h-40 w-full bg-rose-200 border-4 border-gray-200 hover:border-pink-400' onClick={() => this.setState({ openResCard: true })} >
        <div id="foodpic">
          <img src={image} className='object-fill xl:h-3/4 w-2/5 lg:h-3/5 absolute top-2 ml-2 left-0 pr-7 rounded-lg'  alt={foodImage} />
        </div>
        <div id="resname">
          <h1 className='xl:text-xl lg:text-sm top-2 sm:ml-4 font-semibold leading-snug absolute xl:left-36 lg:left-14 xl:pl-0 lg:pl-2'>{name}</h1>
        </div>
        <div id="review" className="xl:text-l lg:text-sm absolute xl:left-40 lg:left-14 xl:pl-0 lg:pl-2 top-24 flex">
          <h1 className="font-semibold leading-snug">Author: </h1>
          <div>
          <p className='font-light leading-snug'> {author !== null ? author : 'n/a'}</p>
          </div>
        </div>
        </div>
        createPortal (
        <RecommendPopup restaurant={{ name: name, author:author, image:image, nutrition:nutrition, description:description, cuisine:cuisine}} open={this.state.openResCard} onClose={() => this.setState({ openResCard: false })} />
        )
      </div>
    );
  }
}
