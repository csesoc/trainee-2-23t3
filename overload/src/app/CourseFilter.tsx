'use client'
import React from 'react';

type FilterObject = {
  term: string;
  isChecked: boolean;
}

type CourseFilterProps = {
  filterOn: FilterObject;
  setFilterOn: React.Dispatch<React.SetStateAction<FilterObject[]>>;
}

export const CourseFilter = ({filterOn, setFilterOn}: CourseFilterProps) => {
  const handleCheckboxChange = () => {
    setFilterOn(prev => !prev);
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={filterOn.isChecked}
          onChange={handleCheckboxChange}
        />
        Term 1
      </label>
      <label>
        <input
          type="checkbox"
          checked={filterOn.isChecked}
          onChange={handleCheckboxChange}
        />
        Term 2
      </label>
      <label>
        <input
          type="checkbox"
          checked={filterOn.isChecked}
          onChange={handleCheckboxChange}
        />
        Term 3
      </label>
    </div>
  )
}