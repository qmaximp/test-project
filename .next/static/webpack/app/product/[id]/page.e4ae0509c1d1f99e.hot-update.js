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

/***/ "(app-pages-browser)/./src/app/product/[id]/page.jsx":
/*!***************************************!*\
  !*** ./src/app/product/[id]/page.jsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_ProductItem_ProductItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/ProductItem/ProductItem */ \"(app-pages-browser)/./src/components/ProductItem/ProductItem.jsx\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst page = ()=>{\n    _s();\n    const [product, setProduct] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();\n    const [category, setCategory] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();\n    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname)();\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"http://localhost:3001/products/\").then((res)=>{\n            let prod;\n            res.data.map((el)=>{\n                if (el.id == pathname.split(\"/\")[pathname.split(\"/\").length - 1]) {\n                    prod = el;\n                }\n            });\n            setProduct(prod);\n        });\n        axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"http://localhost:3001/categories/\").then((res)=>{\n            let categories;\n            res.data.map((el)=>{\n                if (el.id == pathname.split(\"/\")[pathname.split(\"/\").length - 1]) {\n                    categories = el;\n                }\n            });\n            setCategory(categories);\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: category && product && product.id && product.title ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ProductItem_ProductItem__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                id: product.id,\n                title: product.title,\n                description: product.description,\n                price: product.price,\n                category: category.valueCategory,\n                phone: product.phone,\n                userName: product.userName\n            }, product.id, false, {\n                fileName: \"E:\\\\work\\\\test-project\\\\src\\\\app\\\\product\\\\[id]\\\\page.jsx\",\n                lineNumber: 35,\n                columnNumber: 11\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"E:\\\\work\\\\test-project\\\\src\\\\app\\\\product\\\\[id]\\\\page.jsx\",\n            lineNumber: 34,\n            columnNumber: 9\n        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"Loading\"\n        }, void 0, false, {\n            fileName: \"E:\\\\work\\\\test-project\\\\src\\\\app\\\\product\\\\[id]\\\\page.jsx\",\n            lineNumber: 47,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"E:\\\\work\\\\test-project\\\\src\\\\app\\\\product\\\\[id]\\\\page.jsx\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, undefined);\n};\n_s(page, \"6KyXiVmcoJr4X/B3omU9pQRaMu4=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (page);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcHJvZHVjdC9baWRdL3BhZ2UuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDK0Q7QUFDakI7QUFDRjtBQUNsQjtBQUUxQixNQUFNSyxPQUFPOztJQUNYLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHSiwrQ0FBUUE7SUFDdEMsTUFBTSxDQUFDSyxVQUFVQyxZQUFZLEdBQUdOLCtDQUFRQTtJQUN4QyxNQUFNTyxXQUFXVCw0REFBV0E7SUFDNUJDLGdEQUFTQSxDQUFDO1FBQ1JFLDZDQUFLQSxDQUFDTyxHQUFHLENBQUMsbUNBQW1DQyxJQUFJLENBQUMsQ0FBQ0M7WUFDakQsSUFBSUM7WUFDSkQsSUFBSUUsSUFBSSxDQUFDQyxHQUFHLENBQUMsQ0FBQ0M7Z0JBQ1osSUFBSUEsR0FBR0MsRUFBRSxJQUFJUixTQUFTUyxLQUFLLENBQUMsSUFBSSxDQUFDVCxTQUFTUyxLQUFLLENBQUMsS0FBS0MsTUFBTSxHQUFHLEVBQUUsRUFBRTtvQkFDaEVOLE9BQU9HO2dCQUNUO1lBQ0Y7WUFDQVYsV0FBV087UUFDYjtRQUNBViw2Q0FBS0EsQ0FBQ08sR0FBRyxDQUFDLHFDQUFxQ0MsSUFBSSxDQUFDLENBQUNDO1lBQ25ELElBQUlRO1lBQ0pSLElBQUlFLElBQUksQ0FBQ0MsR0FBRyxDQUFDLENBQUNDO2dCQUNaLElBQUlBLEdBQUdDLEVBQUUsSUFBSVIsU0FBU1MsS0FBSyxDQUFDLElBQUksQ0FBQ1QsU0FBU1MsS0FBSyxDQUFDLEtBQUtDLE1BQU0sR0FBRyxFQUFFLEVBQUU7b0JBQ2hFQyxhQUFhSjtnQkFDZjtZQUNGO1lBQ0FSLFlBQVlZO1FBQ2Q7SUFDRixHQUFHLEVBQUU7SUFDTCxxQkFDRSw4REFBQ0M7a0JBQ0VkLFlBQVlGLFdBQVdBLFFBQVFZLEVBQUUsSUFBSVosUUFBUWlCLEtBQUssaUJBQ2pELDhEQUFDRDtzQkFDQyw0RUFBQ3RCLDJFQUFXQTtnQkFFVmtCLElBQUlaLFFBQVFZLEVBQUU7Z0JBQ2RLLE9BQU9qQixRQUFRaUIsS0FBSztnQkFDcEJDLGFBQWFsQixRQUFRa0IsV0FBVztnQkFDaENDLE9BQU9uQixRQUFRbUIsS0FBSztnQkFDcEJqQixVQUFVQSxTQUFTa0IsYUFBYTtnQkFDaENDLE9BQU9yQixRQUFRcUIsS0FBSztnQkFDcEJDLFVBQVV0QixRQUFRc0IsUUFBUTtlQVByQnRCLFFBQVFZLEVBQUU7Ozs7Ozs7OztzQ0FXbkIsOERBQUNXO3NCQUFFOzs7Ozs7Ozs7OztBQUlYO0dBNUNNeEI7O1FBR2FKLHdEQUFXQTs7O0FBMkM5QiwrREFBZUksSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3Byb2R1Y3QvW2lkXS9wYWdlLmpzeD8wZTY2Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgUHJvZHVjdEl0ZW0gZnJvbSBcIkAvY29tcG9uZW50cy9Qcm9kdWN0SXRlbS9Qcm9kdWN0SXRlbVwiO1xyXG5pbXBvcnQgeyB1c2VQYXRobmFtZSB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5jb25zdCBwYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtwcm9kdWN0LCBzZXRQcm9kdWN0XSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW2NhdGVnb3J5LCBzZXRDYXRlZ29yeV0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IHBhdGhuYW1lID0gdXNlUGF0aG5hbWUoKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgYXhpb3MuZ2V0KFwiaHR0cDovL2xvY2FsaG9zdDozMDAxL3Byb2R1Y3RzL1wiKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgbGV0IHByb2Q7XHJcbiAgICAgIHJlcy5kYXRhLm1hcCgoZWwpID0+IHtcclxuICAgICAgICBpZiAoZWwuaWQgPT0gcGF0aG5hbWUuc3BsaXQoXCIvXCIpW3BhdGhuYW1lLnNwbGl0KFwiL1wiKS5sZW5ndGggLSAxXSkge1xyXG4gICAgICAgICAgcHJvZCA9IGVsO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIHNldFByb2R1Y3QocHJvZCk7XHJcbiAgICB9KTtcclxuICAgIGF4aW9zLmdldChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9jYXRlZ29yaWVzL1wiKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgbGV0IGNhdGVnb3JpZXM7XHJcbiAgICAgIHJlcy5kYXRhLm1hcCgoZWwpID0+IHtcclxuICAgICAgICBpZiAoZWwuaWQgPT0gcGF0aG5hbWUuc3BsaXQoXCIvXCIpW3BhdGhuYW1lLnNwbGl0KFwiL1wiKS5sZW5ndGggLSAxXSkge1xyXG4gICAgICAgICAgY2F0ZWdvcmllcyA9IGVsO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIHNldENhdGVnb3J5KGNhdGVnb3JpZXMpO1xyXG4gICAgfSk7XHJcbiAgfSwgW10pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICB7Y2F0ZWdvcnkgJiYgcHJvZHVjdCAmJiBwcm9kdWN0LmlkICYmIHByb2R1Y3QudGl0bGUgPyAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxQcm9kdWN0SXRlbVxyXG4gICAgICAgICAgICBrZXk9e3Byb2R1Y3QuaWR9XHJcbiAgICAgICAgICAgIGlkPXtwcm9kdWN0LmlkfVxyXG4gICAgICAgICAgICB0aXRsZT17cHJvZHVjdC50aXRsZX1cclxuICAgICAgICAgICAgZGVzY3JpcHRpb249e3Byb2R1Y3QuZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgIHByaWNlPXtwcm9kdWN0LnByaWNlfVxyXG4gICAgICAgICAgICBjYXRlZ29yeT17Y2F0ZWdvcnkudmFsdWVDYXRlZ29yeX1cclxuICAgICAgICAgICAgcGhvbmU9e3Byb2R1Y3QucGhvbmV9XHJcbiAgICAgICAgICAgIHVzZXJOYW1lPXtwcm9kdWN0LnVzZXJOYW1lfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8cD5Mb2FkaW5nPC9wPlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHBhZ2U7XHJcbiJdLCJuYW1lcyI6WyJQcm9kdWN0SXRlbSIsInVzZVBhdGhuYW1lIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJheGlvcyIsInBhZ2UiLCJwcm9kdWN0Iiwic2V0UHJvZHVjdCIsImNhdGVnb3J5Iiwic2V0Q2F0ZWdvcnkiLCJwYXRobmFtZSIsImdldCIsInRoZW4iLCJyZXMiLCJwcm9kIiwiZGF0YSIsIm1hcCIsImVsIiwiaWQiLCJzcGxpdCIsImxlbmd0aCIsImNhdGVnb3JpZXMiLCJkaXYiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwicHJpY2UiLCJ2YWx1ZUNhdGVnb3J5IiwicGhvbmUiLCJ1c2VyTmFtZSIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/product/[id]/page.jsx\n"));

/***/ })

});