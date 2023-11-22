import React from 'react'
import Rescard from './Rescard'
import { useState } from 'react'
import useFetch from '../hooks/useFetch';

// MiddleSearch is a container for the dynamically generating ResCard items. Has a search bar and will allow for
// scrolling to see more restaurant cards.

//   p-5 bg-slate-900 top-0 left-64 overflow-auto
const MiddleSearch = () => {
  const [searchParam, setSearchParam] = useState('');
  const { data, refetch } = useFetch('auto-complete', { prefix: searchParam });  

  const handleKeyPress = (event) => {
    if(searchParam === '' && event.key==='Enter')
    {
      return;
    }
    if (event.key === 'Enter') {
      // Trigger API request with the updated searchParam
      refetch();
    }
  };


  return (
    <div>
      <input
        placeholder="Type to search"
        type="search"
        value={searchParam}
        onChange={(event) => setSearchParam(event.target.value)}
        onKeyPress={handleKeyPress}
        className="border border-gray-300 focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm w-full rounded-lg pt-2 pb-2 pl-10 px-3 py-2 lg:block mr-auto ml-40 hidden absolute top-3 max-w-xs"
      />

      <div className="absolute h-5/6 w-2/5 top-20 left-64 overflow-auto">
        <p className="text-xl font-bold mb-4 mt-7">Results for:</p>
        {data.results &&
          data.results.map((result, index) => (
            <Rescard
              key={index}
              name={result.search_value}
              location={result.search_value}
              cuisine={result.search_value}
              price={result.search_value}
              reviews={result.search_value}
            />
          ))}
      </div>
    </div>
  );
};

export default MiddleSearch