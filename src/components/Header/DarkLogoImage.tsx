import Image from "next/image";
import darkLogoImage from "../../assets/images/darkThemeLogoImage.svg";
import Link from "next/link";

export default function DarkLogoImage() {
  return (
    <div>
      <Link href={"/"}>
        <Image src={darkLogoImage} width={300} height={300} alt="logo_image" />
      </Link>
    </div>
  );
}
