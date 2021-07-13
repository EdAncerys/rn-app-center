# MyApp

### React Native app build to deploy to App Center

### How to run it:

`* .env need to be added with appropriate variables`

- Clone this repository:
  [Wünder App](https://github.com/Skylark-Creative/wunder-app)
- Navigate to the app:

  `$ cd wunder-app`

- Install all dependencies & packages:

  `$ yarn`

- Install packages for iOS development:

  `$ cd ios`

  `$ pod install`

- Running app on Xcode. While in app root directory:

  `$ cd ios` \*if in root directory

  `$ open WunderApp.xcworkspace`

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

### [Signing off App via Xcode](https://stackoverflow.com/questions/31039513/how-can-i-skip-code-signing-for-development-builds-in-xcode)
