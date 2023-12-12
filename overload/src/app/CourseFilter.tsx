'use client'
import React from 'react';
import { FilterObject } from './course-rating/page';

type CourseFilterProps = {
  filterOn: FilterObject;
  setFilterOn: React.Dispatch<React.SetStateAction<FilterObject>>;
}

export const CourseFilter = ({ filterOn, setFilterOn }: CourseFilterProps) => {
  const handleCheckboxChange = (target: string) => {
    setFilterOn(prev => ({ ...prev, [target]: !prev[target] }))
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={filterOn['Term 1']}
          onChange={() => handleCheckboxChange('Term 1')}
        />
        Term 1
      </label>
      <label>
        <input
          type="checkbox"
          checked={filterOn['Term 2']}
          onChange={() => handleCheckboxChange('Term 2')}
        />
        Term 2
      </label>
      <label>
        <input
          type="checkbox"
          checked={filterOn['Term 3']}
          onChange={() => handleCheckboxChange('Term 3')}
        />
        Term 3
      </label>
    </div>
  )
}