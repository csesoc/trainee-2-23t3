'use client';
import React, { useMemo } from 'react';
import CourseCard from './CourseCard';
import { CourseFilter } from '../CourseFilter';
import { FilterObject } from '../course-rating/page';

type Course = {
  courseCode: string;
  courseName: string;
  termsOffered: Term[]
};

type Term = {
  id: number;
  courseId: string;
  term: string;
  course: Course;
};

type SearchBarProps = {
  setFilterOn: React.Dispatch<React.SetStateAction<FilterObject>>;
  filterOn: FilterObject;
};


export const SearchBar = ({ filterOn, setFilterOn }: SearchBarProps) => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [dataList, setDataList] = React.useState<Course[]>([]);

  React.useEffect(() => {
    // Fetch the term list
    fetch('http://localhost:3000/api/home', { cache: 'no-store' }) // Fetch terms
      .then((response) => response.json()) // turn data from promise into a json file so we can use data
      .then((data) => {
        setDataList(data);
      }) // set data using setData hook
      .catch((error) => {
        // if promise not fulfilled
        console.log('Error:' + `${error.message}`);
      });
  }, []);

  const filteredData = useMemo(() => {
    let result = dataList;

    // Filter by search
    if (searchTerm) {
      result = result.filter(item =>
        item.courseName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.courseCode.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by checkboxes
    Object.keys(filterOn).forEach(termKey => {
      if (filterOn[termKey]) {
        result = result.filter(item =>
          item.termsOffered.some(term => term.term === termKey)
        );
      }
    });

    return result;
  }, [dataList, searchTerm, filterOn]);

  const courseCards = filteredData.map((item, idx) => {
    return (
      <div key={idx}>
        <CourseCard
          courseCode={item.courseCode}
          courseName={item.courseName}
        />
      </div>
    );
  });

  return (
    <div className="justify-center">
      <div className="px-20">
        <input
          className="px-3 w-full bg-white py-0.1 text-0.5xl border border-black rounded-md text-left placeholder-left"
          type="text"
          placeholder="search for a course..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <CourseFilter
        setFilterOn={setFilterOn}
        filterOn={filterOn}
      />
      <ul className="flex flex-wrap justify-center">{courseCards}</ul>
    </div>
  );
};

// pull filter
// for each thingy