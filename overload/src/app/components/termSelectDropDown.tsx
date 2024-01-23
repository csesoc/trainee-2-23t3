"use client"
import React, { useEffect, useState } from 'react';

type DropdownProps = {
  handleSelectTerm: (term: number) => void;
}

export default function Dropdown({ handleSelectTerm }: DropdownProps) {
  const [selectedOption, setSelectedOption] = useState(1);

  useEffect(() => {
    console.log('dropdown')
    console.log(selectedOption);
  })

  const handleChange = (event: any) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="w-60">
      {/* <select
        className="block w-full px-4 py-2 mt-2 bg-red-500 border border-gray-200 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
        defaultValue={1}
        // value={selectedOption}
        onChange={() =>handleSelectTerm(selectedOption)}
      >
        <option value="">Select a Term</option>
        <option value="term1">Term 1</option>
        <option value="term2">Term 2</option>
        <option value="term3">Term 3</option>
      </select> */}
    </div>
  );
}
