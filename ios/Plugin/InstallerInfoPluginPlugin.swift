import Foundation
import Capacitor

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(InstallerInfoPluginPlugin)
public class InstallerInfoPluginPlugin: CAPPlugin {
    @objc func getInstallSourceInfo(_ call: CAPPluginCall) {
        call.reject("Method not implemented on iOS")
    }
}
