
  cordova.define('cordova/plugin_list', function(require, exports, module) {
    module.exports = [
      {
          "id": "mx.ferreyra.callnumber.CallNumber",
          "file": "plugins/mx.ferreyra.callnumber/www/CallNumber.js",
          "pluginId": "mx.ferreyra.callnumber",
        "clobbers": [
          "call"
        ]
        },
      {
          "id": "call-number.CallNumber",
          "file": "plugins/call-number/www/CallNumber.js",
          "pluginId": "call-number",
        "clobbers": [
          "call"
        ]
        },
      {
          "id": "phonegap-plugin-barcodescanner.BarcodeScanner",
          "file": "plugins/phonegap-plugin-barcodescanner/www/barcodescanner.js",
          "pluginId": "phonegap-plugin-barcodescanner",
        "clobbers": [
          "cordova.plugins.barcodeScanner"
        ]
        },
      {
          "id": "cordova-plugin-device.device",
          "file": "plugins/cordova-plugin-device/www/device.js",
          "pluginId": "cordova-plugin-device",
        "clobbers": [
          "device"
        ]
        }
    ];
    module.exports.metadata =
    // TOP OF METADATA
    {
      "phonegap-plugin-barcodescanner": "8.1.0",
      "mx.ferreyra.callnumber": "0.0.2",
      "cordova-plugin-device": "2.0.2",
      "call-number": "0.0.2"
    };
    // BOTTOM OF METADATA
    });
    