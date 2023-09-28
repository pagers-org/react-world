import { ProfileResponseType } from '@/types/profile';
import { usePathname, useRouter } from 'next/navigation';
import { AddOutline, SettingsOutline } from 'react-ionicons';

import { followUser } from '@/api/profiles';

interface UserPorfileProps {
  userData: ProfileResponseType;
}

const UserProfile = ({ userData }: UserPorfileProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const pathOnlyUserName = pathname?.substring(2);

  const handleUserFollow = async () => {
    try {
      const response = await followUser(pathOnlyUserName);
      if (!response.ok) {
        throw new Error('Failed to fetch profile');
      }
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  return (
    <div className="user-info">
      <div className="container">
        <div className="flex flex-col items-center">
          <div className="col-xs-12 col-md-10 offset-md-1 !flex !flex-col !items-center !ml-0">
            <img src={userData.profile.image} className="user-img" />
            <h4>{userData.profile.username}</h4>
            <p>{userData.profile.bio}</p>
          </div>
          {pathOnlyUserName === userData.profile.username ? (
            <div className="w-full justify-end flex">
              <button
                onClick={() => router.push('/settings')}
                className="btn btn-sm btn-outline-secondary action-btn !flex !items-center !w-fit"
              >
                <SettingsOutline
                  cssClasses={'mr-2'}
                  width={'10.5px'}
                  height={'14px'}
                />
                <p className="!mb-0">Edit Profile Settings</p>
              </button>
            </div>
          ) : (
            <div onClick={handleUserFollow} className="w-full justify-end flex">
              <button className="btn btn-sm btn-outline-secondary action-btn !flex !items-center !w-fit">
                <AddOutline
                  cssClasses={'mr-2'}
                  width={'10.5px'}
                  height={'14px'}
                />
                <p className="!mb-0">{`Follow ${userData.profile.username}`}</p>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
