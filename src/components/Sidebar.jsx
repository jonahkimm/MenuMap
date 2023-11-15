import React from 'react';

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
        <div className="bg-emerald-200 p-4 w-64 ">
            <h2 className="text-xl font-bold mb-4 mt-7">Menu Map</h2>
            <h2 className="text-l pt-10 font-bold mb-4">Categories</h2>

            <input type="text" id="categoryInput" placeholder="Search for categories.." />

            <h2 className="text-l pt-10 font-bold mb-4">Restrictions</h2>

            {checkboxOptions.map((option) => (
                <label key={option.value} className="block mb-7">
                    <input type="checkbox" className="mr-2" /> {option.label}
                </label>
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
