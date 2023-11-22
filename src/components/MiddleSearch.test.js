import React from 'react';
import { render, screen, act } from '@testing-library/react';
import MiddleSearch from './MiddleSearch';
import useFetch from '../hooks/useFetch';

jest.mock('../hooks/useFetch', () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe('MiddleSearch', () => {
  test('renders text when data is fetched successfully', async () => {
    // Mock the response you want to simulate
    const mockData = {
      results: [
        {display:"chicken noodle soup", search_value:"chicken noodle soup",type:"ingredient"}
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
    render(<MiddleSearch />);

    // Wait for any asynchronous code (if any) to finish
    await act(async () => {});

    // Check that the text is in the document
    const text = screen.getByText('Results for:');
    expect(text).toBeTruthy(); // or use any other standard Jest matcher
    });
});