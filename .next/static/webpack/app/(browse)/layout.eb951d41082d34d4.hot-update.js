"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(browse)/layout",{

/***/ "(app-pages-browser)/./constants/constants.ts":
/*!********************************!*\
  !*** ./constants/constants.ts ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   caloriesData: function() { return /* binding */ caloriesData; },\n/* harmony export */   navLinks: function() { return /* binding */ navLinks; },\n/* harmony export */   restingHRData: function() { return /* binding */ restingHRData; },\n/* harmony export */   stepsData: function() { return /* binding */ stepsData; }\n/* harmony export */ });\n/* harmony import */ var _barrel_optimize_names_CircleDollarSign_lucide_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! __barrel_optimize__?names=CircleDollarSign!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/circle-dollar-sign.js\");\n\nconst navLinks = [\n    {\n        href: \"/monitoring\",\n        label: \"Monitoramento\",\n        className: \"text-foreground\",\n        icon: _barrel_optimize_names_CircleDollarSign_lucide_react__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n    }\n];\nconst stepsData = [\n    {\n        date: \"2024-01-01\",\n        steps: 2000\n    },\n    {\n        date: \"2024-01-02\",\n        steps: 2100\n    },\n    {\n        date: \"2024-01-03\",\n        steps: 2200\n    },\n    {\n        date: \"2024-01-04\",\n        steps: 1300\n    },\n    {\n        date: \"2024-01-05\",\n        steps: 1400\n    },\n    {\n        date: \"2024-01-06\",\n        steps: 2500\n    },\n    {\n        date: \"2024-01-07\",\n        steps: 1600\n    }\n];\nconst restingHRData = [\n    {\n        date: \"2024-01-01\",\n        resting: 62\n    },\n    {\n        date: \"2024-01-02\",\n        resting: 72\n    },\n    {\n        date: \"2024-01-03\",\n        resting: 35\n    },\n    {\n        date: \"2024-01-04\",\n        resting: 62\n    },\n    {\n        date: \"2024-01-05\",\n        resting: 52\n    },\n    {\n        date: \"2024-01-06\",\n        resting: 62\n    },\n    {\n        date: \"2024-01-07\",\n        resting: 70\n    }\n];\nconst caloriesData = [\n    {\n        date: \"2024-01-01\",\n        calories: 354\n    },\n    {\n        date: \"2024-01-02\",\n        calories: 514\n    },\n    {\n        date: \"2024-01-03\",\n        calories: 345\n    },\n    {\n        date: \"2024-01-04\",\n        calories: 734\n    },\n    {\n        date: \"2024-01-05\",\n        calories: 645\n    },\n    {\n        date: \"2024-01-06\",\n        calories: 456\n    },\n    {\n        date: \"2024-01-07\",\n        calories: 345\n    }\n];\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbnN0YW50cy9jb25zdGFudHMudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFXcUI7QUFFZCxNQUFNQyxXQUFXO0lBQ3RCO1FBQUVDLE1BQU07UUFBZUMsT0FBTztRQUFpQkMsV0FBVztRQUFtQkMsTUFBTUwsNEZBQWdCQTtJQUFDO0NBRXJHLENBQUM7QUFFSyxNQUFNTSxZQUFZO0lBQ3ZCO1FBQUVDLE1BQU07UUFBY0MsT0FBTztJQUFLO0lBQ2xDO1FBQUVELE1BQU07UUFBY0MsT0FBTztJQUFLO0lBQ2xDO1FBQUVELE1BQU07UUFBY0MsT0FBTztJQUFLO0lBQ2xDO1FBQUVELE1BQU07UUFBY0MsT0FBTztJQUFLO0lBQ2xDO1FBQUVELE1BQU07UUFBY0MsT0FBTztJQUFLO0lBQ2xDO1FBQUVELE1BQU07UUFBY0MsT0FBTztJQUFLO0lBQ2xDO1FBQUVELE1BQU07UUFBY0MsT0FBTztJQUFLO0NBQ25DLENBQUM7QUFFSyxNQUFNQyxnQkFBZ0I7SUFDM0I7UUFBRUYsTUFBTTtRQUFjRyxTQUFTO0lBQUc7SUFDbEM7UUFBRUgsTUFBTTtRQUFjRyxTQUFTO0lBQUc7SUFDbEM7UUFBRUgsTUFBTTtRQUFjRyxTQUFTO0lBQUc7SUFDbEM7UUFBRUgsTUFBTTtRQUFjRyxTQUFTO0lBQUc7SUFDbEM7UUFBRUgsTUFBTTtRQUFjRyxTQUFTO0lBQUc7SUFDbEM7UUFBRUgsTUFBTTtRQUFjRyxTQUFTO0lBQUc7SUFDbEM7UUFBRUgsTUFBTTtRQUFjRyxTQUFTO0lBQUc7Q0FDbkMsQ0FBQztBQUVLLE1BQU1DLGVBQWU7SUFDMUI7UUFBRUosTUFBTTtRQUFjSyxVQUFVO0lBQUk7SUFDcEM7UUFBRUwsTUFBTTtRQUFjSyxVQUFVO0lBQUk7SUFDcEM7UUFBRUwsTUFBTTtRQUFjSyxVQUFVO0lBQUk7SUFDcEM7UUFBRUwsTUFBTTtRQUFjSyxVQUFVO0lBQUk7SUFDcEM7UUFBRUwsTUFBTTtRQUFjSyxVQUFVO0lBQUk7SUFDcEM7UUFBRUwsTUFBTTtRQUFjSyxVQUFVO0lBQUk7SUFDcEM7UUFBRUwsTUFBTTtRQUFjSyxVQUFVO0lBQUk7Q0FDckMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb25zdGFudHMvY29uc3RhbnRzLnRzPzVlYjMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBBY3Rpdml0eSxcclxuICBDYWxlbmRhcixcclxuICBCb29rLFxyXG4gIExpc3QsXHJcbiAgRmlsZVRleHQsXHJcbiAgVXNlcixcclxuICBIZWxwQ2lyY2xlLFxyXG4gIENwdSxcclxuICBDaXJjbGVEb2xsYXJTaWduLFxyXG4gIFNldHRpbmdzLFxyXG59IGZyb20gXCJsdWNpZGUtcmVhY3RcIlxyXG5cclxuZXhwb3J0IGNvbnN0IG5hdkxpbmtzID0gW1xyXG4gIHsgaHJlZjogXCIvbW9uaXRvcmluZ1wiLCBsYWJlbDogXCJNb25pdG9yYW1lbnRvXCIsIGNsYXNzTmFtZTogXCJ0ZXh0LWZvcmVncm91bmRcIiwgaWNvbjogQ2lyY2xlRG9sbGFyU2lnbiB9LFxyXG4gIC8qeyBocmVmOiBcIi9jb25maWdcIiwgbGFiZWw6IFwiQ29uZmlndXJhw6fDtWVzXCIsIGNsYXNzTmFtZTogXCJ0ZXh0LW11dGVkLWZvcmVncm91bmRcIiwgaWNvbjogU2V0dGluZ3MgfSwqL1xyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IHN0ZXBzRGF0YSA9IFtcclxuICB7IGRhdGU6IFwiMjAyNC0wMS0wMVwiLCBzdGVwczogMjAwMCB9LFxyXG4gIHsgZGF0ZTogXCIyMDI0LTAxLTAyXCIsIHN0ZXBzOiAyMTAwIH0sXHJcbiAgeyBkYXRlOiBcIjIwMjQtMDEtMDNcIiwgc3RlcHM6IDIyMDAgfSxcclxuICB7IGRhdGU6IFwiMjAyNC0wMS0wNFwiLCBzdGVwczogMTMwMCB9LFxyXG4gIHsgZGF0ZTogXCIyMDI0LTAxLTA1XCIsIHN0ZXBzOiAxNDAwIH0sXHJcbiAgeyBkYXRlOiBcIjIwMjQtMDEtMDZcIiwgc3RlcHM6IDI1MDAgfSxcclxuICB7IGRhdGU6IFwiMjAyNC0wMS0wN1wiLCBzdGVwczogMTYwMCB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlc3RpbmdIUkRhdGEgPSBbXHJcbiAgeyBkYXRlOiBcIjIwMjQtMDEtMDFcIiwgcmVzdGluZzogNjIgfSxcclxuICB7IGRhdGU6IFwiMjAyNC0wMS0wMlwiLCByZXN0aW5nOiA3MiB9LFxyXG4gIHsgZGF0ZTogXCIyMDI0LTAxLTAzXCIsIHJlc3Rpbmc6IDM1IH0sXHJcbiAgeyBkYXRlOiBcIjIwMjQtMDEtMDRcIiwgcmVzdGluZzogNjIgfSxcclxuICB7IGRhdGU6IFwiMjAyNC0wMS0wNVwiLCByZXN0aW5nOiA1MiB9LFxyXG4gIHsgZGF0ZTogXCIyMDI0LTAxLTA2XCIsIHJlc3Rpbmc6IDYyIH0sXHJcbiAgeyBkYXRlOiBcIjIwMjQtMDEtMDdcIiwgcmVzdGluZzogNzAgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBjYWxvcmllc0RhdGEgPSBbXHJcbiAgeyBkYXRlOiBcIjIwMjQtMDEtMDFcIiwgY2Fsb3JpZXM6IDM1NCB9LFxyXG4gIHsgZGF0ZTogXCIyMDI0LTAxLTAyXCIsIGNhbG9yaWVzOiA1MTQgfSxcclxuICB7IGRhdGU6IFwiMjAyNC0wMS0wM1wiLCBjYWxvcmllczogMzQ1IH0sXHJcbiAgeyBkYXRlOiBcIjIwMjQtMDEtMDRcIiwgY2Fsb3JpZXM6IDczNCB9LFxyXG4gIHsgZGF0ZTogXCIyMDI0LTAxLTA1XCIsIGNhbG9yaWVzOiA2NDUgfSxcclxuICB7IGRhdGU6IFwiMjAyNC0wMS0wNlwiLCBjYWxvcmllczogNDU2IH0sXHJcbiAgeyBkYXRlOiBcIjIwMjQtMDEtMDdcIiwgY2Fsb3JpZXM6IDM0NSB9LFxyXG5dO1xyXG5cclxuXHJcbiJdLCJuYW1lcyI6WyJDaXJjbGVEb2xsYXJTaWduIiwibmF2TGlua3MiLCJocmVmIiwibGFiZWwiLCJjbGFzc05hbWUiLCJpY29uIiwic3RlcHNEYXRhIiwiZGF0ZSIsInN0ZXBzIiwicmVzdGluZ0hSRGF0YSIsInJlc3RpbmciLCJjYWxvcmllc0RhdGEiLCJjYWxvcmllcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./constants/constants.ts\n"));

/***/ })

});