"use client";

import {
  header_container,
  header_category_container,
  header_link,
  link,
} from "@/styles/header.css";
import { color_state } from "@/styles/container.css";
import { useTheme } from "@/libs/hooks/useTheme";
import {
  toggle_label,
  toggle_input,
  toggle_label_checked,
} from "@/styles/togglebutton.css";
import WhiteLogoImage from "./WhiteLogoImage";
import DarkLogoImage from "./DarkLogoImage";
import Link from "next/link";

type HeaderProps = {
  currentTheme: string;
};

export default function Header({ currentTheme }: HeaderProps) {
  const { darkTheme, themeToggleHandler } = useTheme(currentTheme);

  return (
    <div className={`${header_container} ${color_state}`}>
      {darkTheme ? <DarkLogoImage /> : <WhiteLogoImage />}
      <div className={header_category_container}>
        <input
          type={"checkbox"}
          id="darkmode-toggle"
          onChange={themeToggleHandler}
          className={toggle_input}
        />
        <label
          htmlFor="darkmode-toggle"
          className={`${toggle_label} ${darkTheme ? toggle_label_checked : ""}`}
        ></label>
        <div className={`${header_link}`}>
          <Link href={"/register"} className={link}>
            Sign in
          </Link>
        </div>
        <div className={header_link}>
          <Link href={"/login"} className={link}>
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
