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
    <div className="ml-20 mt-5 flex bg-white w-1/4 justify-center rounded-md">
      <label className="space-x-10 ml-3 mr-3">
        <input
          type="checkbox"
          checked={filterOn['Term 1']}
          onChange={() => handleCheckboxChange('Term 1')}
          className="mr-2 ml-2"
        />
        Term 1
      </label>
      <label className="space-x-10 ml-3 mr-3">
        <input
          type="checkbox"
          checked={filterOn['Term 2']}
          onChange={() => handleCheckboxChange('Term 2')}
          className="mr-2 ml-2"
        />
        Term 2
      </label>
      <label className="-x-10 ml-3 mr-3">
        <input
          type="checkbox"
          checked={filterOn['Term 3']}
          onChange={() => handleCheckboxChange('Term 3')}
          className="mr-2 ml-2"
        />
        Term 3
      </label>
    </div>
  )
}