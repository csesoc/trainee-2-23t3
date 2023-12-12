"use client"
import CourseOption from './courseOption';

// const courses = [
//     { courseCode: 'COMP1511', courseName: 'Programming Fundementals' },
//     { courseCode: 'COMP1521', courseName: 'Computer Fundementals' },
//     { courseCode: 'COMP1531', courseName: 'Software Engineering Fundementals' }
// ]

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

type CoursesListProps = {
  selectedTerm: number
  selectedCourses: Course[]
  handleSelectCourse: (course: Course) => void;
}

export const CoursesList = async ({ selectedTerm, selectedCourses, handleSelectCourse }: CoursesListProps) => {
  const res = await fetch('http://localhost:3000/api/home', {
    cache: 'no-store',
  });

  const courses: Term[] = await res.json();

  const allCourses = courses.map((course, index) => {
    const courseObj = course.course;
    const alreadySelected = selectedCourses.find((c) => c.courseCode === courseObj.courseCode);
    // if (parseInt(course.term.split(" ")[1]) !== selectedTerm) return;
    // console.log(course.term.split(" ")[1])
    // console.log(selectedTerm)
    if (alreadySelected) return;
    return (
      <CourseOption
        key={index}
        courseCode={courseObj.courseCode}
        courseName={courseObj.courseName}
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
