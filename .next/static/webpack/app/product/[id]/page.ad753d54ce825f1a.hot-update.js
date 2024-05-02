"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/product/[id]/page",{

/***/ "(app-pages-browser)/./src/components/ProductItem/ProductItem.jsx":
/*!****************************************************!*\
  !*** ./src/components/ProductItem/ProductItem.jsx ***!
  \****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ProductItem_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ProductItem.module.scss */ \"(app-pages-browser)/./src/components/ProductItem/ProductItem.module.scss\");\n/* harmony import */ var _ProductItem_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ProductItem_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _public_image_placeholder_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../public/image-placeholder.png */ \"(app-pages-browser)/./public/image-placeholder.png\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst ProductItem = (param)=>{\n    let { id, title, description, price, phone, userName } = param;\n    _s();\n    const [categories, setCategories] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_4__.usePathname)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{}, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_ProductItem_module_scss__WEBPACK_IMPORTED_MODULE_5___default().productItem),\n        id: id,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_ProductItem_module_scss__WEBPACK_IMPORTED_MODULE_5___default().productItem__img),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    alt: \"\",\n                    src: _public_image_placeholder_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n                }, void 0, false, {\n                    fileName: \"E:\\\\work\\\\test-project\\\\src\\\\components\\\\ProductItem\\\\ProductItem.jsx\",\n                    lineNumber: 15,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"E:\\\\work\\\\test-project\\\\src\\\\components\\\\ProductItem\\\\ProductItem.jsx\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, undefined),\n            categories && categories.idCategory && categories.valueCategory ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_ProductItem_module_scss__WEBPACK_IMPORTED_MODULE_5___default().productItem__description),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: title\n                    }, void 0, false, {\n                        fileName: \"E:\\\\work\\\\test-project\\\\src\\\\components\\\\ProductItem\\\\ProductItem.jsx\",\n                        lineNumber: 19,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: description\n                    }, void 0, false, {\n                        fileName: \"E:\\\\work\\\\test-project\\\\src\\\\components\\\\ProductItem\\\\ProductItem.jsx\",\n                        lineNumber: 20,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                children: \"Цена:\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\work\\\\test-project\\\\src\\\\components\\\\ProductItem\\\\ProductItem.jsx\",\n                                lineNumber: 22,\n                                columnNumber: 13\n                            }, undefined),\n                            \" \",\n                            price\n                        ]\n                    }, void 0, true, {\n                        fileName: \"E:\\\\work\\\\test-project\\\\src\\\\components\\\\ProductItem\\\\ProductItem.jsx\",\n                        lineNumber: 21,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        children: [\n                            \"Категория: \",\n                            categories.nameCategory\n                        ]\n                    }, void 0, true, {\n                        fileName: \"E:\\\\work\\\\test-project\\\\src\\\\components\\\\ProductItem\\\\ProductItem.jsx\",\n                        lineNumber: 24,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: phone\n                    }, void 0, false, {\n                        fileName: \"E:\\\\work\\\\test-project\\\\src\\\\components\\\\ProductItem\\\\ProductItem.jsx\",\n                        lineNumber: 25,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \" \",\n                            userName\n                        ]\n                    }, void 0, true, {\n                        fileName: \"E:\\\\work\\\\test-project\\\\src\\\\components\\\\ProductItem\\\\ProductItem.jsx\",\n                        lineNumber: 26,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\work\\\\test-project\\\\src\\\\components\\\\ProductItem\\\\ProductItem.jsx\",\n                lineNumber: 18,\n                columnNumber: 9\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {}, void 0, false, {\n                fileName: \"E:\\\\work\\\\test-project\\\\src\\\\components\\\\ProductItem\\\\ProductItem.jsx\",\n                lineNumber: 29,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\work\\\\test-project\\\\src\\\\components\\\\ProductItem\\\\ProductItem.jsx\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ProductItem, \"tJcowYURvXWhnKA1HbCk8Uutjqk=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_4__.usePathname\n    ];\n});\n_c = ProductItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductItem);\nvar _c;\n$RefreshReg$(_c, \"ProductItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1Byb2R1Y3RJdGVtL1Byb2R1Y3RJdGVtLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ1A7QUFDYjtBQUNpQztBQUNsQjtBQUNwQjtBQUUxQixNQUFNUSxjQUFjO1FBQUMsRUFBRUMsRUFBRSxFQUFFQyxLQUFLLEVBQUVDLFdBQVcsRUFBRUMsS0FBSyxFQUFFQyxLQUFLLEVBQUVDLFFBQVEsRUFBRTs7SUFDckUsTUFBTSxDQUFDQyxZQUFZQyxjQUFjLEdBQUdkLCtDQUFRQTtJQUM1QyxNQUFNZSxXQUFXWCw0REFBV0E7SUFDNUJMLGdEQUFTQSxDQUFDLEtBQU8sR0FBRyxFQUFFO0lBQ3RCLHFCQUNFLDhEQUFDaUI7UUFBSUMsV0FBV2hCLDZFQUFlO1FBQUVNLElBQUlBOzswQkFDbkMsOERBQUNTO2dCQUFJQyxXQUFXaEIsa0ZBQW9COzBCQUNsQyw0RUFBQ0MsbURBQUtBO29CQUFDa0IsS0FBSTtvQkFBR0MsS0FBS2xCLHFFQUFXQTs7Ozs7Ozs7Ozs7WUFFL0JVLGNBQWNBLFdBQVdTLFVBQVUsSUFBSVQsV0FBV1UsYUFBYSxpQkFDOUQsOERBQUNQO2dCQUFJQyxXQUFXaEIsMEZBQTRCOztrQ0FDMUMsOERBQUN3QjtrQ0FBSWpCOzs7Ozs7a0NBQ0wsOERBQUNrQjtrQ0FBR2pCOzs7Ozs7a0NBQ0osOERBQUNrQjs7MENBQ0MsOERBQUNDOzBDQUFFOzs7Ozs7NEJBQVM7NEJBQUVsQjs7Ozs7OztrQ0FFaEIsOERBQUNpQjs7NEJBQUc7NEJBQVlkLFdBQVdnQixZQUFZOzs7Ozs7O2tDQUN2Qyw4REFBQ0g7a0NBQUdmOzs7Ozs7a0NBQ0osOERBQUNlOzs0QkFBRTs0QkFBRWQ7Ozs7Ozs7Ozs7OzswQ0FHUCw4REFBQ2M7Ozs7Ozs7Ozs7O0FBSVQ7R0F6Qk1wQjs7UUFFYUYsd0RBQVdBOzs7S0FGeEJFO0FBMkJOLCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1Byb2R1Y3RJdGVtL1Byb2R1Y3RJdGVtLmpzeD9iMjYzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBjc3MgZnJvbSBcIi4vUHJvZHVjdEl0ZW0ubW9kdWxlLnNjc3NcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCBwbGFjZWhvbGRlciBmcm9tIFwiLi4vLi4vLi4vcHVibGljL2ltYWdlLXBsYWNlaG9sZGVyLnBuZ1wiO1xyXG5pbXBvcnQgeyB1c2VQYXRobmFtZSB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuY29uc3QgUHJvZHVjdEl0ZW0gPSAoeyBpZCwgdGl0bGUsIGRlc2NyaXB0aW9uLCBwcmljZSwgcGhvbmUsIHVzZXJOYW1lIH0pID0+IHtcclxuICBjb25zdCBbY2F0ZWdvcmllcywgc2V0Q2F0ZWdvcmllc10gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IHBhdGhuYW1lID0gdXNlUGF0aG5hbWUoKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge30sIFtdKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2Nzcy5wcm9kdWN0SXRlbX0gaWQ9e2lkfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzcy5wcm9kdWN0SXRlbV9faW1nfT5cclxuICAgICAgICA8SW1hZ2UgYWx0PVwiXCIgc3JjPXtwbGFjZWhvbGRlcn0+PC9JbWFnZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHtjYXRlZ29yaWVzICYmIGNhdGVnb3JpZXMuaWRDYXRlZ29yeSAmJiBjYXRlZ29yaWVzLnZhbHVlQ2F0ZWdvcnkgPyAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzcy5wcm9kdWN0SXRlbV9fZGVzY3JpcHRpb259PlxyXG4gICAgICAgICAgPGgyPnt0aXRsZX08L2gyPlxyXG4gICAgICAgICAgPHA+e2Rlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICAgIDxoMz5cclxuICAgICAgICAgICAgPGI+0KbQtdC90LA6PC9iPiB7cHJpY2V9XHJcbiAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgPGgzPtCa0LDRgtC10LPQvtGA0LjRjzoge2NhdGVnb3JpZXMubmFtZUNhdGVnb3J5fTwvaDM+XHJcbiAgICAgICAgICA8cD57cGhvbmV9PC9wPlxyXG4gICAgICAgICAgPHA+IHt1c2VyTmFtZX08L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPHA+PC9wPlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RJdGVtO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImNzcyIsIkltYWdlIiwicGxhY2Vob2xkZXIiLCJ1c2VQYXRobmFtZSIsImF4aW9zIiwiUHJvZHVjdEl0ZW0iLCJpZCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJwcmljZSIsInBob25lIiwidXNlck5hbWUiLCJjYXRlZ29yaWVzIiwic2V0Q2F0ZWdvcmllcyIsInBhdGhuYW1lIiwiZGl2IiwiY2xhc3NOYW1lIiwicHJvZHVjdEl0ZW0iLCJwcm9kdWN0SXRlbV9faW1nIiwiYWx0Iiwic3JjIiwiaWRDYXRlZ29yeSIsInZhbHVlQ2F0ZWdvcnkiLCJwcm9kdWN0SXRlbV9fZGVzY3JpcHRpb24iLCJoMiIsInAiLCJoMyIsImIiLCJuYW1lQ2F0ZWdvcnkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/ProductItem/ProductItem.jsx\n"));

/***/ })

});