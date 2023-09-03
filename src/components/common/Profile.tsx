import Image from "next/image";

interface Props {
  src: string;
  name: string;
  date: string;
}

const Profile = ({ src, name, date }: Props) => {
  return (
    <div className="flex items-center justify-between w-40 p-1">
      <Image src={src} alt="profile-image" width={40} height={40} />
      <div>
        <p className="text-primary text-sm">{name}</p>
        <p className="text-xs text-gray-300">{date}</p>
      </div>
    </div>
  );
};
export default Profile;
