import React from 'react'
import { render, screen, fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom'
import RecommendCard from './RecommendCard'
import { Context } from './Context'



jest.mock('../hooks/useFetch', () => ({
    __esModule: true,
    default: jest.fn(),
  }));

describe('ResCard Popup', ()=>{

    //Unit test to check that recommendation popup closes when close button is clicked
    it('closes when close button is clicked', ()=>{
        const addContext = jest.fn();
    
        render(
            <Context.Provider value ={{addContext}}>
        <RecommendCard/>
        </Context.Provider>
        );
        //Simulate click on recommendation card to bring up popup
        const testCard = screen.getByTestId("recocard");
        fireEvent.click(testCard);
        
        //Simulate click on close button
        const popup = screen.queryByTestId('popup');
        const popupbtn = screen.getByTestId('popupClose')
        fireEvent.click(popupbtn)

        //Expect that the popup is no longer on the screen
        expect(popup).not.toBeInTheDocument()
        
    })

    //Integration test to check recommendation to restaurant search functionality
    it('brings value over into Context when restaurant search button is clicked', ()=>{
        
        const setResoSearch = jest.fn();

        render(
        <Context.Provider value ={{setResoSearch}}>
        <RecommendCard          
            name="chicken"
            author="test man"
            image="imagetest.png"
            nutrition="20g protein"
            cuisine="italian"
            description="test description"/>
        </Context.Provider>
        );
        
        //Simulate click on recommendation card to bring up popup
        const testCard = screen.getByTestId("recocard");
        fireEvent.click(testCard);

        //Simulate restaurant search button on popup
        const resSearch = screen.getByTestId('resSearchBtn')
        fireEvent.click(resSearch)
        
        //Check that the value from recommendcard hsa changed the context to appropriate value and
        //changed inquire flag to true
        expect(setResoSearch).toHaveBeenCalledWith({"cuisine": "italian", "inquire": true})
        
    })
    

    })
    
