import React from 'react'
import PopupInfo from './PopupInfo'


var pinImage = require('../assets/mappin.png');

// Rescard is a class based component that will pull class objects from API query
export default class Rescard extends React.Component {

  // Constructor for props
  constructor(props) {
    super(props);
    this.state = {
      openResCard: false
    };
  }

  render() {
    const { name, location, price, cuisine, reviews, image, phonenum, description, website } = this.props;

    return (

      <div className='font-sans xl:h-96 lg:h-80 xl:ml-0 lg:ml-3 relative top-0 mb-2'>

        <div data-testid='rescard' className='absolute xl:h-96 rounded-lg lg:h-80 w-full bg-gray-100 border-4 border-gray-200 hover:border-rose-400' onClick={() => this.setState({ openResCard: true })} >

        <div id="resname">
          <h1 className='xl:text-xl lg:text-lg font-bold absolute left-4 top-3 inline-block'>{name}</h1>
        </div>

        <div id="location">
          <img src={pinImage} alt="pinImage" className='object-scale-down h-7 w-7 relative left-4 top-14 inline-block' />
          <div className="relative inline-block left-6 top-16 overflow-hidden">{location}</div>
        </div>
        <div id="review" className="absolute xl:bottom-20 lg:bottom-2 left-4 ">
          <h1 className="font-bold">Rating: {reviews}☆</h1>
        </div>
        <div className='relative mx-4 top-20 h-3/5 w-1/2 overflow-hidden rounded-xl bg-clip-border text-white shadow-lg bg-gradient-to-r from-blue-500 to-blue-600'>
          <img
            src={image}
            alt='food'
            className='object-cover w-full h-full'
          />
        </div>

        <div id="price" className="font-bold xl:text-xl lg:text-lg absolute right-8 top-4">{price}</div>

        <div id="cuisine" className="absolute top-10 left-4 xl:text-base lg:text-sm">{cuisine}</div>
        </div>
        createPortal (
        <PopupInfo restaurant={{ name: name, location: location, price: price, cuisine: cuisine, review: reviews, phonenum: phonenum, description: description, website: website, image: image }} open={this.state.openResCard} onClose={() => this.setState({ openResCard: false })} />, document.getElementById("overlay")
        )
      </div>
    );
  }
}
