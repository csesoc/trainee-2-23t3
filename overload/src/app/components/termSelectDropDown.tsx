"use client"
import React, { useState } from 'react';

type DropdownProps = {
  selectedTerm: number
  handleSelectedTerm: (term: number) => void
}

export default function Dropdown({ selectedTerm, handleSelectedTerm }: DropdownProps) {

  const handleChange = (e: any) => {
    handleSelectedTerm(parseInt(e.target.value))
  };

  return (
    <div className="w-60">
      <select
        className="block w-full px-4 py-2 mt-2 bg-red-500 border border-gray-200 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
        value={selectedTerm}
        onChange={handleChange}
      >
        {/* <option value="0">Select a Term</option> */}
        <option value="1">Term 1</option>
        <option value="2">Term 2</option>
        <option value="3">Term 3</option>
      </select>
    </div>
  );
}
