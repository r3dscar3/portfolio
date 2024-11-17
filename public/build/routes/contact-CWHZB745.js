import {
  PageWrapper_default
} from "/build/_shared/chunk-AC72UTTP.js";
import {
  createHotContext
} from "/build/_shared/chunk-AEMMGR3Y.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-F4KNNEUR.js";
import "/build/_shared/chunk-2Z2JGDFU.js";
import "/build/_shared/chunk-JR22VO6P.js";
import {
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// app/routes/contact.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/contact.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/contact.tsx"
  );
  import.meta.hot.lastModified = "1731788284449.1255";
}
function Contact() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PageWrapper_default, { heading: "Contact", emoji: "\u260E\uFE0F", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-6 px-2", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "pb-2 font-bold", children: "Phone:" }, void 0, false, {
        fileName: "app/routes/contact.tsx",
        lineNumber: 26,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "tel:+14802214836", children: "(480) 221-4836" }, void 0, false, {
        fileName: "app/routes/contact.tsx",
        lineNumber: 27,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/contact.tsx",
      lineNumber: 25,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "pb-2 font-bold", children: "Email:" }, void 0, false, {
        fileName: "app/routes/contact.tsx",
        lineNumber: 31,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "mailto:nolanthompson34@gmail.com", children: "nolanthompson34@gmail.com" }, void 0, false, {
        fileName: "app/routes/contact.tsx",
        lineNumber: 32,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/contact.tsx",
      lineNumber: 30,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/contact.tsx",
    lineNumber: 24,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/contact.tsx",
    lineNumber: 23,
    columnNumber: 10
  }, this);
}
_c = Contact;
var _c;
$RefreshReg$(_c, "Contact");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Contact as default
};
//# sourceMappingURL=/build/routes/contact-CWHZB745.js.map
