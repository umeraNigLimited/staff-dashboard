import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { SearchContainer, SearchInput } from "./styled/Search";
import Buttons from "./Buttons";

function Search() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    alert(`Searching for: ${searchTerm}`);
  };
  return (
    <SearchContainer>
      <SearchInput
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Buttons icon={<BsSearch />} className="search-button" />
    </SearchContainer>
  );
}

export default Search;
