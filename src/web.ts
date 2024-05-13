import { WebPlugin } from '@capacitor/core';

import type { InstallerInfoPluginPlugin } from './definitions';

export class InstallerInfoPluginWeb
  extends WebPlugin
  implements InstallerInfoPluginPlugin
{
  getInstallSourceInfo(): Promise<Record<string, string>> {
    throw new Error('Method not implemented on web.');
  }
}
