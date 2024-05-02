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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ProductItem_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ProductItem.module.scss */ \"(app-pages-browser)/./src/components/ProductItem/ProductItem.module.scss\");\n/* harmony import */ var _ProductItem_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ProductItem_module_scss__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _public_image_placeholder_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../public/image-placeholder.png */ \"(app-pages-browser)/./public/image-placeholder.png\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst ProductItem = (param)=>{\n    let { id, title, description, price, phone, userName } = param;\n    _s();\n    const [categories, setCategories] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_4__.usePathname)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get(\"http://localhost:3001/categories/\").then((res)=>{\n            const newRes = res.slice(1);\n            console.log(newRes);\n            let category;\n            newRes.data.map((el)=>{\n                console.log(newRes);\n                if (el.id == pathname.split(\"/\")[pathname.split(\"/\").length - 1]) {\n                    category = el;\n                }\n            });\n            setCategories(category);\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_ProductItem_module_scss__WEBPACK_IMPORTED_MODULE_6___default().productItem),\n        id: id,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_ProductItem_module_scss__WEBPACK_IMPORTED_MODULE_6___default().productItem__img),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    alt: \"\",\n                    src: _public_image_placeholder_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n                }, void 0, false, {\n                    fileName: \"E:\\\\work\\\\test-project\\\\src\\\\components\\\\ProductItem\\\\ProductItem.jsx\",\n                    lineNumber: 28,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"E:\\\\work\\\\test-project\\\\src\\\\components\\\\ProductItem\\\\ProductItem.jsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, undefined),\n            categories && categories.idCategory && categories.valueCategory ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_ProductItem_module_scss__WEBPACK_IMPORTED_MODULE_6___default().productItem__description),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: title\n                    }, void 0, false, {\n                        fileName: \"E:\\\\work\\\\test-project\\\\src\\\\components\\\\ProductItem\\\\ProductItem.jsx\",\n                        lineNumber: 32,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: description\n                    }, void 0, false, {\n                        fileName: \"E:\\\\work\\\\test-project\\\\src\\\\components\\\\ProductItem\\\\ProductItem.jsx\",\n                        lineNumber: 33,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                children: \"Цена:\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\work\\\\test-project\\\\src\\\\components\\\\ProductItem\\\\ProductItem.jsx\",\n                                lineNumber: 35,\n                                columnNumber: 13\n                            }, undefined),\n                            \" \",\n                            price\n                        ]\n                    }, void 0, true, {\n                        fileName: \"E:\\\\work\\\\test-project\\\\src\\\\components\\\\ProductItem\\\\ProductItem.jsx\",\n                        lineNumber: 34,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        children: [\n                            \"Категория: \",\n                            categories.nameCategory\n                        ]\n                    }, void 0, true, {\n                        fileName: \"E:\\\\work\\\\test-project\\\\src\\\\components\\\\ProductItem\\\\ProductItem.jsx\",\n                        lineNumber: 37,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: phone\n                    }, void 0, false, {\n                        fileName: \"E:\\\\work\\\\test-project\\\\src\\\\components\\\\ProductItem\\\\ProductItem.jsx\",\n                        lineNumber: 38,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \" \",\n                            userName\n                        ]\n                    }, void 0, true, {\n                        fileName: \"E:\\\\work\\\\test-project\\\\src\\\\components\\\\ProductItem\\\\ProductItem.jsx\",\n                        lineNumber: 39,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\work\\\\test-project\\\\src\\\\components\\\\ProductItem\\\\ProductItem.jsx\",\n                lineNumber: 31,\n                columnNumber: 9\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {}, void 0, false, {\n                fileName: \"E:\\\\work\\\\test-project\\\\src\\\\components\\\\ProductItem\\\\ProductItem.jsx\",\n                lineNumber: 42,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\work\\\\test-project\\\\src\\\\components\\\\ProductItem\\\\ProductItem.jsx\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ProductItem, \"tJcowYURvXWhnKA1HbCk8Uutjqk=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_4__.usePathname\n    ];\n});\n_c = ProductItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductItem);\nvar _c;\n$RefreshReg$(_c, \"ProductItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1Byb2R1Y3RJdGVtL1Byb2R1Y3RJdGVtLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFtRDtBQUNQO0FBQ2I7QUFDaUM7QUFDbEI7QUFDcEI7QUFFMUIsTUFBTVEsY0FBYztRQUFDLEVBQUVDLEVBQUUsRUFBRUMsS0FBSyxFQUFFQyxXQUFXLEVBQUVDLEtBQUssRUFBRUMsS0FBSyxFQUFFQyxRQUFRLEVBQUU7O0lBQ3JFLE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHZCwrQ0FBUUE7SUFDNUMsTUFBTWUsV0FBV1gsNERBQVdBO0lBQzVCTCxnREFBU0EsQ0FBQztRQUNSTSw2Q0FBS0EsQ0FBQ1csR0FBRyxDQUFDLHFDQUFxQ0MsSUFBSSxDQUFDLENBQUNDO1lBQ25ELE1BQU1DLFNBQVNELElBQUlFLEtBQUssQ0FBQztZQUN6QkMsUUFBUUMsR0FBRyxDQUFDSDtZQUNaLElBQUlJO1lBQ0pKLE9BQU9LLElBQUksQ0FBQ0MsR0FBRyxDQUFDLENBQUNDO2dCQUNmTCxRQUFRQyxHQUFHLENBQUNIO2dCQUNaLElBQUlPLEdBQUduQixFQUFFLElBQUlRLFNBQVNZLEtBQUssQ0FBQyxJQUFJLENBQUNaLFNBQVNZLEtBQUssQ0FBQyxLQUFLQyxNQUFNLEdBQUcsRUFBRSxFQUFFO29CQUNoRUwsV0FBV0c7Z0JBQ2I7WUFDRjtZQUNBWixjQUFjUztRQUNoQjtJQUNGLEdBQUcsRUFBRTtJQUNMLHFCQUNFLDhEQUFDTTtRQUFJQyxXQUFXN0IsNkVBQWU7UUFBRU0sSUFBSUE7OzBCQUNuQyw4REFBQ3NCO2dCQUFJQyxXQUFXN0Isa0ZBQW9COzBCQUNsQyw0RUFBQ0MsbURBQUtBO29CQUFDK0IsS0FBSTtvQkFBR0MsS0FBSy9CLHFFQUFXQTs7Ozs7Ozs7Ozs7WUFFL0JVLGNBQWNBLFdBQVdzQixVQUFVLElBQUl0QixXQUFXdUIsYUFBYSxpQkFDOUQsOERBQUNQO2dCQUFJQyxXQUFXN0IsMEZBQTRCOztrQ0FDMUMsOERBQUNxQztrQ0FBSTlCOzs7Ozs7a0NBQ0wsOERBQUMrQjtrQ0FBRzlCOzs7Ozs7a0NBQ0osOERBQUMrQjs7MENBQ0MsOERBQUNDOzBDQUFFOzs7Ozs7NEJBQVM7NEJBQUUvQjs7Ozs7OztrQ0FFaEIsOERBQUM4Qjs7NEJBQUc7NEJBQVkzQixXQUFXNkIsWUFBWTs7Ozs7OztrQ0FDdkMsOERBQUNIO2tDQUFHNUI7Ozs7OztrQ0FDSiw4REFBQzRCOzs0QkFBRTs0QkFBRTNCOzs7Ozs7Ozs7Ozs7MENBR1AsOERBQUMyQjs7Ozs7Ozs7Ozs7QUFJVDtHQXRDTWpDOztRQUVhRix3REFBV0E7OztLQUZ4QkU7QUF3Q04sK0RBQWVBLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJvZHVjdEl0ZW0vUHJvZHVjdEl0ZW0uanN4P2IyNjMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGNzcyBmcm9tIFwiLi9Qcm9kdWN0SXRlbS5tb2R1bGUuc2Nzc1wiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IHBsYWNlaG9sZGVyIGZyb20gXCIuLi8uLi8uLi9wdWJsaWMvaW1hZ2UtcGxhY2Vob2xkZXIucG5nXCI7XHJcbmltcG9ydCB7IHVzZVBhdGhuYW1lIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5jb25zdCBQcm9kdWN0SXRlbSA9ICh7IGlkLCB0aXRsZSwgZGVzY3JpcHRpb24sIHByaWNlLCBwaG9uZSwgdXNlck5hbWUgfSkgPT4ge1xyXG4gIGNvbnN0IFtjYXRlZ29yaWVzLCBzZXRDYXRlZ29yaWVzXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgcGF0aG5hbWUgPSB1c2VQYXRobmFtZSgpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBheGlvcy5nZXQoXCJodHRwOi8vbG9jYWxob3N0OjMwMDEvY2F0ZWdvcmllcy9cIikudGhlbigocmVzKSA9PiB7XHJcbiAgICAgIGNvbnN0IG5ld1JlcyA9IHJlcy5zbGljZSgxKTtcclxuICAgICAgY29uc29sZS5sb2cobmV3UmVzKTtcclxuICAgICAgbGV0IGNhdGVnb3J5O1xyXG4gICAgICBuZXdSZXMuZGF0YS5tYXAoKGVsKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cobmV3UmVzKTtcclxuICAgICAgICBpZiAoZWwuaWQgPT0gcGF0aG5hbWUuc3BsaXQoXCIvXCIpW3BhdGhuYW1lLnNwbGl0KFwiL1wiKS5sZW5ndGggLSAxXSkge1xyXG4gICAgICAgICAgY2F0ZWdvcnkgPSBlbDtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICBzZXRDYXRlZ29yaWVzKGNhdGVnb3J5KTtcclxuICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2Nzcy5wcm9kdWN0SXRlbX0gaWQ9e2lkfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzcy5wcm9kdWN0SXRlbV9faW1nfT5cclxuICAgICAgICA8SW1hZ2UgYWx0PVwiXCIgc3JjPXtwbGFjZWhvbGRlcn0+PC9JbWFnZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHtjYXRlZ29yaWVzICYmIGNhdGVnb3JpZXMuaWRDYXRlZ29yeSAmJiBjYXRlZ29yaWVzLnZhbHVlQ2F0ZWdvcnkgPyAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzcy5wcm9kdWN0SXRlbV9fZGVzY3JpcHRpb259PlxyXG4gICAgICAgICAgPGgyPnt0aXRsZX08L2gyPlxyXG4gICAgICAgICAgPHA+e2Rlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICAgIDxoMz5cclxuICAgICAgICAgICAgPGI+0KbQtdC90LA6PC9iPiB7cHJpY2V9XHJcbiAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgPGgzPtCa0LDRgtC10LPQvtGA0LjRjzoge2NhdGVnb3JpZXMubmFtZUNhdGVnb3J5fTwvaDM+XHJcbiAgICAgICAgICA8cD57cGhvbmV9PC9wPlxyXG4gICAgICAgICAgPHA+IHt1c2VyTmFtZX08L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPHA+PC9wPlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RJdGVtO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImNzcyIsIkltYWdlIiwicGxhY2Vob2xkZXIiLCJ1c2VQYXRobmFtZSIsImF4aW9zIiwiUHJvZHVjdEl0ZW0iLCJpZCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJwcmljZSIsInBob25lIiwidXNlck5hbWUiLCJjYXRlZ29yaWVzIiwic2V0Q2F0ZWdvcmllcyIsInBhdGhuYW1lIiwiZ2V0IiwidGhlbiIsInJlcyIsIm5ld1JlcyIsInNsaWNlIiwiY29uc29sZSIsImxvZyIsImNhdGVnb3J5IiwiZGF0YSIsIm1hcCIsImVsIiwic3BsaXQiLCJsZW5ndGgiLCJkaXYiLCJjbGFzc05hbWUiLCJwcm9kdWN0SXRlbSIsInByb2R1Y3RJdGVtX19pbWciLCJhbHQiLCJzcmMiLCJpZENhdGVnb3J5IiwidmFsdWVDYXRlZ29yeSIsInByb2R1Y3RJdGVtX19kZXNjcmlwdGlvbiIsImgyIiwicCIsImgzIiwiYiIsIm5hbWVDYXRlZ29yeSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/ProductItem/ProductItem.jsx\n"));

/***/ })

});