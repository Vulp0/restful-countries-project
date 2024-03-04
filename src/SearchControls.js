function SearchControls({ searchSetter, filterSetter }) {
  // setSearchInput();
  // setFilterInput();

    return (
        <search id='SearchControls'>
        <input type='text' id='Search' placeholder='Search for a country...' defaultValue="" onBlur={(e) => searchSetter(e.target.value)}></input>
        <select id='Filter' placeholder="Number two" defaultValue="" onInput={(e) => filterSetter(e.target.value)}>
          <option value="">Filter by Region</option>
          <option value="Africa">Africa</option>
          <option value="Americas">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </search>
    );
}

export default SearchControls;