webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/Hero/Hero.tsx":
/*!**************************************!*\
  !*** ./src/components/Hero/Hero.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _HalfCircle_HalfCircle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../HalfCircle/HalfCircle */ \"./src/components/HalfCircle/HalfCircle.tsx\");\n/* harmony import */ var _Hero_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Hero.module.scss */ \"./src/components/Hero/Hero.module.scss\");\n/* harmony import */ var _Hero_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Hero_module_scss__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/Users/tommaso.laterza/Documents/SALINA/nextjs-netlify-blog-template/src/components/Hero/Hero.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\nvar Hero = function Hero(_ref) {\n  _s();\n\n  var title = _ref.title,\n      subtitle = _ref.subtitle,\n      image = _ref.image;\n  console.log(Object(next_router__WEBPACK_IMPORTED_MODULE_0__[\"useRouter\"])().locale);\n  var style = {\n    backgroundImage: \"url(\\\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' preserveAspectRatio='none' fill='222'%3E%3Cpath d='M0 100q50-200 100 0'/%3E%3C/svg%3E\\\")\"\n  };\n  return __jsx(\"div\", {\n    className: _Hero_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.heroContainer,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: \"grid\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"col-12 col-md-6\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 9\n    }\n  }, __jsx(\"h1\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 11\n    }\n  }, title), __jsx(\"h4\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 11\n    }\n  }, subtitle)), __jsx(\"div\", {\n    className: \"col-12 col-md-6 \".concat(_Hero_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.wrap),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 9\n    }\n  })), __jsx(_HalfCircle_HalfCircle__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    color: \"000\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }\n  }));\n};\n\n_s(Hero, \"CeygcqajjFExIxFEzW4x/gfWEGQ=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_0__[\"useRouter\"]];\n});\n\n_c = Hero;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Hero);\n\nvar _c;\n\n$RefreshReg$(_c, \"Hero\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSGVyby9IZXJvLnRzeD9mMDhkIl0sIm5hbWVzIjpbIkhlcm8iLCJ0aXRsZSIsInN1YnRpdGxlIiwiaW1hZ2UiLCJjb25zb2xlIiwibG9nIiwidXNlUm91dGVyIiwibG9jYWxlIiwic3R5bGUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJzdHlsZXMiLCJoZXJvQ29udGFpbmVyIiwid3JhcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQU9BLElBQU1BLElBQXlCLEdBQUcsU0FBNUJBLElBQTRCLE9BQWdDO0FBQUE7O0FBQUEsTUFBN0JDLEtBQTZCLFFBQTdCQSxLQUE2QjtBQUFBLE1BQXRCQyxRQUFzQixRQUF0QkEsUUFBc0I7QUFBQSxNQUFaQyxLQUFZLFFBQVpBLEtBQVk7QUFDaEVDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZQyw2REFBUyxHQUFHQyxNQUF4QjtBQUVBLE1BQU1DLEtBQUssR0FBRztBQUNaQyxtQkFBZTtBQURILEdBQWQ7QUFHQSxTQUNFO0FBQUssYUFBUyxFQUFFQyx3REFBTSxDQUFDQyxhQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLFFBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxtQkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFLVixLQUFMLENBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUtDLFFBQUwsQ0FGRixDQURGLEVBS0U7QUFBSyxhQUFTLDRCQUFxQlEsd0RBQU0sQ0FBQ0UsSUFBNUIsQ0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTEYsQ0FERixFQVFFLE1BQUMsOERBQUQ7QUFBWSxTQUFLLEVBQUUsS0FBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVJGLENBREY7QUE4QkQsQ0FwQ0Q7O0dBQU1aLEk7VUFDUU0scUQ7OztLQURSTixJO0FBc0NTQSxtRUFBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL0hlcm8vSGVyby50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBIYWxmQ2lyY2xlIGZyb20gXCIuLi9IYWxmQ2lyY2xlL0hhbGZDaXJjbGVcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vSGVyby5tb2R1bGUuc2Nzc1wiO1xuZXhwb3J0IHR5cGUgSGVyb1Byb3BzID0ge1xuICB0aXRsZTogc3RyaW5nO1xuICBzdWJ0aXRsZTogc3RyaW5nO1xuICBpbWFnZTogc3RyaW5nO1xufTtcblxuY29uc3QgSGVybzogUmVhY3QuRkM8SGVyb1Byb3BzPiA9ICh7IHRpdGxlLCBzdWJ0aXRsZSwgaW1hZ2UgfSkgPT4ge1xuICBjb25zb2xlLmxvZyh1c2VSb3V0ZXIoKS5sb2NhbGUpO1xuXG4gIGNvbnN0IHN0eWxlID0ge1xuICAgIGJhY2tncm91bmRJbWFnZTogYHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0Zi04LCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAxMDAgMTAwJyBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSdub25lJyBmaWxsPScyMjInJTNFJTNDcGF0aCBkPSdNMCAxMDBxNTAtMjAwIDEwMCAwJy8lM0UlM0Mvc3ZnJTNFXCIpYCxcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlcm9Db250YWluZXJ9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2BncmlkYH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgY29sLTEyIGNvbC1tZC02YH0+XG4gICAgICAgICAgPGgxPnt0aXRsZX08L2gxPlxuICAgICAgICAgIDxoND57c3VidGl0bGV9PC9oND5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgY29sLTEyIGNvbC1tZC02ICR7c3R5bGVzLndyYXB9YH0+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxIYWxmQ2lyY2xlIGNvbG9yPXtcIjAwMFwifSAvPlxuXG4gICAgICB7LyogPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sYW5nfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3VzZVJvdXRlcigpLmxvY2FsZSA9PT0gXCJlblwiID8gc3R5bGVzLmFjdGl2ZSA6IFwiXCJ9PlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCIgbG9jYWxlPVwiZW5cIj5cbiAgICAgICAgICAgIPCfh6zwn4enXG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3VzZVJvdXRlcigpLmxvY2FsZSA9PT0gXCJmclwiID8gc3R5bGVzLmFjdGl2ZSA6IFwiXCJ9PlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCIgbG9jYWxlPVwiZnJcIj5cbiAgICAgICAgICAgIPCfh6vwn4e3XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3VzZVJvdXRlcigpLmxvY2FsZSA9PT0gXCJpdFwiID8gc3R5bGVzLmFjdGl2ZSA6IFwiXCJ9PlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCIgbG9jYWxlPVwiaXRcIj5cbiAgICAgICAgICAgIPCfh67wn4e5XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PiAqL31cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlcm87XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Hero/Hero.tsx\n");

/***/ })

})