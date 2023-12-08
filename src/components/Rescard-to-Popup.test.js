import React from 'react'
import { render, screen, fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom'
import Rescard from './Rescard'

describe('Rescard popup', ()=>{

        //Integration test to check that Rescard popup renders and has the correct data
        //fed from Rescard
        it('renders with data from Rescard when it is clicked', ()=>{
            render(<Rescard
                name="test"
                location="test avenue"
                cuisine="italian"
                price="$$$"
                reviews="4.4"
                image="testphoto.png"
                phonenum="123-833-4324"
                description="Fantastic test restaurant"
                website="testwebsite.test"/>)
    
            //When Rescard is clicked a popup will appear on the screen
            const testCard = screen.getByTestId("rescard");
            fireEvent.click(testCard);
            const popupTest = screen.getByTestId('popup');

            //Expect value to be in popup
            expect(popupTest).toHaveTextContent('test avenue');
        })
})