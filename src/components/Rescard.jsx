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

      <div className='font-sans xl:h-96 lg:h-80 relative top-1 mb-2'>
        
        <div data-testid='rescard' className='absolute xl:h-96 lg:h-80 w-full bg-gray-100 border-4 border-gray-200 hover:border-pink-400' onClick={() => this.setState({ openResCard: true })} ></div>

        <div id="resname">
          <h1 className='xl:text-xl lg:text-lg font-bold absolute left-4 top-3'>{name}</h1>
        </div>

        <div id="location">
          <img src={pinImage} alt="pinImage" className='object-scale-down h-7 w-7 absolute right-32 top-4' />
          <div className="absolute right-5 top-4">{location}</div>
        </div>

        <div id="foodpic">
          <img src={image} className='object-scale-down h-2/5 w-2/5 absolute top-24' alt="Food" />
        </div>

        <div id="price" className="font-bold xl:text-xl lg:text-lg absolute right-10 top-12">{price}</div>

        <div id="cuisine" className="absolute top-10 left-4 xl:text-base lg:text-sm">{cuisine}</div>

        <div id="review" className="absolute xl:bottom-20 lg: bottom-10 left-4 ">
          <h1 className="font-bold">Reviews: </h1>
          <div>
            <p>{reviews}☆</p>
          </div>
        </div>

        createPortal (
        <PopupInfo restaurant={{ name: name, location: location, price: price, cuisine: cuisine, review: reviews, phonenum: phonenum, description: description, website: website, image:image}} open={this.state.openResCard} onClose={() => this.setState({ openResCard: false })} />, document.getElementById("overlay")
        )
      </div>
    );
  }
}
