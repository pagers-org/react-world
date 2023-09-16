import { useContext } from 'react';
import { TabsRootContext } from './root';

export const useTabsRootContext = () => {
  const context = useContext(TabsRootContext);

  if (!context) {
    throw new Error('useTabsRootContext should be used within Root');
  }

  return context;
};
