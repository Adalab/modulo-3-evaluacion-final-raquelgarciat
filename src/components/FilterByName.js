function FilterByName( {searchByName, handleFilter} ) {
    const handleChangeSearchName = (ev) => {
      handleFilter('name', ev.target.value);
    };
  
    return (
      <label className='form_label' htmlFor='search_name'>
        Nombre:
        <input
          className='form_input-text'
          type='text'
          name='search_name'
          id='search_name'
          value={searchByName}
          onChange={handleChangeSearchName}
        />
      </label>
    );
  }
  
  export default FilterByName;