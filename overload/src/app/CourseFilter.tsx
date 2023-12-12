'use client'
import React from 'react';

type FilterObject = {
  term: string;
  isChecked: boolean;
}

type CourseFilterProps = {
  filterOn: FilterObject[];
  setFilterOn: React.Dispatch<React.SetStateAction<FilterObject[]>>;
}

export const CourseFilter = ({filterOn, setFilterOn}: CourseFilterProps) => {
  const handleCheckboxChange = (index: number) => {
    const updatedFilter = [...filterOn];
    updatedFilter[index].isChecked = !updatedFilter[index].isChecked;
    setFilterOn(updatedFilter);
  };


  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={filterOn[0].isChecked}
          onChange={() => handleCheckboxChange(0)}
        />
        Term 1
      </label>
      <label>
        <input
          type="checkbox"
          checked={filterOn[1].isChecked}
          onChange={() => handleCheckboxChange(1)}
        />
        Term 2
      </label>
      <label>
        <input
          type="checkbox"
          checked={filterOn[2].isChecked}
          onChange={() => handleCheckboxChange(2)}
        />
        Term 3
      </label>
    </div>
  )
}