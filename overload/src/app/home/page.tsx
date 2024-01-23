'use client';
import SelectedCourses from '../components/selectedCourses';
import CoursesList from '../components/coursesList';
import { useEffect, useState } from 'react';
import DoomBar from '../components/DoomBar';
import { Course } from '../types';

export default function Page() {
  const [selectedTerm, setSelectedTerm] = useState<number>(1);
  const [selectedCourses, setSelectedCourses] = useState<Course[]>([]);
  const [allCourses, setAllCourses] = useState<Course[]>([]);
  const [doomness, setDoomness] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/home', {
          cache: 'no-store',
        });

        if (!res.ok) {
          // Check if the response status is not ok (e.g., 404 Not Found, 500 Internal Server Error)
          throw new Error(`Failed to fetch data. Status: ${res.status}`);
        }

        const courses = await res.json();
        setAllCourses(courses);
      } catch (error) {
        // Handle the error here
        console.error('Error fetching data:', error);
      }
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

  return (
    <div className="bg-[#221f1f] min-h-screen">
      <div className="text-center h-[20vh]"></div>
      <div className="flex pr-[8vw] pl-[8vw] gap-5">
        <div className="w-[70%] flex flex-col font-sans">
          <SelectedCourses
            selectedCourses={selectedCourses}
            handleSelectTerm={handleSelectTerm}
            handleDeselectCourse={handleDeselectCourse}
          />
          <DoomBar doomness={doomness} />
        </div>
        <div className="w-[30%] bg-black font-sans">
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
}
