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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _FormCreateProduct_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FormCreateProduct.module.scss */ \"(app-pages-browser)/./src/components/FormCreateProduct/FormCreateProduct.module.scss\");\n/* harmony import */ var _FormCreateProduct_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_FormCreateProduct_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var _FilterCategory_FilterCategory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../FilterCategory/FilterCategory */ \"(app-pages-browser)/./src/components/FilterCategory/FilterCategory.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst FormCreateProduct = ()=>{\n    _s();\n    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [description, setDescription] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [price, setPrice] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [category, setCategory] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [phone, setPhone] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleSubmit = ()=>{\n        let data = {\n            title,\n            description,\n            price\n        };\n        axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(\"http://localhost:3001/create/\", data).then((res)=>{\n            console.log(res);\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_FormCreateProduct_module_scss__WEBPACK_IMPORTED_MODULE_4___default().formCreateProduct),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                placeholder: \"загаловок\",\n                required: true,\n                value: title,\n                onChange: (e)=>{\n                    setTitle(e.target.value);\n                }\n            }, void 0, false, {\n                fileName: \"E:\\\\work\\\\test-project\\\\src\\\\components\\\\FormCreateProduct\\\\FormCreateProduct.jsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                placeholder: \"описание\",\n                required: true,\n                value: description,\n                onChange: (e)=>{\n                    setDescription(e.target.value);\n                }\n            }, void 0, false, {\n                fileName: \"E:\\\\work\\\\test-project\\\\src\\\\components\\\\FormCreateProduct\\\\FormCreateProduct.jsx\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                placeholder: \"цена\",\n                required: true,\n                value: price,\n                onChange: (e)=>{\n                    setPrice(e.target.value);\n                }\n            }, void 0, false, {\n                fileName: \"E:\\\\work\\\\test-project\\\\src\\\\components\\\\FormCreateProduct\\\\FormCreateProduct.jsx\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FilterCategoryCreate, {}, void 0, false, {\n                    fileName: \"E:\\\\work\\\\test-project\\\\src\\\\components\\\\FormCreateProduct\\\\FormCreateProduct.jsx\",\n                    lineNumber: 59,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"E:\\\\work\\\\test-project\\\\src\\\\components\\\\FormCreateProduct\\\\FormCreateProduct.jsx\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"phone\",\n                placeholder: \"Укажите ваш телефон\",\n                required: true,\n                value: phone,\n                onChange: (e)=>{\n                    setPhone(e.target.value);\n                }\n            }, void 0, false, {\n                fileName: \"E:\\\\work\\\\test-project\\\\src\\\\components\\\\FormCreateProduct\\\\FormCreateProduct.jsx\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                placeholder: \"Укажите ваше ФИО\",\n                required: true,\n                value: name,\n                onChange: (e)=>{\n                    setName(e.target.value);\n                }\n            }, void 0, false, {\n                fileName: \"E:\\\\work\\\\test-project\\\\src\\\\components\\\\FormCreateProduct\\\\FormCreateProduct.jsx\",\n                lineNumber: 70,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"submit\",\n                onClick: handleSubmit,\n                children: \"Разместить\"\n            }, void 0, false, {\n                fileName: \"E:\\\\work\\\\test-project\\\\src\\\\components\\\\FormCreateProduct\\\\FormCreateProduct.jsx\",\n                lineNumber: 79,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\work\\\\test-project\\\\src\\\\components\\\\FormCreateProduct\\\\FormCreateProduct.jsx\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, undefined);\n};\n_s(FormCreateProduct, \"x/0Bt6DsuYBgfvYGFJNo7wunzeg=\");\n_c = FormCreateProduct;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FormCreateProduct);\nvar _c;\n$RefreshReg$(_c, \"FormCreateProduct\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0Zvcm1DcmVhdGVQcm9kdWN0L0Zvcm1DcmVhdGVQcm9kdWN0LmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBRW1EO0FBQ0Q7QUFDeEI7QUFDb0M7QUFFOUQsTUFBTU0sb0JBQW9COztJQUN4QixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR04sK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDTyxhQUFhQyxlQUFlLEdBQUdSLCtDQUFRQSxDQUFDO0lBQy9DLE1BQU0sQ0FBQ1MsT0FBT0MsU0FBUyxHQUFHViwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLENBQUNXLFVBQVVDLFlBQVksR0FBR1osK0NBQVFBLENBQUM7SUFDekMsTUFBTSxDQUFDYSxPQUFPQyxTQUFTLEdBQUdkLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ2UsTUFBTUMsUUFBUSxHQUFHaEIsK0NBQVFBLENBQUM7SUFFakMsTUFBTWlCLGVBQWU7UUFDbkIsSUFBSUMsT0FBTztZQUNUYjtZQUNBRTtZQUNBRTtRQUlGO1FBQ0FQLDZDQUFLQSxDQUFDaUIsSUFBSSxDQUFDLGlDQUFpQ0QsTUFBTUUsSUFBSSxDQUFDLENBQUNDO1lBQ3REQyxRQUFRQyxHQUFHLENBQUNGO1FBQ2Q7SUFDRjtJQUVBLHFCQUNFLDhEQUFDRztRQUFJQyxXQUFXeEIseUZBQXFCOzswQkFDbkMsOERBQUMwQjtnQkFDQ0MsTUFBSztnQkFDTEMsYUFBWTtnQkFDWkMsUUFBUTtnQkFDUkMsT0FBTzFCO2dCQUNQMkIsVUFBVSxDQUFDQztvQkFDVDNCLFNBQVMyQixFQUFFQyxNQUFNLENBQUNILEtBQUs7Z0JBQ3pCOzs7Ozs7MEJBRUYsOERBQUNJO2dCQUNDTixhQUFZO2dCQUNaQyxRQUFRO2dCQUNSQyxPQUFPeEI7Z0JBQ1B5QixVQUFVLENBQUNDO29CQUNUekIsZUFBZXlCLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSztnQkFDL0I7Ozs7OzswQkFFRiw4REFBQ0o7Z0JBQ0NDLE1BQUs7Z0JBQ0xDLGFBQVk7Z0JBQ1pDLFFBQVE7Z0JBQ1JDLE9BQU90QjtnQkFDUHVCLFVBQVUsQ0FBQ0M7b0JBQ1R2QixTQUFTdUIsRUFBRUMsTUFBTSxDQUFDSCxLQUFLO2dCQUN6Qjs7Ozs7OzBCQUVGLDhEQUFDUDswQkFDQyw0RUFBQ1k7Ozs7Ozs7Ozs7MEJBRUgsOERBQUNUO2dCQUNDQyxNQUFLO2dCQUNMQyxhQUFZO2dCQUNaQyxRQUFRO2dCQUNSQyxPQUFPbEI7Z0JBQ1BtQixVQUFVLENBQUNDO29CQUNUbkIsU0FBU21CLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSztnQkFDekI7Ozs7OzswQkFFRiw4REFBQ0o7Z0JBQ0NDLE1BQUs7Z0JBQ0xDLGFBQVk7Z0JBQ1pDLFFBQVE7Z0JBQ1JDLE9BQU9oQjtnQkFDUGlCLFVBQVUsQ0FBQ0M7b0JBQ1RqQixRQUFRaUIsRUFBRUMsTUFBTSxDQUFDSCxLQUFLO2dCQUN4Qjs7Ozs7OzBCQUVGLDhEQUFDTTtnQkFBT1QsTUFBSztnQkFBU1UsU0FBU3JCOzBCQUFjOzs7Ozs7Ozs7Ozs7QUFLbkQ7R0E1RU1iO0tBQUFBO0FBOEVOLCtEQUFlQSxpQkFBaUJBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRm9ybUNyZWF0ZVByb2R1Y3QvRm9ybUNyZWF0ZVByb2R1Y3QuanN4P2IyNjIiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcblxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgY3NzIGZyb20gXCIuL0Zvcm1DcmVhdGVQcm9kdWN0Lm1vZHVsZS5zY3NzXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IEZpbHRlckNhdGVnb3J5IGZyb20gXCIuLi9GaWx0ZXJDYXRlZ29yeS9GaWx0ZXJDYXRlZ29yeVwiO1xyXG5cclxuY29uc3QgRm9ybUNyZWF0ZVByb2R1Y3QgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3RpdGxlLCBzZXRUaXRsZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbZGVzY3JpcHRpb24sIHNldERlc2NyaXB0aW9uXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtwcmljZSwgc2V0UHJpY2VdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2NhdGVnb3J5LCBzZXRDYXRlZ29yeV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbcGhvbmUsIHNldFBob25lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoKSA9PiB7XHJcbiAgICBsZXQgZGF0YSA9IHtcclxuICAgICAgdGl0bGUsXHJcbiAgICAgIGRlc2NyaXB0aW9uLFxyXG4gICAgICBwcmljZSxcclxuICAgICAgLyogIGNhdGVnb3J5LFxyXG4gICAgICBwaG9uZSxcclxuICAgICAgbmFtZSwgKi9cclxuICAgIH07XHJcbiAgICBheGlvcy5wb3N0KFwiaHR0cDovL2xvY2FsaG9zdDozMDAxL2NyZWF0ZS9cIiwgZGF0YSkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2Nzcy5mb3JtQ3JlYXRlUHJvZHVjdH0+XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICBwbGFjZWhvbGRlcj1cItC30LDQs9Cw0LvQvtCy0L7QulwiXHJcbiAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICB2YWx1ZT17dGl0bGV9XHJcbiAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICBzZXRUaXRsZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgfX1cclxuICAgICAgLz5cclxuICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCLQvtC/0LjRgdCw0L3QuNC1XCJcclxuICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgIHZhbHVlPXtkZXNjcmlwdGlvbn1cclxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgIHNldERlc2NyaXB0aW9uKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICB9fVxyXG4gICAgICAvPlxyXG4gICAgICA8aW5wdXRcclxuICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCLRhtC10L3QsFwiXHJcbiAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICB2YWx1ZT17cHJpY2V9XHJcbiAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICBzZXRQcmljZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgfX1cclxuICAgICAgLz5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8RmlsdGVyQ2F0ZWdvcnlDcmVhdGUgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgIHR5cGU9XCJwaG9uZVwiXHJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCLQo9C60LDQttC40YLQtSDQstCw0Ygg0YLQtdC70LXRhNC+0L1cIlxyXG4gICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgdmFsdWU9e3Bob25lfVxyXG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgc2V0UGhvbmUoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgIH19XHJcbiAgICAgIC8+XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICBwbGFjZWhvbGRlcj1cItCj0LrQsNC20LjRgtC1INCy0LDRiNC1INCk0JjQnlwiXHJcbiAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICB2YWx1ZT17bmFtZX1cclxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgIHNldE5hbWUoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgIH19XHJcbiAgICAgIC8+XHJcbiAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAg0KDQsNC30LzQtdGB0YLQuNGC0YxcclxuICAgICAgPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9ybUNyZWF0ZVByb2R1Y3Q7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiY3NzIiwiYXhpb3MiLCJGaWx0ZXJDYXRlZ29yeSIsIkZvcm1DcmVhdGVQcm9kdWN0IiwidGl0bGUiLCJzZXRUaXRsZSIsImRlc2NyaXB0aW9uIiwic2V0RGVzY3JpcHRpb24iLCJwcmljZSIsInNldFByaWNlIiwiY2F0ZWdvcnkiLCJzZXRDYXRlZ29yeSIsInBob25lIiwic2V0UGhvbmUiLCJuYW1lIiwic2V0TmFtZSIsImhhbmRsZVN1Ym1pdCIsImRhdGEiLCJwb3N0IiwidGhlbiIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJmb3JtQ3JlYXRlUHJvZHVjdCIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwicmVxdWlyZWQiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInRleHRhcmVhIiwiRmlsdGVyQ2F0ZWdvcnlDcmVhdGUiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/FormCreateProduct/FormCreateProduct.jsx\n"));

/***/ })

});