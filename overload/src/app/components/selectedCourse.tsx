import { Course } from '../home/page';

type SelectedCourseProps = {
  courseCode: string;
  courseName: string;
  handleDeselectCourse: (courseCode: string) => void;
};

export const SelectedCourse = ({
  courseCode,
  courseName,
  handleDeselectCourse,
}: SelectedCourseProps) => {
  return (
    <div
      className="bg-white w-[100%] m-3 p-1 rounded-md cursor-pointer"
      onClick={() => handleDeselectCourse(courseCode)}
    >
      {courseCode}: {courseName}
    </div>
  );
};

export default SelectedCourse;
