import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { O as CircleCheck } from "../_libs/lucide-react.mjs";
import { t as Button } from "./button-B2LyfGb_.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/thank-you-siDYBK3h.js
var import_jsx_runtime = require_jsx_runtime();
function ThankYou() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-16",
		style: { backgroundImage: "var(--gradient-surface)" },
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-[-8rem] top-[-8rem] h-80 w-80 rounded-full bg-primary/15 blur-3xl" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute bottom-[-10rem] right-[-8rem] h-96 w-96 rounded-full bg-[var(--primary-glow)]/15 blur-3xl" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative w-full max-w-lg overflow-hidden border-2 border-[var(--primary-glow)] bg-card p-8 text-center shadow-[var(--shadow-elegant)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-auto mb-5 inline-flex h-16 w-16 items-center justify-center rounded-3xl text-primary-foreground shadow-[var(--shadow-glow)]",
						style: { backgroundImage: "var(--gradient-primary)" },
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-8 w-8" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "text-3xl font-black tracking-tight",
						children: "Registration saved!"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						className: "mt-7 h-11 rounded-xl px-6 font-semibold",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							children: "Submit another"
						})
					})
				]
			})
		]
	});
}
//#endregion
export { ThankYou as component };
