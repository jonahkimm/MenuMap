import React, { useState, useEffect } from 'react';
import Rescard from './Rescard';

const MiddleSearch = ({newData}) => {
  return (
    <div className='grid grid-col-2'>
      <p className="text-xl font-bold ml-6 mb-4 mt-7">Results for:</p>

      <div className="scrollable-container" style={{ maxHeight: '800px', overflowY: 'auto' }}>
        {newData.data &&
          newData.data
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
