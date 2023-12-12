import Link from 'next/link'
import React from 'react'

type CourseCardProps = {
  courseCode: string
  courseName: string
}

export default function CourseCard(prop: CourseCardProps) {
  return (
    <Link href={`/course-details/${prop.courseCode}`} className="w-64 h-40 bg-white m-10 p-4 rounded-md block">
      <h1>{prop.courseCode}</h1>
      <p>
        {prop.courseName}
      </p>
    </Link>
  )
}