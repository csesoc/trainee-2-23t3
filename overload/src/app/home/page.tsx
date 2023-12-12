'use client';
import SelectedCourses from '../components/selectedCourses';
import CoursesList from '../components/coursesList';
import { useEffect, useState } from 'react';
import Navbar from '../components/NavBar';
import DoomBar from '../components/DoomBar';

export type Course = {
  courseCode: string;
  courseName: string;
  doomness: number;
};

export const Home = () => {
  const [selectedTerm, setSelectedTerm] = useState<number>(1);
  const [selectedCourses, setSelectedCourses] = useState<Course[]>([]);
  const [allCourses, setAllCourses] = useState<Course[]>([]);
  const [doomness, setDoomness] = useState(1);

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

  useEffect(() => {
    let result = 0;
    selectedCourses.forEach((course) => {
      result += course.doomness;
    });
    if (result) {
      setDoomness(Math.floor(result / selectedCourses.length));
    } else {
      setDoomness(1);
    }
  }, [selectedCourses]);

  const handleSelectTerm = (term: number) => {
    setSelectedTerm(term);
  };

  const handleSelectCourse = (course: Course) => {
    const currentlySelectedCourses = [...selectedCourses];
    if (currentlySelectedCourses.length > 2) return;
    currentlySelectedCourses.push(course);
    setSelectedCourses(currentlySelectedCourses);
  };

  const handleDeselectCourse = (courseCode: string) => {
    const newSelectedCourses = selectedCourses.filter(
      (c) => c.courseCode !== courseCode
    );
    setSelectedCourses(newSelectedCourses);
  };

  //   const calculateDoomness = () => {
  //     let result = 0;
  //     selectedCourses.forEach((course) => {
  //       result += course.doomness;
  //     });
  //     setDoomness(result);
  //   };

  return (
    <div className="bg-[#221f1f] min-h-screen">
      <div className="text-center h-[20vh]"></div>
      <div className="flex pr-[8vw] pl-[8vw] gap-5">
        <div className="w-[70%]">
          <SelectedCourses
            selectedCourses={selectedCourses}
            handleSelectTerm={handleSelectTerm}
            handleDeselectCourse={handleDeselectCourse}
          />
          <DoomBar doomness={doomness} />
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
