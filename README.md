# React Native Test App

[Getting Started with MS CLI](https://docs.microsoft.com/en-us/appcenter/cli/)

[Get Started with iOS](https://docs.microsoft.com/en-us/appcenter/sdk/getting-started/ios)

### React Native app build to deploy to App Center

### How to run it:

- Clone this repository:
  [rn-app-center](https://github.com/EdAncerys/rn-app-center)
- Navigate to the app:

  `$ cd rn-app-center`

- Install all dependencies & packages:

  `$ yarn`

- Install packages for iOS development:

  `$ cd ios`

  `$ pod install`

- Running app on Xcode. While in app root directory:

  `$ cd ios` \*if in root directory

  `$ open WunderApp.xcworkspace`

- Running app on Android emulator. While in app root directory:

  `yarn android` or

  `npx react-native run-android`

## Add App Center’s SDK to your app.

- Add the SDK to the project

```
npm install appcenter appcenter-analytics appcenter-crashes --save-exact
```

- Integrate the SDK

Create a new file with the filename appcenter-config.json in android/app/src/main/assets/ with the following content:

```
{
  "app_secret": "c1b9ce93-6173-4608-8450-62986eae4b03"
}
```

Modify the app's res/values/strings.xml to include the following lines:

```
<string name="appCenterCrashes_whenToSendCrashes" moduleConfig="true" translatable="false">DO_NOT_ASK_JAVASCRIPT</string>
<string name="appCenterAnalytics_whenToEnableAnalytics" moduleConfig="true" translatable="false">ALWAYS_SEND</string>
```

- Explore data. Done!

## Sign your app for release to Google Play

`https://developer.android.com/studio/publish/app-signing`

### Generate an upload key and keystore

- In the menu bar, click Build > Generate Signed Bundle/APK.
- In the Generate Signed Bundle or APK dialog, select Android App Bundle or APK and click Next.
- Below the field for Key store path, click Create new.
- On the New Key Store window, provide the following information for your keystore and key

### Adding unique identifier to App Manifest file

```
AndroidManifest.xml

<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    package="com.example.myapp" // unique identifier
    android:versionCode="1"
    android:versionName="1.0" >
    ...
</manifest>
```
