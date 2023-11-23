import React, {useState} from 'react'
import { render, screen, act } from '@testing-library/react';
import useFetch from '../hooks/useFetch';
import Recommendations from './Recommendations';


jest.mock('../hooks/useFetch', () => ({
    __esModule: true,
    default: jest.fn(),
  }));


  describe('Recommendations.jsx', () => {
    test('renders text when data is fetched successfully', async () => {
      // Mock the response you want to simulate
      const mockData = {
        results: [
            { name: 'Creamy Tuscan Chicken', credits: [{ name: 'Alvin Zhou' }], thumbnail_url: 'https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/341495.jpg' },
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
  
      // Render the MiddleSearch component
      render(<Recommendations />);
  
      // Wait for any asynchronous code (if any) to finish
      await act(async () => {});
  
      // Check that the text is in the document
      const text = screen.getByText('Recommendations:');
      expect(text).toBeTruthy(); // or use any other standard Jest matcher
      });
  });