'use client';
import { Course } from '../home/page';
import SelectedCourse from './selectedCourse';
import Dropdown from './termSelectDropDown';

type SelectedCoursesProps = {
  selectedCourses: Course[];
  handleSelectTerm: (term: number) => void;
  handleDeselectCourse: (courseCode: string) => void;
};

export const SelectedCourses = ({
  selectedCourses,
  handleSelectTerm,
  handleDeselectCourse,
}: SelectedCoursesProps) => {
  const courses = selectedCourses.map((course) => (
    <SelectedCourse
      key={course.courseCode}
      courseCode={course.courseCode}
      courseName={course.courseName}
      handleDeselectCourse={handleDeselectCourse}
    />
  ));

  return (
    <div className="flex flex-col h-[70%]">
      <div className="flex justify-center pb-8">
        <Dropdown handleSelectTerm={handleSelectTerm} />
      </div>
      <div className="flex flex-col items-center p-8 bg-black ">{courses}</div>
    </div>
  );
};

export default SelectedCourses;
