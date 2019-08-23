"use strict";

require("core-js/modules/es6.promise");

require("core-js/modules/es6.object.to-string");

require("regenerator-runtime/runtime");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var as =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    var text;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            text = 'hello world';
            _context.next = 3;
            return new Promise(function (resolve, reject) {
              setTimeout(function () {
                text = 'hello';
                return resolve();
              }, 2000);
            });

          case 3:
            return _context.abrupt("return", text);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function as() {
    return _ref.apply(this, arguments);
  };
}();

_asyncToGenerator(
/*#__PURE__*/
regeneratorRuntime.mark(function _callee2() {
  return regeneratorRuntime.wrap(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.t0 = console;
          _context2.next = 3;
          return as();

        case 3:
          _context2.t1 = _context2.sent;

          _context2.t0.log.call(_context2.t0, _context2.t1);

        case 5:
        case "end":
          return _context2.stop();
      }
    }
  }, _callee2);
}))();