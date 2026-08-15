import { o as __toESM } from "../_runtime.mjs";
import { t as logo_default } from "./logo-BQTsA3vG.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/RegistrationPageShell-iJcrsHyD.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var banners = [
	{
		src: "/assets/Black%20and%20Red%20Modern%20Podcast%20Sport%20LinkedIn%20Banner-dxQ5y4A9.png",
		alt: "Indoor Community League event banner"
	},
	{
		src: "/assets/ChatGPT%20Image%20Jul%2021_%202026_%2008_10_21%20PM-BrDDJG72.png",
		alt: "Indoor Community League promotional banner"
	},
	{
		src: "/assets/Gemini_Generated_Image_v5wuawv5wuawv5wu-DmSARWLa.png",
		alt: "Indoor Community League sponsor banner"
	}
];
function RegistrationPageShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "scorecard-surface relative min-h-screen overflow-x-clip bg-[var(--gradient-surface)]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-x-0 top-0 h-64 bg-[linear-gradient(110deg,oklch(0.19_0.045_155),oklch(0.29_0.07_153))]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative w-full",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BannerSlideshow, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
					className: "mb-6 flex min-w-0 items-center justify-between border-b-4 border-[var(--primary-glow)] bg-foreground px-3 py-2 shadow-[var(--shadow-soft)] sm:px-5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex min-w-0 items-center gap-2 sm:gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: logo_default,
							alt: "STRIDE tournament logo",
							className: "h-14 w-20 shrink-0 object-contain sm:h-16 sm:w-24"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-base font-black leading-tight tracking-tight text-primary-foreground sm:text-lg",
								children: "Indoor Community League 1.0"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-[10px] font-bold uppercase tracking-[0.14em] text-[var(--primary-glow)] sm:mt-0 sm:text-xs sm:tracking-[0.18em]",
								children: "Player registration"
							})]
						})]
					})
				}), children]
			})
		]
	});
}
function BannerSlideshow() {
	const [activeSlide, setActiveSlide] = (0, import_react.useState)(0);
	const [isPaused, setIsPaused] = (0, import_react.useState)(false);
	const [prefersReducedMotion, setPrefersReducedMotion] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
		const updateMotionPreference = () => setPrefersReducedMotion(mediaQuery.matches);
		updateMotionPreference();
		mediaQuery.addEventListener("change", updateMotionPreference);
		return () => mediaQuery.removeEventListener("change", updateMotionPreference);
	}, []);
	(0, import_react.useEffect)(() => {
		if (isPaused || prefersReducedMotion) return;
		const interval = window.setInterval(() => {
			setActiveSlide((currentSlide) => (currentSlide + 1) % banners.length);
		}, 5e3);
		return () => window.clearInterval(interval);
	}, [isPaused, prefersReducedMotion]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		"aria-label": "League promotional banners",
		className: "group relative w-full overflow-hidden bg-foreground",
		onMouseEnter: () => setIsPaused(true),
		onMouseLeave: () => setIsPaused(false),
		onFocusCapture: () => setIsPaused(true),
		onBlurCapture: (event) => {
			if (!event.currentTarget.contains(event.relatedTarget)) setIsPaused(false);
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "relative h-[21.75vw] max-h-[480px] w-full overflow-hidden bg-[#100a06]",
			children: banners.map((banner, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: banner.src,
				alt: banner.alt,
				"aria-hidden": index !== activeSlide,
				className: `absolute inset-0 h-full w-full object-contain object-top transition-opacity duration-700 motion-reduce:transition-none ${index === activeSlide ? "opacity-100" : "opacity-0"}`
			}, banner.src))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute inset-x-0 -bottom-1 flex justify-center gap-2 sm:bottom-0",
			children: banners.map((_, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				"aria-label": `Show banner ${index + 1}`,
				"aria-current": index === activeSlide ? "true" : void 0,
				onClick: () => setActiveSlide(index),
				className: `h-2.5 w-2.5 border border-[#f4d687] shadow-[0_1px_4px_rgba(0,0,0,0.7)] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white motion-reduce:transition-none sm:h-3 sm:w-3 ${index === activeSlide ? "bg-[var(--primary-glow)]" : "bg-[#1b1009]/80 hover:bg-[#f4d687]"}`
			}, index))
		})]
	});
}
//#endregion
export { RegistrationPageShell as t };
