import React from 'react'

export default function CourseCard(prop: any) {

  return (
    <div className="w-64 h-40 bg-white m-10 p-4 rounded-md">
      <p>
        {prop.description}
      </p>
    </div>
  )
}