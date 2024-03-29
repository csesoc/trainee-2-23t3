'use client';
import { useEffect, useState } from 'react';
import ScaleModal from './ScaleModal';
import Image from 'next/image';
import skullSvg from '@/app/resources/skull-head-svgrepo-com.svg';

export default function Page({ params }: { params: { courseCode: string } }) {
  const [courseData, setCourseData] = useState({
    courseCode: '',
    description: '',
    doomness: 0,
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const doomColors: { [key: number]: string } = { 
    0: 'bg-green-500',
    1: 'bg-green-500', 
    2: 'bg-green-500', 
    3: 'bg-yellow-500', 
    4: 'bg-orange-300', 
    5: 'bg-red-500' }

  useEffect(() => {
    const populatePage = async () => {
      const courseCode = params.courseCode;
      const courseRes = await fetch(
        `/api/course-details/${courseCode}`
      ).then((res) => res.json());
      console.log('API Response:', courseRes);
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
    <div className="flex bg-[#221f1f] h-screen text-white px-28 py-20 gap-48">
      <div>
        <div className="text-4xl font-bold mb-10">{courseData.courseCode}</div>
        <div>{courseData.description}</div>
      </div>
      <div className="flex flex-col items-center flex-grow">
        <div className="text-4xl font-bold mb-10">OverLoad Scale</div>
        <div
          className={`w-80 h-80 rounded-full object-cover ${doomColors[courseData.doomness]}`}
        >
          <Image src={skullSvg} alt="skull-logo"></Image>
        </div>
        <button
          className="text-black bg-white rounded-sm px-3 py-2 font-bold text-sm mt-10 hover:opacity-40"
          onClick={() => setIsModalOpen(true)}
        >
          Add Own Scale
        </button>
      </div>
      {isModalOpen && <ScaleModal closeModal={() => setIsModalOpen(false)} courseCode={courseData.courseCode}/>}
    </div>
  );
}
