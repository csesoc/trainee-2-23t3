import React from 'react'

export default function CourseCard(prop: any) {
  console.log(prop.courseCode);
  console.log(prop.courseName);
  return (
    <div className="w-64 h-40 bg-white m-10 p-4 rounded-md">
      <h1>{prop.courseCode}</h1>
      <p>
        {prop.courseName}
      </p>
    </div>
  )
}