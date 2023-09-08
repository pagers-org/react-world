import {
  home_banner_container,
  banner_container_state,
} from "@/styles/homebanner.css";
import darkBannerLogo from "../../../assets/images/darkThemeBannerLogo.svg";
import whiteBannerLogo from "../../../assets/images/whiteThemeBannerLogo.svg";
import Image from "next/image";

export default function HomeBanner() {
  return (
    <div className={`${home_banner_container} ${banner_container_state}`}>
      <Image src={darkBannerLogo} alt="banner_image" width={400} height={300} />
    </div>
  );
}
