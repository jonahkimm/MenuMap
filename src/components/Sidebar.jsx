import React from 'react';
import Search from '../assets/search.png'
const checkboxOptions = [
    { label: 'Low Carb', value: 'low-carb' },
    { label: 'Vegetarian/Vegan', value: 'vegetarian-vegan' },
    { label: 'Lactose Intolerance', value: 'lactose-intolerance' },
];

// Define an array for the select options
const selectOptions = [
    { label: 'None', value: 'none' },
    { label: 'Kosher', value: 'kosher' },
    { label: 'Halal', value: 'halal' },
    { label: 'Paleo', value: 'paleo' },
    { label: 'Keto/Seafood', value: 'keto-seafood' },
];

const Sidebar = () => {
    return (
        <div className="bg-white-200 p-4 w-64 ">
            <h2 className="text-l pt-10 font-bold mb-4">Categories</h2>


    <form class="flex items-center">   
    <label for="simple-search" class="sr-only">Search</label>
    <div class="relative w-full">
        <input type="text" id="simple-search" class="bg-white-50 border border-gray-300 text-white-200 text-sm rounded-lg focus:ring-pink-500 focus:border-pink-500 block w-full p-2.5  dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-pink-500 dark:focus:border-pink-500 text-left" placeholder="Search Categories..."/>
    </div>
    <button type="submit" class="p-2.5 ms-2 text-sm font-medium text-white bg-pink-700 rounded-lg border border-pink-700 hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-pink-300 dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800">
        <img src={Search} alt="Search Icon" class="w-5 h-4" />
        <span class="sr-only">Search</span>
    </button>

</form>


            <h2 className="text-l pt-10 font-bold mb-4">Restrictions</h2>

            {checkboxOptions.map((option) => (
                <div>
                <label key={option.value} class="text-grey">
                  <input class="dark:border-white-400/20 mb-12 dark:scale-100 transition-all duration-500 ease-in-out dark:hover:scale-110 dark:checked:scale-100 w-4 h-4" type="checkbox"/> {option.label}
                </label>
              </div>
            ))}

            <label className="block mb-2">
                <span>Specific Diet:</span>
                <select className="ml-2 mb-10">
                    {selectOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </label>

        </div>
    );
};

export default Sidebar;
