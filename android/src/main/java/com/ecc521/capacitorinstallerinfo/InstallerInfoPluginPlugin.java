package com.ecc521.capacitorinstallerinfo;

import java.lang.String;
import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;
import android.content.pm.PackageManager;
import android.content.pm.InstallSourceInfo;
import android.util.Log;
import android.os.Build.VERSION;
import java.util.Objects;

@CapacitorPlugin(name = "InstallerInfoPlugin")
public class InstallerInfoPluginPlugin extends Plugin {
    @PluginMethod
    public void getInstallSourceInfo(PluginCall call) {
        PackageManager packageManager = this.getActivity().getApplicationContext().getPackageManager();

        //Get the package name from the call, else default to the current app's package name
        String packageName = call.getString("packageName", this.getActivity().getApplicationContext().getPackageName());

        //Construct the returned object.
        JSObject ret = new JSObject();

        if (VERSION.SDK_INT >= 30) {
            //Use InstallSourceInfo
            InstallSourceInfo installSourceInfo;
            try {
                installSourceInfo = packageManager.getInstallSourceInfo(packageName);
            }
            catch (PackageManager.NameNotFoundException e) {
                call.reject(String.format("Package %s not found", packageName));
                return;
            }

            ret.put("originatingPackageName", Objects.requireNonNullElse(installSourceInfo.getOriginatingPackageName(), ""));
            ret.put("initiatingPackageName", Objects.requireNonNullElse(installSourceInfo.getInitiatingPackageName(), ""));
            ret.put("installingPackageName", Objects.requireNonNullElse(installSourceInfo.getInstallingPackageName(), ""));
        }
        else {
            //Use Deprecated getInstallerPackageName
            ret.put("installingPackageName", Objects.requireNonNullElse(packageManager.getInstallerPackageName(packageName), ""));
        }

        call.resolve(ret);
    }
}
