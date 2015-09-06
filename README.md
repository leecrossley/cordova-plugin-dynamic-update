## Dynamic Update Plugin for Apache Cordova

Cordova Plugin to automatically update your Cordova Android app, given an externally hosted zip of the www update.

## Install

#### Latest published version on npm (with Cordova CLI >= 5.0.0)

```
cordova plugin add cordova-plugin-dynamic-update
```

#### Latest version from GitHub

```
cordova plugin add https://github.com/leecrossley/cordova-plugin-dynamic-update.git
```

## Usage

You **do not** need to reference any JavaScript, the Cordova plugin architecture will add a dynamicupdate object to your root automatically when you build.

Ensure you use the plugin after your deviceready event has been fired.

### Download

Downloads the zip file of your update.

```js
var url = "http://your.zip.url/file.zip";

dynamicupdate.download(onSuccess, onError, url);
```

### Deploy

Deploys the last downloaded zip file. There is no success callback, as the updated app is automatically started.

```js
dynamicupdate.deploy(onError);
```

## Platforms

Android only. iOS guidelines prohibit this behaviour.

## License

[MIT License](http://ilee.mit-license.org)
