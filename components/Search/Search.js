import React, { useRef, useState } from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import style from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

const Search = ({ onSearch, placeholder }) => {
  const handleFocus = () => {
    textInputRef.current.focus();
  };

  const textInputRef = useRef(null);
  const [search, setSearch] = useState("");

  const handleSearch = (searchValue) => {
    setSearch(searchValue);
    onSearch(searchValue);
  };

  return (
    <Pressable
      style={{
        flexDirection: "row",
        paddingHorizontal: 6,
        backgroundColor: "#F3F5F9",
        height: 50,
        alignItems: "center",
        borderRadius: 15,
      }}
      onPress={handleFocus}
    >
      <FontAwesomeIcon icon={faSearch} color={"#25C0FF"} size={22} />
      <TextInput
        ref={textInputRef}
        style={style.searchInput}
        value={search}
        onChangeText={(value) => handleSearch(value)}
        placeholder={placeholder}
      />
    </Pressable>
  );
};

Search.defaultProps = {
  onSearch: () => {},
  placeholder: "Search",
};

Search.propTypes = {
  onSearch: PropTypes.func,
  placeholder: PropTypes.string,
};

export default Search;
