import SelectedCourses from "../components/selectedCourses";
import CoursesList from "../components/coursesList";

export const Home = () => {
    return (
        <div className="bg-gray-500 h-[100vh]">
            <div className="text-center h-[20vh]">
                top
            </div>
            <div className="flex pr-[8vw] pl-[8vw]">
                <div className="w-[70%]">
                    {/* Content for the 70% width div */}
                    <SelectedCourses />
                </div>
                <div className="w-[30%] bg-black">
                    {/* Content for the 30% width div */}
                    <CoursesList />
                </div>
            </div>
        </div>
    )
}

export default Home;