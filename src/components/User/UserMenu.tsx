"use client";

import Image from "next/image";
import {
  user_menu_contaienr,
  user_menu_profile_image,
  down_icon,
} from "@/styles/user_menu.css";
import downIcon from "../../assets/images/down.svg";
import { myStyle } from "@/styles/container.css";
import { useState } from "react";
import UserMenuOption from "./UserMenuOption";

type UserInfoType = {
  userInfo: {
    username: string;
    email: string;
    image: string;
    token: string;
    bio: string | null;
  };
};

// {
//     email: 'fdsg@gmail.com',
//     username: 'fgsfdbds',
//     bio: null,
//     image: 'https://api.realworld.io/images/smiley-cyrus.jpeg',
//     token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImVtYWlsIjoiZmRzZ0BnbWFpbC5jb20iLCJ1c2VybmFtZSI6ImZnc2ZkYmRzIn0sImlhdCI6MTY5Mzk4NzUwMywiZXhwIjoxNjk5MTcxNTAzfQ.FVhCCNjKQi8xqItiV2H9OmoUlv8wYguMnQEoatk78eI'
//   }

export default function UserMenu({ userInfo }: UserInfoType) {
  const { image, username } = userInfo;

  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [shouldRenderMenu, setShouldRenderMenu] = useState(false);

  const profileMenuHandler = () => {
    if (isProfileMenuOpen) {
      setIsProfileMenuOpen(false);
      setTimeout(() => {
        setShouldRenderMenu(false);
      }, 300);
    } else {
      setShouldRenderMenu(true);
      setIsProfileMenuOpen(true);
    }
  };
  return (
    <>
      <div className={user_menu_contaienr} data-hide={!isProfileMenuOpen}>
        <Image
          src={image}
          width={30}
          height={30}
          alt="user_image"
          className={user_menu_profile_image}
        />
        <Image
          src={downIcon}
          width={20}
          height={20}
          alt="down"
          className={`${down_icon} ${myStyle}`}
          onClick={profileMenuHandler}
        />
        {shouldRenderMenu && (
          <UserMenuOption
            isProfileMenuOpen={isProfileMenuOpen}
            profileMenuHandler={profileMenuHandler}
            username={username}
          />
        )}
      </div>
    </>
  );
}
