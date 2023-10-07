import LogoutButton from '@/components/settings/LogoutButton';
import SettingForm from '@/components/settings/SettingForm';

import { container } from '@/styles/common.css';
import { settingBlock, settingTitle } from '@/styles/settings.css';

const SettingsPage = () => {
  return (
    <section className={container}>
      <div className={settingBlock}>
        <div className={settingTitle}>Your Settings</div>
        <SettingForm />
        <hr className="" />
        <LogoutButton />
      </div>
    </section>
  );
};

export default SettingsPage;
