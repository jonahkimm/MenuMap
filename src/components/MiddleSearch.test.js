import React from 'react';
import MiddleSearch from './MiddleSearch';

// Mock Rescard component
jest.mock('./Rescard', () => 'Rescard');

describe('MiddleSearch Component', () => {
  it('renders correctly with data', () => {
    const newData = {
      data: [
        {
          name: 'Restaurant 1',
          street_address: '123 Main St',
          subtypes: ['Cuisine1'],
          price_level: '$$$',
          rating: 4.5,
          photos_sample: [{ photo_url: 'image_url_1' }],
          phone_number: '123-456-7890',
          about: { summary: 'About restaurant 1' },
          website: 'http://restaurant1.com',
        },
        // Add more sample data as needed
      ],
    };

    const component = <MiddleSearch newData={newData} />;
    expect(component).toMatchSnapshot();
  });

  it('renders correctly with empty data', () => {
    const newData = { data: [] };

    const component = <MiddleSearch newData={newData} />;
    expect(component).toMatchSnapshot();
  });

  // Add more tests as needed
});
