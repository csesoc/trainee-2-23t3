import React, { useState } from 'react';

export default function Dropdown() {
//   const [selectedOption, setSelectedOption] = useState('');

//   const handleChange = (event: any) => {
//     setSelectedOption(event.target.value);
//   };

  return (
    <div className="w-60">
      <select
        className="block w-full px-4 py-2 mt-2 bg-red-500 border border-gray-200 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
        //value={selectedOption}
        //onChange={handleChange}
      >
        <option value="">Select a Term</option>
        <option value="term1">Term 1</option>
        <option value="term2">Term 2</option>
        <option value="term3">Term 3</option>
      </select>
    </div>
  );
}
