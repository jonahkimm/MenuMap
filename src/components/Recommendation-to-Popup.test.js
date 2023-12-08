import React from 'react'
import { render, screen, fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom'
import RecommendCard from './RecommendCard'
import { Context } from './Context'

describe('RecommendCard', ()=>{

    //Integration test to check that RecommendCard popup renders and has the correct data
    //fed from RecommendCard
  it('closes when close button is clicked', ()=>{
   const addContext = jest.fn();

    render(
      <Context.Provider value ={{addContext}}>
      <RecommendCard          
      name="chicken test dish"
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
    const popupTest = screen.getByTestId('popup');

    expect(popupTest).toHaveTextContent('chicken test dish');
  })
})