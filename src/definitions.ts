export interface InstallerInfoPluginPlugin {
  /**
   * Obtain the installation source information for the given package name using PackageManager.getInstallSourceInfo
   * Rejects on non-Android platforms. Returned values may vary by Android API level.
   * Output example:
   * {
   *   installingPackageName: "com.android.vending",
   *   originatingPackageName: "",
   *   initiatingPackageName: "com.android.vending",
   * }
   *
   * When "" (empty string) is returned, the value was null from the PackageManager API.
   * When no value is returned for a key, the value could not be calculated given the Android API level or for other reasons.
   *
   * @param details {packageName: string} | undefined. If packageName undefined or no object passed, the package name of the current app is used.
   * @since 6.0.0
   */
  getInstallSourceInfo(details: Record<string, string> | undefined): Promise<Record<string, string>>;
}
