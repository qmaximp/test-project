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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _FormCreateProduct_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FormCreateProduct.module.scss */ \"(app-pages-browser)/./src/components/FormCreateProduct/FormCreateProduct.module.scss\");\n/* harmony import */ var _FormCreateProduct_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_FormCreateProduct_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var _FilterCategory_FilterCategoryCreate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../FilterCategory/FilterCategoryCreate */ \"(app-pages-browser)/./src/components/FilterCategory/FilterCategoryCreate.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst FormCreateProduct = ()=>{\n    _s();\n    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [description, setDescription] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [price, setPrice] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [category, setCategory] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [phone, setPhone] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [posts, setPosts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        addPosts(title, description, price);\n        /*   let data = {\r\n      title,\r\n      description,\r\n      price,\r\n      /*  category,\r\n      phone,\r\n      name, \r\n    };\r\n    console.log(data); */ axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(\"http://localhost:3001/create/\", {\n            title: \"qweqweqwe\",\n            description: \"dsfsdf\",\n            price: \"11223123123\"\n        }).then((res)=>{\n            setPosts;\n            console.log(res.data);\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_FormCreateProduct_module_scss__WEBPACK_IMPORTED_MODULE_4___default().formCreateProduct),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                placeholder: \"загаловок\",\n                required: true,\n                value: title,\n                onChange: (e)=>{\n                    setTitle(e.target.value);\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\proj\\\\test-project\\\\src\\\\components\\\\FormCreateProduct\\\\FormCreateProduct.jsx\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                placeholder: \"описание\",\n                required: true,\n                value: description,\n                onChange: (e)=>{\n                    setDescription(e.target.value);\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\proj\\\\test-project\\\\src\\\\components\\\\FormCreateProduct\\\\FormCreateProduct.jsx\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                placeholder: \"цена\",\n                required: true,\n                value: price,\n                onChange: (e)=>{\n                    setPrice(e.target.value);\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\proj\\\\test-project\\\\src\\\\components\\\\FormCreateProduct\\\\FormCreateProduct.jsx\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"submit\",\n                onClick: handleSubmit,\n                children: \"Разместить\"\n            }, void 0, false, {\n                fileName: \"C:\\\\proj\\\\test-project\\\\src\\\\components\\\\FormCreateProduct\\\\FormCreateProduct.jsx\",\n                lineNumber: 89,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\proj\\\\test-project\\\\src\\\\components\\\\FormCreateProduct\\\\FormCreateProduct.jsx\",\n        lineNumber: 42,\n        columnNumber: 5\n    }, undefined);\n};\n_s(FormCreateProduct, \"LeMRYU89081eWyueboCKA5Jxj+0=\");\n_c = FormCreateProduct;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FormCreateProduct);\nvar _c;\n$RefreshReg$(_c, \"FormCreateProduct\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0Zvcm1DcmVhdGVQcm9kdWN0L0Zvcm1DcmVhdGVQcm9kdWN0LmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBRW1EO0FBQ0Q7QUFDeEI7QUFDZ0Q7QUFFMUUsTUFBTU0sb0JBQW9COztJQUN4QixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR04sK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDTyxhQUFhQyxlQUFlLEdBQUdSLCtDQUFRQSxDQUFDO0lBQy9DLE1BQU0sQ0FBQ1MsT0FBT0MsU0FBUyxHQUFHViwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLENBQUNXLFVBQVVDLFlBQVksR0FBR1osK0NBQVFBLENBQUM7SUFDekMsTUFBTSxDQUFDYSxPQUFPQyxTQUFTLEdBQUdkLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ2UsTUFBTUMsUUFBUSxHQUFHaEIsK0NBQVFBLENBQUM7SUFDakMsTUFBTSxDQUFDaUIsT0FBT0MsU0FBUyxHQUFHbEIsK0NBQVFBLENBQUMsRUFBRTtJQUVyQyxNQUFNbUIsZUFBZSxDQUFDQztRQUNwQkEsRUFBRUMsY0FBYztRQUNoQkMsU0FBU2pCLE9BQU9FLGFBQWFFO1FBQzdCOzs7Ozs7Ozt1QkFRbUIsR0FDbkJQLDZDQUFLQSxDQUNGcUIsSUFBSSxDQUFDLGlDQUFpQztZQUNyQ2xCLE9BQU87WUFDUEUsYUFBYTtZQUNiRSxPQUFPO1FBQ1QsR0FDQ2UsSUFBSSxDQUFDLENBQUNDO1lBQ0xQO1lBQ0FRLFFBQVFDLEdBQUcsQ0FBQ0YsSUFBSUcsSUFBSTtRQUN0QjtJQUNKO0lBRUEscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVc3Qix5RkFBcUI7OzBCQUNuQyw4REFBQytCO2dCQUNDQyxNQUFLO2dCQUNMQyxhQUFZO2dCQUNaQyxRQUFRO2dCQUNSQyxPQUFPL0I7Z0JBQ1BnQyxVQUFVLENBQUNqQjtvQkFDVGQsU0FBU2MsRUFBRWtCLE1BQU0sQ0FBQ0YsS0FBSztnQkFDekI7Ozs7OzswQkFFRiw4REFBQ0c7Z0JBQ0NMLGFBQVk7Z0JBQ1pDLFFBQVE7Z0JBQ1JDLE9BQU83QjtnQkFDUDhCLFVBQVUsQ0FBQ2pCO29CQUNUWixlQUFlWSxFQUFFa0IsTUFBTSxDQUFDRixLQUFLO2dCQUMvQjs7Ozs7OzBCQUVGLDhEQUFDSjtnQkFDQ0MsTUFBSztnQkFDTEMsYUFBWTtnQkFDWkMsUUFBUTtnQkFDUkMsT0FBTzNCO2dCQUNQNEIsVUFBVSxDQUFDakI7b0JBQ1RWLFNBQVNVLEVBQUVrQixNQUFNLENBQUNGLEtBQUs7Z0JBQ3pCOzs7Ozs7MEJBc0JGLDhEQUFDSTtnQkFBT1AsTUFBSztnQkFBU1EsU0FBU3RCOzBCQUFjOzs7Ozs7Ozs7Ozs7QUFLbkQ7R0F0Rk1mO0tBQUFBO0FBd0ZOLCtEQUFlQSxpQkFBaUJBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRm9ybUNyZWF0ZVByb2R1Y3QvRm9ybUNyZWF0ZVByb2R1Y3QuanN4P2IyNjIiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcblxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgY3NzIGZyb20gXCIuL0Zvcm1DcmVhdGVQcm9kdWN0Lm1vZHVsZS5zY3NzXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IEZpbHRlckNhdGVnb3J5Q3JlYXRlIGZyb20gXCIuLi9GaWx0ZXJDYXRlZ29yeS9GaWx0ZXJDYXRlZ29yeUNyZWF0ZVwiO1xyXG5cclxuY29uc3QgRm9ybUNyZWF0ZVByb2R1Y3QgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3RpdGxlLCBzZXRUaXRsZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbZGVzY3JpcHRpb24sIHNldERlc2NyaXB0aW9uXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtwcmljZSwgc2V0UHJpY2VdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2NhdGVnb3J5LCBzZXRDYXRlZ29yeV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbcGhvbmUsIHNldFBob25lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtwb3N0cywgc2V0UG9zdHNdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgYWRkUG9zdHModGl0bGUsIGRlc2NyaXB0aW9uLCBwcmljZSk7XHJcbiAgICAvKiAgIGxldCBkYXRhID0ge1xyXG4gICAgICB0aXRsZSxcclxuICAgICAgZGVzY3JpcHRpb24sXHJcbiAgICAgIHByaWNlLFxyXG4gICAgICAvKiAgY2F0ZWdvcnksXHJcbiAgICAgIHBob25lLFxyXG4gICAgICBuYW1lLCBcclxuICAgIH07XHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKTsgKi9cclxuICAgIGF4aW9zXHJcbiAgICAgIC5wb3N0KFwiaHR0cDovL2xvY2FsaG9zdDozMDAxL2NyZWF0ZS9cIiwge1xyXG4gICAgICAgIHRpdGxlOiBcInF3ZXF3ZXF3ZVwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcImRzZnNkZlwiLFxyXG4gICAgICAgIHByaWNlOiBcIjExMjIzMTIzMTIzXCIsXHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICBzZXRQb3N0cztcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSk7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzLmZvcm1DcmVhdGVQcm9kdWN0fT5cclxuICAgICAgPGlucHV0XHJcbiAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwi0LfQsNCz0LDQu9C+0LLQvtC6XCJcclxuICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgIHZhbHVlPXt0aXRsZX1cclxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgIHNldFRpdGxlKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICB9fVxyXG4gICAgICAvPlxyXG4gICAgICA8dGV4dGFyZWFcclxuICAgICAgICBwbGFjZWhvbGRlcj1cItC+0L/QuNGB0LDQvdC40LVcIlxyXG4gICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgdmFsdWU9e2Rlc2NyaXB0aW9ufVxyXG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgc2V0RGVzY3JpcHRpb24oZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgIH19XHJcbiAgICAgIC8+XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICBwbGFjZWhvbGRlcj1cItGG0LXQvdCwXCJcclxuICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgIHZhbHVlPXtwcmljZX1cclxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgIHNldFByaWNlKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICB9fVxyXG4gICAgICAvPlxyXG4gICAgICB7LypcclxuICAgICAgICA8RmlsdGVyQ2F0ZWdvcnlDcmVhdGUgLz5cclxuICAgICAgPGlucHV0XHJcbiAgICAgICAgdHlwZT1cInBob25lXCJcclxuICAgICAgICBwbGFjZWhvbGRlcj1cItCj0LrQsNC20LjRgtC1INCy0LDRiCDRgtC10LvQtdGE0L7QvVwiXHJcbiAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICB2YWx1ZT17cGhvbmV9XHJcbiAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICBzZXRQaG9uZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgfX1cclxuICAgICAgLz5cclxuICAgICAgPGlucHV0XHJcbiAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwi0KPQutCw0LbQuNGC0LUg0LLQsNGI0LUg0KTQmNCeXCJcclxuICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgIHZhbHVlPXtuYW1lfVxyXG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgc2V0TmFtZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgfX1cclxuICAgICAgLz4gKi99XHJcbiAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAg0KDQsNC30LzQtdGB0YLQuNGC0YxcclxuICAgICAgPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9ybUNyZWF0ZVByb2R1Y3Q7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiY3NzIiwiYXhpb3MiLCJGaWx0ZXJDYXRlZ29yeUNyZWF0ZSIsIkZvcm1DcmVhdGVQcm9kdWN0IiwidGl0bGUiLCJzZXRUaXRsZSIsImRlc2NyaXB0aW9uIiwic2V0RGVzY3JpcHRpb24iLCJwcmljZSIsInNldFByaWNlIiwiY2F0ZWdvcnkiLCJzZXRDYXRlZ29yeSIsInBob25lIiwic2V0UGhvbmUiLCJuYW1lIiwic2V0TmFtZSIsInBvc3RzIiwic2V0UG9zdHMiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJhZGRQb3N0cyIsInBvc3QiLCJ0aGVuIiwicmVzIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJkaXYiLCJjbGFzc05hbWUiLCJmb3JtQ3JlYXRlUHJvZHVjdCIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwicmVxdWlyZWQiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwidGV4dGFyZWEiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/FormCreateProduct/FormCreateProduct.jsx\n"));

/***/ })

});