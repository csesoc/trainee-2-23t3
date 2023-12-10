'use client';
import { useEffect, useState } from 'react';
import ScaleModal from './ScaleModal';
import Navbar from '@/app/components/NavBar';

export default function Page({ params }: { params: { courseCode: string } }) {
  const [courseData, setCourseData] = useState({
    courseCode: '',
    description: '',
    doomness: 0,
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const populatePage = async () => {
      const courseCode = params.courseCode;
      const courseRes = await fetch(
        `http://localhost:3000/api/course-details/${courseCode}`
      ).then((res) => res.json());
      console.log(courseRes)

      setCourseData((prev) => ({
        ...prev,
        courseCode: courseRes.courseCode,
        description: courseRes.description,
        doomness: courseRes.doomness,
      }));
    };
    populatePage();
  }, [params.courseCode]);

  return (

    <div className="flex bg-black h-screen text-white px-28 py-20 justify-evenly gap-72">
      <div>
        <div className="text-4xl font-bold mb-10">{courseData.courseCode}</div>
        <div>{courseData.description}</div>
      </div>
      <div className="flex flex-col items-center">
        <div className="text-4xl font-bold mb-10">OverLoad Scale</div>
        <div
          className={`w-80 h-80 rounded-full ${
            courseData.doomness == 1 ? 'bg-green-500' : 'bg-red-500'
          }`}
        ></div>
        <button
          className="text-black bg-white rounded-sm px-3 py-2 font-bold text-sm mt-10 hover:opacity-40"
          onClick={() => setIsModalOpen(true)}
        >
          Add Own Scale
        </button>
      </div>
      {isModalOpen && <ScaleModal closeModal={() => setIsModalOpen(false)} />}
    </div>
  );
}
