webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Graph.js":
/*!*****************************!*\
  !*** ./components/Graph.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-chartjs-2 */ \"./node_modules/react-chartjs-2/es/index.js\");\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_chartjs_2__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ \"./node_modules/moment/moment.js\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\nvar _jsxFileName = \"/home/pi/sensor-dashboard/components/Graph.js\",\n    _s = $RefreshSig$();\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  query allData{\\n    allData{\\n      time\\n      temperature\\n      humidity\\n      heatIndex\\n      dewPoint\\n      absoluteHumidity\\n    }\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\nvar getData = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_2__[\"gql\"])(_templateObject());\n\nfunction Graph() {\n  _s();\n\n  var graphData = [];\n\n  var _useQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_2__[\"useQuery\"])(getData),\n      loading = _useQuery.loading,\n      error = _useQuery.error,\n      data = _useQuery.data;\n\n  if (loading) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"Fragment\"], {\n    children: \"Loading...\"\n  }, void 0, false);\n  if (error) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"Fragment\"], {\n    children: \"Error :(\"\n  }, void 0, false);\n\n  if (data) {\n    for (var i = 0; i < data.allData.length; i++) {\n      graphData.push({\n        time: moment__WEBPACK_IMPORTED_MODULE_4___default.a.unix(data.allData[i].time).utc().format(\"MM/DD/YYYY HH:mm:ss\"),\n        temperature: data.allData[i].temperature,\n        humidity: data.allData[i].humidity\n      });\n    }\n\n    graphData = graphData.slice(Math.max(graphData.length - 50, 1));\n  }\n\n  var state = {\n    labels: graphData.map(function (datapoint) {\n      return datapoint.time;\n    }),\n    datasets: [{\n      label: 'Temperature',\n      fill: false,\n      lineTension: 0.5,\n      backgroundColor: 'rgb(54, 162, 235)',\n      borderColor: 'rgba(54, 162, 235, 0.2)',\n      borderWidth: 2,\n      data: graphData.map(function (datapoint) {\n        return datapoint.temperature;\n      })\n    }]\n  };\n  var humidity = {\n    labels: graphData.map(function (datapoint) {\n      return datapoint.time;\n    }),\n    datasets: [{\n      label: 'Humidity',\n      fill: false,\n      lineTension: 0.5,\n      backgroundColor: 'rgb(255, 99, 132)',\n      borderColor: 'rgba(255, 99, 132, 0.2)',\n      data: graphData.map(function (datapoint) {\n        return datapoint.humidity;\n      })\n    }]\n  };\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.graphContainer,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.graphWrapper,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_chartjs_2__WEBPACK_IMPORTED_MODULE_3__[\"Line\"], {\n        data: state,\n        options: {\n          responsive: true,\n          maintainAspectRatio: true,\n          title: {\n            display: true,\n            text: 'Temperature over time',\n            fontSize: 20\n          },\n          legend: {\n            display: true,\n            position: 'bottom'\n          }\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 65,\n        columnNumber: 11\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.graphWrapper,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_chartjs_2__WEBPACK_IMPORTED_MODULE_3__[\"Line\"], {\n        data: humidity,\n        options: {\n          title: {\n            display: true,\n            text: 'Humidity over time',\n            fontSize: 20\n          },\n          legend: {\n            display: true,\n            position: 'bottom'\n          }\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 84,\n        columnNumber: 11\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 63,\n    columnNumber: 13\n  }, this);\n}\n\n_s(Graph, \"OQZiY3KqWoytFPIJWw/H9Hrmbok=\", false, function () {\n  return [_apollo_client__WEBPACK_IMPORTED_MODULE_2__[\"useQuery\"]];\n});\n\n_c = Graph;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Graph);\n\nvar _c;\n\n$RefreshReg$(_c, \"Graph\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9HcmFwaC5qcz83ZDRmIl0sIm5hbWVzIjpbImdldERhdGEiLCJncWwiLCJHcmFwaCIsImdyYXBoRGF0YSIsInVzZVF1ZXJ5IiwibG9hZGluZyIsImVycm9yIiwiZGF0YSIsImkiLCJhbGxEYXRhIiwibGVuZ3RoIiwicHVzaCIsInRpbWUiLCJtb21lbnQiLCJ1bml4IiwidXRjIiwiZm9ybWF0IiwidGVtcGVyYXR1cmUiLCJodW1pZGl0eSIsInNsaWNlIiwiTWF0aCIsIm1heCIsInN0YXRlIiwibGFiZWxzIiwibWFwIiwiZGF0YXBvaW50IiwiZGF0YXNldHMiLCJsYWJlbCIsImZpbGwiLCJsaW5lVGVuc2lvbiIsImJhY2tncm91bmRDb2xvciIsImJvcmRlckNvbG9yIiwiYm9yZGVyV2lkdGgiLCJzdHlsZXMiLCJncmFwaENvbnRhaW5lciIsImdyYXBoV3JhcHBlciIsInJlc3BvbnNpdmUiLCJtYWludGFpbkFzcGVjdFJhdGlvIiwidGl0bGUiLCJkaXNwbGF5IiwidGV4dCIsImZvbnRTaXplIiwibGVnZW5kIiwicG9zaXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQU1BLE9BQU8sR0FBR0MsMERBQUgsbUJBQWI7O0FBYUEsU0FBU0MsS0FBVCxHQUFnQjtBQUFBOztBQUNaLE1BQUlDLFNBQVMsR0FBRyxFQUFoQjs7QUFEWSxrQkFFcUJDLCtEQUFRLENBQUNKLE9BQUQsQ0FGN0I7QUFBQSxNQUVKSyxPQUZJLGFBRUpBLE9BRkk7QUFBQSxNQUVLQyxLQUZMLGFBRUtBLEtBRkw7QUFBQSxNQUVZQyxJQUZaLGFBRVlBLElBRlo7O0FBR1osTUFBSUYsT0FBSixFQUFhLG9CQUFPO0FBQUE7QUFBQSxtQkFBUDtBQUNiLE1BQUlDLEtBQUosRUFBVyxvQkFBTztBQUFBO0FBQUEsbUJBQVA7O0FBQ1gsTUFBSUMsSUFBSixFQUFTO0FBQ0ws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QUdKQyxvQkFBUSxFQUFDO0FBSEwsV0FEQztBQU1QQyxnQkFBTSxFQUFDO0FBQ0xILG1CQUFPLEVBQUMsSUFESDtBQUVMSSxvQkFBUSxFQUFDO0FBRko7QUFOQTtBQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBcEJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBd0NQOztHQXBGUXpDLEs7VUFFNEJFLHVEOzs7S0FGNUJGLEs7QUFxRk1BLG9FQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9HcmFwaC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVF1ZXJ5LCBncWwgfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XG5pbXBvcnQge0xpbmV9IGZyb20gJ3JlYWN0LWNoYXJ0anMtMic7XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXG5jb25zdCBnZXREYXRhID0gZ3FsYFxuICBxdWVyeSBhbGxEYXRhe1xuICAgIGFsbERhdGF7XG4gICAgICB0aW1lXG4gICAgICB0ZW1wZXJhdHVyZVxuICAgICAgaHVtaWRpdHlcbiAgICAgIGhlYXRJbmRleFxuICAgICAgZGV3UG9pbnRcbiAgICAgIGFic29sdXRlSHVtaWRpdHlcbiAgICB9XG4gIH1cbmA7XG5cbmZ1bmN0aW9uIEdyYXBoKCl7XG4gICAgdmFyIGdyYXBoRGF0YSA9IFtdXG4gICAgY29uc3QgeyBsb2FkaW5nLCBlcnJvciwgZGF0YSB9ID0gdXNlUXVlcnkoZ2V0RGF0YSk7XG4gICAgaWYgKGxvYWRpbmcpIHJldHVybiA8PkxvYWRpbmcuLi48Lz47XG4gICAgaWYgKGVycm9yKSByZXR1cm4gPD5FcnJvciA6KDwvPjtcbiAgICBpZiAoZGF0YSl7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGF0YS5hbGxEYXRhLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIGdyYXBoRGF0YS5wdXNoKHtcbiAgICAgICAgICAgICAgICB0aW1lOiBtb21lbnQudW5peChkYXRhLmFsbERhdGFbaV0udGltZSkudXRjKCkuZm9ybWF0KFwiTU0vREQvWVlZWSBISDptbTpzc1wiKSxcbiAgICAgICAgICAgIHRlbXBlcmF0dXJlOiBkYXRhLmFsbERhdGFbaV0udGVtcGVyYXR1cmUsXG4gICAgICAgICAgICBodW1pZGl0eTogZGF0YS5hbGxEYXRhW2ldLmh1bWlkaXR5XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIGdyYXBoRGF0YSA9IGdyYXBoRGF0YS5zbGljZShNYXRoLm1heChncmFwaERhdGEubGVuZ3RoIC0gNTAsIDEpKVxuICAgIH1cbiAgICAgICBjb25zdCBzdGF0ZSA9IHtcbiAgbGFiZWxzOiBncmFwaERhdGEubWFwKGRhdGFwb2ludCA9PihkYXRhcG9pbnQudGltZSkpLFxuICBkYXRhc2V0czogW1xuICAgIHtcbiAgICAgIGxhYmVsOiAnVGVtcGVyYXR1cmUnLFxuICAgICAgZmlsbDogZmFsc2UsXG4gICAgICBsaW5lVGVuc2lvbjogMC41LFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2IoNTQsIDE2MiwgMjM1KScsXG4gICAgICBib3JkZXJDb2xvcjogJ3JnYmEoNTQsIDE2MiwgMjM1LCAwLjIpJyxcbiAgICAgIGJvcmRlcldpZHRoOiAyLFxuICAgICAgZGF0YTogZ3JhcGhEYXRhLm1hcChkYXRhcG9pbnQgPT4oZGF0YXBvaW50LnRlbXBlcmF0dXJlKSlcbiAgICB9XG4gIF1cbn1cblxuICAgICAgIGNvbnN0IGh1bWlkaXR5ID0ge1xuICBsYWJlbHM6IGdyYXBoRGF0YS5tYXAoZGF0YXBvaW50ID0+KGRhdGFwb2ludC50aW1lKSksXG4gIGRhdGFzZXRzOiBbXG4gICAge1xuICAgICAgbGFiZWw6ICdIdW1pZGl0eScsXG4gICAgICBmaWxsOiBmYWxzZSxcbiAgICAgIGxpbmVUZW5zaW9uOiAwLjUsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2IoMjU1LCA5OSwgMTMyKScsXG4gICAgICBib3JkZXJDb2xvcjogJ3JnYmEoMjU1LCA5OSwgMTMyLCAwLjIpJyxcbiAgICAgIGRhdGE6IGdyYXBoRGF0YS5tYXAoZGF0YXBvaW50ID0+KGRhdGFwb2ludC5odW1pZGl0eSkpXG4gICAgfVxuICBdXG59XG5cbiAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ncmFwaENvbnRhaW5lcn0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmdyYXBoV3JhcHBlcn0+XG4gICAgICAgICAgPExpbmVcbiAgICAgICAgICBkYXRhPXtzdGF0ZX1cbiAgICAgICAgICBvcHRpb25zPXt7XG4gICAgICAgICAgICAgIHJlc3BvbnNpdmU6IHRydWUsXG5cdFx0bWFpbnRhaW5Bc3BlY3RSYXRpbzogdHJ1ZSxcbiAgICAgICAgICAgIHRpdGxlOntcbiAgICAgICAgICAgICAgZGlzcGxheTp0cnVlLFxuICAgICAgICAgICAgICB0ZXh0OidUZW1wZXJhdHVyZSBvdmVyIHRpbWUnLFxuICAgICAgICAgICAgICBmb250U2l6ZToyMFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxlZ2VuZDp7XG4gICAgICAgICAgICAgIGRpc3BsYXk6dHJ1ZSxcbiAgICAgICAgICAgICAgcG9zaXRpb246J2JvdHRvbSdcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZ3JhcGhXcmFwcGVyfT5cbiAgICAgICAgICA8TGluZVxuICAgICAgICAgIGRhdGE9e2h1bWlkaXR5fVxuICAgICAgICAgIG9wdGlvbnM9e3tcbiAgICAgICAgICAgIHRpdGxlOntcbiAgICAgICAgICAgICAgZGlzcGxheTp0cnVlLFxuICAgICAgICAgICAgICB0ZXh0OidIdW1pZGl0eSBvdmVyIHRpbWUnLFxuICAgICAgICAgICAgICBmb250U2l6ZToyMFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxlZ2VuZDp7XG4gICAgICAgICAgICAgIGRpc3BsYXk6dHJ1ZSxcbiAgICAgICAgICAgICAgcG9zaXRpb246J2JvdHRvbSdcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuXG59XG5leHBvcnQgZGVmYXVsdCBHcmFwaDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Graph.js\n");

/***/ })

})