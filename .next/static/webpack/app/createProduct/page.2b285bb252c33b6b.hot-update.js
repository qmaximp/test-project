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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst FilterCategoryCreate = (param)=>{\n    let { categorySetter } = param;\n    _s();\n    const [categories, setCategories] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"http://localhost:3001/categories/\").then((res)=>{\n            const newRes = Array.isArray(res.data) ? res.data.slice(1) : [];\n            let category;\n            category = newRes;\n            setCategories(category);\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Выберите категорию:\"\n            }, void 0, false, {\n                fileName: \"C:\\\\proj\\\\test-project\\\\src\\\\components\\\\FilterCategory\\\\FilterCategoryCreate.jsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                name: \"category\",\n                id: \"1\",\n                onSelect: (e)=>{\n                    categorySetter ? categorySetter(e.target.value) : nulcategorySetter(e.target.value);\n                },\n                onChange: (e)=>{\n                    categorySetter ? categorySetter(e.target.value) : categorySetter(e.target.value);\n                },\n                children: categories && categories.map((category)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                        value: category.valueCategory,\n                        children: category.nameCategory\n                    }, category.idCategory, false, {\n                        fileName: \"C:\\\\proj\\\\test-project\\\\src\\\\components\\\\FilterCategory\\\\FilterCategoryCreate.jsx\",\n                        lineNumber: 34,\n                        columnNumber: 15\n                    }, undefined);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\proj\\\\test-project\\\\src\\\\components\\\\FilterCategory\\\\FilterCategoryCreate.jsx\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\proj\\\\test-project\\\\src\\\\components\\\\FilterCategory\\\\FilterCategoryCreate.jsx\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, undefined);\n};\n_s(FilterCategoryCreate, \"Gh5OJe89zyGiCiLFoJEZyHbKc3U=\");\n_c = FilterCategoryCreate;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FilterCategoryCreate);\nvar _c;\n$RefreshReg$(_c, \"FilterCategoryCreate\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0ZpbHRlckNhdGVnb3J5L0ZpbHRlckNhdGVnb3J5Q3JlYXRlLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ21EO0FBQ3pCO0FBRTFCLE1BQU1JLHVCQUF1QjtRQUFDLEVBQUVDLGNBQWMsRUFBRTs7SUFDOUMsTUFBTSxDQUFDQyxZQUFZQyxjQUFjLEdBQUdMLCtDQUFRQTtJQUM1Q0QsZ0RBQVNBLENBQUM7UUFDUkUsNkNBQUtBLENBQUNLLEdBQUcsQ0FBQyxxQ0FBcUNDLElBQUksQ0FBQyxDQUFDQztZQUNuRCxNQUFNQyxTQUFTQyxNQUFNQyxPQUFPLENBQUNILElBQUlJLElBQUksSUFBSUosSUFBSUksSUFBSSxDQUFDQyxLQUFLLENBQUMsS0FBSyxFQUFFO1lBQy9ELElBQUlDO1lBQ0pBLFdBQVdMO1lBQ1hKLGNBQWNTO1FBQ2hCO0lBQ0YsR0FBRyxFQUFFO0lBQ0wscUJBQ0UsOERBQUNDOzswQkFDQyw4REFBQ0M7MEJBQUU7Ozs7OzswQkFDSCw4REFBQ0M7Z0JBQ0NDLE1BQUs7Z0JBQ0xDLElBQUc7Z0JBQ0hDLFVBQVUsQ0FBQ0M7b0JBQ1RsQixpQkFDSUEsZUFBZWtCLEVBQUVDLE1BQU0sQ0FBQ0MsS0FBSyxJQUM3QkMsa0JBQWtCSCxFQUFFQyxNQUFNLENBQUNDLEtBQUs7Z0JBQ3RDO2dCQUNBRSxVQUFVLENBQUNKO29CQUNUbEIsaUJBQ0lBLGVBQWVrQixFQUFFQyxNQUFNLENBQUNDLEtBQUssSUFDN0JwQixlQUFla0IsRUFBRUMsTUFBTSxDQUFDQyxLQUFLO2dCQUNuQzswQkFDQ25CLGNBQ0NBLFdBQVdzQixHQUFHLENBQUMsQ0FBQ1o7b0JBQ2QscUJBQ0UsOERBQUNhO3dCQUFpQ0osT0FBT1QsU0FBU2MsYUFBYTtrQ0FDNURkLFNBQVNlLFlBQVk7dUJBRFhmLFNBQVNnQixVQUFVOzs7OztnQkFJcEM7Ozs7Ozs7Ozs7OztBQUlWO0dBckNNNUI7S0FBQUE7QUF1Q04sK0RBQWVBLG9CQUFvQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9GaWx0ZXJDYXRlZ29yeS9GaWx0ZXJDYXRlZ29yeUNyZWF0ZS5qc3g/YjM1MSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuY29uc3QgRmlsdGVyQ2F0ZWdvcnlDcmVhdGUgPSAoeyBjYXRlZ29yeVNldHRlciB9KSA9PiB7XHJcbiAgY29uc3QgW2NhdGVnb3JpZXMsIHNldENhdGVnb3JpZXNdID0gdXNlU3RhdGUoKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgYXhpb3MuZ2V0KFwiaHR0cDovL2xvY2FsaG9zdDozMDAxL2NhdGVnb3JpZXMvXCIpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICBjb25zdCBuZXdSZXMgPSBBcnJheS5pc0FycmF5KHJlcy5kYXRhKSA/IHJlcy5kYXRhLnNsaWNlKDEpIDogW107XHJcbiAgICAgIGxldCBjYXRlZ29yeTtcclxuICAgICAgY2F0ZWdvcnkgPSBuZXdSZXM7XHJcbiAgICAgIHNldENhdGVnb3JpZXMoY2F0ZWdvcnkpO1xyXG4gICAgfSk7XHJcbiAgfSwgW10pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8cD7QktGL0LHQtdGA0LjRgtC1INC60LDRgtC10LPQvtGA0LjRjjo8L3A+XHJcbiAgICAgIDxzZWxlY3RcclxuICAgICAgICBuYW1lPVwiY2F0ZWdvcnlcIlxyXG4gICAgICAgIGlkPVwiMVwiXHJcbiAgICAgICAgb25TZWxlY3Q9eyhlKSA9PiB7XHJcbiAgICAgICAgICBjYXRlZ29yeVNldHRlclxyXG4gICAgICAgICAgICA/IGNhdGVnb3J5U2V0dGVyKGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgICAgICAgICA6IG51bGNhdGVnb3J5U2V0dGVyKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICB9fVxyXG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgY2F0ZWdvcnlTZXR0ZXJcclxuICAgICAgICAgICAgPyBjYXRlZ29yeVNldHRlcihlLnRhcmdldC52YWx1ZSlcclxuICAgICAgICAgICAgOiBjYXRlZ29yeVNldHRlcihlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgfX0+XHJcbiAgICAgICAge2NhdGVnb3JpZXMgJiZcclxuICAgICAgICAgIGNhdGVnb3JpZXMubWFwKChjYXRlZ29yeSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtjYXRlZ29yeS5pZENhdGVnb3J5fSB2YWx1ZT17Y2F0ZWdvcnkudmFsdWVDYXRlZ29yeX0+XHJcbiAgICAgICAgICAgICAgICB7Y2F0ZWdvcnkubmFtZUNhdGVnb3J5fVxyXG4gICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfSl9XHJcbiAgICAgIDwvc2VsZWN0PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZpbHRlckNhdGVnb3J5Q3JlYXRlO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImF4aW9zIiwiRmlsdGVyQ2F0ZWdvcnlDcmVhdGUiLCJjYXRlZ29yeVNldHRlciIsImNhdGVnb3JpZXMiLCJzZXRDYXRlZ29yaWVzIiwiZ2V0IiwidGhlbiIsInJlcyIsIm5ld1JlcyIsIkFycmF5IiwiaXNBcnJheSIsImRhdGEiLCJzbGljZSIsImNhdGVnb3J5IiwiZGl2IiwicCIsInNlbGVjdCIsIm5hbWUiLCJpZCIsIm9uU2VsZWN0IiwiZSIsInRhcmdldCIsInZhbHVlIiwibnVsY2F0ZWdvcnlTZXR0ZXIiLCJvbkNoYW5nZSIsIm1hcCIsIm9wdGlvbiIsInZhbHVlQ2F0ZWdvcnkiLCJuYW1lQ2F0ZWdvcnkiLCJpZENhdGVnb3J5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/FilterCategory/FilterCategoryCreate.jsx\n"));

/***/ })

});