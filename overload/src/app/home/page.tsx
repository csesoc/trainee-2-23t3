'use client';
import SelectedCourses from '../components/selectedCourses';
import CoursesList from '../components/coursesList';
import { useEffect, useState } from 'react';
import Navbar from '../components/NavBar';

export type Course = {
  courseCode: string;
  courseName: string;
};

export const Home = () => {
  const [selectedTerm, setSelectedTerm] = useState<number>(1);
  const [selectedCourses, setSelectedCourses] = useState<Course[]>([]);
  const [allCourses, setAllCourses] = useState<Course[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('http://localhost:3000/api/home', {
        cache: 'no-store',
      });
      const courses = await res.json();
      setAllCourses(courses);
    };
    fetchData();
  }, []);

  const handleSelectTerm = (term: number) => {
    setSelectedTerm(term);
  };

  const handleSelectCourse = (course: Course) => {
    const currentlySelectedCourses = [...selectedCourses];
    if (currentlySelectedCourses.length > 2) return;
    currentlySelectedCourses.push(course);
    setSelectedCourses(currentlySelectedCourses);
  };

  return (
    <div className="bg-[#221f1f] h-[100vh]">
      <div className="text-center h-[20vh]"></div>
      <div className="flex pr-[8vw] pl-[8vw] gap-5">
        <div className="w-[70%]">
          <SelectedCourses
            selectedCourses={selectedCourses}
            handleSelectTerm={handleSelectTerm}
          />
        </div>
        <div className="w-[30%] bg-black">
          <CoursesList
            selectedTerm={selectedTerm}
            selectedCourses={selectedCourses}
            courses={allCourses}
            handleSelectCourse={handleSelectCourse}
          />
        </div>
      </div>
      <div className="text-center">{/* you are doomed */}</div>
    </div>
  );
};

export default Home;
