import React, {useState} from 'react';
import { render, screen, act } from '@testing-library/react';
import EmbededMap from './Map';
import { APIProvider,Map } from '@vis.gl/react-google-maps'; // Import the actual APIProvider

// Mock the useParams hook
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    lat: '37.7749', // replace with your desired latitude
    lng: '-122.4194', // replace with your desired longitude
  }),
}));

describe('Integration Test For Map.jsx', () => {
  test('Test truthness of Latitude and Longitude strings based on the data provided by the search', async () => {
    // Mock data to be passed as a prop to EmbededMap
    const searchString = 'ExamplePlace'
    let mockData = {
      data: [
        {
          latitude: 37.7749,
          longitude: -122.4194,
          name: 'Example Place',
          street_address: '123 Main St',
          subtypes: ['Restaurant'],
          price_level: '$',
          rating: 4.5,
          photos_sample: [{ photo_url: 'https://example.com/photo.jpg' }],
          phone_number: '123-456-7890',
          about: { summary: 'A great place!' },
          website: 'https://example.com',
        },
        // Add more mock data as needed
      ],
    };
    if(searchString != 'ExamplePlace')
    {
        mockData = {}
    }

    // Render the EmbededMap component with mock data
    render(
        <EmbededMap newData={mockData} />,
      );
    // Wait for any asynchronous code (if any) to finish
    await act(async () => {});

    // Assert that the rendered map contains the expected markers
    const markers = screen.getByText('Lat:37.7749');
    expect(markers).toBeTruthy();

    // You can add more assertions based on your component's expected behavior
  });
});