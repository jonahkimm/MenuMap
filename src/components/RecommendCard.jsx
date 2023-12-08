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
      <div className='font-sans h-40 p-5 relative top-1 bg-gray-100 mb-2 xl:ml-0 lg:ml-1'>
        <div
          data-testid='recocard'
          className='absolute rounded-lg left-0 top-0 p-5 h-40 w-full border-4 border-gray-200 hover:border-rose-400 grid grid-cols-3'
          onClick={() => this.setState({ openResCard: true })}
        >
          {/* Image column */}
          <div id="foodpic" className="col-span-1">
            <img
              src={image}
              className='object-fill h-3/4 w-2/5 absolute top-2 ml-2 left-0 pr-7 rounded-lg'
              alt={foodImage}
            />
          </div>

          {/* Name column */}
          <div id="resname" className='col-span-2 flex items-center'>
            <h1 className='xl:text-xl lg:text-sm font-semibold leading-snug xl:ml-4 lg:ml-2'>{name}</h1>
          </div>
        </div>

        {/* Portal */}
        createPortal(
          <RecommendPopup
            restaurant={{
              name: name,
              author: author,
              image: image,
              nutrition: nutrition,
              description: description,
              cuisine: cuisine
            }}
            open={this.state.openResCard}
            onClose={() => this.setState({ openResCard: false })}
          />,
        )
      </div>
    );
  }
}
