'use client';
import React from 'react';
import CourseCard from './CourseCard';

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

export const SearchBar = () => {
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

  const filteredData: Course[] = dataList.filter((item: Course) =>
    item.courseName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.courseCode.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
      <ul className="flex flex-wrap justify-center">{courseCards}</ul>
    </div>
  );
};
