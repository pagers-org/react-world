import UserSettingCard from "../composables/Card/UserSettingCard";
import {
  image_info_section,
  avatar_image_container,
  user_info_container,
  avatar_image,
  upload_button,
  image_delete_button,
  social_email_section,
  email_container,
  user_withdraw_container,
  wrapper,
  title_wrapper,
  content_container,
  content,
  button_container,
} from "@/styles/user_setting.css";
import { myStyle } from "@/styles/container.css";
import Image from "next/image";

type UserSettingType = {
  email: string;
  username: string;
  bio: string | null;
  image: string;
};

export default function UserSetting({
  email,
  username,
  bio,
  image,
}: UserSettingType) {
  return (
    <>
      <UserSettingCard>
        <section className={image_info_section}>
          <div className={avatar_image_container}>
            <Image
              className={avatar_image}
              src={image}
              width={100}
              height={100}
              alt="user_avatar"
            />
            <button className={`${upload_button} ${myStyle}`}>
              이미지 업로드
            </button>
            <button className={`${image_delete_button} ${myStyle}`}>
              이미지 제거
            </button>
          </div>
          <div className={user_info_container}>
            <h2>{username}</h2>
            {bio && <p>{bio}</p>}
          </div>
        </section>
        <section className={social_email_section}>
          {/* 소셜정보 <div></div> */}
          <div className={email_container}>
            <div className={wrapper}>
              <div className={title_wrapper}></div>
              <div className={content_container}>
                <div className={content}></div>
                <div className={button_container}></div>
              </div>
            </div>
          </div>
          {/* 이메일 알람 수신 설정 <div></div> */}
          <div className={user_withdraw_container}></div>
        </section>
      </UserSettingCard>
    </>
  );
}
