webpackHotUpdate_N_E("pages/index",{

/***/ "./components/CurrentStats.js":
/*!************************************!*\
  !*** ./components/CurrentStats.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nvar _jsxFileName = \"/home/pi/sensor-dashboard/components/CurrentStats.js\",\n    _s = $RefreshSig$();\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  query latestDatapoint{\\n    latestDatapoint{\\n      time\\n      temperature\\n      humidity\\n      heatIndex\\n      dewPoint\\n      absoluteHumidity\\n    }\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\nvar getData = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_2__[\"gql\"])(_templateObject());\n\nfunction CurrentStats() {\n  _s();\n\n  var _useQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_2__[\"useQuery\"])(getData),\n      loading = _useQuery.loading,\n      error = _useQuery.error,\n      data = _useQuery.data;\n\n  if (loading) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"Fragment\"], {\n    children: \"Loading...\"\n  }, void 0, false);\n  if (error) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"Fragment\"], {\n    children: \"Error :(\"\n  }, void 0, false);\n  if (data) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h2\", {\n      children: [\"Current Temperature: \", data.latestDatapoint.temperature]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 9\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h2\", {\n      children: [\"Current Humidity: \", data.latestDatapoint.humidity]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 9\n    }, this)]\n  }, void 0, true);\n}\n\n_s(CurrentStats, \"OQZiY3KqWoytFPIJWw/H9Hrmbok=\", false, function () {\n  return [_apollo_client__WEBPACK_IMPORTED_MODULE_2__[\"useQuery\"]];\n});\n\n_c = CurrentStats;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CurrentStats);\n\nvar _c;\n\n$RefreshReg$(_c, \"CurrentStats\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DdXJyZW50U3RhdHMuanM/MGE3YyJdLCJuYW1lcyI6WyJnZXREYXRhIiwiZ3FsIiwiQ3VycmVudFN0YXRzIiwidXNlUXVlcnkiLCJsb2FkaW5nIiwiZXJyb3IiLCJkYXRhIiwibGF0ZXN0RGF0YXBvaW50IiwidGVtcGVyYXR1cmUiLCJodW1pZGl0eSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBLElBQU1BLE9BQU8sR0FBR0MsMERBQUgsbUJBQWI7O0FBY0EsU0FBU0MsWUFBVCxHQUF1QjtBQUFBOztBQUFBLGtCQUNjQywrREFBUSxDQUFDSCxPQUFELENBRHRCO0FBQUEsTUFDWEksT0FEVyxhQUNYQSxPQURXO0FBQUEsTUFDRkMsS0FERSxhQUNGQSxLQURFO0FBQUEsTUFDS0MsSUFETCxhQUNLQSxJQURMOztBQUVuQixNQUFJRixPQUFKLEVBQWEsb0JBQU87QUFBQTtBQUFBLG1CQUFQO0FBQ2IsTUFBSUMsS0FBSixFQUFXLG9CQUFPO0FBQUE7QUFBQSxtQkFBUDtBQUNYLE1BQUlDLElBQUosRUFBVSxvQkFDTjtBQUFBLDRCQUNBO0FBQUEsMENBQTBCQSxJQUFJLENBQUNDLGVBQUwsQ0FBcUJDLFdBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURBLGVBRUE7QUFBQSx1Q0FBdUJGLElBQUksQ0FBQ0MsZUFBTCxDQUFxQkUsUUFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkE7QUFBQSxrQkFETTtBQU9iOztHQVhRUCxZO1VBQzRCQyx1RDs7O0tBRDVCRCxZO0FBWU1BLDJFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9DdXJyZW50U3RhdHMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VRdWVyeSwgZ3FsIH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xuY29uc3QgZ2V0RGF0YSA9IGdxbGBcbiAgcXVlcnkgbGF0ZXN0RGF0YXBvaW50e1xuICAgIGxhdGVzdERhdGFwb2ludHtcbiAgICAgIHRpbWVcbiAgICAgIHRlbXBlcmF0dXJlXG4gICAgICBodW1pZGl0eVxuICAgICAgaGVhdEluZGV4XG4gICAgICBkZXdQb2ludFxuICAgICAgYWJzb2x1dGVIdW1pZGl0eVxuICAgIH1cbiAgfVxuYDtcblxuXG5mdW5jdGlvbiBDdXJyZW50U3RhdHMoKXtcbiAgICBjb25zdCB7IGxvYWRpbmcsIGVycm9yLCBkYXRhIH0gPSB1c2VRdWVyeShnZXREYXRhKTtcbiAgICBpZiAobG9hZGluZykgcmV0dXJuIDw+TG9hZGluZy4uLjwvPjtcbiAgICBpZiAoZXJyb3IpIHJldHVybiA8PkVycm9yIDooPC8+O1xuICAgIGlmIChkYXRhKSByZXR1cm4oXG4gICAgICAgIDw+XG4gICAgICAgIDxoMj5DdXJyZW50IFRlbXBlcmF0dXJlOiB7ZGF0YS5sYXRlc3REYXRhcG9pbnQudGVtcGVyYXR1cmV9PC9oMj5cbiAgICAgICAgPGgyPkN1cnJlbnQgSHVtaWRpdHk6IHtkYXRhLmxhdGVzdERhdGFwb2ludC5odW1pZGl0eX08L2gyPlxuICAgICAgICA8Lz5cbiAgICApXG5cbn1cbmV4cG9ydCBkZWZhdWx0IEN1cnJlbnRTdGF0cztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/CurrentStats.js\n");

/***/ })

})