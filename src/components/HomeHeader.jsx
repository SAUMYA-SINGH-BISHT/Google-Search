import { GmailUrl, ImageUrl } from "../utils/constants";
import ProfileIcon from "./ProfileIcon";

const HomeHeader = () => {
  return (
    <header className="h-16 flex justify-between md:justify-end items-center gap-4 px-5">
      <div className="flex gap-4">
        <span
          className="text-white text-lg line-height hover:underline cursor-pointer"
          onClick={() => window.open(GmailUrl, "_blank")}
        >
          Gmail
        </span>
        <span
          className="text-white text-lg line-height hover:underline cursor-pointer"
          onClick={() => window.open(ImageUrl, "_blank")}
        >
          Images
        </span>
      </div>

      <ProfileIcon />
    </header>
  );
};

export default HomeHeader;
