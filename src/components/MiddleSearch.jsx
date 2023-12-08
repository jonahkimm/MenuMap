import React from 'react';
import Rescard from './Rescard';

const MiddleSearch = ({ newData }) => {
  console.log(newData)
  return (
    <div data-testid = 'midsearch'>
      <p className="text-xl font-bold ml-6 mb-4 mt-7">Results for:</p>

      <div className="scrollable-container" style={{ maxHeight: '865px', overflowY: 'auto' }}>
        {newData.data &&
          newData.data
            .filter((item) => (
              item.name !== null &&
              item.street_address !== null &&
              item.subtypes[0] !== null &&
              item.price_level !== null &&
              item.rating !== null &&
              item.photos_sample[0]?.photo_url !== null &&
              item.phone_number !== null &&
              item.about?.summary !== null &&
              item.website !== null
            ))
            .map((data, index) => (
              <Rescard
                key={index}
                name={data.name}
                location={data.street_address}
                cuisine={data.subtypes[0]}
                price={data.price_level}
                reviews={data.rating}
                image={data.photos_sample[0]?.photo_url}
                phonenum={data.phone_number}
                description={data.about?.summary}
                website={data.website}
              />
            ))}
      </div>
    </div>
  );
};

export default MiddleSearch;
