import Image from "next/image";
import dayjs from "dayjs";

interface Props {
  src: string;
  name: string;
  date: Date;
}

const Profile = ({ src, name, date }: Props) => {
  return (
    <div className="flex items-center justify-between w-36 ">
      <Image src={src} alt="profile-image" width={34} height={34} className="rounded-full" />
      <div>
        <p className="text-primary text-sm">{name}</p>
        <p className="text-xs text-gray-300">{dayjs(date).format("MMMM D, YYYY")}</p>
      </div>
    </div>
  );
};
export default Profile;
