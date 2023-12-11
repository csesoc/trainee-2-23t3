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
}

export const CoursesList = async ({ selectedTerm }: CoursesListProps) => {
  //imitate delay
  await new Promise(resolve => setTimeout(resolve, 3000));

  const res = await fetch('http://localhost:3000/api/home', {
    cache: 'no-store',
  });

  const terms: Term[] = await res.json();

  const allCourses = terms.map((term, index) => {
    const course = term.course;
    return (
      <CourseOption
        key={index}
        courseCode={course.courseCode}
        courseName={course.courseName}
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
