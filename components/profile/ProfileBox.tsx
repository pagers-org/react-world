import { SettingIcon } from '@/composables/icons';
import useUserStore from '@/stores/useUserStore';
import { settingButton, userBlock, userImage, userInfo, userName } from '@/styles/profile.css';
import Image from 'next/image';
import Link from 'next/link';
import FollowButton from '../user/FollowButton';
import { User } from '@/types/api/users';
type Props = {
  image: string;
  username: string;
  following: boolean;
};
const ProfileBox = ({ image, username, following }: Props) => {
  const { username: currentUsername } = useUserStore() as User;
  return (
    <div className={userBlock}>
      <div className={userInfo}>
        <Image src={image} alt="Profile" width={100} height={100} className={userImage} />
        <div className={userName}>{username}</div>
        {currentUsername === username ? (
          <Link href="/settings" className={settingButton}>
            <SettingIcon />
            &nbsp; Edit Profile Settings
          </Link>
        ) : (
          <FollowButton author={{ username, following }} />
        )}
      </div>
    </div>
  );
};

export default ProfileBox;
