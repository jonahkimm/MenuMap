import React, { useState, useContext, useEffect } from "react";
import Recommendations from "./Recommendations";
import MiddleSearch from "./MiddleSearch";
import Map from "./Map";
import useSearch from '../hooks/useSearch';
import useLocationFetch from '../hooks/useLocationFetch';
import { Context } from "./Context";

const ContainerGrid = () => {
  const location = useLocationFetch();
  var userLatitude, userLongitude;
  const {resoSearch, setResoSearch} = useContext(Context);

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
  const handleKeyPress = (event) => {
    if (searchParam === '' && event.key === 'Enter') {
      return;
    }
    if (event.key === 'Enter') {
      refetch();

    }
  };

  const { data, refetch } = useSearch('search', {
    query: searchParam,
    limit: '20',
    zoom: '13',
    lat: userLatitude,
    lng: userLongitude,
    language: 'en',
    region: 'us',
  });
/* eslint-disable */
  useEffect(()=>{
    if(resoSearch.cuisine !== '' && resoSearch.inquire)
    {
      if(resoSearch.cuisine === 'north_american')
      resoSearch.cuisine = 'american restaurant';

      setSearchParam(resoSearch.cuisine);
      
      setResoSearch({
        cuisine: '',
        inquire: false
      });
    
    }
    refetch();
  },[resoSearch.inquire])
/* eslint-enable */
  return (
    <div>
      <input
        placeholder="Type to search"
        type="search"
        value={searchParam}
        onChange={(event) => setSearchParam(event.target.value)}
        onKeyPress={handleKeyPress}
        className="border border-gray-300 focus:ring-indigo-600 focus:border-indigo-600 left-1/3 sm:text-sm w-full rounded-lg pt-2 pb-2 pl-10 px-3 py-2 lg:block hidden absolute top-3 max-w-xs"
      />
      <div className="grid grid-cols-3">
        <Recommendations />
        <MiddleSearch newData={data}/>
        <Map newData={data}/>
      </div>
    </div>

  );
};

export default ContainerGrid;
