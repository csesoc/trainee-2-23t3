'use client';
import { Course } from '../types';
import CourseOption from './courseOption';

type CoursesListProps = {
  selectedTerm: number;
  selectedCourses: Course[];
  courses: Course[];
  handleSelectCourse: (course: Course) => void;
};

export const CoursesList = async ({
  selectedTerm,
  selectedCourses,
  courses,
  handleSelectCourse,
}: CoursesListProps) => {
  // const res = await fetch('http://localhost:3000/api/home', {
  //   cache: 'no-store',
  // });

  // const courses: Course[] = await res.json();
  const allCourses = courses.map((course, index) => {
    const alreadySelected = selectedCourses.find(
      (c) => c.courseCode === course.courseCode
    );
    // if (parseInt(course.term.split(" ")[1]) !== selectedTerm) return;
    // console.log(course.term.split(" ")[1])
    // console.log(selectedTerm)
    if (alreadySelected) return;
    return (
      <CourseOption
        key={index}
        course={course}
        handleSelectCourse={handleSelectCourse}
      />
    );
  });

  return (
    <div className="justify-center">
      <h2 className="text-white text-center pt-5">Courses List</h2>
      <div>{allCourses}</div>
    </div>
  );
};

export default CoursesList;
