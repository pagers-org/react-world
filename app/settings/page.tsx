import LogoutButton from '@/components/settings/LogoutButton';
import SettingForm from '@/components/settings/SettingForm';

import { container, hr } from '@/styles/common.css';
import { settingBlock, settingTitle } from '@/styles/settings.css';

const SettingsPage = () => {
  return (
    <section className={container}>
      <div className={settingBlock}>
        <div className={settingTitle}>Your Settings</div>
        <SettingForm />
        <div className={hr} />
        <LogoutButton />
      </div>
    </section>
  );
};

export default SettingsPage;
