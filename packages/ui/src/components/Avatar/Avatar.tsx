import { forwardRef } from "react";

interface AvatarProps {
  src?: string;
  size?: "xxs" | "xs" | "s" | "m" | "big";
}
const Avatar = forwardRef<HTMLImageElement, AvatarProps>(
  (
    // 이미지 prefix, cdn 으로 캐싱해서 서빙하기
    { src = "https://api.realworld.io/images/demo-avatar.png", size = "m" },
    ref
  ) => {
    return (
      <img
        className={`object-cover rounded-full ${style.size[size]}`}
        ref={ref}
        src={src}
        alt={src}
      />
    );
  }
);

export default Avatar;

const style = {
  size: {
    xxs: "min-w-[26px] min-h-[26px] w-26 h-26",
    xs: "min-w-[28px] min-h-[28px] w-28 h-28",
    s: "min-w-[30px] min-h-[30px] w-30 h-30",
    m: "min-w-[32px] min-h-[32px] w-32 h-32",
    big: "min-w-[100px] min-h-[100px] w-100 h-100",
  },
};
