"use client"
import React, { useState, useEffect } from 'react';

import SelectedCourses from "../components/selectedCourses";
import CoursesList from "../components/coursesList";

export const Home = () => {
    const [selectedCourses, setSelectedCourses] = useState(['']);
    const [selectedTerm, setSelectedTerm] = useState(1);

    // This lets selected term update
    useEffect(() => {
        //console.log('selectedTerm', selectedTerm);
    }, [selectedTerm]); 

    const handleSelectCourse = (courseCode: string) => {
        if (selectedCourses.length >= 3) return;
        if (!selectedCourses.includes(courseCode)) {
            setSelectedCourses([...selectedCourses, courseCode]);
        }
    }

    const handleSelectedTerm = (term: number) => {
        setSelectedTerm(term);
        setSelectedCourses([])
    }

    return (
        <div className="bg-gray-500 h-[100vh]">
            <div className="text-center h-[20vh]">
                top
            </div>
            <div className="flex pr-[8vw] pl-[8vw]">
                <div className="w-[70%]">
                    {/* Content for the 70% width div */}
                    <SelectedCourses selectedCourses={selectedCourses} selectedTerm={selectedTerm} handleSelectedTerm={handleSelectedTerm}/>
                </div>
                <div className="w-[30%] bg-black">
                    {/* Content for the 30% width div */}
                    <CoursesList selectedCourses={selectedCourses} selectedTerm={selectedTerm} handleSelectCourse={handleSelectCourse}/>
                </div>
            </div>
        </div>
    )
}

export default Home;