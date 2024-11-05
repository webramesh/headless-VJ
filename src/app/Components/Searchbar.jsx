import SearchContainer from './SearchContainer';
import { handleSearch } from '../Components/searchAction';

export default function Searchbar() {
  return <SearchContainer onSearch={handleSearch} />;
}
