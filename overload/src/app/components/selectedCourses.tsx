"use client"
import SelectedCourse from "./selectedCourse";
import Dropdown from "./termSelectDropDown";

type SelectedCoursesProps = {
    handleSelectTerm: (term: number) => void;
}

export const SelectedCourses = ({ handleSelectTerm }: SelectedCoursesProps) => {
    return (
        <div className="flex flex-col h-[70%]">
            <div className="flex justify-center pb-8">
                <Dropdown handleSelectTerm={handleSelectTerm}/>
            </div>
            <div className="flex flex-col items-center p-8 bg-black ">
                <SelectedCourse />
                <SelectedCourse />
                <SelectedCourse />
            </div>
        </div>
    )
}

export default SelectedCourses;