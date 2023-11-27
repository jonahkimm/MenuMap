import React, { useState } from "react";

const checkboxOptions = [
  { label: "Low Carb", value: "low_carb", enables: "0" },
  { label: "Vegetarian/Vegan", value: "vegetarian", enables: "0" },
  { label: "Vegan", value: "vegan", enables: "0" },
  { label: "Lactose Intolerant", value: "lactose_intolerant", enables: "0" },
  { label: "Keto", value: "keto", enables: "0" },
  { label: "No Nuts", value: "no_nut", enables: "0" },
];

const Sidebar = () => {
  const [searchParam, setSearchParam] = useState("");
  const [pushVal, setPushVal] = useState([]);
  const [enabledValues, setEnabledValues] = useState(
    Object.fromEntries(
      checkboxOptions.map((option) => [option.value, option.enables])
    )
  );

  const handlePush = (newValue) => {
    setPushVal((prevValues) => [...prevValues, newValue]);
  };

  const handleKeyPress = (event) => {
    if (searchParam === "" && event.key === "Enter") {
      return;
    }
    if (event.key === "Enter") {
      handlePush(searchParam);
    }
  };

  const handleCheckboxChange = (value) => {
    setEnabledValues((prevValues) => ({
      ...prevValues,
      [value]: prevValues[value] === "0" ? "1" : "0",
    }));
  };

  const generateString = () => {
    const enabledValuesArray = Object.keys(enabledValues).filter(
      (key) => enabledValues[key] === "1"
    );
    return [...pushVal, ...enabledValuesArray].join(" ");
  };

  const handleInputConditions = () => {
    const generatedString = generateString();
    console.log("Generated String:", generatedString);
    // Do whatever you want with the generated string
  };

  return (
    <div className="bg-white-200 p-4 xl:w-64 lg:w-32">
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
              checked={enabledValues[option.value] === "1"}
            />{" "}
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
  );
};

export default Sidebar;
