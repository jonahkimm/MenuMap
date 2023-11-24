import React from 'react'
import Rescard from './Rescard'
import { useState } from 'react'
import useSearch from '../hooks/useSearch';
// MiddleSearch is a container for the dynamically generating ResCard items. Has a search bar and will allow for
// scrolling to see more restaurant cards.

const MiddleSearch = () => {
  const [searchParam, setSearchParam] = useState('');

  const {data,refetch} = useSearch('search',
  {
    query: searchParam,
    limit: '20',
    zoom: '13',
    language: 'en',
    region: 'us'
  },); 

  const handleKeyPress = (event) => {
    if(searchParam === '' && event.key==='Enter')
    {
      return;
    }
    if (event.key === 'Enter') {
      refetch();
    }
  };
  
  console.log(data.data)
  return (
    <div>
      <input
        placeholder="Type to search"
        type="search"
        value={searchParam}
        onChange={(event) => setSearchParam(event.target.value)}
        onKeyPress={handleKeyPress}
        className="border border-gray-300 focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm w-full rounded-lg pt-2 pb-2 pl-10 px-3 py-2 lg:block mr-auto ml-64 hidden absolute top-3 max-w-xs"
      />

      <div className="absolute h-5/6 w-2/5 top-20 left-1/3 overflow-auto">
        <p className="text-xl font-bold mb-4 mt-7">Results for:</p>
        {data.data &&
          data.data.filter((item) => item.photos_sample[0].photo_url !== null)&&
          data.data.map((data, index) => (
            <Rescard
              key={index}
              name={data.name}
              location={data.street_address}
              cuisine={data.subtypes[0]}
              price={data.price_level}
              reviews={data.rating}
              image={data.photos_sample[0].photo_url}
            />
          ))}
      </div>
    </div>
  );
};

export default MiddleSearch