import {
  createHotContext
} from "/build/_shared/chunk-AEMMGR3Y.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-F4KNNEUR.js";
import {
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// app/components/PageWrapper.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/PageWrapper.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/PageWrapper.tsx"
  );
  import.meta.hot.lastModified = "1731804407357.6309";
}
var PageWrapper = ({
  children,
  heading,
  emoji
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative flex h-full flex-col overflow-y-auto", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "z-10 sticky top-0 flex items-center bg-white border-b border-gray-300 p-4 font-bold bg-opacity-65 backdrop-blur-sm", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: heading }, void 0, false, {
        fileName: "app/components/PageWrapper.tsx",
        lineNumber: 28,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-6 h-6 ml-auto", children: emoji }, void 0, false, {
        fileName: "app/components/PageWrapper.tsx",
        lineNumber: 29,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/PageWrapper.tsx",
      lineNumber: 27,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative h-full p-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col max-w-[1200px]", children }, void 0, false, {
      fileName: "app/components/PageWrapper.tsx",
      lineNumber: 33,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/PageWrapper.tsx",
      lineNumber: 32,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/PageWrapper.tsx",
    lineNumber: 26,
    columnNumber: 10
  }, this);
};
_c = PageWrapper;
var PageWrapper_default = PageWrapper;
var _c;
$RefreshReg$(_c, "PageWrapper");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  PageWrapper_default
};
//# sourceMappingURL=/build/_shared/chunk-AC72UTTP.js.map
