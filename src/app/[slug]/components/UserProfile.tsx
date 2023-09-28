import { ProfileResponseType } from '@/types/profile';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { AddOutline, SettingsOutline } from 'react-ionicons';

import { followUser, getProfile, unFollowUser } from '@/api/profiles';

const UserProfile = () => {
  const router = useRouter();
  const pathname = usePathname();
  const pathOnlyUserName = pathname?.substring(2);
  const [userData, setUserData] = useState<undefined | ProfileResponseType>();

  const fetchUserProfile = async (username: string) => {
    try {
      const response = await getProfile(username);
      if (!response.ok) {
        throw new Error('Failed to fetch profile');
      }
      return response.json();
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data: ProfileResponseType =
          await fetchUserProfile(pathOnlyUserName);
        setUserData(data);
        // 여기서 data 변수에 접근 가능
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const handleUserFollow = async () => {
    if (userData.profile.following) {
      try {
        const response = await unFollowUser(pathOnlyUserName);
        if (!response.ok) {
          throw new Error('Failed to fetch profile');
        }
        return response.json();
      } catch (error) {
        console.error(error);
        throw error;
      }
    } else {
      try {
        const response = await followUser(pathOnlyUserName);
        if (!response.ok) {
          throw new Error('Failed to fetch profile');
        }
        return response.json();
      } catch (error) {
        console.error(error);
        throw error;
      }
    }
  };

  const handleSetFollow = async () => {
    try {
      const data = await handleUserFollow();
      console.log(data);
      setUserData(data);
    } catch (error) {
      console.log(error);
    }
  };

  if (userData === undefined) return;

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
            <div onClick={handleSetFollow} className="w-full justify-end flex">
              <button className="btn btn-sm btn-outline-secondary action-btn !flex !items-center !w-fit">
                <AddOutline
                  cssClasses={'mr-2'}
                  width={'10.5px'}
                  height={'14px'}
                />
                <p className="!mb-0">
                  {userData.profile.following
                    ? `Unfollow ${userData.profile.username}`
                    : `Follow ${userData.profile.username}`}
                </p>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
