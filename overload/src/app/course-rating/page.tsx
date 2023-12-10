import React from 'react'
import { SearchBar } from "../components/SearchBar"
import Navbar from '../components/NavBar'
export default function CourseRatingPage() {
  return (
    <div className="@apply bg-[#221f1f]">
      <Navbar></Navbar>
      {/* <NavBar/> */}
      <h1 className="pt-20 font-sans text-5xl text-white font-semibold p-5 text-left px-20">OverLoad</h1>
      <SearchBar/>
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

