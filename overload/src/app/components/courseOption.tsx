"use client"
import { Button } from "@nextui-org/react";
import { Course } from "../home/page";

type CourseOptionProps = {
    courseCode: string
    courseName: string
    handleSelectCourse: (course: Course) => void;
}
export const CourseOption = ({courseCode, courseName, handleSelectCourse}: CourseOptionProps) => {
    return (
        <div className=" flex justify-center bg-white m-5" onClick={() => handleSelectCourse({courseCode, courseName})}>
            {courseCode}: {courseName}
        </div>
    )
}

export default CourseOption;