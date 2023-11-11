import CourseOption from "./courseOption";

const courses = [
    { courseCode: 'COMP1511', courseName: 'Programming Fundementals' }, 
    { courseCode: 'COMP1521', courseName: 'Computer Fundementals' }, 
    { courseCode: 'COMP1531', courseName: 'Software Engineering Fundementals' }
]

export const CoursesList = () => {
    const allCourses = courses.map((course, index) => {
        return <CourseOption key={index} courseCode={course.courseCode} courseName={course.courseName} />
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