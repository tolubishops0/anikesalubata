import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import CartContext from "../../Context/Cart/CartContext";

function SearchBar({ productList }) {
  const navigate = useNavigate();
  const [items, setItems] = useState(productList);
  const [searchList, setSearchList] = useState(productList);
  const { setProdList } = useContext(CartContext);

  const handleOnSelect = (term) => {
    // navigate(`/${term.name}`);
    setSearchList(productList.filter((item) => item.name === term.name));
    setItems(term);
  };

  useEffect(() => {
    // use setSearchResults because you are not assining the filter directly into the fucnton
    setProdList(searchList);
  }, [searchList]);

  const styling = {
    // height: "40px",
    border: "1px solid #000",
    borderRadius: "5px",
    backgroundColor: "white",
    boxShadow: "none",
    hoverBackgroundColor: "#f2f2f2",
    color: "#000",
    fontSize: "14px",
    fontFamily: "Helvetica, sans-serif",
  };

  return (
    <div className="input-field">
      <ReactSearchAutocomplete
        placeholder="Type to search"
        items={items}
        onSelect={handleOnSelect}
        styling={styling}
      />
    </div>
  );
}

export default SearchBar;
