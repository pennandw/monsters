import React from "react";
import "./search-box.css";

export const SearchBox = ({ placeholder, onchange }) => (
  <input
    className="search"
    type="search"
    placeholder={placeholder}
    onChange={onchange}
  />
);
