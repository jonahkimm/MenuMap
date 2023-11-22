import { render } from '@testing-library/react'
import React from 'react'
import PopupInfo from './PopupInfo'
import { createPortal } from 'react-dom';


var pinImage = require('../assets/mappin.png')
var foodImage = require('../assets/testpic.jpg')

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

    return(
   
        <div>
            
        <div className = 'h-12 w-12 absolute bg-black'onClick = {() => this.setState({openResCard: true})}></div>
        {createPortal (
        <PopupInfo open = {this.state.openResCard} onClose = {()=>this.setState({openResCard: false})}/>, docBody
        )};
        
    <div className = 'font-sans h-96 p-5 relative top-1 bg-gray-100 mb-2 border-4 border-gray-200 hover:border-pink-400' >
        

        <div id ="resname">
            <h1 className = 'text-xl font-bold absolute'>{this.props.name}</h1>
        </div>
        
        <div id="location">
        <img src = {pinImage} className = 'object-scale-down h-7 w-7 absolute right-32' alt = "Map Pin Icon"/>
            <div className = "absolute right-5">{this.props.location}</div>
        </div>
        
        <div id="foodpic">
        <img src = {foodImage} className = 'object-scale-down h-2/5 w-2/5 absolute top-24' alt = "food image"/>
        </div>
        
        <div id="price" className = "font-bold text-xl absolute right-10 top-12">{this.props.price}</div>
        
        <div id="cuisine" className = "absolute top-10">{this.props.cuisine}</div>
        
        <div id="review" className = "absolute bottom-20">
            <h1 className="font-bold">Reviews: </h1>
            <div>
                <p>{this.props.reviews}</p>
            </div>
        </div>
        
    </div>
    </div>
    );
   } 
}

