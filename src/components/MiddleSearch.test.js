import React from 'react';
import { render, screen, act } from '@testing-library/react';
import MiddleSearch from './MiddleSearch';
import useFetch from '../hooks/useFetch';
import useSearch from '../hooks/useSearch';

jest.mock('../hooks/useFetch', () => ({
  __esModule: true,
  default: jest.fn(),
}));

jest.mock('../hooks/useSearch', () => ({
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

    const mockData1 = {
        data: [
            {
                business_id: "0x87b7848a51170617:0xaffe597ee2f783aa",
                google_id: "0x87b7848a51170617:0xaffe597ee2f783aa",
                place_id: "ChIJFwYXUYqEt4cRqoP34n5Z_q8",
                google_mid: "/g/1trc5gsd",
                phone_number: "+16202514460",
                name: "Sonic Drive-In",
                latitude: 37.0333465,
                longitude: -95.6278263,
                full_address: "Sonic Drive-In, 802 W 11th St, Coffeyville, KS 67337",
                review_count: 729,
                rating: 4,
                timezone: "America/Chicago",
                working_hours: {
                  Wednesday: ["6 AM–11 PM"],
                  Thursday: ["Closed"],
                  Friday: ["6 AM–12 AM"],
                  Saturday: ["6 AM–12 AM"],
                  Sunday: ["8 AM–11 PM"],
                  Monday: ["6 AM–11 PM"],
                  Tuesday: ["6 AM–11 PM"],
                },
                website: "https://www.sonicdrivein.com/locations/us/ks/coffeyville/802-w--11th-street/store-1721",
                verified: true,
                place_link: "https://www.google.com/maps/place/data=!3m1!4b1!4m2!3m1!1s0x87b7848a51170617:0xaffe597ee2f783aa",
                cid: "12681672002230518698",
                reviews_link: "https://search.google.com/local/reviews?placeid=ChIJFwYXUYqEt4cRqoP34n5Z_q8&q=chicken&authuser=0&hl=en&gl=US",
                owner_id: "100481266489526979226",
                owner_link: "https://maps.google.com/maps/contrib/100481266489526979226",
                owner_name: "Sonic Drive-In",
                booking_link: null,
                reservations_link: null,
                business_status: "OPEN",
                type: "Fast food restaurant",
                subtypes: ["Fast food restaurant"],
                photos_sample: [
                  {
                    photo_id: "AF1QipOraaknWY8_QjJE8Q574NsqGFNNxaWdD1AzsKm1",
                    photo_url: "https://lh5.googleusercontent.com/p/AF1QipOraaknWY8_QjJE8Q574NsqGFNNxaWdD1AzsKm1",
                    photo_url_large: "https://lh5.googleusercontent.com/p/AF1QipOraaknWY8_QjJE8Q574NsqGFNNxaWdD1AzsKm1=w800-h900-k-no",
                    video_thumbnail_url: null,
                    latitude: 37.0330333,
                    longitude: -95.6278313,
                    type: "photo",
                    photo_datetime_utc: "2018-03-01T00:00:00.000Z",
                    photo_timestamp: 1519862400,
                  },
                ],
                reviews_per_rating: {
                  "1": 43,
                  "2": 36,
                  "3": 113,
                  "4": 187,
                  "5": 350,
                },
                photo_count: 76,
                about: {
                  summary: "Fast-food burger & fries joint with an old-school feel, including retro drive-in service.",
                  details: {
                    Service_options: {
                      Curbside_pickup: true,
                      Delivery: true,
                      Drive_through: true,
                      Takeout: true,
                    },
                    Highlights: {
                      Great_coffee: true,
                    },
                    Popular_for: {
                      Breakfast: true,
                      Lunch: true,
                      Dinner: true,
                      Solo_dining: true,
                    },
                    Accessibility: {
                      Wheelchair_accessible_parking_lot: true,
                      Wheelchair_accessible_seating: false,
                    },
                    Offerings: {
                      Coffee: true,
                      Late_night_food: true,
                      Quick_bite: true,
                    },
                    Dining_options: {
                      Breakfast: true,
                      Lunch: true,
                      Dinner: true,
                      Dessert: true,
                    },
                    Amenities: {
                      Dogs_allowed: true,
                      Restroom: false,
                    },
                    Atmosphere: {
                      Casual: true,
                    },
                    Payments: {
                      Debit_cards: true,
                      Credit_cards: true,
                    },
                    Children: {
                      Good_for_kids: true,
                      Kids_menu: true,
                    },
                    Parking: {
                      Parking: true,
                    },
                  },
                },
                address: "802 W 11th St, Coffeyville, KS 67337",
                order_link: "https://food.google.com/chooseprovider?restaurantId=%2Fg%2F1trc5gsd&g2lbs=ANTchaOEw4fBKvc8Mc8wuHDZ2L4JVRwmvSLLdyl9sG_V_5SwY9J5PU5ObpnIWq6_R9eOKlzCCm6zXt52KZ4Pcrr4TNRdoQWZWOPtOS-ZGYZIqcxcWDBaf2DsWNmjhH69QDQ4CYjou9zY&hl=en-US&gl=us&fo_m=MfohQo559jFvMUOzJVpjPL1YMfZ3bInYwBDuMfaXTPp5KXh-&gei=885eZfKmENWp5NoPjc-1mAQ&ei=885eZfKmENWp5NoPjc-1mAQ&fo_s=OA%2CSOE&opi=79508299",
                price_level: "$",
                district: null,
                street_address: "802 W 11th St",
                city: "Coffeyville",
                zipcode: "67337",
                state: "Kansas",
                country: "US",
              }
        ],
      };
    const mockFetch = jest.fn().mockResolvedValue({ data: mockData });
    const mockFetch1 = jest.fn().mockResolvedValue({ data: mockData1 });


    // Mock the useFetch hook with your mock implementation
    useFetch.mockImplementation(() => ({
      data: mockData,
      isLoading: false,
      error: null,
      refetch: mockFetch,
    }));

        // Mock the useFetch hook with your mock implementation
        useSearch.mockImplementation(() => ({
            data: mockData1,
            isLoading: false,
            error: null,
            refetch: mockFetch1,
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