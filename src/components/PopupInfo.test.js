import React from 'react'
import { render, screen, fireEvent} from '@testing-library/react'
import PopupInfo from './PopupInfo'
import '@testing-library/jest-dom'
import Rescard from './Rescard'

describe('ResCard Popup', ()=>{

    //Unit test to check that ResCard popup does not appear prior to Rescard being clicked
    it('shows no popups intially', ()=>{
        render(<Rescard/>);
        //Render Rescard, popup should not be in the document
        const popup = screen.queryByTestId('popup');
        expect(popup).not.toBeInTheDocument()
    })

    //Unit test to see that the popup does show up when Rescard is clicked
    it('opens PopupInfo when clicked', ()=>{
        render(<Rescard/>);

        //When Rescard is clicked a popup will appear on the screen
        const testCard = screen.getByTestId("rescard");
        fireEvent.click(testCard);
        
        expect(screen.getByTestId('popup')).toBeInTheDocument();
    })

    //Unit test to check that rescard popup closes when close button is clicked
    it('closes when close button is clicked', ()=>{
        render(<Rescard/>);

        //Simulate click action on restaurant card
        const testCard = screen.getByTestId("rescard");
        fireEvent.click(testCard);

        //Simulate click action on close button of popup
        const popup = screen.queryByTestId('popup');
        const popupbtn = screen.getByTestId('popupClose')
        fireEvent.click(popupbtn)

        //Expect that the popup is no longer on the screen
        expect(popup).not.toBeInTheDocument()
        
    })
  
    
    })


