import React, { useState, useContext, useEffect } from "react";
import Recommendations from "./Recommendations";
import MiddleSearch from "./MiddleSearch";
import Map from "./Map";
import useSearch from '../hooks/useSearch';
import { Context } from "./Context";
import { useParams  } from 'react-router-dom';

const ContainerGrid = () => {
  const {resoSearch, setResoSearch} = useContext(Context);

  const [searchParam, setSearchParam] = useState('');
  const handleKeyPress = (event) => {
    if (searchParam === '' && event.key === 'Enter') {
      return;
    }
    if (event.key === 'Enter') {
      refetch();

    }
  };

  const { lat, lng } = useParams();
  const [coordinates, setCoordinates] = useState({
    lat: parseFloat(lat),
    lng: parseFloat(lng),
  });

  useEffect(() => {
    // This effect will run whenever lat or lng changes
    setCoordinates({
      lat: parseFloat(lat),
      lng: parseFloat(lng),
    });
  }, [lat, lng]);

  const { data, refetch } = useSearch('search', {
    query: searchParam,
    limit: '20',
    zoom: '13',
    lat: coordinates.lat,
    lng: coordinates.lng,
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
        placeholder="Type a food type or cusine"
        type="search"
        value={searchParam}
        onChange={(event) => setSearchParam(event.target.value)}
        onKeyPress={handleKeyPress}
        className="border border-gray-300 focus:ring-rose-600 focus:border-rose-500 left-1/3 sm:text-sm w-full rounded-lg pt-2 pb-2 pl-10 px-3 py-2 lg:block hidden absolute top-3 max-w-xs"
      />

      <div className="grid grid-cols-3">
        <Recommendations />
        <MiddleSearch newData={data}/>
        <Map newData={data}
             cords = {coordinates}/>
      </div>
    </div>

  );
};

export default ContainerGrid;
