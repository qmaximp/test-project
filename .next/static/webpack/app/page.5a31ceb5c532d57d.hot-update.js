"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/FilterCategory/FilterCategory.jsx":
/*!**********************************************************!*\
  !*** ./src/components/FilterCategory/FilterCategory.jsx ***!
  \**********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst FilterCategory = (param)=>{\n    let { categorySetter } = param;\n    _s();\n    const [Categories, setCategories] = useState();\n    useEffect(()=>{\n        axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"http://localhost:3001/products/\").then((res)=>{\n            let category;\n            category = res.data;\n            setCategories(category);\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n        fileName: \"C:\\\\proj\\\\test\\\\viwatoNext\\\\src\\\\components\\\\FilterCategory\\\\FilterCategory.jsx\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, undefined);\n};\n_s(FilterCategory, \"dxZwPS+I6hzHJUjn0PDfYMF5xvQ=\");\n_c = FilterCategory;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FilterCategory);\nvar _c;\n$RefreshReg$(_c, \"FilterCategory\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0ZpbHRlckNhdGVnb3J5L0ZpbHRlckNhdGVnb3J5LmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQzBCO0FBQ0E7QUFFMUIsTUFBTUUsaUJBQWlCO1FBQUMsRUFBRUMsY0FBYyxFQUFFOztJQUN4QyxNQUFNLENBQUNDLFlBQVlDLGNBQWMsR0FBR0M7SUFDcENDLFVBQVU7UUFDUk4sNkNBQUtBLENBQUNPLEdBQUcsQ0FBQyxtQ0FBbUNDLElBQUksQ0FBQyxDQUFDQztZQUNqRCxJQUFJQztZQUNKQSxXQUFXRCxJQUFJRSxJQUFJO1lBQ25CUCxjQUFjTTtRQUNoQjtJQUNGLEdBQUcsRUFBRTtJQUNMLHFCQUNFLDhEQUFDRTs7Ozs7QUFlTDtHQXpCTVg7S0FBQUE7QUEyQk4sK0RBQWVBLGNBQWNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRmlsdGVyQ2F0ZWdvcnkvRmlsdGVyQ2F0ZWdvcnkuanN4P2I2NWYiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuY29uc3QgRmlsdGVyQ2F0ZWdvcnkgPSAoeyBjYXRlZ29yeVNldHRlciB9KSA9PiB7XHJcbiAgY29uc3QgW0NhdGVnb3JpZXMsIHNldENhdGVnb3JpZXNdID0gdXNlU3RhdGUoKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgYXhpb3MuZ2V0KFwiaHR0cDovL2xvY2FsaG9zdDozMDAxL3Byb2R1Y3RzL1wiKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgbGV0IGNhdGVnb3J5O1xyXG4gICAgICBjYXRlZ29yeSA9IHJlcy5kYXRhO1xyXG4gICAgICBzZXRDYXRlZ29yaWVzKGNhdGVnb3J5KTtcclxuICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgey8qIDxwPtCS0YvQsdC10YDQuNGC0LUg0LrQsNGC0LXQs9C+0YDQuNGOOjwvcD5cclxuICAgICAgPHNlbGVjdFxyXG4gICAgICAgIG5hbWU9XCJjYXRlZ29yeVwiXHJcbiAgICAgICAgaWQ9XCIxXCJcclxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgIGNhdGVnb3J5U2V0dGVyID8gY2F0ZWdvcnlTZXR0ZXIoZS50YXJnZXQudmFsdWUpIDogbnVsbDtcclxuICAgICAgICB9fT5cclxuICAgICAgICB7Y2F0ZWdvcmllc19kYXRhICYmXHJcbiAgICAgICAgICBjYXRlZ29yaWVzX2RhdGEubWFwKChjYXRlZ29yeSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gPG9wdGlvbiB2YWx1ZT17Y2F0ZWdvcnkuaWR9PntjYXRlZ29yeS50aXRsZX08L29wdGlvbj47XHJcbiAgICAgICAgICB9KX1cclxuICAgICAgPC9zZWxlY3Q+ICovfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZpbHRlckNhdGVnb3J5O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJheGlvcyIsIkZpbHRlckNhdGVnb3J5IiwiY2F0ZWdvcnlTZXR0ZXIiLCJDYXRlZ29yaWVzIiwic2V0Q2F0ZWdvcmllcyIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiZ2V0IiwidGhlbiIsInJlcyIsImNhdGVnb3J5IiwiZGF0YSIsImRpdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/FilterCategory/FilterCategory.jsx\n"));

/***/ })

});