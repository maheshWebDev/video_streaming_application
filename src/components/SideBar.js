// SideBar.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faFire,
  faHeart,
  faClock,
  faMusic,
  faGamepad,
  faNewspaper,
  faFilm,
} from "@fortawesome/free-solid-svg-icons";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;
  return (
    <div className="p-5 shadow-lg bg-white w-48">
      <ul className="mb-4">
        <li className="text-gray-800 mb-2 hover:text-youtube-red cursor-pointer">
          <Link to="/">
            <FontAwesomeIcon icon={faHome} className="mr-2" /> Home
          </Link>
        </li>
        <li className="text-gray-800 mb-2 hover:text-youtube-red cursor-pointer">
          <FontAwesomeIcon icon={faFire} className="mr-2" /> Trending
        </li>
        <li className="text-gray-800 mb-2 hover:text-youtube-red cursor-pointer">
          <FontAwesomeIcon icon={faHeart} className="mr-2" /> Subscriptions
        </li>
        <li className="text-gray-800 mb-2 hover:text-youtube-red cursor-pointer">
          <FontAwesomeIcon icon={faClock} className="mr-2" /> Library
        </li>
      </ul>

      <h1 className="text-lg font-semibold mb-4">Subscriptions</h1>
      <ul className="mb-4">
        <li className="text-gray-800 mb-2 hover:text-youtube-red cursor-pointer">
          <FontAwesomeIcon icon={faMusic} className="mr-2" /> Music
        </li>
        <li className="text-gray-800 mb-2 hover:text-youtube-red cursor-pointer">
          <FontAwesomeIcon icon={faGamepad} className="mr-2" /> Gaming
        </li>
        <li className="text-gray-800 mb-2 hover:text-youtube-red cursor-pointer">
          <FontAwesomeIcon icon={faNewspaper} className="mr-2" /> News
        </li>
        <li className="text-gray-800 mb-2 hover:text-youtube-red cursor-pointer">
          <FontAwesomeIcon icon={faFilm} className="mr-2" /> Movies
        </li>
      </ul>

      <h1 className="text-lg font-semibold mb-4">Watch later</h1>
      <ul>
        <li className="text-gray-800 mb-2 hover:text-youtube-red cursor-pointer">
          <FontAwesomeIcon icon={faMusic} className="mr-2" /> Music
        </li>
        <li className="text-gray-800 mb-2 hover:text-youtube-red cursor-pointer">
          <FontAwesomeIcon icon={faGamepad} className="mr-2" /> Gaming
        </li>
        <li className="text-gray-800 mb-2 hover:text-youtube-red cursor-pointer">
          <FontAwesomeIcon icon={faNewspaper} className="mr-2" /> News
        </li>
        <li className="text-gray-800 mb-2 hover:text-youtube-red cursor-pointer">
          <FontAwesomeIcon icon={faFilm} className="mr-2" /> Movies
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
