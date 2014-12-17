
var exec = require("cordova/exec");

var DynamicUpdate = function () {
    this.name = "DynamicUpdate";
};

DynamicUpdate.prototype.download = function (onSuccess, onError, url) {
    exec(onSuccess, onError, "DynamicUpdate", "download", [{"url": url}]);
};

DynamicUpdate.prototype.deploy = function (onError) {
    exec(null, onError, "DynamicUpdate", "deploy", []);
};

module.exports = new DynamicUpdate();
