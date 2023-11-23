import React from 'react'
import { render, screen, fireEvent} from '@testing-library/react'
import Rescard from './Rescard'
import '@testing-library/jest-dom'

describe('ResCard', ()=>{
    it('shows no popups intially', ()=>{
        render(<Rescard/>);
        const popup = screen.queryByTestId('popup');
        expect(popup).not.toBeInTheDocument()
    })

    it('opens PopupInfo when clicked', ()=>{
        
        const { getByText, queryByText } = render(<Rescard/>);
        const testCard = screen.getByTestId("rescard");
        fireEvent.click(testCard);
        
        expect(screen.getByTestId('popup')).toBeInTheDocument();
    })
})



