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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst UploadImageComponent = ()=>{\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        selectedFile: \"\",\n        responseArray: \"\",\n        loading: false\n    });\n    const [imgUrl, setImgUrl] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleInputChange = (event)=>{\n        console.log(\"event\", event.target.files);\n        setData({\n            ...data,\n            loading: true\n        });\n        const [imgData] = event.target.files;\n        const info = new FormData();\n        info.append(\"file\", imgData);\n        axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post(\"http://localhost:3001/uploadImage/\", info, {\n            headers: {\n                \"content-type\": \"application/x-www-form-urlencoded\"\n            }\n        }).then((param)=>{\n            let { data } = param;\n            console.log(\"imageData\", data);\n            setData({\n                ...data,\n                responseArray: data,\n                loading: false\n            });\n            setImgUrl(data[0].url);\n            resetFile();\n        });\n    };\n    function resetFile() {\n        // Reset file input control\n        document.getElementsByName(\"file\").value = null;\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            textAlign: \"center\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            style: {\n                marginTop: \"25px\"\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"file\",\n                    onChange: handleInputChange\n                }, void 0, false, {\n                    fileName: \"C:\\\\proj\\\\test-project\\\\src\\\\components\\\\UploadImageComponent\\\\UploadImageComponent.jsx\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, undefined),\n                imgUrl && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    decoding: \"async\",\n                    src: imgUrl\n                }, void 0, false, {\n                    fileName: \"C:\\\\proj\\\\test-project\\\\src\\\\components\\\\UploadImageComponent\\\\UploadImageComponent.jsx\",\n                    lineNumber: 37,\n                    columnNumber: 20\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\proj\\\\test-project\\\\src\\\\components\\\\UploadImageComponent\\\\UploadImageComponent.jsx\",\n            lineNumber: 35,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\proj\\\\test-project\\\\src\\\\components\\\\UploadImageComponent\\\\UploadImageComponent.jsx\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, undefined);\n};\n_s(UploadImageComponent, \"rYa8rBxE/+O1L/PTi5j3ocblu8c=\");\n_c = UploadImageComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (UploadImageComponent);\nvar _c;\n$RefreshReg$(_c, \"UploadImageComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1VwbG9hZEltYWdlQ29tcG9uZW50L1VwbG9hZEltYWdlQ29tcG9uZW50LmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQzBCO0FBQ2M7QUFFeEMsTUFBTUcsdUJBQXVCOztJQUMzQixNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR0gsK0NBQVFBLENBQUM7UUFDL0JJLGNBQWM7UUFDZEMsZUFBZTtRQUNmQyxTQUFTO0lBQ1g7SUFDQSxNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR1IsK0NBQVFBLENBQUM7SUFDckMsTUFBTVMsb0JBQW9CLENBQUNDO1FBQ3pCQyxRQUFRQyxHQUFHLENBQUMsU0FBU0YsTUFBTUcsTUFBTSxDQUFDQyxLQUFLO1FBQ3ZDWCxRQUFRO1lBQUUsR0FBR0QsSUFBSTtZQUFFSSxTQUFTO1FBQUs7UUFDakMsTUFBTSxDQUFDUyxRQUFRLEdBQUdMLE1BQU1HLE1BQU0sQ0FBQ0MsS0FBSztRQUNwQyxNQUFNRSxPQUFPLElBQUlDO1FBQ2pCRCxLQUFLRSxNQUFNLENBQUMsUUFBUUg7UUFDcEJqQiw2Q0FBS0EsQ0FBQ3FCLElBQUksQ0FBRSxzQ0FBcUNILE1BQU07WUFDckRJLFNBQVM7Z0JBQ1AsZ0JBQWdCO1lBQ2xCO1FBQ0YsR0FBR0MsSUFBSSxDQUFDO2dCQUFDLEVBQUVuQixJQUFJLEVBQUU7WUFDZlMsUUFBUUMsR0FBRyxDQUFDLGFBQWFWO1lBQ3pCQyxRQUFRO2dCQUFFLEdBQUdELElBQUk7Z0JBQUVHLGVBQWVIO2dCQUFNSSxTQUFTO1lBQU07WUFDdkRFLFVBQVVOLElBQUksQ0FBQyxFQUFFLENBQUNvQixHQUFHO1lBQ3JCQztRQUNGO0lBQ0Y7SUFDQSxTQUFTQTtRQUNQLDJCQUEyQjtRQUMzQkMsU0FBU0MsaUJBQWlCLENBQUMsUUFBUUMsS0FBSyxHQUFHO0lBQzdDO0lBQ0EscUJBQ0UsOERBQUNDO1FBQUlDLE9BQU87WUFBRUMsV0FBVztRQUFTO2tCQUNoQyw0RUFBQ0Y7WUFBSUMsT0FBTztnQkFBRUUsV0FBVztZQUFPOzs4QkFDOUIsOERBQUNDO29CQUFNQyxNQUFLO29CQUFPQyxVQUFVeEI7Ozs7OztnQkFDNUJGLHdCQUFVLDhEQUFDMkI7b0JBQUlDLFVBQVM7b0JBQVFDLEtBQUs3Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJOUM7R0FwQ01OO0tBQUFBO0FBc0NOLCtEQUFlQSxvQkFBb0JBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVXBsb2FkSW1hZ2VDb21wb25lbnQvVXBsb2FkSW1hZ2VDb21wb25lbnQuanN4PzU2ZTkiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcbmltcG9ydCBBeGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBVcGxvYWRJbWFnZUNvbXBvbmVudCA9ICgpID0+IHtcclxuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZSh7XHJcbiAgICBzZWxlY3RlZEZpbGU6IFwiXCIsXHJcbiAgICByZXNwb25zZUFycmF5OiBcIlwiLFxyXG4gICAgbG9hZGluZzogZmFsc2UsXHJcbiAgfSk7XHJcbiAgY29uc3QgW2ltZ1VybCwgc2V0SW1nVXJsXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IGhhbmRsZUlucHV0Q2hhbmdlID0gKGV2ZW50KSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcImV2ZW50XCIsIGV2ZW50LnRhcmdldC5maWxlcyk7XHJcbiAgICBzZXREYXRhKHsgLi4uZGF0YSwgbG9hZGluZzogdHJ1ZSB9KTtcclxuICAgIGNvbnN0IFtpbWdEYXRhXSA9IGV2ZW50LnRhcmdldC5maWxlcztcclxuICAgIGNvbnN0IGluZm8gPSBuZXcgRm9ybURhdGEoKTtcclxuICAgIGluZm8uYXBwZW5kKFwiZmlsZVwiLCBpbWdEYXRhKTtcclxuICAgIEF4aW9zLnBvc3QoYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS91cGxvYWRJbWFnZS9gLCBpbmZvLCB7XHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBcImNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiLFxyXG4gICAgICB9LFxyXG4gICAgfSkudGhlbigoeyBkYXRhIH0pID0+IHtcclxuICAgICAgY29uc29sZS5sb2coXCJpbWFnZURhdGFcIiwgZGF0YSk7XHJcbiAgICAgIHNldERhdGEoeyAuLi5kYXRhLCByZXNwb25zZUFycmF5OiBkYXRhLCBsb2FkaW5nOiBmYWxzZSB9KTtcclxuICAgICAgc2V0SW1nVXJsKGRhdGFbMF0udXJsKTtcclxuICAgICAgcmVzZXRGaWxlKCk7XHJcbiAgICB9KTtcclxuICB9O1xyXG4gIGZ1bmN0aW9uIHJlc2V0RmlsZSgpIHtcclxuICAgIC8vIFJlc2V0IGZpbGUgaW5wdXQgY29udHJvbFxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoXCJmaWxlXCIpLnZhbHVlID0gbnVsbDtcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiIH19PlxyXG4gICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogXCIyNXB4XCIgfX0+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfSAvPlxyXG4gICAgICAgIHtpbWdVcmwgJiYgPGltZyBkZWNvZGluZz1cImFzeW5jXCIgc3JjPXtpbWdVcmx9IC8+fVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVcGxvYWRJbWFnZUNvbXBvbmVudDtcclxuIl0sIm5hbWVzIjpbIkF4aW9zIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsIlVwbG9hZEltYWdlQ29tcG9uZW50IiwiZGF0YSIsInNldERhdGEiLCJzZWxlY3RlZEZpbGUiLCJyZXNwb25zZUFycmF5IiwibG9hZGluZyIsImltZ1VybCIsInNldEltZ1VybCIsImhhbmRsZUlucHV0Q2hhbmdlIiwiZXZlbnQiLCJjb25zb2xlIiwibG9nIiwidGFyZ2V0IiwiZmlsZXMiLCJpbWdEYXRhIiwiaW5mbyIsIkZvcm1EYXRhIiwiYXBwZW5kIiwicG9zdCIsImhlYWRlcnMiLCJ0aGVuIiwidXJsIiwicmVzZXRGaWxlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5TmFtZSIsInZhbHVlIiwiZGl2Iiwic3R5bGUiLCJ0ZXh0QWxpZ24iLCJtYXJnaW5Ub3AiLCJpbnB1dCIsInR5cGUiLCJvbkNoYW5nZSIsImltZyIsImRlY29kaW5nIiwic3JjIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/UploadImageComponent/UploadImageComponent.jsx\n"));

/***/ })

});