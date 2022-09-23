import { useContext } from 'react';
import { BsSearch } from 'react-icons/bs';
import { DataContext } from '../App';
import "./Search.css";

const Search = () => {
  const {searchCard}=useContext(DataContext);

  const handleSearch=(e)=>{
    searchCard(e.target.value);
  }

  return (
    <div className='search'>
        <input type="text" onChange={handleSearch}/>
        <BsSearch className='searchIcon'/>
    </div>
  )
}

export default Search;