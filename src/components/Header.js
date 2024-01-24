import React, { useEffect, useState, useRef } from "react";
import hamburgericon from "../hamburgericon.png";
import youtubelogo from "../youtubelogo.png";
import usericon from "../usericon.png";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constant";
import axios from "axios";

const Header = () => {
  const [query, setQuery] = useState("");
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dispatch = useDispatch();
  const inputRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchSearchSuggestions();
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [query]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        // Clicked outside the input
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [inputRef]);

  const fetchSearchSuggestions = async () => {
    try {
      const response = await axios.get(`${YOUTUBE_SEARCH_API}${query}`);
      setSearchSuggestions(response.data[1] || []);
      setIsDropdownOpen(true);
    } catch (error) {
      console.error("Error fetching search suggestions:", error);
    }
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const handleQueryChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="bg-white shadow-md p-4 grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
      {/* Left Section */}
      <div className="flex items-center">
        <img
          src={hamburgericon}
          alt="menu"
          className="mr-4 h-6 cursor-pointer"
          onClick={toggleMenuHandler}
        />
        <a href="/">
          <img src={youtubelogo} alt="youtubelogo" className="h-8" />
        </a>
      </div>

      {/* Center Section */}
      <div className="md:col-span-1 flex items-center mt-4 md:mt-0 relative">
        <div className="flex relative" ref={inputRef}>
          <input
            type="text"
            className="rounded-l-full py-2 px-4 border border-gray-500 focus:outline-none w-full md:w-72"
            placeholder="Search"
            value={query}
            onChange={handleQueryChange}
          />
          <button className="py-2 px-4 border-gray-500 bg-gray-200 text-youtube-red border border-youtube-red rounded-r-full ml-2 md:ml-0">
            🔍
          </button>
        </div>
        {isDropdownOpen &&
          searchSuggestions &&
          searchSuggestions.length > 0 && (
            <div className="absolute top-full left-0 bg-white border border-gray-300 w-full mt-2 z-10 p-2 shadow-lg rounded">
              {searchSuggestions.map((suggestion, index) => (
                <div
                  key={index}
                  className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-200 rounded"
                >
                  <div className="mr-2">🔍</div>
                  <div>{suggestion}</div>
                </div>
              ))}
            </div>
          )}
      </div>

      {/* Right Section */}
      <div className="flex items-center justify-end mt-4 md:mt-0">
        <img src={usericon} alt="user-icon" className="ml-4 h-8" />
      </div>
    </div>
  );
};

export default Header;
