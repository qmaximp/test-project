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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _FormCreateProduct_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FormCreateProduct.module.scss */ \"(app-pages-browser)/./src/components/FormCreateProduct/FormCreateProduct.module.scss\");\n/* harmony import */ var _FormCreateProduct_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_FormCreateProduct_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var _FilterCategory_FilterCategoryCreate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../FilterCategory/FilterCategoryCreate */ \"(app-pages-browser)/./src/components/FilterCategory/FilterCategoryCreate.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst FormCreateProduct = ()=>{\n    _s();\n    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [description, setDescription] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [price, setPrice] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [category, setCategory] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [phone, setPhone] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [posts, setPosts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        addPosts(title, description, price);\n        /*   let data = {\r\n      title,\r\n      description,\r\n      price,\r\n      /*  category,\r\n      phone,\r\n      name, \r\n    };\r\n    console.log(data); */ axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(\"http://localhost:3001/create/\", {\n            title: \"qweqweqwe\",\n            description: \"dsfsdf\",\n            price: \"11223123123\"\n        }).then((res)=>{\n            setPosts([]);\n            console.log(res.data);\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_FormCreateProduct_module_scss__WEBPACK_IMPORTED_MODULE_4___default().formCreateProduct),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                placeholder: \"загаловок\",\n                required: true,\n                value: title,\n                onChange: (e)=>{\n                    setTitle(e.target.value);\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\proj\\\\test-project\\\\src\\\\components\\\\FormCreateProduct\\\\FormCreateProduct.jsx\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                placeholder: \"описание\",\n                required: true,\n                value: description,\n                onChange: (e)=>{\n                    setDescription(e.target.value);\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\proj\\\\test-project\\\\src\\\\components\\\\FormCreateProduct\\\\FormCreateProduct.jsx\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                placeholder: \"цена\",\n                required: true,\n                value: price,\n                onChange: (e)=>{\n                    setPrice(e.target.value);\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\proj\\\\test-project\\\\src\\\\components\\\\FormCreateProduct\\\\FormCreateProduct.jsx\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"submit\",\n                onClick: handleSubmit,\n                children: \"Разместить\"\n            }, void 0, false, {\n                fileName: \"C:\\\\proj\\\\test-project\\\\src\\\\components\\\\FormCreateProduct\\\\FormCreateProduct.jsx\",\n                lineNumber: 89,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\proj\\\\test-project\\\\src\\\\components\\\\FormCreateProduct\\\\FormCreateProduct.jsx\",\n        lineNumber: 42,\n        columnNumber: 5\n    }, undefined);\n};\n_s(FormCreateProduct, \"LeMRYU89081eWyueboCKA5Jxj+0=\");\n_c = FormCreateProduct;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FormCreateProduct);\nvar _c;\n$RefreshReg$(_c, \"FormCreateProduct\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0Zvcm1DcmVhdGVQcm9kdWN0L0Zvcm1DcmVhdGVQcm9kdWN0LmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBRW1EO0FBQ0Q7QUFDeEI7QUFDZ0Q7QUFFMUUsTUFBTU0sb0JBQW9COztJQUN4QixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR04sK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDTyxhQUFhQyxlQUFlLEdBQUdSLCtDQUFRQSxDQUFDO0lBQy9DLE1BQU0sQ0FBQ1MsT0FBT0MsU0FBUyxHQUFHViwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLENBQUNXLFVBQVVDLFlBQVksR0FBR1osK0NBQVFBLENBQUM7SUFDekMsTUFBTSxDQUFDYSxPQUFPQyxTQUFTLEdBQUdkLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ2UsTUFBTUMsUUFBUSxHQUFHaEIsK0NBQVFBLENBQUM7SUFDakMsTUFBTSxDQUFDaUIsT0FBT0MsU0FBUyxHQUFHbEIsK0NBQVFBLENBQUMsRUFBRTtJQUVyQyxNQUFNbUIsZUFBZSxDQUFDQztRQUNwQkEsRUFBRUMsY0FBYztRQUNoQkMsU0FBU2pCLE9BQU9FLGFBQWFFO1FBQzdCOzs7Ozs7Ozt1QkFRbUIsR0FDbkJQLDZDQUFLQSxDQUNGcUIsSUFBSSxDQUFDLGlDQUFpQztZQUNyQ2xCLE9BQU87WUFDUEUsYUFBYTtZQUNiRSxPQUFPO1FBQ1QsR0FDQ2UsSUFBSSxDQUFDLENBQUNDO1lBQ0xQLFNBQVMsRUFBRTtZQUNYUSxRQUFRQyxHQUFHLENBQUNGLElBQUlHLElBQUk7UUFDdEI7SUFDSjtJQUVBLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFXN0IseUZBQXFCOzswQkFDbkMsOERBQUMrQjtnQkFDQ0MsTUFBSztnQkFDTEMsYUFBWTtnQkFDWkMsUUFBUTtnQkFDUkMsT0FBTy9CO2dCQUNQZ0MsVUFBVSxDQUFDakI7b0JBQ1RkLFNBQVNjLEVBQUVrQixNQUFNLENBQUNGLEtBQUs7Z0JBQ3pCOzs7Ozs7MEJBRUYsOERBQUNHO2dCQUNDTCxhQUFZO2dCQUNaQyxRQUFRO2dCQUNSQyxPQUFPN0I7Z0JBQ1A4QixVQUFVLENBQUNqQjtvQkFDVFosZUFBZVksRUFBRWtCLE1BQU0sQ0FBQ0YsS0FBSztnQkFDL0I7Ozs7OzswQkFFRiw4REFBQ0o7Z0JBQ0NDLE1BQUs7Z0JBQ0xDLGFBQVk7Z0JBQ1pDLFFBQVE7Z0JBQ1JDLE9BQU8zQjtnQkFDUDRCLFVBQVUsQ0FBQ2pCO29CQUNUVixTQUFTVSxFQUFFa0IsTUFBTSxDQUFDRixLQUFLO2dCQUN6Qjs7Ozs7OzBCQXNCRiw4REFBQ0k7Z0JBQU9QLE1BQUs7Z0JBQVNRLFNBQVN0QjswQkFBYzs7Ozs7Ozs7Ozs7O0FBS25EO0dBdEZNZjtLQUFBQTtBQXdGTiwrREFBZUEsaUJBQWlCQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0Zvcm1DcmVhdGVQcm9kdWN0L0Zvcm1DcmVhdGVQcm9kdWN0LmpzeD9iMjYyIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5cclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGNzcyBmcm9tIFwiLi9Gb3JtQ3JlYXRlUHJvZHVjdC5tb2R1bGUuc2Nzc1wiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBGaWx0ZXJDYXRlZ29yeUNyZWF0ZSBmcm9tIFwiLi4vRmlsdGVyQ2F0ZWdvcnkvRmlsdGVyQ2F0ZWdvcnlDcmVhdGVcIjtcclxuXHJcbmNvbnN0IEZvcm1DcmVhdGVQcm9kdWN0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2Rlc2NyaXB0aW9uLCBzZXREZXNjcmlwdGlvbl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbcHJpY2UsIHNldFByaWNlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtjYXRlZ29yeSwgc2V0Q2F0ZWdvcnldID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3Bob25lLCBzZXRQaG9uZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbcG9zdHMsIHNldFBvc3RzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGFkZFBvc3RzKHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJpY2UpO1xyXG4gICAgLyogICBsZXQgZGF0YSA9IHtcclxuICAgICAgdGl0bGUsXHJcbiAgICAgIGRlc2NyaXB0aW9uLFxyXG4gICAgICBwcmljZSxcclxuICAgICAgLyogIGNhdGVnb3J5LFxyXG4gICAgICBwaG9uZSxcclxuICAgICAgbmFtZSwgXHJcbiAgICB9O1xyXG4gICAgY29uc29sZS5sb2coZGF0YSk7ICovXHJcbiAgICBheGlvc1xyXG4gICAgICAucG9zdChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9jcmVhdGUvXCIsIHtcclxuICAgICAgICB0aXRsZTogXCJxd2Vxd2Vxd2VcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJkc2ZzZGZcIixcclxuICAgICAgICBwcmljZTogXCIxMTIyMzEyMzEyM1wiLFxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgc2V0UG9zdHMoW10pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcclxuICAgICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjc3MuZm9ybUNyZWF0ZVByb2R1Y3R9PlxyXG4gICAgICA8aW5wdXRcclxuICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCLQt9Cw0LPQsNC70L7QstC+0LpcIlxyXG4gICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgdmFsdWU9e3RpdGxlfVxyXG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgc2V0VGl0bGUoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgIH19XHJcbiAgICAgIC8+XHJcbiAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwi0L7Qv9C40YHQsNC90LjQtVwiXHJcbiAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICB2YWx1ZT17ZGVzY3JpcHRpb259XHJcbiAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICBzZXREZXNjcmlwdGlvbihlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgfX1cclxuICAgICAgLz5cclxuICAgICAgPGlucHV0XHJcbiAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwi0YbQtdC90LBcIlxyXG4gICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgdmFsdWU9e3ByaWNlfVxyXG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgc2V0UHJpY2UoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgIH19XHJcbiAgICAgIC8+XHJcbiAgICAgIHsvKlxyXG4gICAgICAgIDxGaWx0ZXJDYXRlZ29yeUNyZWF0ZSAvPlxyXG4gICAgICA8aW5wdXRcclxuICAgICAgICB0eXBlPVwicGhvbmVcIlxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwi0KPQutCw0LbQuNGC0LUg0LLQsNGIINGC0LXQu9C10YTQvtC9XCJcclxuICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgIHZhbHVlPXtwaG9uZX1cclxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgIHNldFBob25lKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICB9fVxyXG4gICAgICAvPlxyXG4gICAgICA8aW5wdXRcclxuICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCLQo9C60LDQttC40YLQtSDQstCw0YjQtSDQpNCY0J5cIlxyXG4gICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgdmFsdWU9e25hbWV9XHJcbiAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICBzZXROYW1lKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICB9fVxyXG4gICAgICAvPiAqL31cclxuICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgb25DbGljaz17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICDQoNCw0LfQvNC10YHRgtC40YLRjFxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb3JtQ3JlYXRlUHJvZHVjdDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJjc3MiLCJheGlvcyIsIkZpbHRlckNhdGVnb3J5Q3JlYXRlIiwiRm9ybUNyZWF0ZVByb2R1Y3QiLCJ0aXRsZSIsInNldFRpdGxlIiwiZGVzY3JpcHRpb24iLCJzZXREZXNjcmlwdGlvbiIsInByaWNlIiwic2V0UHJpY2UiLCJjYXRlZ29yeSIsInNldENhdGVnb3J5IiwicGhvbmUiLCJzZXRQaG9uZSIsIm5hbWUiLCJzZXROYW1lIiwicG9zdHMiLCJzZXRQb3N0cyIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImFkZFBvc3RzIiwicG9zdCIsInRoZW4iLCJyZXMiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsImRpdiIsImNsYXNzTmFtZSIsImZvcm1DcmVhdGVQcm9kdWN0IiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJyZXF1aXJlZCIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJ0ZXh0YXJlYSIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/FormCreateProduct/FormCreateProduct.jsx\n"));

/***/ })

});