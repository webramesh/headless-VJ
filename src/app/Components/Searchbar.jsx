import SearchContainer from './SearchContainer';
import { handleSearch } from '../Components/searchAction';

export default function Searchbar({ closeMenu }) {
  return <SearchContainer onSearch={handleSearch} closeMenu={closeMenu} />;
}
