import React, { useState, useEffect } from 'react';
import Rescard from './Rescard';
import useSearch from '../hooks/useSearch';
import useLocationFetch from '../hooks/useLocationFetch';

const MiddleSearch = () => {
  const location = useLocationFetch();
  var userLatitude, userLongitude;

  if(location.userLocation.loadedin)
  {
  userLatitude = Number(location.userLocation.coordinates.latitude);
  userLongitude = Number(location.userLocation.coordinates.longitude);
  }
  else {
  userLatitude = 49.27855565599999;
  userLongitude = -122.91953997726202;
  }

  const [searchParam, setSearchParam] = useState('');
  const [isVisible, setIsVisible] = useState(true);
  const { data, refetch } = useSearch('search', {
    query: searchParam,
    limit: '20',
    zoom: '13',
    lat: userLatitude,
    lng: userLongitude,
    language: 'en',
    region: 'us',
  });

  const handleKeyPress = (event) => {
    if (searchParam === '' && event.key === 'Enter') {
      return;
    }
    if (event.key === 'Enter') {
      refetch();
    }
  };

  useEffect(() => {
    const handleResize = () => {
      const windowHeight = window.innerHeight;
      const halfWindowHeight = windowHeight/2;

      setIsVisible(windowHeight > halfWindowHeight);
    };

    handleResize(); // Initial check

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (!isVisible) {
    return null; // Render nothing if not visible
  }

  return (
    <div>
      <input
        placeholder="Type to search"
        type="search"
        value={searchParam}
        onChange={(event) => setSearchParam(event.target.value)}
        onKeyPress={handleKeyPress}
        className="border border-gray-300 focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm w-full rounded-lg pt-2 pb-2 pl-10 px-3 py-2 lg:block hidden absolute top-3 max-w-xs"
      />

      <div className="fixed h-5/6 xl:w-2/5 lg:w-1/3 top-20 xl:right-1/4 sm:w-0 overflow-auto">
        <p className="text-xl font-bold ml-6 mb-4 mt-7">Results for:</p>
        {data.data &&
          data.data
            .filter((item) => item.photos_sample[0].photo_url !== null)
            .map((data, index) => (
              <Rescard
                key={index}
                name={data.name}
                location={data.street_address}
                cuisine={data.subtypes[0]}
                price={data.price_level}
                reviews={data.rating}
                image={data.photos_sample[0].photo_url}
                phonenum={data.phone_number}
                description={data.about.summary}
                website={data.website}
              />
            ))}
      </div>
    </div>
  );
};

export default MiddleSearch;
