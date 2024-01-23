'use client';
import { Button } from '@nextui-org/react';
import { Course } from '../types';

type CourseOptionProps = {
  course: Course;
  handleSelectCourse: (course: Course) => void;
};
export const CourseOption = ({
  course,
  handleSelectCourse,
}: CourseOptionProps) => {
  return (
    <div
      className=" flex justify-center bg-white m-5 cursor-pointer rounded-md"
      onClick={() => handleSelectCourse(course)}
    >
      {course.courseCode}: {course.courseName}
    </div>
  );
};

export default CourseOption;
