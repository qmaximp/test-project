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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst FilterCategory = (param)=>{\n    let { categorySetter } = param;\n    _s();\n    const [categories, setCategories] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"http://localhost:3001/products/\").then((res)=>{\n            let category;\n            category = res.data;\n            setCategories(category);\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Выберите категорию:\"\n            }, void 0, false, {\n                fileName: \"C:\\\\proj\\\\test\\\\viwatoNext\\\\src\\\\components\\\\FilterCategory\\\\FilterCategory.jsx\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                name: \"category\",\n                id: \"1\",\n                onChange: (e)=>{\n                    categorySetter ? categorySetter(e.target.value) : null;\n                },\n                children: categories && categories.map((category)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                        value: category.valueCategory,\n                        children: category.nameCategory\n                    }, category.idCategory, false, {\n                        fileName: \"C:\\\\proj\\\\test\\\\viwatoNext\\\\src\\\\components\\\\FilterCategory\\\\FilterCategory.jsx\",\n                        lineNumber: 26,\n                        columnNumber: 15\n                    }, undefined);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\proj\\\\test\\\\viwatoNext\\\\src\\\\components\\\\FilterCategory\\\\FilterCategory.jsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\proj\\\\test\\\\viwatoNext\\\\src\\\\components\\\\FilterCategory\\\\FilterCategory.jsx\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, undefined);\n};\n_s(FilterCategory, \"Gh5OJe89zyGiCiLFoJEZyHbKc3U=\");\n_c = FilterCategory;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FilterCategory);\nvar _c;\n$RefreshReg$(_c, \"FilterCategory\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0ZpbHRlckNhdGVnb3J5L0ZpbHRlckNhdGVnb3J5LmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ21EO0FBQ3pCO0FBRTFCLE1BQU1JLGlCQUFpQjtRQUFDLEVBQUVDLGNBQWMsRUFBRTs7SUFDeEMsTUFBTSxDQUFDQyxZQUFZQyxjQUFjLEdBQUdMLCtDQUFRQTtJQUM1Q0QsZ0RBQVNBLENBQUM7UUFDUkUsNkNBQUtBLENBQUNLLEdBQUcsQ0FBQyxtQ0FBbUNDLElBQUksQ0FBQyxDQUFDQztZQUNqRCxJQUFJQztZQUNKQSxXQUFXRCxJQUFJRSxJQUFJO1lBQ25CTCxjQUFjSTtRQUNoQjtJQUNGLEdBQUcsRUFBRTtJQUNMLHFCQUNFLDhEQUFDRTs7MEJBQ0MsOERBQUNDOzBCQUFFOzs7Ozs7MEJBQ0gsOERBQUNDO2dCQUNDQyxNQUFLO2dCQUNMQyxJQUFHO2dCQUNIQyxVQUFVLENBQUNDO29CQUNUZCxpQkFBaUJBLGVBQWVjLEVBQUVDLE1BQU0sQ0FBQ0MsS0FBSyxJQUFJO2dCQUNwRDswQkFDQ2YsY0FDQ0EsV0FBV2dCLEdBQUcsQ0FBQyxDQUFDWDtvQkFDZCxxQkFDRSw4REFBQ1k7d0JBQWlDRixPQUFPVixTQUFTYSxhQUFhO2tDQUM1RGIsU0FBU2MsWUFBWTt1QkFEWGQsU0FBU2UsVUFBVTs7Ozs7Z0JBSXBDOzs7Ozs7Ozs7Ozs7QUFJVjtHQTdCTXRCO0tBQUFBO0FBK0JOLCtEQUFlQSxjQUFjQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0ZpbHRlckNhdGVnb3J5L0ZpbHRlckNhdGVnb3J5LmpzeD9iNjVmIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5jb25zdCBGaWx0ZXJDYXRlZ29yeSA9ICh7IGNhdGVnb3J5U2V0dGVyIH0pID0+IHtcclxuICBjb25zdCBbY2F0ZWdvcmllcywgc2V0Q2F0ZWdvcmllc10gPSB1c2VTdGF0ZSgpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBheGlvcy5nZXQoXCJodHRwOi8vbG9jYWxob3N0OjMwMDEvcHJvZHVjdHMvXCIpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICBsZXQgY2F0ZWdvcnk7XHJcbiAgICAgIGNhdGVnb3J5ID0gcmVzLmRhdGE7XHJcbiAgICAgIHNldENhdGVnb3JpZXMoY2F0ZWdvcnkpO1xyXG4gICAgfSk7XHJcbiAgfSwgW10pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8cD7QktGL0LHQtdGA0LjRgtC1INC60LDRgtC10LPQvtGA0LjRjjo8L3A+XHJcbiAgICAgIDxzZWxlY3RcclxuICAgICAgICBuYW1lPVwiY2F0ZWdvcnlcIlxyXG4gICAgICAgIGlkPVwiMVwiXHJcbiAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICBjYXRlZ29yeVNldHRlciA/IGNhdGVnb3J5U2V0dGVyKGUudGFyZ2V0LnZhbHVlKSA6IG51bGw7XHJcbiAgICAgICAgfX0+XHJcbiAgICAgICAge2NhdGVnb3JpZXMgJiZcclxuICAgICAgICAgIGNhdGVnb3JpZXMubWFwKChjYXRlZ29yeSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtjYXRlZ29yeS5pZENhdGVnb3J5fSB2YWx1ZT17Y2F0ZWdvcnkudmFsdWVDYXRlZ29yeX0+XHJcbiAgICAgICAgICAgICAgICB7Y2F0ZWdvcnkubmFtZUNhdGVnb3J5fVxyXG4gICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfSl9XHJcbiAgICAgIDwvc2VsZWN0PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZpbHRlckNhdGVnb3J5O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImF4aW9zIiwiRmlsdGVyQ2F0ZWdvcnkiLCJjYXRlZ29yeVNldHRlciIsImNhdGVnb3JpZXMiLCJzZXRDYXRlZ29yaWVzIiwiZ2V0IiwidGhlbiIsInJlcyIsImNhdGVnb3J5IiwiZGF0YSIsImRpdiIsInAiLCJzZWxlY3QiLCJuYW1lIiwiaWQiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm1hcCIsIm9wdGlvbiIsInZhbHVlQ2F0ZWdvcnkiLCJuYW1lQ2F0ZWdvcnkiLCJpZENhdGVnb3J5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/FilterCategory/FilterCategory.jsx\n"));

/***/ })

});