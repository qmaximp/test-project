"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/createProduct/page",{

/***/ "(app-pages-browser)/./src/components/FilterCategory/FilterCategory.jsx":
/*!**********************************************************!*\
  !*** ./src/components/FilterCategory/FilterCategory.jsx ***!
  \**********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst FilterCategory = (param)=>{\n    let { categorySetter, value } = param;\n    _s();\n    const [categories, setCategories] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"http://localhost:3001/categories/\").then((res)=>{\n            /* const newRes = Array.isArray(res.data) ? res.data.slice(1) : []; */ let category;\n            category = res.data;\n            console.log(category = {\n                value\n            });\n            setCategories(category);\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Выберите категорию:\"\n            }, void 0, false, {\n                fileName: \"E:\\\\work\\\\test-project\\\\src\\\\components\\\\FilterCategory\\\\FilterCategory.jsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                name: \"category\",\n                id: \"1\",\n                onChange: (e)=>{\n                    categorySetter ? categorySetter(e.target.value) : null;\n                },\n                children: categories && categories.map((category)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                        value: category.valueCategory,\n                        children: category.nameCategory\n                    }, category.idCategory, false, {\n                        fileName: \"E:\\\\work\\\\test-project\\\\src\\\\components\\\\FilterCategory\\\\FilterCategory.jsx\",\n                        lineNumber: 29,\n                        columnNumber: 15\n                    }, undefined);\n                })\n            }, void 0, false, {\n                fileName: \"E:\\\\work\\\\test-project\\\\src\\\\components\\\\FilterCategory\\\\FilterCategory.jsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\work\\\\test-project\\\\src\\\\components\\\\FilterCategory\\\\FilterCategory.jsx\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, undefined);\n};\n_s(FilterCategory, \"Gh5OJe89zyGiCiLFoJEZyHbKc3U=\");\n_c = FilterCategory;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FilterCategory);\nvar _c;\n$RefreshReg$(_c, \"FilterCategory\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0ZpbHRlckNhdGVnb3J5L0ZpbHRlckNhdGVnb3J5LmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ21EO0FBQ3pCO0FBRTFCLE1BQU1JLGlCQUFpQjtRQUFDLEVBQUVDLGNBQWMsRUFBRUMsS0FBSyxFQUFFOztJQUMvQyxNQUFNLENBQUNDLFlBQVlDLGNBQWMsR0FBR04sK0NBQVFBO0lBQzVDRCxnREFBU0EsQ0FBQztRQUNSRSw2Q0FBS0EsQ0FBQ00sR0FBRyxDQUFDLHFDQUFxQ0MsSUFBSSxDQUFDLENBQUNDO1lBQ25ELG9FQUFvRSxHQUNwRSxJQUFJQztZQUNKQSxXQUFXRCxJQUFJRSxJQUFJO1lBRW5CQyxRQUFRQyxHQUFHLENBQUVILFdBQVc7Z0JBQUVOO1lBQU07WUFDaENFLGNBQWNJO1FBQ2hCO0lBQ0YsR0FBRyxFQUFFO0lBQ0wscUJBQ0UsOERBQUNJOzswQkFDQyw4REFBQ0M7MEJBQUU7Ozs7OzswQkFDSCw4REFBQ0M7Z0JBQ0NDLE1BQUs7Z0JBQ0xDLElBQUc7Z0JBQ0hDLFVBQVUsQ0FBQ0M7b0JBQ1RqQixpQkFBaUJBLGVBQWVpQixFQUFFQyxNQUFNLENBQUNqQixLQUFLLElBQUk7Z0JBQ3BEOzBCQUNDQyxjQUNDQSxXQUFXaUIsR0FBRyxDQUFDLENBQUNaO29CQUNkLHFCQUNFLDhEQUFDYTt3QkFBaUNuQixPQUFPTSxTQUFTYyxhQUFhO2tDQUM1RGQsU0FBU2UsWUFBWTt1QkFEWGYsU0FBU2dCLFVBQVU7Ozs7O2dCQUlwQzs7Ozs7Ozs7Ozs7O0FBSVY7R0FoQ014QjtLQUFBQTtBQWtDTiwrREFBZUEsY0FBY0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9GaWx0ZXJDYXRlZ29yeS9GaWx0ZXJDYXRlZ29yeS5qc3g/YjY1ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuY29uc3QgRmlsdGVyQ2F0ZWdvcnkgPSAoeyBjYXRlZ29yeVNldHRlciwgdmFsdWUgfSkgPT4ge1xyXG4gIGNvbnN0IFtjYXRlZ29yaWVzLCBzZXRDYXRlZ29yaWVzXSA9IHVzZVN0YXRlKCk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGF4aW9zLmdldChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9jYXRlZ29yaWVzL1wiKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgLyogY29uc3QgbmV3UmVzID0gQXJyYXkuaXNBcnJheShyZXMuZGF0YSkgPyByZXMuZGF0YS5zbGljZSgxKSA6IFtdOyAqL1xyXG4gICAgICBsZXQgY2F0ZWdvcnk7XHJcbiAgICAgIGNhdGVnb3J5ID0gcmVzLmRhdGE7XHJcblxyXG4gICAgICBjb25zb2xlLmxvZygoY2F0ZWdvcnkgPSB7IHZhbHVlIH0pKTtcclxuICAgICAgc2V0Q2F0ZWdvcmllcyhjYXRlZ29yeSk7XHJcbiAgICB9KTtcclxuICB9LCBbXSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxwPtCS0YvQsdC10YDQuNGC0LUg0LrQsNGC0LXQs9C+0YDQuNGOOjwvcD5cclxuICAgICAgPHNlbGVjdFxyXG4gICAgICAgIG5hbWU9XCJjYXRlZ29yeVwiXHJcbiAgICAgICAgaWQ9XCIxXCJcclxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgIGNhdGVnb3J5U2V0dGVyID8gY2F0ZWdvcnlTZXR0ZXIoZS50YXJnZXQudmFsdWUpIDogbnVsbDtcclxuICAgICAgICB9fT5cclxuICAgICAgICB7Y2F0ZWdvcmllcyAmJlxyXG4gICAgICAgICAgY2F0ZWdvcmllcy5tYXAoKGNhdGVnb3J5KSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2NhdGVnb3J5LmlkQ2F0ZWdvcnl9IHZhbHVlPXtjYXRlZ29yeS52YWx1ZUNhdGVnb3J5fT5cclxuICAgICAgICAgICAgICAgIHtjYXRlZ29yeS5uYW1lQ2F0ZWdvcnl9XHJcbiAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9KX1cclxuICAgICAgPC9zZWxlY3Q+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmlsdGVyQ2F0ZWdvcnk7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiYXhpb3MiLCJGaWx0ZXJDYXRlZ29yeSIsImNhdGVnb3J5U2V0dGVyIiwidmFsdWUiLCJjYXRlZ29yaWVzIiwic2V0Q2F0ZWdvcmllcyIsImdldCIsInRoZW4iLCJyZXMiLCJjYXRlZ29yeSIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwicCIsInNlbGVjdCIsIm5hbWUiLCJpZCIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsIm1hcCIsIm9wdGlvbiIsInZhbHVlQ2F0ZWdvcnkiLCJuYW1lQ2F0ZWdvcnkiLCJpZENhdGVnb3J5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/FilterCategory/FilterCategory.jsx\n"));

/***/ })

});