import { registerPlugin } from '@capacitor/core';

import type { InstallerInfoPluginPlugin } from './definitions';

const InstallerInfoPlugin = registerPlugin<InstallerInfoPluginPlugin>(
  'InstallerInfoPlugin',
  {
    web: () => import('./web').then(m => new m.InstallerInfoPluginWeb()),
  },
);

export * from './definitions';
export { InstallerInfoPlugin };
