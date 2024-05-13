export interface InstallerInfoPluginPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
