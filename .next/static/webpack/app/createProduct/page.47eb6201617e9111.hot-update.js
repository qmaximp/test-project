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

/***/ "(app-pages-browser)/./src/components/UploadImageComponent/UploadImageComponent.jsx":
/*!**********************************************************************!*\
  !*** ./src/components/UploadImageComponent/UploadImageComponent.jsx ***!
  \**********************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* provided dependency */ var process = __webpack_require__(/*! process */ \"(app-pages-browser)/./node_modules/next/dist/build/polyfills/process.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst UploadImageComponent = ()=>{\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        selectedFile: \"\",\n        responseArray: \"\",\n        loading: false\n    });\n    const [imgUrl, setImgUrl] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleInputChange = (event)=>{\n        console.log(\"event\", event.target.files);\n        setData({\n            ...data,\n            loading: true\n        });\n        const [imgData] = event.target.files;\n        const info = new FormData();\n        info.append(\"file\", imgData);\n        axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post(\"\".concat(process.env.API_PATH, \"uploadImage.php\"), info, {\n            headers: {\n                \"content-type\": \"multipart/form-data\"\n            }\n        }).then((param)=>{\n            let { data } = param;\n            console.log(\"imageData\", data);\n            setData({\n                ...data,\n                responseArray: data,\n                loading: false\n            });\n            setImgUrl(data[0].url);\n            resetFile();\n        });\n    };\n    function resetFile() {\n        // Reset file input control\n        document.getElementsByName(\"file\").value = null;\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            textAlign: \"center\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                children: \"UploadImageComponent\"\n            }, void 0, false, {\n                fileName: \"C:\\\\proj\\\\test-project\\\\src\\\\components\\\\UploadImageComponent\\\\UploadImageComponent.jsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    marginTop: \"25px\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"file\",\n                        onChange: handleInputChange\n                    }, void 0, false, {\n                        fileName: \"C:\\\\proj\\\\test-project\\\\src\\\\components\\\\UploadImageComponent\\\\UploadImageComponent.jsx\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, undefined),\n                    imgUrl && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        decoding: \"async\",\n                        src: imgUrl\n                    }, void 0, false, {\n                        fileName: \"C:\\\\proj\\\\test-project\\\\src\\\\components\\\\UploadImageComponent\\\\UploadImageComponent.jsx\",\n                        lineNumber: 38,\n                        columnNumber: 20\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\proj\\\\test-project\\\\src\\\\components\\\\UploadImageComponent\\\\UploadImageComponent.jsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\proj\\\\test-project\\\\src\\\\components\\\\UploadImageComponent\\\\UploadImageComponent.jsx\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, undefined);\n};\n_s(UploadImageComponent, \"rYa8rBxE/+O1L/PTi5j3ocblu8c=\");\n_c = UploadImageComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (UploadImageComponent);\nvar _c;\n$RefreshReg$(_c, \"UploadImageComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1VwbG9hZEltYWdlQ29tcG9uZW50L1VwbG9hZEltYWdlQ29tcG9uZW50LmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUMwQjtBQUNjO0FBRXhDLE1BQU1HLHVCQUF1Qjs7SUFDM0IsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdILCtDQUFRQSxDQUFDO1FBQy9CSSxjQUFjO1FBQ2RDLGVBQWU7UUFDZkMsU0FBUztJQUNYO0lBQ0EsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdSLCtDQUFRQSxDQUFDO0lBQ3JDLE1BQU1TLG9CQUFvQixDQUFDQztRQUN6QkMsUUFBUUMsR0FBRyxDQUFDLFNBQVNGLE1BQU1HLE1BQU0sQ0FBQ0MsS0FBSztRQUN2Q1gsUUFBUTtZQUFFLEdBQUdELElBQUk7WUFBRUksU0FBUztRQUFLO1FBQ2pDLE1BQU0sQ0FBQ1MsUUFBUSxHQUFHTCxNQUFNRyxNQUFNLENBQUNDLEtBQUs7UUFDcEMsTUFBTUUsT0FBTyxJQUFJQztRQUNqQkQsS0FBS0UsTUFBTSxDQUFDLFFBQVFIO1FBQ3BCakIsNkNBQUtBLENBQUNxQixJQUFJLENBQUMsR0FBd0IsT0FBckJDLE9BQU9BLENBQUNDLEdBQUcsQ0FBQ0MsUUFBUSxFQUFDLG9CQUFrQk4sTUFBTTtZQUN6RE8sU0FBUztnQkFDUCxnQkFBZ0I7WUFDbEI7UUFDRixHQUFHQyxJQUFJLENBQUM7Z0JBQUMsRUFBRXRCLElBQUksRUFBRTtZQUNmUyxRQUFRQyxHQUFHLENBQUMsYUFBYVY7WUFDekJDLFFBQVE7Z0JBQUUsR0FBR0QsSUFBSTtnQkFBRUcsZUFBZUg7Z0JBQU1JLFNBQVM7WUFBTTtZQUN2REUsVUFBVU4sSUFBSSxDQUFDLEVBQUUsQ0FBQ3VCLEdBQUc7WUFDckJDO1FBQ0Y7SUFDRjtJQUNBLFNBQVNBO1FBQ1AsMkJBQTJCO1FBQzNCQyxTQUFTQyxpQkFBaUIsQ0FBQyxRQUFRQyxLQUFLLEdBQUc7SUFDN0M7SUFDQSxxQkFDRSw4REFBQ0M7UUFBSUMsT0FBTztZQUFFQyxXQUFXO1FBQVM7OzBCQUNoQyw4REFBQ0M7MEJBQUc7Ozs7OzswQkFDSiw4REFBQ0g7Z0JBQUlDLE9BQU87b0JBQUVHLFdBQVc7Z0JBQU87O2tDQUM5Qiw4REFBQ0M7d0JBQU1DLE1BQUs7d0JBQU9DLFVBQVU1Qjs7Ozs7O29CQUM1QkYsd0JBQVUsOERBQUMrQjt3QkFBSUMsVUFBUzt3QkFBUUMsS0FBS2pDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJOUM7R0FyQ01OO0tBQUFBO0FBdUNOLCtEQUFlQSxvQkFBb0JBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVXBsb2FkSW1hZ2VDb21wb25lbnQvVXBsb2FkSW1hZ2VDb21wb25lbnQuanN4PzU2ZTkiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcbmltcG9ydCBBeGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBVcGxvYWRJbWFnZUNvbXBvbmVudCA9ICgpID0+IHtcclxuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZSh7XHJcbiAgICBzZWxlY3RlZEZpbGU6IFwiXCIsXHJcbiAgICByZXNwb25zZUFycmF5OiBcIlwiLFxyXG4gICAgbG9hZGluZzogZmFsc2UsXHJcbiAgfSk7XHJcbiAgY29uc3QgW2ltZ1VybCwgc2V0SW1nVXJsXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IGhhbmRsZUlucHV0Q2hhbmdlID0gKGV2ZW50KSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcImV2ZW50XCIsIGV2ZW50LnRhcmdldC5maWxlcyk7XHJcbiAgICBzZXREYXRhKHsgLi4uZGF0YSwgbG9hZGluZzogdHJ1ZSB9KTtcclxuICAgIGNvbnN0IFtpbWdEYXRhXSA9IGV2ZW50LnRhcmdldC5maWxlcztcclxuICAgIGNvbnN0IGluZm8gPSBuZXcgRm9ybURhdGEoKTtcclxuICAgIGluZm8uYXBwZW5kKFwiZmlsZVwiLCBpbWdEYXRhKTtcclxuICAgIEF4aW9zLnBvc3QoYCR7cHJvY2Vzcy5lbnYuQVBJX1BBVEh9dXBsb2FkSW1hZ2UucGhwYCwgaW5mbywge1xyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgXCJjb250ZW50LXR5cGVcIjogXCJtdWx0aXBhcnQvZm9ybS1kYXRhXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9KS50aGVuKCh7IGRhdGEgfSkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhcImltYWdlRGF0YVwiLCBkYXRhKTtcclxuICAgICAgc2V0RGF0YSh7IC4uLmRhdGEsIHJlc3BvbnNlQXJyYXk6IGRhdGEsIGxvYWRpbmc6IGZhbHNlIH0pO1xyXG4gICAgICBzZXRJbWdVcmwoZGF0YVswXS51cmwpO1xyXG4gICAgICByZXNldEZpbGUoKTtcclxuICAgIH0pO1xyXG4gIH07XHJcbiAgZnVuY3Rpb24gcmVzZXRGaWxlKCkge1xyXG4gICAgLy8gUmVzZXQgZmlsZSBpbnB1dCBjb250cm9sXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShcImZpbGVcIikudmFsdWUgPSBudWxsO1xyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+XHJcbiAgICAgIDxoND5VcGxvYWRJbWFnZUNvbXBvbmVudDwvaDQ+XHJcbiAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjI1cHhcIiB9fT5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9IC8+XHJcbiAgICAgICAge2ltZ1VybCAmJiA8aW1nIGRlY29kaW5nPVwiYXN5bmNcIiBzcmM9e2ltZ1VybH0gLz59XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVwbG9hZEltYWdlQ29tcG9uZW50O1xyXG4iXSwibmFtZXMiOlsiQXhpb3MiLCJSZWFjdCIsInVzZVN0YXRlIiwiVXBsb2FkSW1hZ2VDb21wb25lbnQiLCJkYXRhIiwic2V0RGF0YSIsInNlbGVjdGVkRmlsZSIsInJlc3BvbnNlQXJyYXkiLCJsb2FkaW5nIiwiaW1nVXJsIiwic2V0SW1nVXJsIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJldmVudCIsImNvbnNvbGUiLCJsb2ciLCJ0YXJnZXQiLCJmaWxlcyIsImltZ0RhdGEiLCJpbmZvIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJwb3N0IiwicHJvY2VzcyIsImVudiIsIkFQSV9QQVRIIiwiaGVhZGVycyIsInRoZW4iLCJ1cmwiLCJyZXNldEZpbGUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlOYW1lIiwidmFsdWUiLCJkaXYiLCJzdHlsZSIsInRleHRBbGlnbiIsImg0IiwibWFyZ2luVG9wIiwiaW5wdXQiLCJ0eXBlIiwib25DaGFuZ2UiLCJpbWciLCJkZWNvZGluZyIsInNyYyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/UploadImageComponent/UploadImageComponent.jsx\n"));

/***/ })

});