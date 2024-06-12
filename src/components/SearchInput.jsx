import React, { useContext } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import MicIcon from "../assets/mic.svg";
import ImageIcon from "../assets/image.svg";
import { Context } from "../utils/ContextApi";

const SearchInput = () => {
  const { searchQuery, setSearchQuery } = useContext(Context);
  const navigate = useNavigate();

  const searchQueryHandler = (event) => {
    if (event?.key === "Enter" && searchQuery?.length > 0) {
      navigate(`/${searchQuery}/${1}`);
    }
  };
  return (
    <div
      id="searchBox"
      className="h-[46px] w-full md:w-[584px] flex items-center gap-3 px-4 border border-[#dfe1e5] rounded-3xl bg-white hover:shadow-white hover:shadow-2xl hover:border-0 focus-within:shadow-c focus-within:border-0"
    >
      <AiOutlineSearch size={22} color="black" />
      <input
        type="text"
        onChange={(e) => {
          setSearchQuery(e.target.value);
        }}
        onKeyUp={searchQueryHandler}
        value={searchQuery}
        autoFocus
        className="grow outline-0 text-black/[0.87]"
      />
      <div className="flex items-center gap-3">
        {searchQuery && (
          <IoMdClose
            size={24}
            color="black"
            className="cursor-pointer"
            onClick={() => setSearchQuery("")}
          />
        )}
        <img className="h-6 w-6 cursor-pointer" src={MicIcon} alt="mic" />
        <img className="h-6 w-6 cursor-pointer" src={ImageIcon} alt="imgIcon" />
      </div>
    </div>
  );
};

export default SearchInput;
