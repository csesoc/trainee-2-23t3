import { Course } from "../home/page";

type SelectedCourseProps = {
  courseCode: string;
  courseName: string;
  handleDeselectCourse: (course: Course) => void;
};

export const SelectedCourse = ({
  courseCode,
  courseName,
  handleDeselectCourse,
}: SelectedCourseProps) => {
  return (
    <div
      className="bg-white w-[100%] m-3 rounded-md cursor-pointer"
      onClick={() => handleDeselectCourse({ courseCode, courseName })}
    >
      {courseCode}: {courseName}
    </div>
  );
};

export default SelectedCourse;
