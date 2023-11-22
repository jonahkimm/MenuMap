import { render } from '@testing-library/react'
import React from 'react'
import PopupInfo from './PopupInfo'
import { createPortal } from 'react-dom';


var pinImage = require('../assets/mappin.png');
var foodImage = require('../assets/testpic.jpg');

const docBody = document.getElementById("overlay");
// Rescard is a class based component that will pull class objects from API query
export default class Rescard extends React.Component{

// Constructor for props
constructor(props) {
    super(props);
   this.state = {
        openResCard: false
    };
}

render(){
    const { name, location, price, cuisine, reviews } = this.props;
    
    return(

        <div className = 'font-sans h-96 relative top-1 mb-2'> 
        
    <div className = 'absolute h-full w-full bg-gray-100 border-4 border-gray-200 hover:border-pink-400'onClick = {() => this.setState({openResCard: true})} ></div>
    {createPortal (
        <PopupInfo restaurant = {{name: name, location: location, price: price, cuisine: cuisine, review: reviews}}open = {this.state.openResCard} onClose = {()=>this.setState({openResCard: false})}/>, docBody
        )}

        <div id ="resname">
            <h1 className = 'text-xl font-bold absolute left-4 top-3'>{name}</h1>
        </div>

        <div id="location">
        <img src = {pinImage} className = 'object-scale-down h-7 w-7 absolute right-32 top-4' alt = "Map Pin Icon"/>
            <div className = "absolute right-5 top-4">{location}</div>
        </div>

        <div id="foodpic">
          <img src={foodImage} className='object-scale-down h-2/5 w-2/5 absolute top-24' alt="Food" />
        </div>
        
        <div id="price" className = "font-bold text-xl absolute right-10 top-12">{price}</div>
        
        <div id="cuisine" className = "absolute top-10 left-4">{cuisine}</div>
        
        <div id="review" className = "absolute bottom-20 left-4">
            <h1 className="font-bold">Reviews: </h1>
            <div>
                <p>{reviews}</p>
            </div>
        </div>
    </div>
    );
  }
}
