type SelectedCourseProps = {
    courseCode: string
    courseName: string
}

export const SelectedCourse = ({ courseCode, courseName }: SelectedCourseProps) => {
    return (
        <div className="bg-white w-[100%] m-3 rounded-md">
            {courseCode}: {courseName}
        </div>
    )
}

export default SelectedCourse;