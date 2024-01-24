// ButtonList.js
import React from "react";
import Button from "./Button";

const lists = [
  "All",
  "Live",
  "Game",

  "Movies",
  "Music",
  "News",
  "Sports",
  "Tech",
  "Cooking",
  "Fitness",
  "Travel",
  "Tech",
];

const ButtonList = () => {
  return (
    <div className="flex items-center  mx-auto my-4">
      {lists.map((list, index) => (
        <Button name={list} key={index} />
      ))}
    </div>
  );
};

export default ButtonList;
