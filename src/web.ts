import { WebPlugin } from '@capacitor/core';

import type { InstallerInfoPluginPlugin } from './definitions';

export class InstallerInfoPluginWeb
  extends WebPlugin
  implements InstallerInfoPluginPlugin
{
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
