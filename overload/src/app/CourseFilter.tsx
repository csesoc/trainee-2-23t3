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
  const handleCheckboxChange = () => {
    setFilterOn([{term: 'Term 1', isChecked: !filterOn[0].isChecked}, {term: 'Term 2', isChecked: !filterOn[1].isChecked}, {term: 'Term 3', isChecked: !filterOn[2].isChecked}]);
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={filterOn[0].isChecked}
          onChange={handleCheckboxChange}
        />
        Term 1
      </label>
      <label>
        <input
          type="checkbox"
          checked={filterOn[1].isChecked}
          onChange={handleCheckboxChange}
        />
        Term 2
      </label>
      <label>
        <input
          type="checkbox"
          checked={filterOn[3].isChecked}
          onChange={handleCheckboxChange}
        />
        Term 3
      </label>
    </div>
  )
}