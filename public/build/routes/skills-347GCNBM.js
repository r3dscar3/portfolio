import {
  useLoaderData
} from "/build/_shared/chunk-LYIRLHRM.js";
import "/build/_shared/chunk-PLT55Z5M.js";
import {
  PageWrapper_default
} from "/build/_shared/chunk-AC72UTTP.js";
import {
  createHotContext
} from "/build/_shared/chunk-AEMMGR3Y.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-F4KNNEUR.js";
import {
  require_react
} from "/build/_shared/chunk-2Z2JGDFU.js";
import "/build/_shared/chunk-JR22VO6P.js";
import {
  __commonJS,
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// empty-module:@remix-run/node
var require_node = __commonJS({
  "empty-module:@remix-run/node"(exports, module) {
    module.exports = {};
  }
});

// app/routes/skills.tsx
var import_node = __toESM(require_node(), 1);
var import_react2 = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/skills.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/skills.tsx"
  );
  import.meta.hot.lastModified = "1731809939380.1267";
}
function Skills() {
  _s();
  const loaderData = useLoaderData();
  const {
    softSkills,
    techSkills
  } = (0, import_react2.useMemo)(() => loaderData || {}, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PageWrapper_default, { heading: "Skills", emoji: "\u{1F44D}", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "px-2", children: "As a Staff Engineer, my role is about more than just writing great code\u2014it's about driving impact at scale through technical leadership, strategic thinking, and collaboration. Over the years, I've honed a set of core skills that enable me to deliver robust solutions, guide teams, and align technology with business goals." }, void 0, false, {
      fileName: "app/routes/skills.tsx",
      lineNumber: 43,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "px-2", children: "This page highlights the areas I focus on as a Staff Engineer, showcasing my approach to solving complex challenges, fostering innovation, and empowering teams to excel." }, void 0, false, {
      fileName: "app/routes/skills.tsx",
      lineNumber: 51,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid lg:grid-cols-2 gap-6 pb-6 px-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-gray-200 p-4 rounded-md border border-gray-300 shadow-md", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "mb-4", children: "Tech Skills" }, void 0, false, {
          fileName: "app/routes/skills.tsx",
          lineNumber: 61,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "list-disc pl-6 space-y-2", children: techSkills.map((skill) => {
          return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: skill }, skill, false, {
            fileName: "app/routes/skills.tsx",
            lineNumber: 64,
            columnNumber: 22
          }, this);
        }) }, void 0, false, {
          fileName: "app/routes/skills.tsx",
          lineNumber: 62,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/skills.tsx",
        lineNumber: 60,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-gray-200 p-4 rounded-md border border-gray-300 shadow-md", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "mb-4", children: "Soft Skills" }, void 0, false, {
          fileName: "app/routes/skills.tsx",
          lineNumber: 70,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "list-disc pl-6 space-y-2", children: softSkills.map((skill) => {
          return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: skill }, skill, false, {
            fileName: "app/routes/skills.tsx",
            lineNumber: 73,
            columnNumber: 22
          }, this);
        }) }, void 0, false, {
          fileName: "app/routes/skills.tsx",
          lineNumber: 71,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/skills.tsx",
        lineNumber: 69,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/skills.tsx",
      lineNumber: 59,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/skills.tsx",
    lineNumber: 42,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/skills.tsx",
    lineNumber: 41,
    columnNumber: 10
  }, this);
}
_s(Skills, "O5XyffWwjzqhjXO0dcdrjyOPOOg=", false, function() {
  return [useLoaderData];
});
_c = Skills;
var _c;
$RefreshReg$(_c, "Skills");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Skills as default
};
//# sourceMappingURL=/build/routes/skills-347GCNBM.js.map
