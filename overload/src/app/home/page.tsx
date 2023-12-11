"use client"
import SelectedCourses from "../components/selectedCourses";
import CoursesList from "../components/coursesList";
import { useState } from "react";

export const Home = async () => {
    const [selectedTerm, setSelectedTerm] = useState(1);

    const handleSelectTerm = (term: number) => {
        setSelectedTerm(term);
    }


    return (
        <div className="bg-gray-500 h-[100vh]">
            <div className="text-center h-[20vh]">
                top
            </div>
            <div className="flex pr-[8vw] pl-[8vw]">
                <div className="w-[70%]">
                    {/* Content for the 70% width div */}
                    <SelectedCourses handleSelectTerm={handleSelectTerm}/>
                </div>
                <div className="w-[30%] bg-black">
                    {/* Content for the 30% width div */}
                    <CoursesList selectedTerm={selectedTerm}/>
                </div>
            </div>
        </div>
    )
}

export default Home;