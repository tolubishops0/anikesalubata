import React, { useState, useContext, useEffect } from "react";
import { useNavigate, useLocation, useSearchParams } from "react-router-dom";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import CartContext from "../../Context/Cart/CartContext";

function SearchBar({ productList }) {
  const navigate = useNavigate();
  const location = useLocation();

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleOnSelect = (term) => {
    navigate(`/products/search?q=${term.name.toLowerCase().replace(" ", "+")}`);
  };

  useEffect(() => {
    if (location.pathname === "/") {
      setSearchTerm("");
      setSearchResults([]);
    }
  }, [location.pathname]);

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setSearchResults([productList]);
    }
    const results = productList.filter(
      (product) =>
        product.name?.includes(searchTerm.toLowerCase()) ||
        product.description?.includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }, [searchTerm]);

  const styling = {
    border: "1px solid #000",
    borderRadius: "5px",
    backgroundColor: "white",
    boxShadow: "none",
    hoverBackgroundColor: "#f2f2f2",
    color: "#000",
    fontSize: "0.8rem",
    // fontFamily: "Helvetica, sans-serif",
    fontStyle: "italic",
  };

  return (
    <div className="input-field">
      <ReactSearchAutocomplete
        placeholder="Type to search"
        items={searchResults}
        onSelect={handleOnSelect}
        onSearch={setSearchTerm}
        value={searchTerm}
        styling={styling}
      />
    </div>
  );
}

export default SearchBar;
