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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst FilterCategory = (param)=>{\n    let { categorySetter } = param;\n    _s();\n    const [categories, setCategories] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"http://localhost:3001/categories/\").then((res)=>{\n            const newRes = Array.isArray(res.data) ? res.data.slice(1) : [];\n            let category;\n            category = res.data;\n            setCategories(category);\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Выберите категорию:\"\n            }, void 0, false, {\n                fileName: \"E:\\\\work\\\\test-project\\\\src\\\\components\\\\FilterCategory\\\\FilterCategory.jsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                name: \"category\",\n                id: \"1\",\n                onChange: (e)=>{\n                    categorySetter ? categorySetter(e.target.value) : null;\n                },\n                children: categories && categories.map((category)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                        value: category.valueCategory,\n                        children: category.nameCategory\n                    }, category.idCategory, false, {\n                        fileName: \"E:\\\\work\\\\test-project\\\\src\\\\components\\\\FilterCategory\\\\FilterCategory.jsx\",\n                        lineNumber: 27,\n                        columnNumber: 15\n                    }, undefined);\n                })\n            }, void 0, false, {\n                fileName: \"E:\\\\work\\\\test-project\\\\src\\\\components\\\\FilterCategory\\\\FilterCategory.jsx\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\work\\\\test-project\\\\src\\\\components\\\\FilterCategory\\\\FilterCategory.jsx\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, undefined);\n};\n_s(FilterCategory, \"Gh5OJe89zyGiCiLFoJEZyHbKc3U=\");\n_c = FilterCategory;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FilterCategory);\nvar _c;\n$RefreshReg$(_c, \"FilterCategory\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0ZpbHRlckNhdGVnb3J5L0ZpbHRlckNhdGVnb3J5LmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ21EO0FBQ3pCO0FBRTFCLE1BQU1JLGlCQUFpQjtRQUFDLEVBQUVDLGNBQWMsRUFBRTs7SUFDeEMsTUFBTSxDQUFDQyxZQUFZQyxjQUFjLEdBQUdMLCtDQUFRQTtJQUM1Q0QsZ0RBQVNBLENBQUM7UUFDUkUsNkNBQUtBLENBQUNLLEdBQUcsQ0FBQyxxQ0FBcUNDLElBQUksQ0FBQyxDQUFDQztZQUNuRCxNQUFNQyxTQUFTQyxNQUFNQyxPQUFPLENBQUNILElBQUlJLElBQUksSUFBSUosSUFBSUksSUFBSSxDQUFDQyxLQUFLLENBQUMsS0FBSyxFQUFFO1lBQy9ELElBQUlDO1lBQ0pBLFdBQVdOLElBQUlJLElBQUk7WUFDbkJQLGNBQWNTO1FBQ2hCO0lBQ0YsR0FBRyxFQUFFO0lBQ0wscUJBQ0UsOERBQUNDOzswQkFDQyw4REFBQ0M7MEJBQUU7Ozs7OzswQkFDSCw4REFBQ0M7Z0JBQ0NDLE1BQUs7Z0JBQ0xDLElBQUc7Z0JBQ0hDLFVBQVUsQ0FBQ0M7b0JBQ1RsQixpQkFBaUJBLGVBQWVrQixFQUFFQyxNQUFNLENBQUNDLEtBQUssSUFBSTtnQkFDcEQ7MEJBQ0NuQixjQUNDQSxXQUFXb0IsR0FBRyxDQUFDLENBQUNWO29CQUNkLHFCQUNFLDhEQUFDVzt3QkFBaUNGLE9BQU9ULFNBQVNZLGFBQWE7a0NBQzVEWixTQUFTYSxZQUFZO3VCQURYYixTQUFTYyxVQUFVOzs7OztnQkFJcEM7Ozs7Ozs7Ozs7OztBQUlWO0dBOUJNMUI7S0FBQUE7QUFnQ04sK0RBQWVBLGNBQWNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRmlsdGVyQ2F0ZWdvcnkvRmlsdGVyQ2F0ZWdvcnkuanN4P2I2NWYiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmNvbnN0IEZpbHRlckNhdGVnb3J5ID0gKHsgY2F0ZWdvcnlTZXR0ZXIgfSkgPT4ge1xyXG4gIGNvbnN0IFtjYXRlZ29yaWVzLCBzZXRDYXRlZ29yaWVzXSA9IHVzZVN0YXRlKCk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGF4aW9zLmdldChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9jYXRlZ29yaWVzL1wiKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgY29uc3QgbmV3UmVzID0gQXJyYXkuaXNBcnJheShyZXMuZGF0YSkgPyByZXMuZGF0YS5zbGljZSgxKSA6IFtdO1xyXG4gICAgICBsZXQgY2F0ZWdvcnk7XHJcbiAgICAgIGNhdGVnb3J5ID0gcmVzLmRhdGE7XHJcbiAgICAgIHNldENhdGVnb3JpZXMoY2F0ZWdvcnkpO1xyXG4gICAgfSk7XHJcbiAgfSwgW10pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8cD7QktGL0LHQtdGA0LjRgtC1INC60LDRgtC10LPQvtGA0LjRjjo8L3A+XHJcbiAgICAgIDxzZWxlY3RcclxuICAgICAgICBuYW1lPVwiY2F0ZWdvcnlcIlxyXG4gICAgICAgIGlkPVwiMVwiXHJcbiAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICBjYXRlZ29yeVNldHRlciA/IGNhdGVnb3J5U2V0dGVyKGUudGFyZ2V0LnZhbHVlKSA6IG51bGw7XHJcbiAgICAgICAgfX0+XHJcbiAgICAgICAge2NhdGVnb3JpZXMgJiZcclxuICAgICAgICAgIGNhdGVnb3JpZXMubWFwKChjYXRlZ29yeSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtjYXRlZ29yeS5pZENhdGVnb3J5fSB2YWx1ZT17Y2F0ZWdvcnkudmFsdWVDYXRlZ29yeX0+XHJcbiAgICAgICAgICAgICAgICB7Y2F0ZWdvcnkubmFtZUNhdGVnb3J5fVxyXG4gICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfSl9XHJcbiAgICAgIDwvc2VsZWN0PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZpbHRlckNhdGVnb3J5O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImF4aW9zIiwiRmlsdGVyQ2F0ZWdvcnkiLCJjYXRlZ29yeVNldHRlciIsImNhdGVnb3JpZXMiLCJzZXRDYXRlZ29yaWVzIiwiZ2V0IiwidGhlbiIsInJlcyIsIm5ld1JlcyIsIkFycmF5IiwiaXNBcnJheSIsImRhdGEiLCJzbGljZSIsImNhdGVnb3J5IiwiZGl2IiwicCIsInNlbGVjdCIsIm5hbWUiLCJpZCIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwibWFwIiwib3B0aW9uIiwidmFsdWVDYXRlZ29yeSIsIm5hbWVDYXRlZ29yeSIsImlkQ2F0ZWdvcnkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/FilterCategory/FilterCategory.jsx\n"));

/***/ })

});