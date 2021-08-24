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

  `yarn android`

# Seting up App Center’s SDK for the app.

### Add the SDK to the project

In a terminal window opened at the root of a React Native project, enter the following line to add Crash and Analytics services to your app

`npm install appcenter appcenter-analytics appcenter-crashes --save-exactnpm install appcenter appcenter-analytics appcenter-crashes --save-exact`

### Integrate the SDK

Run `pod install` from iOS directory to install CocoaPods dependencies.Note: Integrating the iOS SDK requires CocoaPods. If you want to integrate manually, follow these steps.Create a new file with the name AppCenter-Config.plist with the following content. Don't forget to add this file to the Xcode project (right-click the app in Xcode and click Add files to <App Name>...).<?xml version="1.0" encoding="UTF-8"?>

```
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "https://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
    <dict>
    <key>AppSecret</key>
    <string>5ce0e43a-271d-4a3f-821e-44eb5057ca26</string>
    </dict>
</plist>
```

Modify the app's AppDelegate.m file to include code for starting SDK:Add these lines to import section above the `#if DEBUG` or `#ifdef`

```
FB_SONARKIT_ENABLED declaration (if present):#import <AppCenterReactNative.h>
```

```
- #import <AppCenterReactNativeAnalytics.h>
- #import <AppCenterReactNativeCrashes.h>#import <AppCenterReactNative.h>
- #import <AppCenterReactNativeAnalytics.h>
- #import <AppCenterReactNativeCrashes.h>
```

Add these lines to the didFinishLaunchingWithOptions method

```
[AppCenterReactNative register];
[AppCenterReactNativeAnalytics registerWithInitiallyEnabled:true];
[AppCenterReactNativeCrashes registerWithAutomaticProcessing];
```

### Explore data

Now build and launch your app, then go to the Analytics section. You should see one active user and at least one session! The charts will get more relevant as you get more users. Once your app actually crashes, you will have Crashes data show up as well.

### [App store connect](https://appstoreconnect.apple.com)

### [Apple dev](https://developer.apple.com)
