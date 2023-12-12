'use client';
import React from 'react'
import { SearchBar } from "../components/SearchBar"

export type FilterObject = {
  [key: string]: boolean
}

export default function CourseRatingPage() {
  const [filterOn, setFilterOn] = React.useState<FilterObject>({ 'Term 1': false, 'Term 2': false, 'Term 3': false });
  return (
    <div className="@apply bg-[#221f1f] h-screen">
      {/* <NavBar/> */}
      <h1 className="pt-20 font-sans text-5xl text-white font-semibold p-5 text-left px-20">OverLoad</h1>
      <SearchBar
        filterOn={filterOn}
        setFilterOn={setFilterOn}
      />
      {/* <SortButton/> */}
    </div>
  )
}

// Plan
// navbar
// search bar (look at to do list for inspo)
// array of CourseCards
// sort button
// 

