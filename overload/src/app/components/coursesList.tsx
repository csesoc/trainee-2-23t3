"use client"
import CourseOption from "./courseOption";

const courses = [
    { courseCode: 'COMP1511', courseName: 'Programming Fundementals', termsOffered: [1, 2, 3]}, 
    { courseCode: 'COMP1521', courseName: 'Computer Fundementals' , termsOffered: [1, 2, 3]}, 
    { courseCode: 'COMP1531', courseName: 'Software Engineering Fundementals' , termsOffered: [1, 2, 3]},
    { courseCode: 'COMP2521', courseName: 'Data Structures and Algorithms' , termsOffered: [1, 2, 3]}, 
    { courseCode: 'COMP3121', courseName: 'Algorithms and Programming Techniques' , termsOffered: [1, 2, 3]}, 
    { courseCode: 'COMP2041', courseName: 'Software Construction' , termsOffered: [2]}, 
    { courseCode: 'COMP3821', courseName: 'Extended Algorithms and Programming Techniques' , termsOffered: [1]}, 
]

type CoursesListProps = {
    selectedCourses: string[]
    handleSelectCourse: (courseCode: string) => void
    selectedTerm: number
}

export const CoursesList = ({ selectedCourses, selectedTerm, handleSelectCourse }: CoursesListProps) => {
    const allCourses = courses.map((course, index) => {
        if (!course.termsOffered.includes(selectedTerm)) return;
        return <CourseOption key={index} courseCode={course.courseCode} courseName={course.courseName} onSelect={handleSelectCourse}/>
    })

    return (
        <div className="justify-center">
            <h2 className="text-white text-center pt-5">
                Courses List
            </h2>
            <div>
                {allCourses}
            </div>
        </div>
    )
}

export default CoursesList;