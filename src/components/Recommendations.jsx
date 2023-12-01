import React, { useState } from 'react'
import RecommendCard from './RecommendCard';
import useFetch from '../hooks/useFetch';

// MiddleSearch is a container for the dynamically generating ResCard items. Has a search bar and will allow for
// scrolling to see more restaurant cards.

const checkboxOptions = [
  { label: 'Low Calorie', value: 'low_calorie', enables: '0' },
  { label: 'Low Fat', value: 'low_fat', enables: '0' },
  { label: 'Vegan', value: 'vegan', enables: '0' },
  { label: 'Lactose', value: 'dairy_free', enables: '0' },
  { label: 'Gluten Free', value: 'gluten_free', enables: '0' },
  { label: 'Breakfast', value: 'breakfast', enables: '0' },
  { label: 'Lunch', value: 'lunch', enables: '0' },
  { label: 'Dinner', value: 'dinner', enables: '0' },
  { label: 'Desserts', value: 'desserts', enables: '0' }

];

//   p-5 bg-slate-900 top-0 left-64 overflow-auto
const Recommendations = () => {
  const [enabledValues, setEnabledValues] = useState(
    Object.fromEntries(checkboxOptions.map((option) => [option.value, option.enables]))
  );
  const generateString = () => {
    const enabledValuesArray = Object.keys(enabledValues).filter((key) => enabledValues[key] === '1');
    console.log(enabledValues);
    return [...enabledValuesArray].join(' ');
  };

  const { data, refetch } = useFetch('list', { size: '20', tags: generateString() })


  const handleCheckboxChange = (value) => {
    setEnabledValues((prevValues) => ({
      ...prevValues,
      [value]: prevValues[value] === '0' ? '1' : '0',
    }));

  };


  const handleInputConditions = () => {
    refetch();
    // Do whatever you want with the generated string
  };


  return (
    <div className='grid grid-cols-4'>

      <div className="bg-white-200 p-4">
        <h2 className="text-l xl:pt-4 lg:pt-0 font-bold mb-4">Restrictions </h2>

        {checkboxOptions.map((option) => (
          <div key={option.value}>
            <label className="text-grey">
              <input
                className="dark:border-white-400/20 xl:mb-12 lg:mb-5 dark:scale-100 transition-all duration-500 ease-in-out dark:hover:scale-110 dark:checked:scale-100 w-4 h-4"
                type="checkbox"
                onChange={() => handleCheckboxChange(option.value)}
                checked={enabledValues[option.value] === '1'}
              />{' '}
              {option.label}
            </label>
          </div>
        ))}

        <button
          className="border rounded-lg p-3 bg-pink-400 text-neutral-100 hover:scale-100"
          onClick={handleInputConditions}
        >
          Input Conditions
        </button>
      </div>
      <div className="col-span-3">
      <p className='text-xl font-bold mb-4 mt-7'>Recommendations:</p>

      <div className="scrollable-container" style={{ maxHeight: '800px', overflowY: 'auto' }}>
        {data.results && data.results
          .filter((item) => item.aspect_ratio === '1:1' && item.credits[0].name !== null)
          .map((result, index) => (
            <RecommendCard
              key={index}
              name={result.name}
              author={result.credits[0].name}
              image={result.thumbnail_url}
              nutrition={result.nutrition}
              description={result.description}
            />
          ))}
      </div>
    </div>

    </div>
  )
}

export default Recommendations
