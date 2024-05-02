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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ProductItem_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ProductItem.module.scss */ \"(app-pages-browser)/./src/components/ProductItem/ProductItem.module.scss\");\n/* harmony import */ var _ProductItem_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ProductItem_module_scss__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _public_image_placeholder_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../public/image-placeholder.png */ \"(app-pages-browser)/./public/image-placeholder.png\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst ProductItem = (param)=>{\n    let { id, title, description, price, phone, userName } = param;\n    _s();\n    const [category, setCategory] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_4__.usePathname)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get(\"http://localhost:3001/products/\").then((res)=>{\n            let prod;\n            res.data.map((el)=>{\n                if (el.id == pathname.split(\"/\")[pathname.split(\"/\").length - 1]) {\n                    prod = el;\n                }\n            });\n            setProduct(prod);\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_ProductItem_module_scss__WEBPACK_IMPORTED_MODULE_6___default().productItem),\n        id: id,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_ProductItem_module_scss__WEBPACK_IMPORTED_MODULE_6___default().productItem__img),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    alt: \"\",\n                    src: _public_image_placeholder_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n                }, void 0, false, {\n                    fileName: \"E:\\\\work\\\\test-project\\\\src\\\\components\\\\ProductItem\\\\ProductItem.jsx\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"E:\\\\work\\\\test-project\\\\src\\\\components\\\\ProductItem\\\\ProductItem.jsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_ProductItem_module_scss__WEBPACK_IMPORTED_MODULE_6___default().productItem__description),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: title\n                    }, void 0, false, {\n                        fileName: \"E:\\\\work\\\\test-project\\\\src\\\\components\\\\ProductItem\\\\ProductItem.jsx\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: description\n                    }, void 0, false, {\n                        fileName: \"E:\\\\work\\\\test-project\\\\src\\\\components\\\\ProductItem\\\\ProductItem.jsx\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                children: \"Цена:\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\work\\\\test-project\\\\src\\\\components\\\\ProductItem\\\\ProductItem.jsx\",\n                                lineNumber: 32,\n                                columnNumber: 11\n                            }, undefined),\n                            \" \",\n                            price\n                        ]\n                    }, void 0, true, {\n                        fileName: \"E:\\\\work\\\\test-project\\\\src\\\\components\\\\ProductItem\\\\ProductItem.jsx\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        children: \"Категория: машины\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\work\\\\test-project\\\\src\\\\components\\\\ProductItem\\\\ProductItem.jsx\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: phone\n                    }, void 0, false, {\n                        fileName: \"E:\\\\work\\\\test-project\\\\src\\\\components\\\\ProductItem\\\\ProductItem.jsx\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \" \",\n                            userName\n                        ]\n                    }, void 0, true, {\n                        fileName: \"E:\\\\work\\\\test-project\\\\src\\\\components\\\\ProductItem\\\\ProductItem.jsx\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\work\\\\test-project\\\\src\\\\components\\\\ProductItem\\\\ProductItem.jsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\work\\\\test-project\\\\src\\\\components\\\\ProductItem\\\\ProductItem.jsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ProductItem, \"pT3q4ZyzWt6Q9FlIG57rA6dQeqg=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_4__.usePathname\n    ];\n});\n_c = ProductItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductItem);\nvar _c;\n$RefreshReg$(_c, \"ProductItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1Byb2R1Y3RJdGVtL1Byb2R1Y3RJdGVtLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFtRDtBQUNQO0FBQ2I7QUFDaUM7QUFDbEI7QUFDcEI7QUFFMUIsTUFBTVEsY0FBYztRQUFDLEVBQUVDLEVBQUUsRUFBRUMsS0FBSyxFQUFFQyxXQUFXLEVBQUVDLEtBQUssRUFBRUMsS0FBSyxFQUFFQyxRQUFRLEVBQUU7O0lBQ3JFLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHZCwrQ0FBUUE7SUFDeEMsTUFBTWUsV0FBV1gsNERBQVdBO0lBQzVCTCxnREFBU0EsQ0FBQztRQUNSTSw2Q0FBS0EsQ0FBQ1csR0FBRyxDQUFDLG1DQUFtQ0MsSUFBSSxDQUFDLENBQUNDO1lBQ2pELElBQUlDO1lBQ0pELElBQUlFLElBQUksQ0FBQ0MsR0FBRyxDQUFDLENBQUNDO2dCQUNaLElBQUlBLEdBQUdmLEVBQUUsSUFBSVEsU0FBU1EsS0FBSyxDQUFDLElBQUksQ0FBQ1IsU0FBU1EsS0FBSyxDQUFDLEtBQUtDLE1BQU0sR0FBRyxFQUFFLEVBQUU7b0JBQ2hFTCxPQUFPRztnQkFDVDtZQUNGO1lBQ0FHLFdBQVdOO1FBQ2I7SUFDRixHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ087UUFBSUMsV0FBVzFCLDZFQUFlO1FBQUVNLElBQUlBOzswQkFDbkMsOERBQUNtQjtnQkFBSUMsV0FBVzFCLGtGQUFvQjswQkFDbEMsNEVBQUNDLG1EQUFLQTtvQkFBQzRCLEtBQUk7b0JBQUdDLEtBQUs1QixxRUFBV0E7Ozs7Ozs7Ozs7OzBCQUVoQyw4REFBQ3VCO2dCQUFJQyxXQUFXMUIsMEZBQTRCOztrQ0FDMUMsOERBQUNnQztrQ0FBSXpCOzs7Ozs7a0NBQ0wsOERBQUMwQjtrQ0FBR3pCOzs7Ozs7a0NBQ0osOERBQUMwQjs7MENBQ0MsOERBQUNDOzBDQUFFOzs7Ozs7NEJBQVM7NEJBQUUxQjs7Ozs7OztrQ0FFaEIsOERBQUN5QjtrQ0FBRzs7Ozs7O2tDQUNKLDhEQUFDRDtrQ0FBR3ZCOzs7Ozs7a0NBQ0osOERBQUN1Qjs7NEJBQUU7NEJBQUV0Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUliO0dBaENNTjs7UUFFYUYsd0RBQVdBOzs7S0FGeEJFO0FBa0NOLCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1Byb2R1Y3RJdGVtL1Byb2R1Y3RJdGVtLmpzeD9iMjYzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBjc3MgZnJvbSBcIi4vUHJvZHVjdEl0ZW0ubW9kdWxlLnNjc3NcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCBwbGFjZWhvbGRlciBmcm9tIFwiLi4vLi4vLi4vcHVibGljL2ltYWdlLXBsYWNlaG9sZGVyLnBuZ1wiO1xyXG5pbXBvcnQgeyB1c2VQYXRobmFtZSB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuY29uc3QgUHJvZHVjdEl0ZW0gPSAoeyBpZCwgdGl0bGUsIGRlc2NyaXB0aW9uLCBwcmljZSwgcGhvbmUsIHVzZXJOYW1lIH0pID0+IHtcclxuICBjb25zdCBbY2F0ZWdvcnksIHNldENhdGVnb3J5XSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgcGF0aG5hbWUgPSB1c2VQYXRobmFtZSgpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBheGlvcy5nZXQoXCJodHRwOi8vbG9jYWxob3N0OjMwMDEvcHJvZHVjdHMvXCIpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICBsZXQgcHJvZDtcclxuICAgICAgcmVzLmRhdGEubWFwKChlbCkgPT4ge1xyXG4gICAgICAgIGlmIChlbC5pZCA9PSBwYXRobmFtZS5zcGxpdChcIi9cIilbcGF0aG5hbWUuc3BsaXQoXCIvXCIpLmxlbmd0aCAtIDFdKSB7XHJcbiAgICAgICAgICBwcm9kID0gZWw7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgc2V0UHJvZHVjdChwcm9kKTtcclxuICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjc3MucHJvZHVjdEl0ZW19IGlkPXtpZH0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3MucHJvZHVjdEl0ZW1fX2ltZ30+XHJcbiAgICAgICAgPEltYWdlIGFsdD1cIlwiIHNyYz17cGxhY2Vob2xkZXJ9PjwvSW1hZ2U+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzLnByb2R1Y3RJdGVtX19kZXNjcmlwdGlvbn0+XHJcbiAgICAgICAgPGgyPnt0aXRsZX08L2gyPlxyXG4gICAgICAgIDxwPntkZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgPGgzPlxyXG4gICAgICAgICAgPGI+0KbQtdC90LA6PC9iPiB7cHJpY2V9XHJcbiAgICAgICAgPC9oMz5cclxuICAgICAgICA8aDM+0JrQsNGC0LXQs9C+0YDQuNGPOiDQvNCw0YjQuNC90Ys8L2gzPlxyXG4gICAgICAgIDxwPntwaG9uZX08L3A+XHJcbiAgICAgICAgPHA+IHt1c2VyTmFtZX08L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RJdGVtO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImNzcyIsIkltYWdlIiwicGxhY2Vob2xkZXIiLCJ1c2VQYXRobmFtZSIsImF4aW9zIiwiUHJvZHVjdEl0ZW0iLCJpZCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJwcmljZSIsInBob25lIiwidXNlck5hbWUiLCJjYXRlZ29yeSIsInNldENhdGVnb3J5IiwicGF0aG5hbWUiLCJnZXQiLCJ0aGVuIiwicmVzIiwicHJvZCIsImRhdGEiLCJtYXAiLCJlbCIsInNwbGl0IiwibGVuZ3RoIiwic2V0UHJvZHVjdCIsImRpdiIsImNsYXNzTmFtZSIsInByb2R1Y3RJdGVtIiwicHJvZHVjdEl0ZW1fX2ltZyIsImFsdCIsInNyYyIsInByb2R1Y3RJdGVtX19kZXNjcmlwdGlvbiIsImgyIiwicCIsImgzIiwiYiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/ProductItem/ProductItem.jsx\n"));

/***/ })

});