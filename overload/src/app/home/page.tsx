"use client"
import SelectedCourses from "../components/selectedCourses";
import CoursesList from "../components/coursesList";
import { useState } from "react";
import Navbar from "../components/NavBar";

export type Course = {
    courseCode: string
    courseName: string
}

export const Home = async () => {
    const [selectedTerm, setSelectedTerm] = useState<number>(1);
    const [selectedCourses, setSelectedCourses] = useState<Course[]>([
        // {
        //     courseCode: "COMP1511",
        //     courseName: "Programming fundementalss"
        // }
    ])

    const handleSelectTerm = (term: number) => {
        setSelectedTerm(term);
    }

    const handleSelectCourse = (course: Course) => {
        const currentlySelectedCourses = [...selectedCourses]
        if (currentlySelectedCourses.length > 2) return;
        currentlySelectedCourses.push(course);
        setSelectedCourses(currentlySelectedCourses);
    }

    return (
        <div className="bg-gray-500 h-[100vh]">
            {/* <div className="text-center h-[20vh]">
                hello
            </div> */}
            <Navbar />
            <div className="text-center h-[20vh]">
                
            </div>
            <div className="flex pr-[8vw] pl-[8vw]">
                <div className="w-[70%]">
                    {/* Content for the 70% width div */}
                    <SelectedCourses selectedCourses={selectedCourses} handleSelectTerm={handleSelectTerm}/>
                </div>
                <div className="w-[30%] bg-black">
                    {/* Content for the 30% width div */}
                    {/* <CoursesList selectedTerm={selectedTerm} selectedCourses={selectedCourses} handleSelectCourse={handleSelectCourse}/> */}
                </div>
            </div>
        </div>
    )
}

export default Home;