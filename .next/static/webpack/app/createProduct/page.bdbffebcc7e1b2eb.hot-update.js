/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/createProduct/page",{

/***/ "(app-pages-browser)/./node_modules/next/dist/build/polyfills/process.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/build/polyfills/process.js ***!
  \***********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("\nvar _global_process, _global_process1;\nmodule.exports = ((_global_process = __webpack_require__.g.process) == null ? void 0 : _global_process.env) && typeof ((_global_process1 = __webpack_require__.g.process) == null ? void 0 : _global_process1.env) === \"object\" ? __webpack_require__.g.process : __webpack_require__(/*! next/dist/compiled/process */ \"(app-pages-browser)/./node_modules/next/dist/compiled/process/browser.js\");\n\n//# sourceMappingURL=process.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvcG9seWZpbGxzL3Byb2Nlc3MuanMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYjtBQUNBLHFDQUFxQyxxQkFBTSxpRkFBaUYscUJBQU0sa0VBQWtFLHFCQUFNLFdBQVcsbUJBQU8sQ0FBQyw0R0FBNEI7O0FBRXpQIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvcG9seWZpbGxzL3Byb2Nlc3MuanM/N2FhNSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbnZhciBfZ2xvYmFsX3Byb2Nlc3MsIF9nbG9iYWxfcHJvY2VzczE7XG5tb2R1bGUuZXhwb3J0cyA9ICgoX2dsb2JhbF9wcm9jZXNzID0gZ2xvYmFsLnByb2Nlc3MpID09IG51bGwgPyB2b2lkIDAgOiBfZ2xvYmFsX3Byb2Nlc3MuZW52KSAmJiB0eXBlb2YgKChfZ2xvYmFsX3Byb2Nlc3MxID0gZ2xvYmFsLnByb2Nlc3MpID09IG51bGwgPyB2b2lkIDAgOiBfZ2xvYmFsX3Byb2Nlc3MxLmVudikgPT09IFwib2JqZWN0XCIgPyBnbG9iYWwucHJvY2VzcyA6IHJlcXVpcmUoXCJuZXh0L2Rpc3QvY29tcGlsZWQvcHJvY2Vzc1wiKTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cHJvY2Vzcy5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./node_modules/next/dist/build/polyfills/process.js\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/components/FormCreateProduct/FormCreateProduct.jsx":
/*!****************************************************************!*\
  !*** ./src/components/FormCreateProduct/FormCreateProduct.jsx ***!
  \****************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _FormCreateProduct_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./FormCreateProduct.module.scss */ \"(app-pages-browser)/./src/components/FormCreateProduct/FormCreateProduct.module.scss\");\n/* harmony import */ var _FormCreateProduct_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_FormCreateProduct_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var _FilterCategory_FilterCategoryCreate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../FilterCategory/FilterCategoryCreate */ \"(app-pages-browser)/./src/components/FilterCategory/FilterCategoryCreate.jsx\");\n/* harmony import */ var process__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! process */ \"(app-pages-browser)/./node_modules/next/dist/build/polyfills/process.js\");\n/* harmony import */ var process__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(process__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst FormCreateProduct = ()=>{\n    _s();\n    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [description, setDescription] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [price, setPrice] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [category, setCategory] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [phone, setPhone] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        let data = {\n            title,\n            description,\n            price\n        };\n        console.log(data);\n        axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].post(\"http://localhost:3001/create/\", process__WEBPACK_IMPORTED_MODULE_3__.config.data).then((res)=>{\n            console.log(res.config.data);\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_FormCreateProduct_module_scss__WEBPACK_IMPORTED_MODULE_5___default().formCreateProduct),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                placeholder: \"загаловок\",\n                required: true,\n                value: title,\n                onChange: (e)=>{\n                    setTitle(e.target.value);\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\proj\\\\test-project\\\\src\\\\components\\\\FormCreateProduct\\\\FormCreateProduct.jsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                placeholder: \"описание\",\n                required: true,\n                value: description,\n                onChange: (e)=>{\n                    setDescription(e.target.value);\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\proj\\\\test-project\\\\src\\\\components\\\\FormCreateProduct\\\\FormCreateProduct.jsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                placeholder: \"цена\",\n                required: true,\n                value: price,\n                onChange: (e)=>{\n                    setPrice(e.target.value);\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\proj\\\\test-project\\\\src\\\\components\\\\FormCreateProduct\\\\FormCreateProduct.jsx\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"submit\",\n                onClick: handleSubmit,\n                children: \"Разместить\"\n            }, void 0, false, {\n                fileName: \"C:\\\\proj\\\\test-project\\\\src\\\\components\\\\FormCreateProduct\\\\FormCreateProduct.jsx\",\n                lineNumber: 81,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\proj\\\\test-project\\\\src\\\\components\\\\FormCreateProduct\\\\FormCreateProduct.jsx\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, undefined);\n};\n_s(FormCreateProduct, \"pSJYGdGhvzeuN/oQvjrZhZdTnus=\");\n_c = FormCreateProduct;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FormCreateProduct);\nvar _c;\n$RefreshReg$(_c, \"FormCreateProduct\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0Zvcm1DcmVhdGVQcm9kdWN0L0Zvcm1DcmVhdGVQcm9kdWN0LmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFFbUQ7QUFDRDtBQUN4QjtBQUNnRDtBQUN6QztBQUVqQyxNQUFNTyxvQkFBb0I7O0lBQ3hCLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHUCwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLENBQUNRLGFBQWFDLGVBQWUsR0FBR1QsK0NBQVFBLENBQUM7SUFDL0MsTUFBTSxDQUFDVSxPQUFPQyxTQUFTLEdBQUdYLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ1ksVUFBVUMsWUFBWSxHQUFHYiwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNLENBQUNjLE9BQU9DLFNBQVMsR0FBR2YsK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDZ0IsTUFBTUMsUUFBUSxHQUFHakIsK0NBQVFBLENBQUM7SUFDakMsTUFBTSxDQUFDa0IsTUFBTUMsUUFBUSxHQUFHbkIsK0NBQVFBO0lBQ2hDLE1BQU1vQixlQUFlLENBQUNDO1FBQ3BCQSxFQUFFQyxjQUFjO1FBQ2hCLElBQUlKLE9BQU87WUFDVFo7WUFDQUU7WUFDQUU7UUFJRjtRQUNBYSxRQUFRQyxHQUFHLENBQUNOO1FBQ1poQiw2Q0FBS0EsQ0FBQ3VCLElBQUksQ0FBQyxpQ0FBaUNyQiwyQ0FBTUEsQ0FBQ2MsSUFBSSxFQUFFUSxJQUFJLENBQUMsQ0FBQ0M7WUFDN0RKLFFBQVFDLEdBQUcsQ0FBQ0csSUFBSXZCLE1BQU0sQ0FBQ2MsSUFBSTtRQUM3QjtJQUNGO0lBRUEscUJBQ0UsOERBQUNVO1FBQUlDLFdBQVc1Qix5RkFBcUI7OzBCQUNuQyw4REFBQzhCO2dCQUNDQyxNQUFLO2dCQUNMQyxhQUFZO2dCQUNaQyxRQUFRO2dCQUNSQyxPQUFPN0I7Z0JBQ1A4QixVQUFVLENBQUNmO29CQUNUZCxTQUFTYyxFQUFFZ0IsTUFBTSxDQUFDRixLQUFLO2dCQUN6Qjs7Ozs7OzBCQUVGLDhEQUFDRztnQkFDQ0wsYUFBWTtnQkFDWkMsUUFBUTtnQkFDUkMsT0FBTzNCO2dCQUNQNEIsVUFBVSxDQUFDZjtvQkFDVFosZUFBZVksRUFBRWdCLE1BQU0sQ0FBQ0YsS0FBSztnQkFDL0I7Ozs7OzswQkFFRiw4REFBQ0o7Z0JBQ0NDLE1BQUs7Z0JBQ0xDLGFBQVk7Z0JBQ1pDLFFBQVE7Z0JBQ1JDLE9BQU96QjtnQkFDUDBCLFVBQVUsQ0FBQ2Y7b0JBQ1RWLFNBQVNVLEVBQUVnQixNQUFNLENBQUNGLEtBQUs7Z0JBQ3pCOzs7Ozs7MEJBc0JGLDhEQUFDSTtnQkFBT1AsTUFBSztnQkFBU1EsU0FBU3BCOzBCQUFjOzs7Ozs7Ozs7Ozs7QUFLbkQ7R0E3RU1mO0tBQUFBO0FBK0VOLCtEQUFlQSxpQkFBaUJBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRm9ybUNyZWF0ZVByb2R1Y3QvRm9ybUNyZWF0ZVByb2R1Y3QuanN4P2IyNjIiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcblxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgY3NzIGZyb20gXCIuL0Zvcm1DcmVhdGVQcm9kdWN0Lm1vZHVsZS5zY3NzXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IEZpbHRlckNhdGVnb3J5Q3JlYXRlIGZyb20gXCIuLi9GaWx0ZXJDYXRlZ29yeS9GaWx0ZXJDYXRlZ29yeUNyZWF0ZVwiO1xyXG5pbXBvcnQgeyBjb25maWcgfSBmcm9tIFwicHJvY2Vzc1wiO1xyXG5cclxuY29uc3QgRm9ybUNyZWF0ZVByb2R1Y3QgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3RpdGxlLCBzZXRUaXRsZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbZGVzY3JpcHRpb24sIHNldERlc2NyaXB0aW9uXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtwcmljZSwgc2V0UHJpY2VdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2NhdGVnb3J5LCBzZXRDYXRlZ29yeV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbcGhvbmUsIHNldFBob25lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGxldCBkYXRhID0ge1xyXG4gICAgICB0aXRsZSxcclxuICAgICAgZGVzY3JpcHRpb24sXHJcbiAgICAgIHByaWNlLFxyXG4gICAgICAvKiAgY2F0ZWdvcnksXHJcbiAgICAgIHBob25lLFxyXG4gICAgICBuYW1lLCAqL1xyXG4gICAgfTtcclxuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgYXhpb3MucG9zdChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9jcmVhdGUvXCIsIGNvbmZpZy5kYXRhKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgY29uc29sZS5sb2cocmVzLmNvbmZpZy5kYXRhKTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzLmZvcm1DcmVhdGVQcm9kdWN0fT5cclxuICAgICAgPGlucHV0XHJcbiAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwi0LfQsNCz0LDQu9C+0LLQvtC6XCJcclxuICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgIHZhbHVlPXt0aXRsZX1cclxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgIHNldFRpdGxlKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICB9fVxyXG4gICAgICAvPlxyXG4gICAgICA8dGV4dGFyZWFcclxuICAgICAgICBwbGFjZWhvbGRlcj1cItC+0L/QuNGB0LDQvdC40LVcIlxyXG4gICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgdmFsdWU9e2Rlc2NyaXB0aW9ufVxyXG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgc2V0RGVzY3JpcHRpb24oZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgIH19XHJcbiAgICAgIC8+XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICBwbGFjZWhvbGRlcj1cItGG0LXQvdCwXCJcclxuICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgIHZhbHVlPXtwcmljZX1cclxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgIHNldFByaWNlKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICB9fVxyXG4gICAgICAvPlxyXG4gICAgICB7LypcclxuICAgICAgICA8RmlsdGVyQ2F0ZWdvcnlDcmVhdGUgLz5cclxuICAgICAgPGlucHV0XHJcbiAgICAgICAgdHlwZT1cInBob25lXCJcclxuICAgICAgICBwbGFjZWhvbGRlcj1cItCj0LrQsNC20LjRgtC1INCy0LDRiCDRgtC10LvQtdGE0L7QvVwiXHJcbiAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICB2YWx1ZT17cGhvbmV9XHJcbiAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICBzZXRQaG9uZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgfX1cclxuICAgICAgLz5cclxuICAgICAgPGlucHV0XHJcbiAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwi0KPQutCw0LbQuNGC0LUg0LLQsNGI0LUg0KTQmNCeXCJcclxuICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgIHZhbHVlPXtuYW1lfVxyXG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgc2V0TmFtZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgfX1cclxuICAgICAgLz4gKi99XHJcbiAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAg0KDQsNC30LzQtdGB0YLQuNGC0YxcclxuICAgICAgPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9ybUNyZWF0ZVByb2R1Y3Q7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiY3NzIiwiYXhpb3MiLCJGaWx0ZXJDYXRlZ29yeUNyZWF0ZSIsImNvbmZpZyIsIkZvcm1DcmVhdGVQcm9kdWN0IiwidGl0bGUiLCJzZXRUaXRsZSIsImRlc2NyaXB0aW9uIiwic2V0RGVzY3JpcHRpb24iLCJwcmljZSIsInNldFByaWNlIiwiY2F0ZWdvcnkiLCJzZXRDYXRlZ29yeSIsInBob25lIiwic2V0UGhvbmUiLCJuYW1lIiwic2V0TmFtZSIsImRhdGEiLCJzZXREYXRhIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsInBvc3QiLCJ0aGVuIiwicmVzIiwiZGl2IiwiY2xhc3NOYW1lIiwiZm9ybUNyZWF0ZVByb2R1Y3QiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInJlcXVpcmVkIiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCIsInRleHRhcmVhIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/FormCreateProduct/FormCreateProduct.jsx\n"));

/***/ }),

/***/ "(app-pages-browser)/./node_modules/next/dist/compiled/process/browser.js":
/*!************************************************************!*\
  !*** ./node_modules/next/dist/compiled/process/browser.js ***!
  \************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("var __dirname = \"/\";\n(function(){var e={229:function(e){var t=e.exports={};var r;var n;function defaultSetTimout(){throw new Error(\"setTimeout has not been defined\")}function defaultClearTimeout(){throw new Error(\"clearTimeout has not been defined\")}(function(){try{if(typeof setTimeout===\"function\"){r=setTimeout}else{r=defaultSetTimout}}catch(e){r=defaultSetTimout}try{if(typeof clearTimeout===\"function\"){n=clearTimeout}else{n=defaultClearTimeout}}catch(e){n=defaultClearTimeout}})();function runTimeout(e){if(r===setTimeout){return setTimeout(e,0)}if((r===defaultSetTimout||!r)&&setTimeout){r=setTimeout;return setTimeout(e,0)}try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}function runClearTimeout(e){if(n===clearTimeout){return clearTimeout(e)}if((n===defaultClearTimeout||!n)&&clearTimeout){n=clearTimeout;return clearTimeout(e)}try{return n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}var i=[];var o=false;var u;var a=-1;function cleanUpNextTick(){if(!o||!u){return}o=false;if(u.length){i=u.concat(i)}else{a=-1}if(i.length){drainQueue()}}function drainQueue(){if(o){return}var e=runTimeout(cleanUpNextTick);o=true;var t=i.length;while(t){u=i;i=[];while(++a<t){if(u){u[a].run()}}a=-1;t=i.length}u=null;o=false;runClearTimeout(e)}t.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1){for(var r=1;r<arguments.length;r++){t[r-1]=arguments[r]}}i.push(new Item(e,t));if(i.length===1&&!o){runTimeout(drainQueue)}};function Item(e,t){this.fun=e;this.array=t}Item.prototype.run=function(){this.fun.apply(null,this.array)};t.title=\"browser\";t.browser=true;t.env={};t.argv=[];t.version=\"\";t.versions={};function noop(){}t.on=noop;t.addListener=noop;t.once=noop;t.off=noop;t.removeListener=noop;t.removeAllListeners=noop;t.emit=noop;t.prependListener=noop;t.prependOnceListener=noop;t.listeners=function(e){return[]};t.binding=function(e){throw new Error(\"process.binding is not supported\")};t.cwd=function(){return\"/\"};t.chdir=function(e){throw new Error(\"process.chdir is not supported\")};t.umask=function(){return 0}}};var t={};function __nccwpck_require__(r){var n=t[r];if(n!==undefined){return n.exports}var i=t[r]={exports:{}};var o=true;try{e[r](i,i.exports,__nccwpck_require__);o=false}finally{if(o)delete t[r]}return i.exports}if(typeof __nccwpck_require__!==\"undefined\")__nccwpck_require__.ab=__dirname+\"/\";var r=__nccwpck_require__(229);module.exports=r})();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcHJvY2Vzcy9icm93c2VyLmpzIiwibWFwcGluZ3MiOiI7QUFBQSxZQUFZLE9BQU8sZ0JBQWdCLG1CQUFtQixNQUFNLE1BQU0sNEJBQTRCLG1EQUFtRCwrQkFBK0IscURBQXFELFlBQVksSUFBSSxtQ0FBbUMsYUFBYSxLQUFLLG9CQUFvQixTQUFTLG1CQUFtQixJQUFJLHFDQUFxQyxlQUFlLEtBQUssdUJBQXVCLFNBQVMsdUJBQXVCLElBQUksdUJBQXVCLG1CQUFtQix1QkFBdUIsMkNBQTJDLGFBQWEsdUJBQXVCLElBQUksY0FBYyxTQUFTLElBQUksd0JBQXdCLFNBQVMsMEJBQTBCLDRCQUE0QixxQkFBcUIsdUJBQXVCLGdEQUFnRCxlQUFlLHVCQUF1QixJQUFJLFlBQVksU0FBUyxJQUFJLHNCQUFzQixTQUFTLHdCQUF3QixTQUFTLFlBQVksTUFBTSxTQUFTLDJCQUEyQixXQUFXLE9BQU8sUUFBUSxhQUFhLGNBQWMsS0FBSyxLQUFLLGFBQWEsY0FBYyxzQkFBc0IsTUFBTSxPQUFPLGtDQUFrQyxPQUFPLGVBQWUsU0FBUyxJQUFJLEtBQUssYUFBYSxNQUFNLFlBQVksS0FBSyxXQUFXLE9BQU8sUUFBUSxtQkFBbUIsdUJBQXVCLG9DQUFvQyx1QkFBdUIsWUFBWSxtQkFBbUIsS0FBSyxxQkFBcUIsc0JBQXNCLHFCQUFxQix5QkFBeUIsbUJBQW1CLFdBQVcsYUFBYSw4QkFBOEIsaUNBQWlDLGtCQUFrQixlQUFlLFNBQVMsVUFBVSxhQUFhLGNBQWMsaUJBQWlCLFVBQVUsbUJBQW1CLFlBQVksV0FBVyxzQkFBc0IsMEJBQTBCLFlBQVksdUJBQXVCLDJCQUEyQix3QkFBd0IsVUFBVSxzQkFBc0IscURBQXFELGlCQUFpQixXQUFXLG9CQUFvQixtREFBbUQsbUJBQW1CLFlBQVksU0FBUyxnQ0FBZ0MsV0FBVyxrQkFBa0IsaUJBQWlCLFlBQVksWUFBWSxXQUFXLElBQUksc0NBQXNDLFFBQVEsUUFBUSxpQkFBaUIsaUJBQWlCLG1FQUFtRSxTQUFTLEtBQUssK0JBQStCLGlCQUFpQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Byb2Nlc3MvYnJvd3Nlci5qcz9hMmRjIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe3ZhciBlPXsyMjk6ZnVuY3Rpb24oZSl7dmFyIHQ9ZS5leHBvcnRzPXt9O3ZhciByO3ZhciBuO2Z1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKXt0aHJvdyBuZXcgRXJyb3IoXCJzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkXCIpfWZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQoKXt0aHJvdyBuZXcgRXJyb3IoXCJjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWRcIil9KGZ1bmN0aW9uKCl7dHJ5e2lmKHR5cGVvZiBzZXRUaW1lb3V0PT09XCJmdW5jdGlvblwiKXtyPXNldFRpbWVvdXR9ZWxzZXtyPWRlZmF1bHRTZXRUaW1vdXR9fWNhdGNoKGUpe3I9ZGVmYXVsdFNldFRpbW91dH10cnl7aWYodHlwZW9mIGNsZWFyVGltZW91dD09PVwiZnVuY3Rpb25cIil7bj1jbGVhclRpbWVvdXR9ZWxzZXtuPWRlZmF1bHRDbGVhclRpbWVvdXR9fWNhdGNoKGUpe249ZGVmYXVsdENsZWFyVGltZW91dH19KSgpO2Z1bmN0aW9uIHJ1blRpbWVvdXQoZSl7aWYocj09PXNldFRpbWVvdXQpe3JldHVybiBzZXRUaW1lb3V0KGUsMCl9aWYoKHI9PT1kZWZhdWx0U2V0VGltb3V0fHwhcikmJnNldFRpbWVvdXQpe3I9c2V0VGltZW91dDtyZXR1cm4gc2V0VGltZW91dChlLDApfXRyeXtyZXR1cm4gcihlLDApfWNhdGNoKHQpe3RyeXtyZXR1cm4gci5jYWxsKG51bGwsZSwwKX1jYXRjaCh0KXtyZXR1cm4gci5jYWxsKHRoaXMsZSwwKX19fWZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChlKXtpZihuPT09Y2xlYXJUaW1lb3V0KXtyZXR1cm4gY2xlYXJUaW1lb3V0KGUpfWlmKChuPT09ZGVmYXVsdENsZWFyVGltZW91dHx8IW4pJiZjbGVhclRpbWVvdXQpe249Y2xlYXJUaW1lb3V0O3JldHVybiBjbGVhclRpbWVvdXQoZSl9dHJ5e3JldHVybiBuKGUpfWNhdGNoKHQpe3RyeXtyZXR1cm4gbi5jYWxsKG51bGwsZSl9Y2F0Y2godCl7cmV0dXJuIG4uY2FsbCh0aGlzLGUpfX19dmFyIGk9W107dmFyIG89ZmFsc2U7dmFyIHU7dmFyIGE9LTE7ZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCl7aWYoIW98fCF1KXtyZXR1cm59bz1mYWxzZTtpZih1Lmxlbmd0aCl7aT11LmNvbmNhdChpKX1lbHNle2E9LTF9aWYoaS5sZW5ndGgpe2RyYWluUXVldWUoKX19ZnVuY3Rpb24gZHJhaW5RdWV1ZSgpe2lmKG8pe3JldHVybn12YXIgZT1ydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7bz10cnVlO3ZhciB0PWkubGVuZ3RoO3doaWxlKHQpe3U9aTtpPVtdO3doaWxlKCsrYTx0KXtpZih1KXt1W2FdLnJ1bigpfX1hPS0xO3Q9aS5sZW5ndGh9dT1udWxsO289ZmFsc2U7cnVuQ2xlYXJUaW1lb3V0KGUpfXQubmV4dFRpY2s9ZnVuY3Rpb24oZSl7dmFyIHQ9bmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGgtMSk7aWYoYXJndW1lbnRzLmxlbmd0aD4xKXtmb3IodmFyIHI9MTtyPGFyZ3VtZW50cy5sZW5ndGg7cisrKXt0W3ItMV09YXJndW1lbnRzW3JdfX1pLnB1c2gobmV3IEl0ZW0oZSx0KSk7aWYoaS5sZW5ndGg9PT0xJiYhbyl7cnVuVGltZW91dChkcmFpblF1ZXVlKX19O2Z1bmN0aW9uIEl0ZW0oZSx0KXt0aGlzLmZ1bj1lO3RoaXMuYXJyYXk9dH1JdGVtLnByb3RvdHlwZS5ydW49ZnVuY3Rpb24oKXt0aGlzLmZ1bi5hcHBseShudWxsLHRoaXMuYXJyYXkpfTt0LnRpdGxlPVwiYnJvd3NlclwiO3QuYnJvd3Nlcj10cnVlO3QuZW52PXt9O3QuYXJndj1bXTt0LnZlcnNpb249XCJcIjt0LnZlcnNpb25zPXt9O2Z1bmN0aW9uIG5vb3AoKXt9dC5vbj1ub29wO3QuYWRkTGlzdGVuZXI9bm9vcDt0Lm9uY2U9bm9vcDt0Lm9mZj1ub29wO3QucmVtb3ZlTGlzdGVuZXI9bm9vcDt0LnJlbW92ZUFsbExpc3RlbmVycz1ub29wO3QuZW1pdD1ub29wO3QucHJlcGVuZExpc3RlbmVyPW5vb3A7dC5wcmVwZW5kT25jZUxpc3RlbmVyPW5vb3A7dC5saXN0ZW5lcnM9ZnVuY3Rpb24oZSl7cmV0dXJuW119O3QuYmluZGluZz1mdW5jdGlvbihlKXt0aHJvdyBuZXcgRXJyb3IoXCJwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZFwiKX07dC5jd2Q9ZnVuY3Rpb24oKXtyZXR1cm5cIi9cIn07dC5jaGRpcj1mdW5jdGlvbihlKXt0aHJvdyBuZXcgRXJyb3IoXCJwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWRcIil9O3QudW1hc2s9ZnVuY3Rpb24oKXtyZXR1cm4gMH19fTt2YXIgdD17fTtmdW5jdGlvbiBfX25jY3dwY2tfcmVxdWlyZV9fKHIpe3ZhciBuPXRbcl07aWYobiE9PXVuZGVmaW5lZCl7cmV0dXJuIG4uZXhwb3J0c312YXIgaT10W3JdPXtleHBvcnRzOnt9fTt2YXIgbz10cnVlO3RyeXtlW3JdKGksaS5leHBvcnRzLF9fbmNjd3Bja19yZXF1aXJlX18pO289ZmFsc2V9ZmluYWxseXtpZihvKWRlbGV0ZSB0W3JdfXJldHVybiBpLmV4cG9ydHN9aWYodHlwZW9mIF9fbmNjd3Bja19yZXF1aXJlX18hPT1cInVuZGVmaW5lZFwiKV9fbmNjd3Bja19yZXF1aXJlX18uYWI9X19kaXJuYW1lK1wiL1wiO3ZhciByPV9fbmNjd3Bja19yZXF1aXJlX18oMjI5KTttb2R1bGUuZXhwb3J0cz1yfSkoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./node_modules/next/dist/compiled/process/browser.js\n"));

/***/ })

});