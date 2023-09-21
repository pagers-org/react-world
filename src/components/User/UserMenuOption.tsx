import {
  profile_menu_container,
  section,
  hide,
} from "@/styles/profile_menu.css";
import { myStyle } from "@/styles/container.css";
import Link from "next/link";

type ProfileMenuType = {
  isProfileMenuOpen: boolean;
  username: string;
  profileMenuHandler: () => void;
};

export default function UserMenuOption({
  isProfileMenuOpen,
  username,
  profileMenuHandler,
}: ProfileMenuType) {
  return (
    <div
      className={`${profile_menu_container} ${myStyle} ${
        isProfileMenuOpen ? "" : hide
      }`}
    >
      <Link href={`/@${username}`}>
        <div className={`${section} ${myStyle}`} onClick={profileMenuHandler}>
          Profile
        </div>
      </Link>

      <Link href={"/write"}>
        <div className={`${section} ${myStyle}`} onClick={profileMenuHandler}>
          Write
        </div>
      </Link>

      <Link href={"/settings"}>
        <div className={`${section} ${myStyle}`} onClick={profileMenuHandler}>
          Settings
        </div>
      </Link>

      <div className={`${section} ${myStyle}`}>Logout</div>
    </div>
  );
}
