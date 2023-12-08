import React, { useState } from 'react'
import { render, screen, fireEvent, getByTestId} from '@testing-library/react'
import '@testing-library/jest-dom'
import Recommendations from './Recommendations'
import useFetch from '../hooks/useFetch';

jest.mock('../hooks/useFetch', () => ({
    __esModule: true,
    default: jest.fn(),
  }));

describe('Side Filtering',()=>{
      
    it('correctly queries Recommend Cards', async()=>{
    
    const mockData = {
        results: [
            { name: 'Cauliflower Bites',tags: ['low_calorie vegan breakfast'], credits: [{ name: 'Alvin Zhou' }], thumbnail_url: 'https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/341495.jpg' },
            
        ],
    };

    const mockFetch = jest.fn().mockResolvedValue({ data: mockData });  
  
    // Mock the useFetch hook with your mock implementation
    useFetch.mockImplementation(() => ({
      data: mockData,
      isLoading: false,
      error: null,
      refetch: mockFetch,
    }));

    render(<Recommendations />);

    // Simulate checking a checkbox for low calorie
    fireEvent.click(screen.getByLabelText('Low Calorie'));

    // Simulate checking a checkbox for vegan
    fireEvent.click(screen.getByLabelText('Vegan'));

    // Simulate checking a checkbox for breakfast
    fireEvent.click(screen.getByLabelText('Breakfast'));

    // Simulate clicking the "Input Conditions" button
    fireEvent.click(screen.getByText('Input'));

    expect(useFetch).toHaveBeenCalledWith('list', { size: '20', tags: 'low_calorie vegan breakfast' });
      });
      
    })
