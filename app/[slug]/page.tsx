import ArticleTab from '@/components/article/ArticleTab';
import { SettingIcon } from '@/composables/icons';
import { container } from '@/styles/common.css';
import { settingButton, userBlock, userImage, userInfo, userName } from '@/styles/profile.css';
import Image from 'next/image';
import Link from 'next/link';

const ProfilePage = async () => {
  // const user = await fetchUser();
  return (
    <section>
      <div className={userBlock}>
        <div className={userInfo}>
          <Image
            src={'https://api.realworld.io/images/smiley-cyrus.jpeg'}
            alt="Profile"
            width={100}
            height={100}
            className={userImage}
          />
          <div className={userName}>hyeon9782</div>
          <Link href="/settings" className={settingButton}>
            <SettingIcon />
            &nbsp; Edit Profile Settings
          </Link>
        </div>
      </div>
      <div className={container}>
        <ArticleTab />
      </div>
    </section>
  );
};

export default ProfilePage;
