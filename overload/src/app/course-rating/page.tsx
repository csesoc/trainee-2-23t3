import React from 'react'
import { SearchBar } from "../components/SearchBar"
type FilterObject = {
  term: string;
  isChecked: boolean;
}

export default function CourseRatingPage() {
  const [filterOn, setFilterOn] = React.useState([{term: 'Term 1', isChecked: false}, , {term: 'Term 2', isChecked: false}, {term: 'Term 3', isChecked: false}]);

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

