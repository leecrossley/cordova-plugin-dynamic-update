
var exec = require("cordova/exec");

var DynamicUpdate = function () {
    this.name = "DynamicUpdate";
};

DynamicUpdate.prototype.test = function (onSuc, onErr) {
    exec(onSuc, onErr, "DynamicUpdate", "test", []);
};

module.exports = new DynamicUpdate();
