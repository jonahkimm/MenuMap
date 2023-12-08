import React from 'react'
import { render, screen} from '@testing-library/react'
import Rescard from './Rescard'
import '@testing-library/jest-dom'

describe('Rescard', ()=>{

//Unit test to see that ResCard renders properly when given data
it('displays properly with Data', ()=>{
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

        const testCard = screen.getByTestId("rescard")
        expect(testCard).toBeInTheDocument()
})

})
