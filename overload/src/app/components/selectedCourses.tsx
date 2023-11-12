import SelectedCourse from "./selectedCourse";
import Dropdown from "./termSelectDropDown";

type SelectedCoursesProps = {
    selectedCourses: string[]
    selectedTerm: number
    handleSelectedTerm: (term: number) => void
}
export const SelectedCourses = ({ selectedCourses, selectedTerm, handleSelectedTerm }: SelectedCoursesProps) => {
    const courses = selectedCourses.map((course, index) => {
        return <SelectedCourse key={index} courseCode={course} />
    })

    return (
        <div className="flex flex-col h-full pr-8">
            <div className="flex justify-center pb-8">
                <Dropdown selectedTerm={selectedTerm} handleSelectedTerm={handleSelectedTerm}/>
            </div>
            <div className="flex flex-col items-center p-8 bg-black h-full">
                {courses}
            </div>
        </div>
    )
}

export default SelectedCourses;