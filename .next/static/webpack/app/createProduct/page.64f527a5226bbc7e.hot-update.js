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

/***/ "(app-pages-browser)/./src/components/FilterCategory/FilterCategoryCreate.jsx":
/*!****************************************************************!*\
  !*** ./src/components/FilterCategory/FilterCategoryCreate.jsx ***!
  \****************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst FilterCategoryCreate = (param)=>{\n    let { categorySetter } = param;\n    _s();\n    const [categories, setCategories] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"http://localhost:3001/categories/\").then((res)=>{\n            const newRes = Array.isArray(res.data) ? res.data.slice(1) : [];\n            let category;\n            category = newRes;\n            setCategories(0);\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Выберите категорию:\"\n            }, void 0, false, {\n                fileName: \"C:\\\\proj\\\\test-project\\\\src\\\\components\\\\FilterCategory\\\\FilterCategoryCreate.jsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                name: \"category\",\n                id: \"1\",\n                onSelect: (e)=>{\n                    categorySetter ? categorySetter(e.target.value) : null;\n                },\n                onChange: (e)=>{\n                    categorySetter ? categorySetter(e.target.value) : null;\n                },\n                children: categories && categories.map((category)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                        value: category.valueCategory,\n                        children: category.nameCategory\n                    }, category.idCategory, false, {\n                        fileName: \"C:\\\\proj\\\\test-project\\\\src\\\\components\\\\FilterCategory\\\\FilterCategoryCreate.jsx\",\n                        lineNumber: 30,\n                        columnNumber: 15\n                    }, undefined);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\proj\\\\test-project\\\\src\\\\components\\\\FilterCategory\\\\FilterCategoryCreate.jsx\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\proj\\\\test-project\\\\src\\\\components\\\\FilterCategory\\\\FilterCategoryCreate.jsx\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, undefined);\n};\n_s(FilterCategoryCreate, \"Gh5OJe89zyGiCiLFoJEZyHbKc3U=\");\n_c = FilterCategoryCreate;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FilterCategoryCreate);\nvar _c;\n$RefreshReg$(_c, \"FilterCategoryCreate\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0ZpbHRlckNhdGVnb3J5L0ZpbHRlckNhdGVnb3J5Q3JlYXRlLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ21EO0FBQ3pCO0FBRTFCLE1BQU1JLHVCQUF1QjtRQUFDLEVBQUVDLGNBQWMsRUFBRTs7SUFDOUMsTUFBTSxDQUFDQyxZQUFZQyxjQUFjLEdBQUdMLCtDQUFRQTtJQUM1Q0QsZ0RBQVNBLENBQUM7UUFDUkUsNkNBQUtBLENBQUNLLEdBQUcsQ0FBQyxxQ0FBcUNDLElBQUksQ0FBQyxDQUFDQztZQUNuRCxNQUFNQyxTQUFTQyxNQUFNQyxPQUFPLENBQUNILElBQUlJLElBQUksSUFBSUosSUFBSUksSUFBSSxDQUFDQyxLQUFLLENBQUMsS0FBSyxFQUFFO1lBQy9ELElBQUlDO1lBQ0pBLFdBQVdMO1lBQ1hKLGNBQWM7UUFDaEI7SUFDRixHQUFHLEVBQUU7SUFDTCxxQkFDRSw4REFBQ1U7OzBCQUNDLDhEQUFDQzswQkFBRTs7Ozs7OzBCQUNILDhEQUFDQztnQkFDQ0MsTUFBSztnQkFDTEMsSUFBRztnQkFDSEMsVUFBVSxDQUFDQztvQkFDVGxCLGlCQUFpQkEsZUFBZWtCLEVBQUVDLE1BQU0sQ0FBQ0MsS0FBSyxJQUFJO2dCQUNwRDtnQkFDQUMsVUFBVSxDQUFDSDtvQkFDVGxCLGlCQUFpQkEsZUFBZWtCLEVBQUVDLE1BQU0sQ0FBQ0MsS0FBSyxJQUFJO2dCQUNwRDswQkFDQ25CLGNBQ0NBLFdBQVdxQixHQUFHLENBQUMsQ0FBQ1g7b0JBQ2QscUJBQ0UsOERBQUNZO3dCQUFpQ0gsT0FBT1QsU0FBU2EsYUFBYTtrQ0FDNURiLFNBQVNjLFlBQVk7dUJBRFhkLFNBQVNlLFVBQVU7Ozs7O2dCQUlwQzs7Ozs7Ozs7Ozs7O0FBSVY7R0FqQ00zQjtLQUFBQTtBQW1DTiwrREFBZUEsb0JBQW9CQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0ZpbHRlckNhdGVnb3J5L0ZpbHRlckNhdGVnb3J5Q3JlYXRlLmpzeD9iMzUxIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5jb25zdCBGaWx0ZXJDYXRlZ29yeUNyZWF0ZSA9ICh7IGNhdGVnb3J5U2V0dGVyIH0pID0+IHtcclxuICBjb25zdCBbY2F0ZWdvcmllcywgc2V0Q2F0ZWdvcmllc10gPSB1c2VTdGF0ZSgpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBheGlvcy5nZXQoXCJodHRwOi8vbG9jYWxob3N0OjMwMDEvY2F0ZWdvcmllcy9cIikudGhlbigocmVzKSA9PiB7XHJcbiAgICAgIGNvbnN0IG5ld1JlcyA9IEFycmF5LmlzQXJyYXkocmVzLmRhdGEpID8gcmVzLmRhdGEuc2xpY2UoMSkgOiBbXTtcclxuICAgICAgbGV0IGNhdGVnb3J5O1xyXG4gICAgICBjYXRlZ29yeSA9IG5ld1JlcztcclxuICAgICAgc2V0Q2F0ZWdvcmllcygwKTtcclxuICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPHA+0JLRi9Cx0LXRgNC40YLQtSDQutCw0YLQtdCz0L7RgNC40Y46PC9wPlxyXG4gICAgICA8c2VsZWN0XHJcbiAgICAgICAgbmFtZT1cImNhdGVnb3J5XCJcclxuICAgICAgICBpZD1cIjFcIlxyXG4gICAgICAgIG9uU2VsZWN0PXsoZSkgPT4ge1xyXG4gICAgICAgICAgY2F0ZWdvcnlTZXR0ZXIgPyBjYXRlZ29yeVNldHRlcihlLnRhcmdldC52YWx1ZSkgOiBudWxsO1xyXG4gICAgICAgIH19XHJcbiAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICBjYXRlZ29yeVNldHRlciA/IGNhdGVnb3J5U2V0dGVyKGUudGFyZ2V0LnZhbHVlKSA6IG51bGw7XHJcbiAgICAgICAgfX0+XHJcbiAgICAgICAge2NhdGVnb3JpZXMgJiZcclxuICAgICAgICAgIGNhdGVnb3JpZXMubWFwKChjYXRlZ29yeSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtjYXRlZ29yeS5pZENhdGVnb3J5fSB2YWx1ZT17Y2F0ZWdvcnkudmFsdWVDYXRlZ29yeX0+XHJcbiAgICAgICAgICAgICAgICB7Y2F0ZWdvcnkubmFtZUNhdGVnb3J5fVxyXG4gICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfSl9XHJcbiAgICAgIDwvc2VsZWN0PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZpbHRlckNhdGVnb3J5Q3JlYXRlO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImF4aW9zIiwiRmlsdGVyQ2F0ZWdvcnlDcmVhdGUiLCJjYXRlZ29yeVNldHRlciIsImNhdGVnb3JpZXMiLCJzZXRDYXRlZ29yaWVzIiwiZ2V0IiwidGhlbiIsInJlcyIsIm5ld1JlcyIsIkFycmF5IiwiaXNBcnJheSIsImRhdGEiLCJzbGljZSIsImNhdGVnb3J5IiwiZGl2IiwicCIsInNlbGVjdCIsIm5hbWUiLCJpZCIsIm9uU2VsZWN0IiwiZSIsInRhcmdldCIsInZhbHVlIiwib25DaGFuZ2UiLCJtYXAiLCJvcHRpb24iLCJ2YWx1ZUNhdGVnb3J5IiwibmFtZUNhdGVnb3J5IiwiaWRDYXRlZ29yeSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/FilterCategory/FilterCategoryCreate.jsx\n"));

/***/ })

});