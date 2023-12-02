import { useRouter } from 'next/router';

export default async function Page({
  params,
}: {
  params: { courseCode: string };
}) {
  const courseCode = params.courseCode;

  const courseData = await fetch(
    `http://localhost:3000/api/course-details/comp1511${courseCode}`
  ).then((res) => res.json());
  console.log(courseData);

  return (
    <div className="flex bg-black h-screen text-white px-28 py-20 justify-evenly gap-72">
      <div>
        <div className="text-4xl font-bold mb-10">COMP1511</div>
        <div>
          An introduction to problem-solving via programming, which aims to have
          students develop proficiency in using a high level programming
          language. Topics: algorithms, program structures (statements,
          sequence, selection, iteration, functions), data types (numeric,
          character), data structures (arrays, tuples, pointers, lists), storage
          structures (memory, addresses), introduction to analysis of
          algorithms, testing, code quality, teamwork, and reflective practice.
          The course includes extensive practical work in labs and programming
          projects. Additional Information This course should be taken by all
          CSE majors, and any other students who have an interest in computing
          or who wish to be extended. It does not require any prior computing
          knowledge or experience. COMP1511 leads on to COMP1521, COMP1531,
          COMP2511 and COMP2521, which form the core of the study of computing
          at UNSW and which are pre-requisites for the full range of further
          computing courses. Due to overlapping material, students who complete
          COMP1511 may not also enrol in COMP1911 or COMP1921.
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="text-4xl font-bold mb-10">OverLoad Scale</div>
        <div className="w-80 h-80 rounded-full bg-skullGreen"></div>
        <button className="text-black bg-white rounded-sm px-3 py-2 font-bold text-sm mt-10">
          Add Own Scale
        </button>
      </div>
    </div>
  );
}
