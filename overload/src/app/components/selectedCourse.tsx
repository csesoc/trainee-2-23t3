type SelectedCourseProps = {
    courseCode: string
}

export const SelectedCourse = ({ courseCode }: SelectedCourseProps) => {
    return (
        <div className="bg-white w-[100%] m-3 rounded-md">
            {courseCode}
        </div>
    )
}

export default SelectedCourse;