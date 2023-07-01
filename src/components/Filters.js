import FilterBySpecies from './FilterBySpecies';
import FilterByName from './FilterByName';

function Filters({ searchByName, searchBySpecies, handleFilter }) {
  return (
    <form className='filters'>
      <h2 className='filters_title'>Filter by...</h2>
      <FilterByName searchByName={searchByName} handleFilter={handleFilter} />
      <FilterBySpecies
        searchBySpecies={searchBySpecies}
        handleFilter={handleFilter}
      />
    </form>
  );
}

export default Filters;
