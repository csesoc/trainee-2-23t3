import SelectedCourse from "./selectedCourse";
import Dropdown from "./termSelectDropDown";

export const SelectedCourses = () => {
    return (
        <div className="flex flex-col h-[70%]">
            <div className="flex justify-center pb-8">
                <Dropdown />
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