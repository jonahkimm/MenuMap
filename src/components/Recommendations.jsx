import React, {useState} from 'react'
import RecommendCard from './RecommendCard';
import useFetch from '../hooks/useFetch';

// MiddleSearch is a container for the dynamically generating ResCard items. Has a search bar and will allow for
// scrolling to see more restaurant cards.

const checkboxOptions = [
  { label: 'Low Carb', value: 'low_carb', enables: '0' },
  { label: 'Vegetarian/Vegan', value: 'vegetarian', enables: '0' },
  { label: 'Vegan', value: 'vegan', enables: '0' },
  { label: 'Lactose Intolerant', value: 'lactose_intolerant', enables: '0' },
  { label: 'Keto', value: 'keto', enables: '0' },
  { label: 'No Nuts', value: 'no_nut', enables: '0' },
];

//   p-5 bg-slate-900 top-0 left-64 overflow-auto
const Recommendations = () => {
  const [searchParam, setSearchParam] = useState('');
  const [pushVal, setPushVal] = useState([]);
  const [enabledValues, setEnabledValues] = useState(
    Object.fromEntries(checkboxOptions.map((option) => [option.value, option.enables]))
  );
  const generateString = () => {
    const enabledValuesArray = Object.keys(enabledValues).filter((key) => enabledValues[key] === '1');
    console.log(enabledValues);
    return [...pushVal, ...enabledValuesArray].join(' ');
  };

  const {data,refetch} = useFetch('list',{size:'20', tags:generateString()})

  const handlePush = (newValue) => {
    setPushVal((prevValues) => [...prevValues, newValue]);
  };

  const handleKeyPress = (event) => {
    if (searchParam === '' && event.key === 'Enter') {
      return;
    }
    if (event.key === 'Enter') {
      handlePush(searchParam);
    }
  };

  const handleCheckboxChange = (value) => {
    setEnabledValues((prevValues) => ({
      ...prevValues,
      [value]: prevValues[value] === '0' ? '1' : '0',
    }));
    
  };


  const handleInputConditions = () => {
    const generatedString = generateString();
    console.log('Generated String:', generatedString);
    refetch();
    // Do whatever you want with the generated string
  };

  console.log(data)

  return (
    <div>
    <div className = "absolute h-5/6 w-1/5 top-20 left-64 overflow-auto ">
    <p className='text-xl font-bold mb-4 mt-7'>Recommendations:</p>
    {data.results &&
          data.results.map((result, index) => (
            <RecommendCard
              key={index}
              name={result.name}
              author={result.credits[0].name}
              image={result.thumbnail_url}
            />
          ))}
    </div>

<div className="bg-white-200 p-4 w-64 ">
      <h2 className="text-l pt-10 font-bold mb-4">Categories</h2>

      <div className="flex items-center">
        <label htmlFor="simple-search" className="sr-only">
          Search
        </label>
        <input
          placeholder="Type to search"
          type="search"
          value={searchParam}
          onChange={(event) => setSearchParam(event.target.value)}
          onKeyPress={handleKeyPress}
          className="border rounded-lg p-2 w-40"
        />
      </div>

      <h2 className="text-l pt-10 font-bold mb-4">Restrictions</h2>

      {checkboxOptions.map((option) => (
        <div key={option.value}>
          <label className="text-grey">
            <input
              className="dark:border-white-400/20 mb-12 dark:scale-100 transition-all duration-500 ease-in-out dark:hover:scale-110 dark:checked:scale-100 w-4 h-4"
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
    </div>
  )
}

export default Recommendations