'use client';
import React from 'react'
import CourseCard from './CourseCard';

export const SearchBar = () => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [dataList, setDataList] = React.useState([]);

  React.useEffect(() => {
    // Fetch the list of Pokémon from the PokeAPI (temporary)
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151') // Fetch the first 151 Pokémon (temp data)
      .then((response) => response.json()) // turn data from promise into a json file so we can use data
      .then((data) => setDataList(data.results)) // set data using setData hook
      .catch(error => {
        // if promise not fulfilled
        console.log('Error:' + `${error.message}`);
      });
  }, []);

  const filteredData = dataList.filter((item) =>
    (item as { name: string }).name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const courseCards = filteredData.map(item => {
    return (
      <div>
        <CourseCard
        description={(item as { name: string }).name}
        />
      </div>
    );
  })

  return (
    <div className="justify-center">
      <div className="px-20">
        <input className="px-3 w-full bg-white py-0.1 text-0.5xl border border-black rounded-md text-left placeholder-left" type="text" placeholder="search for a course..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)}/>
      </div>
      <ul className="flex flex-wrap justify-center">
        {courseCards}
      </ul>
    </div>
  )
}

// create card item
// create array of card using mapping
