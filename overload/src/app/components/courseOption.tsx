type CourseOptionProps = {
    courseCode: string
    courseName: string
}
export const CourseOption = ({courseCode, courseName}: CourseOptionProps) => {
    return (
        <div className="flex justify-center bg-white m-5">
            {courseCode}: {courseName}
        </div>
    )
}

export default CourseOption;