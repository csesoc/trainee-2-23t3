'use client';
import React from 'react';
import CourseCard from './CourseCard';
import { CourseFilter } from '../CourseFilter';

type Course = {
  courseCode: string;
  courseName: string;
};

type Term = {
  id: number;
  courseId: string;
  term: string;
  course: Course;
};

type FilterObject = {
  term: string;
  isChecked: boolean;
}

type SearchBarProps = {
  setFilterOn: React.Dispatch<React.SetStateAction<FilterObject[]>>;
  filterOn: FilterObject[];
};


export const SearchBar = ({filterOn, setFilterOn}: SearchBarProps) => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [dataList, setDataList] = React.useState([]);

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

  let filteredData: Term[] = dataList.filter((item: Term) =>
    item.course.courseName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.course.courseCode.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (filterOn[0].isChecked) {
    filteredData = dataList.filter((item: Term) =>
    item.term === '1'
  );
  }
  if (filterOn[1].isChecked) {
    filteredData = dataList.filter((item: Term) =>
    item.term === '2'
  );
  }
  if (filterOn[2].isChecked) {
    filteredData = dataList.filter((item: Term) =>
    item.term === '3'
  );
  }

  const courseCards = filteredData.map((item, idx) => {
    return (
      <div key={idx}>
        <CourseCard
          courseCode={item.course.courseCode}
          courseName={item.course.courseName}
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