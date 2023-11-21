'use client';
import React from 'react'

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

  return (
    <div className="text-center py-4">
      <input className="bg-white py-0.1 text-center text-0.5xl border border-black rounded-md" type="text" placeholder="search a course" value={searchTerm} onChange={e => setSearchTerm(e.target.value)}/>
      <ul className="flex flex-wrap">
        {filteredData.map((item) => (
          <li className="w-64 h-40 bg-white m-10 p-4 rounded-md" key={(item as { name: string }).name}>{(item as { name: string }).name} </li>
        ))}
      </ul>
    </div>
  )
}
