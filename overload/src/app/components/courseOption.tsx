"use client"
type CourseOptionProps = {
    courseCode: string
    courseName: string
    onSelect: (courseCode: string) => void
}
export const CourseOption = ({courseCode, courseName, onSelect}: CourseOptionProps) => {
    const handleClick = () => {
        onSelect(courseCode);
    }

    return (
        <div className="flex justify-center bg-white m-5 cursor-pointer" onClick={handleClick}>
            {courseCode}: {courseName}
        </div>
    )
}

export default CourseOption;