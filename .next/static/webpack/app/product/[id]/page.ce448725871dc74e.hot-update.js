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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_ProductItem_ProductItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/ProductItem/ProductItem */ \"(app-pages-browser)/./src/components/ProductItem/ProductItem.jsx\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst page = ()=>{\n    _s();\n    const [product, setProduct] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();\n    const [categories, setCategories] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();\n    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname)();\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"http://localhost:3001/products/\").then((res)=>{\n            let prod;\n            res.data.map((el)=>{\n                if (el.id == pathname.split(\"/\")[pathname.split(\"/\").length - 1]) {\n                    prod = el;\n                }\n            });\n            setProduct(prod);\n        });\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"http://localhost:3001/categories/\").then((res)=>{\n            let category;\n            category = res.data;\n            setCategories(category);\n            console.log(category);\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: product && product.id && product.title ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ProductItem_ProductItem__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                id: product.id,\n                imageProduct: product.imageProduct,\n                title: product.title,\n                description: product.description,\n                price: product.price,\n                valueCategory: categories.valueCategory ? categories.valueCategory : null,\n                phone: product.phone,\n                userName: product.userName\n            }, product.id, false, {\n                fileName: \"E:\\\\work\\\\test-project\\\\src\\\\app\\\\product\\\\[id]\\\\page.jsx\",\n                lineNumber: 34,\n                columnNumber: 11\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"E:\\\\work\\\\test-project\\\\src\\\\app\\\\product\\\\[id]\\\\page.jsx\",\n            lineNumber: 33,\n            columnNumber: 9\n        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"Loading\"\n        }, void 0, false, {\n            fileName: \"E:\\\\work\\\\test-project\\\\src\\\\app\\\\product\\\\[id]\\\\page.jsx\",\n            lineNumber: 49,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"E:\\\\work\\\\test-project\\\\src\\\\app\\\\product\\\\[id]\\\\page.jsx\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, undefined);\n};\n_s(page, \"SLzXn8u4RB97xFWhv9oyvmgEdxw=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (page);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcHJvZHVjdC9baWRdL3BhZ2UuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDK0Q7QUFDakI7QUFDRjtBQUNsQjtBQUUxQixNQUFNSyxPQUFPOztJQUNYLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHSiwrQ0FBUUE7SUFDdEMsTUFBTSxDQUFDSyxZQUFZQyxjQUFjLEdBQUdOLCtDQUFRQTtJQUM1QyxNQUFNTyxXQUFXVCw0REFBV0E7SUFDNUJDLGdEQUFTQSxDQUFDO1FBQ1JFLDZDQUFLQSxDQUFDTyxHQUFHLENBQUMsbUNBQW1DQyxJQUFJLENBQUMsQ0FBQ0M7WUFDakQsSUFBSUM7WUFDSkQsSUFBSUUsSUFBSSxDQUFDQyxHQUFHLENBQUMsQ0FBQ0M7Z0JBQ1osSUFBSUEsR0FBR0MsRUFBRSxJQUFJUixTQUFTUyxLQUFLLENBQUMsSUFBSSxDQUFDVCxTQUFTUyxLQUFLLENBQUMsS0FBS0MsTUFBTSxHQUFHLEVBQUUsRUFBRTtvQkFDaEVOLE9BQU9HO2dCQUNUO1lBQ0Y7WUFDQVYsV0FBV087UUFDYjtJQUNGLEdBQUcsRUFBRTtJQUNMWixnREFBU0EsQ0FBQztRQUNSRSw2Q0FBS0EsQ0FBQ08sR0FBRyxDQUFDLHFDQUFxQ0MsSUFBSSxDQUFDLENBQUNDO1lBQ25ELElBQUlRO1lBQ0pBLFdBQVdSLElBQUlFLElBQUk7WUFDbkJOLGNBQWNZO1lBQ2RDLFFBQVFDLEdBQUcsQ0FBQ0Y7UUFDZDtJQUNGLEdBQUcsRUFBRTtJQUNMLHFCQUNFLDhEQUFDRztrQkFDRWxCLFdBQVdBLFFBQVFZLEVBQUUsSUFBSVosUUFBUW1CLEtBQUssaUJBQ3JDLDhEQUFDRDtzQkFDQyw0RUFBQ3hCLDJFQUFXQTtnQkFFVmtCLElBQUlaLFFBQVFZLEVBQUU7Z0JBQ2RRLGNBQWNwQixRQUFRb0IsWUFBWTtnQkFDbENELE9BQU9uQixRQUFRbUIsS0FBSztnQkFDcEJFLGFBQWFyQixRQUFRcUIsV0FBVztnQkFDaENDLE9BQU90QixRQUFRc0IsS0FBSztnQkFDcEJDLGVBQ0VyQixXQUFXcUIsYUFBYSxHQUFHckIsV0FBV3FCLGFBQWEsR0FBRztnQkFFeERDLE9BQU94QixRQUFRd0IsS0FBSztnQkFDcEJDLFVBQVV6QixRQUFReUIsUUFBUTtlQVZyQnpCLFFBQVFZLEVBQUU7Ozs7Ozs7OztzQ0FjbkIsOERBQUNjO3NCQUFFOzs7Ozs7Ozs7OztBQUlYO0dBOUNNM0I7O1FBR2FKLHdEQUFXQTs7O0FBNkM5QiwrREFBZUksSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3Byb2R1Y3QvW2lkXS9wYWdlLmpzeD8wZTY2Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgUHJvZHVjdEl0ZW0gZnJvbSBcIkAvY29tcG9uZW50cy9Qcm9kdWN0SXRlbS9Qcm9kdWN0SXRlbVwiO1xyXG5pbXBvcnQgeyB1c2VQYXRobmFtZSB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5jb25zdCBwYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtwcm9kdWN0LCBzZXRQcm9kdWN0XSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW2NhdGVnb3JpZXMsIHNldENhdGVnb3JpZXNdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBwYXRobmFtZSA9IHVzZVBhdGhuYW1lKCk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGF4aW9zLmdldChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9wcm9kdWN0cy9cIikudGhlbigocmVzKSA9PiB7XHJcbiAgICAgIGxldCBwcm9kO1xyXG4gICAgICByZXMuZGF0YS5tYXAoKGVsKSA9PiB7XHJcbiAgICAgICAgaWYgKGVsLmlkID09IHBhdGhuYW1lLnNwbGl0KFwiL1wiKVtwYXRobmFtZS5zcGxpdChcIi9cIikubGVuZ3RoIC0gMV0pIHtcclxuICAgICAgICAgIHByb2QgPSBlbDtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICBzZXRQcm9kdWN0KHByb2QpO1xyXG4gICAgfSk7XHJcbiAgfSwgW10pO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBheGlvcy5nZXQoXCJodHRwOi8vbG9jYWxob3N0OjMwMDEvY2F0ZWdvcmllcy9cIikudGhlbigocmVzKSA9PiB7XHJcbiAgICAgIGxldCBjYXRlZ29yeTtcclxuICAgICAgY2F0ZWdvcnkgPSByZXMuZGF0YTtcclxuICAgICAgc2V0Q2F0ZWdvcmllcyhjYXRlZ29yeSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKGNhdGVnb3J5KTtcclxuICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAge3Byb2R1Y3QgJiYgcHJvZHVjdC5pZCAmJiBwcm9kdWN0LnRpdGxlID8gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8UHJvZHVjdEl0ZW1cclxuICAgICAgICAgICAga2V5PXtwcm9kdWN0LmlkfVxyXG4gICAgICAgICAgICBpZD17cHJvZHVjdC5pZH1cclxuICAgICAgICAgICAgaW1hZ2VQcm9kdWN0PXtwcm9kdWN0LmltYWdlUHJvZHVjdH1cclxuICAgICAgICAgICAgdGl0bGU9e3Byb2R1Y3QudGl0bGV9XHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtwcm9kdWN0LmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICBwcmljZT17cHJvZHVjdC5wcmljZX1cclxuICAgICAgICAgICAgdmFsdWVDYXRlZ29yeT17XHJcbiAgICAgICAgICAgICAgY2F0ZWdvcmllcy52YWx1ZUNhdGVnb3J5ID8gY2F0ZWdvcmllcy52YWx1ZUNhdGVnb3J5IDogbnVsbFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHBob25lPXtwcm9kdWN0LnBob25lfVxyXG4gICAgICAgICAgICB1c2VyTmFtZT17cHJvZHVjdC51c2VyTmFtZX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPHA+TG9hZGluZzwvcD5cclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwYWdlO1xyXG4iXSwibmFtZXMiOlsiUHJvZHVjdEl0ZW0iLCJ1c2VQYXRobmFtZSIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiYXhpb3MiLCJwYWdlIiwicHJvZHVjdCIsInNldFByb2R1Y3QiLCJjYXRlZ29yaWVzIiwic2V0Q2F0ZWdvcmllcyIsInBhdGhuYW1lIiwiZ2V0IiwidGhlbiIsInJlcyIsInByb2QiLCJkYXRhIiwibWFwIiwiZWwiLCJpZCIsInNwbGl0IiwibGVuZ3RoIiwiY2F0ZWdvcnkiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwidGl0bGUiLCJpbWFnZVByb2R1Y3QiLCJkZXNjcmlwdGlvbiIsInByaWNlIiwidmFsdWVDYXRlZ29yeSIsInBob25lIiwidXNlck5hbWUiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/product/[id]/page.jsx\n"));

/***/ })

});