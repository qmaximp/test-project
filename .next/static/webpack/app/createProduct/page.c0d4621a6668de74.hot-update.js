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

/***/ "(app-pages-browser)/./src/components/FormCreateProduct/FormCreateProduct.jsx":
/*!****************************************************************!*\
  !*** ./src/components/FormCreateProduct/FormCreateProduct.jsx ***!
  \****************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _FormCreateProduct_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FormCreateProduct.module.scss */ \"(app-pages-browser)/./src/components/FormCreateProduct/FormCreateProduct.module.scss\");\n/* harmony import */ var _FormCreateProduct_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_FormCreateProduct_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var _FilterCategory_FilterCategoryCreate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../FilterCategory/FilterCategoryCreate */ \"(app-pages-browser)/./src/components/FilterCategory/FilterCategoryCreate.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst FormCreateProduct = ()=>{\n    _s();\n    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [description, setDescription] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [price, setPrice] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [category, setCategory] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [phone, setPhone] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        let data = {\n            title,\n            description,\n            price\n        };\n        console.log(data);\n        axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(\"http://localhost:3001/create/\", {\n            title,\n            description,\n            price\n        }).then((res)=>{\n            console.log(res);\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_FormCreateProduct_module_scss__WEBPACK_IMPORTED_MODULE_4___default().formCreateProduct),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                placeholder: \"загаловок\",\n                required: true,\n                value: title,\n                onChange: (e)=>{\n                    setTitle(e.target.value);\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\proj\\\\test-project\\\\src\\\\components\\\\FormCreateProduct\\\\FormCreateProduct.jsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                placeholder: \"описание\",\n                required: true,\n                value: description,\n                onChange: (e)=>{\n                    setDescription(e.target.value);\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\proj\\\\test-project\\\\src\\\\components\\\\FormCreateProduct\\\\FormCreateProduct.jsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                placeholder: \"цена\",\n                required: true,\n                value: price,\n                onChange: (e)=>{\n                    setPrice(e.target.value);\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\proj\\\\test-project\\\\src\\\\components\\\\FormCreateProduct\\\\FormCreateProduct.jsx\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"submit\",\n                onClick: handleSubmit,\n                children: \"Разместить\"\n            }, void 0, false, {\n                fileName: \"C:\\\\proj\\\\test-project\\\\src\\\\components\\\\FormCreateProduct\\\\FormCreateProduct.jsx\",\n                lineNumber: 82,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\proj\\\\test-project\\\\src\\\\components\\\\FormCreateProduct\\\\FormCreateProduct.jsx\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, undefined);\n};\n_s(FormCreateProduct, \"pSJYGdGhvzeuN/oQvjrZhZdTnus=\");\n_c = FormCreateProduct;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FormCreateProduct);\nvar _c;\n$RefreshReg$(_c, \"FormCreateProduct\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0Zvcm1DcmVhdGVQcm9kdWN0L0Zvcm1DcmVhdGVQcm9kdWN0LmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBRW1EO0FBQ0Q7QUFDeEI7QUFDZ0Q7QUFFMUUsTUFBTU0sb0JBQW9COztJQUN4QixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR04sK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDTyxhQUFhQyxlQUFlLEdBQUdSLCtDQUFRQSxDQUFDO0lBQy9DLE1BQU0sQ0FBQ1MsT0FBT0MsU0FBUyxHQUFHViwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLENBQUNXLFVBQVVDLFlBQVksR0FBR1osK0NBQVFBLENBQUM7SUFDekMsTUFBTSxDQUFDYSxPQUFPQyxTQUFTLEdBQUdkLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ2UsTUFBTUMsUUFBUSxHQUFHaEIsK0NBQVFBLENBQUM7SUFDakMsTUFBTSxDQUFDaUIsTUFBTUMsUUFBUSxHQUFHbEIsK0NBQVFBO0lBQ2hDLE1BQU1tQixlQUFlLENBQUNDO1FBQ3BCQSxFQUFFQyxjQUFjO1FBQ2hCLElBQUlKLE9BQU87WUFDVFo7WUFDQUU7WUFDQUU7UUFJRjtRQUNBYSxRQUFRQyxHQUFHLENBQUNOO1FBQ1pmLDZDQUFLQSxDQUNGc0IsSUFBSSxDQUFDLGlDQUFpQztZQUFFbkI7WUFBT0U7WUFBYUU7UUFBTSxHQUNsRWdCLElBQUksQ0FBQyxDQUFDQztZQUNMSixRQUFRQyxHQUFHLENBQUNHO1FBQ2Q7SUFDSjtJQUVBLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFXM0IseUZBQXFCOzswQkFDbkMsOERBQUM2QjtnQkFDQ0MsTUFBSztnQkFDTEMsYUFBWTtnQkFDWkMsUUFBUTtnQkFDUkMsT0FBTzdCO2dCQUNQOEIsVUFBVSxDQUFDZjtvQkFDVGQsU0FBU2MsRUFBRWdCLE1BQU0sQ0FBQ0YsS0FBSztnQkFDekI7Ozs7OzswQkFFRiw4REFBQ0c7Z0JBQ0NMLGFBQVk7Z0JBQ1pDLFFBQVE7Z0JBQ1JDLE9BQU8zQjtnQkFDUDRCLFVBQVUsQ0FBQ2Y7b0JBQ1RaLGVBQWVZLEVBQUVnQixNQUFNLENBQUNGLEtBQUs7Z0JBQy9COzs7Ozs7MEJBRUYsOERBQUNKO2dCQUNDQyxNQUFLO2dCQUNMQyxhQUFZO2dCQUNaQyxRQUFRO2dCQUNSQyxPQUFPekI7Z0JBQ1AwQixVQUFVLENBQUNmO29CQUNUVixTQUFTVSxFQUFFZ0IsTUFBTSxDQUFDRixLQUFLO2dCQUN6Qjs7Ozs7OzBCQXNCRiw4REFBQ0k7Z0JBQU9QLE1BQUs7Z0JBQVNRLFNBQVNwQjswQkFBYzs7Ozs7Ozs7Ozs7O0FBS25EO0dBL0VNZjtLQUFBQTtBQWlGTiwrREFBZUEsaUJBQWlCQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0Zvcm1DcmVhdGVQcm9kdWN0L0Zvcm1DcmVhdGVQcm9kdWN0LmpzeD9iMjYyIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5cclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGNzcyBmcm9tIFwiLi9Gb3JtQ3JlYXRlUHJvZHVjdC5tb2R1bGUuc2Nzc1wiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBGaWx0ZXJDYXRlZ29yeUNyZWF0ZSBmcm9tIFwiLi4vRmlsdGVyQ2F0ZWdvcnkvRmlsdGVyQ2F0ZWdvcnlDcmVhdGVcIjtcclxuXHJcbmNvbnN0IEZvcm1DcmVhdGVQcm9kdWN0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2Rlc2NyaXB0aW9uLCBzZXREZXNjcmlwdGlvbl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbcHJpY2UsIHNldFByaWNlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtjYXRlZ29yeSwgc2V0Q2F0ZWdvcnldID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3Bob25lLCBzZXRQaG9uZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBsZXQgZGF0YSA9IHtcclxuICAgICAgdGl0bGUsXHJcbiAgICAgIGRlc2NyaXB0aW9uLFxyXG4gICAgICBwcmljZSxcclxuICAgICAgLyogIGNhdGVnb3J5LFxyXG4gICAgICBwaG9uZSxcclxuICAgICAgbmFtZSwgKi9cclxuICAgIH07XHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgIGF4aW9zXHJcbiAgICAgIC5wb3N0KFwiaHR0cDovL2xvY2FsaG9zdDozMDAxL2NyZWF0ZS9cIiwgeyB0aXRsZSwgZGVzY3JpcHRpb24sIHByaWNlIH0pXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2Nzcy5mb3JtQ3JlYXRlUHJvZHVjdH0+XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICBwbGFjZWhvbGRlcj1cItC30LDQs9Cw0LvQvtCy0L7QulwiXHJcbiAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICB2YWx1ZT17dGl0bGV9XHJcbiAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICBzZXRUaXRsZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgfX1cclxuICAgICAgLz5cclxuICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCLQvtC/0LjRgdCw0L3QuNC1XCJcclxuICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgIHZhbHVlPXtkZXNjcmlwdGlvbn1cclxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgIHNldERlc2NyaXB0aW9uKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICB9fVxyXG4gICAgICAvPlxyXG4gICAgICA8aW5wdXRcclxuICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCLRhtC10L3QsFwiXHJcbiAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICB2YWx1ZT17cHJpY2V9XHJcbiAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICBzZXRQcmljZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgfX1cclxuICAgICAgLz5cclxuICAgICAgey8qXHJcbiAgICAgICAgPEZpbHRlckNhdGVnb3J5Q3JlYXRlIC8+XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgIHR5cGU9XCJwaG9uZVwiXHJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCLQo9C60LDQttC40YLQtSDQstCw0Ygg0YLQtdC70LXRhNC+0L1cIlxyXG4gICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgdmFsdWU9e3Bob25lfVxyXG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgc2V0UGhvbmUoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgIH19XHJcbiAgICAgIC8+XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICBwbGFjZWhvbGRlcj1cItCj0LrQsNC20LjRgtC1INCy0LDRiNC1INCk0JjQnlwiXHJcbiAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICB2YWx1ZT17bmFtZX1cclxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgIHNldE5hbWUoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgIH19XHJcbiAgICAgIC8+ICovfVxyXG4gICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBvbkNsaWNrPXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgINCg0LDQt9C80LXRgdGC0LjRgtGMXHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvcm1DcmVhdGVQcm9kdWN0O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImNzcyIsImF4aW9zIiwiRmlsdGVyQ2F0ZWdvcnlDcmVhdGUiLCJGb3JtQ3JlYXRlUHJvZHVjdCIsInRpdGxlIiwic2V0VGl0bGUiLCJkZXNjcmlwdGlvbiIsInNldERlc2NyaXB0aW9uIiwicHJpY2UiLCJzZXRQcmljZSIsImNhdGVnb3J5Iiwic2V0Q2F0ZWdvcnkiLCJwaG9uZSIsInNldFBob25lIiwibmFtZSIsInNldE5hbWUiLCJkYXRhIiwic2V0RGF0YSIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJwb3N0IiwidGhlbiIsInJlcyIsImRpdiIsImNsYXNzTmFtZSIsImZvcm1DcmVhdGVQcm9kdWN0IiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJyZXF1aXJlZCIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJ0ZXh0YXJlYSIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/FormCreateProduct/FormCreateProduct.jsx\n"));

/***/ })

});