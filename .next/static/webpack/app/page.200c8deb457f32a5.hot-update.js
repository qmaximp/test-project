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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst FilterCategory = (param)=>{\n    let { categorySetter } = param;\n    _s();\n    const [categories, setCategories] = useState();\n    useEffect(()=>{\n        axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"http://localhost:3001/products/\").then((res)=>{\n            let category;\n            category = res.data;\n            setCategories(category);\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Выберите категорию:\"\n            }, void 0, false, {\n                fileName: \"C:\\\\proj\\\\test\\\\viwatoNext\\\\src\\\\components\\\\FilterCategory\\\\FilterCategory.jsx\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                name: \"category\",\n                id: \"1\",\n                onChange: (e)=>{\n                    categorySetter ? categorySetter(e.target.value) : null;\n                },\n                children: categories && categories.map((category)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                        value: categories.valueCategory,\n                        children: categories.nameCategory\n                    }, idCategory, false, {\n                        fileName: \"C:\\\\proj\\\\test\\\\viwatoNext\\\\src\\\\components\\\\FilterCategory\\\\FilterCategory.jsx\",\n                        lineNumber: 26,\n                        columnNumber: 15\n                    }, undefined);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\proj\\\\test\\\\viwatoNext\\\\src\\\\components\\\\FilterCategory\\\\FilterCategory.jsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\proj\\\\test\\\\viwatoNext\\\\src\\\\components\\\\FilterCategory\\\\FilterCategory.jsx\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, undefined);\n};\n_s(FilterCategory, \"Gh5OJe89zyGiCiLFoJEZyHbKc3U=\");\n_c = FilterCategory;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FilterCategory);\nvar _c;\n$RefreshReg$(_c, \"FilterCategory\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0ZpbHRlckNhdGVnb3J5L0ZpbHRlckNhdGVnb3J5LmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQzBCO0FBQ0E7QUFFMUIsTUFBTUUsaUJBQWlCO1FBQUMsRUFBRUMsY0FBYyxFQUFFOztJQUN4QyxNQUFNLENBQUNDLFlBQVlDLGNBQWMsR0FBR0M7SUFDcENDLFVBQVU7UUFDUk4sNkNBQUtBLENBQUNPLEdBQUcsQ0FBQyxtQ0FBbUNDLElBQUksQ0FBQyxDQUFDQztZQUNqRCxJQUFJQztZQUNKQSxXQUFXRCxJQUFJRSxJQUFJO1lBQ25CUCxjQUFjTTtRQUNoQjtJQUNGLEdBQUcsRUFBRTtJQUNMLHFCQUNFLDhEQUFDRTs7MEJBQ0MsOERBQUNDOzBCQUFFOzs7Ozs7MEJBQ0gsOERBQUNDO2dCQUNDQyxNQUFLO2dCQUNMQyxJQUFHO2dCQUNIQyxVQUFVLENBQUNDO29CQUNUaEIsaUJBQWlCQSxlQUFlZ0IsRUFBRUMsTUFBTSxDQUFDQyxLQUFLLElBQUk7Z0JBQ3BEOzBCQUNDakIsY0FDQ0EsV0FBV2tCLEdBQUcsQ0FBQyxDQUFDWDtvQkFDZCxxQkFDRSw4REFBQ1k7d0JBQXdCRixPQUFPakIsV0FBV29CLGFBQWE7a0NBQ3JEcEIsV0FBV3FCLFlBQVk7dUJBRGJDOzs7OztnQkFJakI7Ozs7Ozs7Ozs7OztBQUlWO0dBN0JNeEI7S0FBQUE7QUErQk4sK0RBQWVBLGNBQWNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRmlsdGVyQ2F0ZWdvcnkvRmlsdGVyQ2F0ZWdvcnkuanN4P2I2NWYiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuY29uc3QgRmlsdGVyQ2F0ZWdvcnkgPSAoeyBjYXRlZ29yeVNldHRlciB9KSA9PiB7XHJcbiAgY29uc3QgW2NhdGVnb3JpZXMsIHNldENhdGVnb3JpZXNdID0gdXNlU3RhdGUoKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgYXhpb3MuZ2V0KFwiaHR0cDovL2xvY2FsaG9zdDozMDAxL3Byb2R1Y3RzL1wiKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgbGV0IGNhdGVnb3J5O1xyXG4gICAgICBjYXRlZ29yeSA9IHJlcy5kYXRhO1xyXG4gICAgICBzZXRDYXRlZ29yaWVzKGNhdGVnb3J5KTtcclxuICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPHA+0JLRi9Cx0LXRgNC40YLQtSDQutCw0YLQtdCz0L7RgNC40Y46PC9wPlxyXG4gICAgICA8c2VsZWN0XHJcbiAgICAgICAgbmFtZT1cImNhdGVnb3J5XCJcclxuICAgICAgICBpZD1cIjFcIlxyXG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgY2F0ZWdvcnlTZXR0ZXIgPyBjYXRlZ29yeVNldHRlcihlLnRhcmdldC52YWx1ZSkgOiBudWxsO1xyXG4gICAgICAgIH19PlxyXG4gICAgICAgIHtjYXRlZ29yaWVzICYmXHJcbiAgICAgICAgICBjYXRlZ29yaWVzLm1hcCgoY2F0ZWdvcnkpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8b3B0aW9uIGtleT17aWRDYXRlZ29yeX0gdmFsdWU9e2NhdGVnb3JpZXMudmFsdWVDYXRlZ29yeX0+XHJcbiAgICAgICAgICAgICAgICB7Y2F0ZWdvcmllcy5uYW1lQ2F0ZWdvcnl9XHJcbiAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9KX1cclxuICAgICAgPC9zZWxlY3Q+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmlsdGVyQ2F0ZWdvcnk7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsImF4aW9zIiwiRmlsdGVyQ2F0ZWdvcnkiLCJjYXRlZ29yeVNldHRlciIsImNhdGVnb3JpZXMiLCJzZXRDYXRlZ29yaWVzIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJnZXQiLCJ0aGVuIiwicmVzIiwiY2F0ZWdvcnkiLCJkYXRhIiwiZGl2IiwicCIsInNlbGVjdCIsIm5hbWUiLCJpZCIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwibWFwIiwib3B0aW9uIiwidmFsdWVDYXRlZ29yeSIsIm5hbWVDYXRlZ29yeSIsImlkQ2F0ZWdvcnkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/FilterCategory/FilterCategory.jsx\n"));

/***/ })

});