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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst UploadImageComponent = (param)=>{\n    let { setter } = param;\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        selectedFile: \"\",\n        responseArray: \"\",\n        loading: false\n    });\n    const [imgUrl, setImgUrl] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleInputChange = (event)=>{\n        console.log(\"event\", event.target.files);\n        setData({\n            ...data,\n            loading: true\n        });\n        const [imgData] = event.target.files;\n        const info = new FormData();\n        info.append(\"file\", imgData);\n        axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post(\"http://localhost:3001/uploadImage/\", info, {\n            headers: {\n                \"content-type\": \"application/x-www-form-urlencoded\"\n            }\n        }).then((param)=>{\n            let { data } = param;\n            console.log(\"imageData\", data);\n            setData({\n                ...data,\n                responseArray: data,\n                loading: false\n            });\n            setImgUrl(data[0].url);\n            resetFile();\n            setter(data[0].url);\n        });\n    };\n    function resetFile() {\n        document.getElementsByName(\"file\").value = null;\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            \"required\",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"file\",\n                onChange: handleInputChange\n            }, void 0, false, {\n                fileName: \"E:\\\\work\\\\test-project\\\\src\\\\components\\\\UploadImageComponent\\\\UploadImageComponent.jsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, undefined),\n            imgUrl && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                style: {\n                    width: \"250px\",\n                    height: \"175px\",\n                    borderRadius: \"10px\"\n                },\n                decoding: \"async\",\n                src: imgUrl\n            }, void 0, false, {\n                fileName: \"E:\\\\work\\\\test-project\\\\src\\\\components\\\\UploadImageComponent\\\\UploadImageComponent.jsx\",\n                lineNumber: 39,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(UploadImageComponent, \"71A9lV1z/b7b6JWnoMg34RECXxE=\");\n_c = UploadImageComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (UploadImageComponent);\nvar _c;\n$RefreshReg$(_c, \"UploadImageComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1VwbG9hZEltYWdlQ29tcG9uZW50L1VwbG9hZEltYWdlQ29tcG9uZW50LmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQzBCO0FBQ2M7QUFFeEMsTUFBTUcsdUJBQXVCO1FBQUMsRUFBRUMsTUFBTSxFQUFFOztJQUN0QyxNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR0osK0NBQVFBLENBQUM7UUFDL0JLLGNBQWM7UUFDZEMsZUFBZTtRQUNmQyxTQUFTO0lBQ1g7SUFDQSxNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR1QsK0NBQVFBLENBQUM7SUFDckMsTUFBTVUsb0JBQW9CLENBQUNDO1FBQ3pCQyxRQUFRQyxHQUFHLENBQUMsU0FBU0YsTUFBTUcsTUFBTSxDQUFDQyxLQUFLO1FBQ3ZDWCxRQUFRO1lBQUUsR0FBR0QsSUFBSTtZQUFFSSxTQUFTO1FBQUs7UUFDakMsTUFBTSxDQUFDUyxRQUFRLEdBQUdMLE1BQU1HLE1BQU0sQ0FBQ0MsS0FBSztRQUNwQyxNQUFNRSxPQUFPLElBQUlDO1FBQ2pCRCxLQUFLRSxNQUFNLENBQUMsUUFBUUg7UUFDcEJsQiw2Q0FBS0EsQ0FBQ3NCLElBQUksQ0FBRSxzQ0FBcUNILE1BQU07WUFDckRJLFNBQVM7Z0JBQ1AsZ0JBQWdCO1lBQ2xCO1FBQ0YsR0FBR0MsSUFBSSxDQUFDO2dCQUFDLEVBQUVuQixJQUFJLEVBQUU7WUFDZlMsUUFBUUMsR0FBRyxDQUFDLGFBQWFWO1lBQ3pCQyxRQUFRO2dCQUFFLEdBQUdELElBQUk7Z0JBQUVHLGVBQWVIO2dCQUFNSSxTQUFTO1lBQU07WUFDdkRFLFVBQVVOLElBQUksQ0FBQyxFQUFFLENBQUNvQixHQUFHO1lBQ3JCQztZQUNBdEIsT0FBT0MsSUFBSSxDQUFDLEVBQUUsQ0FBQ29CLEdBQUc7UUFDcEI7SUFDRjtJQUNBLFNBQVNDO1FBQ1BDLFNBQVNDLGlCQUFpQixDQUFDLFFBQVFDLEtBQUssR0FBRztJQUM3QztJQUVBLHFCQUNFOztZQUFFOzBCQUVBLDhEQUFDQztnQkFBTUMsTUFBSztnQkFBT0MsVUFBVXBCOzs7Ozs7WUFDNUJGLHdCQUNDLDhEQUFDdUI7Z0JBQ0NDLE9BQU87b0JBQ0xDLE9BQU87b0JBQ1BDLFFBQVE7b0JBQ1JDLGNBQWM7Z0JBQ2hCO2dCQUNBQyxVQUFTO2dCQUNUQyxLQUFLN0I7Ozs7Ozs7O0FBS2Y7R0E5Q01QO0tBQUFBO0FBZ0ROLCtEQUFlQSxvQkFBb0JBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVXBsb2FkSW1hZ2VDb21wb25lbnQvVXBsb2FkSW1hZ2VDb21wb25lbnQuanN4PzU2ZTkiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgQXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgVXBsb2FkSW1hZ2VDb21wb25lbnQgPSAoeyBzZXR0ZXIgfSkgPT4ge1xuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZSh7XG4gICAgc2VsZWN0ZWRGaWxlOiBcIlwiLFxuICAgIHJlc3BvbnNlQXJyYXk6IFwiXCIsXG4gICAgbG9hZGluZzogZmFsc2UsXG4gIH0pO1xuICBjb25zdCBbaW1nVXJsLCBzZXRJbWdVcmxdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IGhhbmRsZUlucHV0Q2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJldmVudFwiLCBldmVudC50YXJnZXQuZmlsZXMpO1xuICAgIHNldERhdGEoeyAuLi5kYXRhLCBsb2FkaW5nOiB0cnVlIH0pO1xuICAgIGNvbnN0IFtpbWdEYXRhXSA9IGV2ZW50LnRhcmdldC5maWxlcztcbiAgICBjb25zdCBpbmZvID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgaW5mby5hcHBlbmQoXCJmaWxlXCIsIGltZ0RhdGEpO1xuICAgIEF4aW9zLnBvc3QoYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS91cGxvYWRJbWFnZS9gLCBpbmZvLCB7XG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIFwiY29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIsXG4gICAgICB9LFxuICAgIH0pLnRoZW4oKHsgZGF0YSB9KSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcImltYWdlRGF0YVwiLCBkYXRhKTtcbiAgICAgIHNldERhdGEoeyAuLi5kYXRhLCByZXNwb25zZUFycmF5OiBkYXRhLCBsb2FkaW5nOiBmYWxzZSB9KTtcbiAgICAgIHNldEltZ1VybChkYXRhWzBdLnVybCk7XG4gICAgICByZXNldEZpbGUoKTtcbiAgICAgIHNldHRlcihkYXRhWzBdLnVybCk7XG4gICAgfSk7XG4gIH07XG4gIGZ1bmN0aW9uIHJlc2V0RmlsZSgpIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShcImZpbGVcIikudmFsdWUgPSBudWxsO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgcmVxdWlyZWRcbiAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX0gLz5cbiAgICAgIHtpbWdVcmwgJiYgKFxuICAgICAgICA8aW1nXG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIHdpZHRoOiBcIjI1MHB4XCIsXG4gICAgICAgICAgICBoZWlnaHQ6IFwiMTc1cHhcIixcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCIxMHB4XCIsXG4gICAgICAgICAgfX1cbiAgICAgICAgICBkZWNvZGluZz1cImFzeW5jXCJcbiAgICAgICAgICBzcmM9e2ltZ1VybH1cbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBVcGxvYWRJbWFnZUNvbXBvbmVudDtcbiJdLCJuYW1lcyI6WyJBeGlvcyIsIlJlYWN0IiwidXNlU3RhdGUiLCJVcGxvYWRJbWFnZUNvbXBvbmVudCIsInNldHRlciIsImRhdGEiLCJzZXREYXRhIiwic2VsZWN0ZWRGaWxlIiwicmVzcG9uc2VBcnJheSIsImxvYWRpbmciLCJpbWdVcmwiLCJzZXRJbWdVcmwiLCJoYW5kbGVJbnB1dENoYW5nZSIsImV2ZW50IiwiY29uc29sZSIsImxvZyIsInRhcmdldCIsImZpbGVzIiwiaW1nRGF0YSIsImluZm8iLCJGb3JtRGF0YSIsImFwcGVuZCIsInBvc3QiLCJoZWFkZXJzIiwidGhlbiIsInVybCIsInJlc2V0RmlsZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeU5hbWUiLCJ2YWx1ZSIsImlucHV0IiwidHlwZSIsIm9uQ2hhbmdlIiwiaW1nIiwic3R5bGUiLCJ3aWR0aCIsImhlaWdodCIsImJvcmRlclJhZGl1cyIsImRlY29kaW5nIiwic3JjIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/UploadImageComponent/UploadImageComponent.jsx\n"));

/***/ })

});