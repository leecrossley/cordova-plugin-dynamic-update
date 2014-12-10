
var exec = require("cordova/exec");

var DynamicUpdate = function () {
    this.name = "DynamicUpdate";
};

DynamicUpdate.prototype.update = function (onSuccess, onError, url) {
    exec(onSuccess, onError, "DynamicUpdate", "update", [{"url": url}]);
};

module.exports = new DynamicUpdate();
