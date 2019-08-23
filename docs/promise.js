"use strict";

require("core-js/modules/es6.promise");

require("core-js/modules/es6.object.to-string");

var hw = function hw(text) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(text);
    }, 2000);
  });
};

hw('hello world').then(function (res) {
  console.log(res);
});