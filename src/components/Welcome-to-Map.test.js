import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import Welcome from './Welcome';
import Map from './Map';

jest.mock('react-places-autocomplete', () => ({
  geocodeByAddress: jest.fn(),
  getLatLng: jest.fn(),
  __esModule: true, // Add this line to fix the issue
  default: jest.fn(),
}));

// Mock the useNavigate hook
const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

// Mock Map component
jest.mock('@vis.gl/react-google-maps', () => ({
    Map: jest.fn(({ children }) => <div>{children}</div>),
    AdvancedMarker: jest.fn(({ children }) => <div>{children}</div>),
    Pin: jest.fn(() => <div>MockedPinComponent</div>),
    InfoWindow: jest.fn(({ children }) => <div>{children}</div>),
    APIProvider: ({ children }) => <div>{children}</div>,
  }));

  describe('Integration Test for Welcome and Map components', () => {
    test('Integration test for Welcome and Map and route val', async () => {
      // Mock the geocodeByAddress and getLatLng functions
      const dummyObject = {
        name: 'Dummy Restaurant',
        street_address: '123 Main Street',
        subtypes: ['dummyCuisine'],
        price_level: 2,
        rating: 4.5,
        photos_sample: [{ photo_url: 'https://dummy.com/photo.jpg' }],
        phone_number: '123-456-7890',
        about: { summary: 'A dummy restaurant serving delicious food.' },
        website: 'https://dummyrestaurant.com',
        lat:40,
        lng:-75
      };
      render(
        <React.Fragment>
          <Welcome />
          <Map newData={{ data: [dummyObject] }} />
        </React.Fragment>
      );
      // Simulate user interaction in Welcome page
      const button = screen.getByText('Button');
  
      // Wrap in act to handle asynchronous code
      await act(async () => {
        fireEvent.click(button);
      });
  
      expect(mockNavigate).toHaveBeenCalledWith('/app/49.27855565599999/-122.91953997726202');
    });
  });