import Image from "next/image";
import whiteLogoImage from "../../assets/images/whiteThemeLogoImage.svg";
import Link from "next/link";

export default function WhiteLogoImage() {
  return (
    <div>
      <Link href={"/"}>
        <Image src={whiteLogoImage} width={300} height={300} alt="logo_image" />
      </Link>
    </div>
  );
}
