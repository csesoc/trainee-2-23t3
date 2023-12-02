export default async function Page({
  params,
}: {
  params: { courseCode: string };
}) {
  const courseCode = params.courseCode;

  const courseData = await fetch(
    `http://localhost:3000/api/course-details/${courseCode}`,
    { cache: 'no-store' }
  ).then((res) => res.json());

  return (
    <div className="flex bg-black h-screen text-white px-28 py-20 justify-evenly gap-72">
      <div>
        <div className="text-4xl font-bold mb-10">{courseData.courseCode}</div>
        <div>{courseData.description}</div>
      </div>
      <div className="flex flex-col items-center">
        <div className="text-4xl font-bold mb-10">OverLoad Scale</div>
        <div
          className={`w-80 h-80 rounded-full bg-${
            courseData.doomness == 1 ? 'skullGreen' : 'red-500'
          }`}
        ></div>
        <button className="text-black bg-white rounded-sm px-3 py-2 font-bold text-sm mt-10">
          Add Own Scale
        </button>
      </div>
    </div>
  );
}
