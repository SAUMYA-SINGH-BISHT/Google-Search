import { TbGridDots } from "react-icons/tb";
import ProfileRing from "../assets/profile-ring.svg";
import { User_Logo } from "../utils/constants";

const ProfileIcon = () => {
  return (
    <div className="flex gap-2">
      <span className="h-10 w-10 flex items-center justify-center rounded-full cursor-pointer hover:bg-black/[0.05]">
        <TbGridDots size={20} color="white" />
      </span>
      <span className="h-10 w-10 relative flex justify-center items-center">
        <img className="absolute" src={ProfileRing} alt="profileRing" />
        <span className="h-8 w-8 rounded-full overflow-hidden">
          <img
            className="h-full w-full object-cover"
            src={User_Logo}
            alt="logo"
          />
        </span>
      </span>
    </div>
  );
};

export default ProfileIcon;
