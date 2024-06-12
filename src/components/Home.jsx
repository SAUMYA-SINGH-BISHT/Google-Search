import HomeHeader from "./HomeHeader";
import SearchInput from "./SearchInput";
import { useContext } from "react";
import { Context } from "../utils/ContextApi";
import { useNavigate } from "react-router-dom";
import {
  FeelingLuckyUrl,
  GoogleLogo,
  HomeBackground,
} from "../utils/constants";

const Home = () => {
  const { searchQuery } = useContext(Context);
  const navigate = useNavigate();
  const feelingLucky = () => {
    window.open(FeelingLuckyUrl, "_blank");
  };
  const googleSearch = () => {
    if (searchQuery?.length > 0) {
      navigate(`/${searchQuery}/${1}`);
    }
  };

  return (
    <div
      className="w-screen h-screen flex flex-col bg-cover"
      style={{ backgroundImage: `url(${HomeBackground})` }}
    >
      <HomeHeader />
      <main className="grow flex justify-center">
        <div className="w-full px-5 flex flex-col items-center  my-52 sm:my-auto">
          <img
            className="w-[172px] md:w-[272px] mb-8 "
            src={GoogleLogo}
            alt="Logo"
          />
          <SearchInput />
          <div className="flex gap-2 text-[#3c4043] mt-8">
            <button
              className="h-9 px-4 bg-[#f8f9fa] text-lg rounded-md border border-[#f8f9fa] hover:border-[#dadce0] hover:shadow-c2"
              onClick={googleSearch}
            >
              Google Search
            </button>
            <button
              className="h-9 px-4 bg-[#f8f9fa] text-lg rounded-md border border-[#f8f9fa] hover:border-[#dadce0] hover:shadow-c2"
              onClick={feelingLucky}
            >
              I'm Feeling Lucky
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
