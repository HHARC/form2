import { o as __toESM } from "../_runtime.mjs";
import { t as API_BASE_URL } from "./api-DpyJ30dE.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { M as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { D as LoaderCircle, E as Sparkles, O as CircleCheck, S as Check, T as UserRound, a as ShieldCheck, b as ChevronUp, d as Mail, f as ImagePlus, i as Shirt, k as CircleAlert, l as Phone, n as Upload, p as FileText, t as X, w as UsersRound, x as ChevronDown, y as Circle } from "../_libs/lucide-react.mjs";
import { t as RegistrationPageShell } from "./RegistrationPageShell-iJcrsHyD.mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { n as cn, t as Button } from "./button-B2LyfGb_.mjs";
import { n as AlertDescription, r as Input, t as Alert } from "./input-CIuoq6qx.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { a as stringType, i as objectType, n as enumType, o as ZodIssueCode, r as literalType, t as arrayType } from "../_libs/zod.mjs";
import { n as CheckboxIndicator, t as Checkbox$1 } from "../_libs/@radix-ui/react-checkbox+[...].mjs";
import { t as Root } from "../_libs/radix-ui__react-label.mjs";
import { n as RadioGroupIndicator, r as RadioGroupItem$1, t as RadioGroup$1 } from "../_libs/@radix-ui/react-radio-group+[...].mjs";
import { a as SelectItemIndicator, c as SelectPortal, d as SelectSeparator$1, f as SelectTrigger$1, i as SelectItem$1, l as SelectScrollDownButton$1, m as SelectViewport, n as SelectContent$1, o as SelectItemText, p as SelectValue$1, r as SelectIcon, s as SelectLabel$1, t as Select$1, u as SelectScrollUpButton$1 } from "../_libs/@radix-ui/react-select+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/private-registration-7h4k9m-CUtFFnWd.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Checkbox = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox$1, {
	ref,
	className: cn("grid place-content-center peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground", className),
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckboxIndicator, {
		className: cn("grid place-content-center text-current"),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4" })
	})
}));
Checkbox.displayName = Checkbox$1.displayName;
var labelVariants = cva("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70");
var Label = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root, {
	ref,
	className: cn(labelVariants(), className),
	...props
}));
Label.displayName = Root.displayName;
var RadioGroup = import_react.forwardRef(({ className, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioGroup$1, {
		className: cn("grid gap-2", className),
		...props,
		ref
	});
});
RadioGroup.displayName = RadioGroup$1.displayName;
var RadioGroupItem = import_react.forwardRef(({ className, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioGroupItem$1, {
		ref,
		className: cn("aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50", className),
		...props,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioGroupIndicator, {
			className: "flex items-center justify-center",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Circle, { className: "h-3.5 w-3.5 fill-primary" })
		})
	});
});
RadioGroupItem.displayName = RadioGroupItem$1.displayName;
var Select = Select$1;
var SelectValue = SelectValue$1;
var SelectTrigger = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectTrigger$1, {
	ref,
	className: cn("flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background cursor-pointer data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectIcon, {
		asChild: true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4 opacity-50" })
	})]
}));
SelectTrigger.displayName = SelectTrigger$1.displayName;
var SelectScrollUpButton = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollUpButton$1, {
	ref,
	className: cn("flex cursor-default items-center justify-center py-1", className),
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronUp, { className: "h-4 w-4" })
}));
SelectScrollUpButton.displayName = SelectScrollUpButton$1.displayName;
var SelectScrollDownButton = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollDownButton$1, {
	ref,
	className: cn("flex cursor-default items-center justify-center py-1", className),
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4" })
}));
SelectScrollDownButton.displayName = SelectScrollDownButton$1.displayName;
var SelectContent = import_react.forwardRef(({ className, children, position = "popper", ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectPortal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent$1, {
	ref,
	className: cn("relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-select-content-transform-origin)", position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", className),
	position,
	...props,
	children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollUpButton, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectViewport, {
			className: cn("p-1", position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),
			children
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollDownButton, {})
	]
}) }));
SelectContent.displayName = SelectContent$1.displayName;
var SelectLabel = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectLabel$1, {
	ref,
	className: cn("px-2 py-1.5 text-sm font-semibold", className),
	...props
}));
SelectLabel.displayName = SelectLabel$1.displayName;
var SelectItem = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectItem$1, {
	ref,
	className: cn("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItemIndicator, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4" }) })
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItemText, { children })]
}));
SelectItem.displayName = SelectItem$1.displayName;
var SelectSeparator = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectSeparator$1, {
	ref,
	className: cn("-mx-1 my-1 h-px bg-muted", className),
	...props
}));
SelectSeparator.displayName = SelectSeparator$1.displayName;
var JERSEY_SIZE_OPTIONS = [
	"Small",
	"Medium",
	"Large",
	"XL",
	"XXL",
	"3XL",
	"4XL"
];
var PREFERRED_SLEEVE_OPTIONS = ["Full Sleeves", "Half Sleeves"];
var AVAILABILITY_OPTIONS = ["Available all matches", "Missing few matches"];
var NOT_AVAILABLE_ON_OPTIONS = [
	"20 Aug 2026 — 21:00",
	"23 Aug 2026 — 07:30",
	"25 Aug 2026 — 21:00",
	"30 Aug 2026 — 07:30",
	"01 Sep 2026 — 21:00",
	"03 Sep 2026 — 21:00",
	"06 Sep 2026 — 07:30"
];
var ALLOWED_FILE_TYPES = [
	"image/jpeg",
	"image/jpg",
	"image/png"
];
var phoneRegex = /^(\+9715\d{8}|\d{10})$/;
var schema = objectType({
	firstName: stringType().trim().min(1, "First name is required").max(80),
	lastName: stringType().trim().min(1, "Last name is required").max(80),
	mobile: stringType().trim().regex(phoneRegex, "Use 10 digits or UAE format +9715XXXXXXXX"),
	email: stringType().trim().email("Enter a valid email address").max(255),
	whatsappNumber: stringType().trim().regex(phoneRegex, "Use 10 digits or UAE format +9715XXXXXXXX"),
	jerseyName: stringType().trim().min(1, "Name of jersey is required").max(80),
	jerseyNumber: stringType().trim().regex(/^\d{1,3}$/, "Jersey number must be whole numbers only"),
	jerseySize: enumType([
		"Small",
		"Medium",
		"Large",
		"XL",
		"XXL",
		"3XL",
		"4XL"
	], { message: "Select a jersey size" }),
	preferredSleeves: enumType(["Full Sleeves", "Half Sleeves"], { message: "Select preferred sleeves" }),
	currentClub: stringType().trim().max(120),
	availability: enumType(["Available all matches", "Missing few matches"], { message: "Select availability" }),
	notAvailableOn: arrayType(stringType()),
	feeAgreement: literalType(true, { errorMap: () => ({ message: "You must agree to the registration and match fees" }) }),
	franchiseInterest: enumType(["Yes, I am interested.", "No, I am not interested."], { message: "Select whether you are interested in owning a team franchise" })
}).superRefine((values, ctx) => {
	if (values.availability === "Missing few matches" && values.notAvailableOn.length === 0) ctx.addIssue({
		code: ZodIssueCode.custom,
		path: ["notAvailableOn"],
		message: "Select at least one match you are not available on"
	});
});
var initial = {
	firstName: "",
	lastName: "",
	mobile: "",
	email: "",
	whatsappNumber: "",
	jerseyName: "",
	jerseyNumber: "",
	jerseySize: "",
	preferredSleeves: "",
	currentClub: "",
	availability: "",
	notAvailableOn: [],
	feeAgreement: false,
	franchiseInterest: ""
};
var TOTAL_STEPS = 14;
function fieldStatus(isTouched, error, hasValue) {
	if (!isTouched) return "neutral";
	if (error) return "error";
	return hasValue ? "valid" : "neutral";
}
function RegistrationForm({ submitPath = "/api/registrations" }) {
	const navigate = useNavigate();
	const [values, setValues] = (0, import_react.useState)(initial);
	const [errors, setErrors] = (0, import_react.useState)({});
	const [touched, setTouched] = (0, import_react.useState)({});
	const [apiError, setApiError] = (0, import_react.useState)(null);
	const [file, setFile] = (0, import_react.useState)(null);
	const [fileError, setFileError] = (0, import_react.useState)(null);
	const [filePreviewUrl, setFilePreviewUrl] = (0, import_react.useState)(null);
	const [submitting, setSubmitting] = (0, import_react.useState)(false);
	const completionCount = (0, import_react.useMemo)(() => {
		return [
			values.firstName,
			values.lastName,
			values.mobile,
			values.email,
			values.whatsappNumber,
			values.jerseyName,
			values.jerseyNumber,
			values.jerseySize,
			values.preferredSleeves,
			values.availability
		].filter(Boolean).length + (values.availability === "Available all matches" || values.notAvailableOn.length > 0 ? 1 : 0) + (file ? 1 : 0) + (values.feeAgreement ? 1 : 0) + (values.franchiseInterest ? 1 : 0);
	}, [file, values]);
	const progressPercent = Math.round(completionCount / TOTAL_STEPS * 100);
	const playerComplete = Boolean(values.firstName && values.lastName && values.mobile && values.email && values.whatsappNumber) && !errors.firstName && !errors.lastName && !errors.mobile && !errors.email && !errors.whatsappNumber;
	const jerseyComplete = Boolean(values.jerseyName && values.jerseyNumber && values.jerseySize && values.preferredSleeves) && !errors.jerseyName && !errors.jerseyNumber && !errors.jerseySize && !errors.preferredSleeves;
	const availabilityComplete = Boolean(values.availability) && (values.availability === "Available all matches" || values.notAvailableOn.length > 0) && !errors.currentClub && !errors.availability && !errors.notAvailableOn;
	const finalComplete = Boolean(file && values.feeAgreement && values.franchiseInterest) && !fileError && !errors.feeAgreement && !errors.franchiseInterest;
	(0, import_react.useEffect)(() => {
		if (!file) {
			setFilePreviewUrl(null);
			return;
		}
		const previewUrl = URL.createObjectURL(file);
		setFilePreviewUrl(previewUrl);
		return () => URL.revokeObjectURL(previewUrl);
	}, [file]);
	function validateField(key, valuesToValidate) {
		const parsed = schema.safeParse(valuesToValidate);
		if (parsed.success) return null;
		return parsed.error.issues.find((fieldIssue) => fieldIssue.path[0] === key)?.message ?? null;
	}
	function markTouched(key) {
		setTouched((previousTouched) => previousTouched[key] ? previousTouched : {
			...previousTouched,
			[key]: true
		});
		setFieldError(key, values);
	}
	function setFieldError(key, valuesToValidate) {
		setErrors((previousErrors) => {
			const nextErrors = { ...previousErrors };
			const errorMessage = validateField(key, valuesToValidate);
			if (errorMessage) nextErrors[key] = errorMessage;
			else delete nextErrors[key];
			return nextErrors;
		});
	}
	function update(key, value) {
		const nextValues = {
			...values,
			[key]: value
		};
		if (key === "availability" && value === "Available all matches") nextValues.notAvailableOn = [];
		setValues(nextValues);
		setApiError(null);
		if (touched[key] || errors[key]) setFieldError(key, nextValues);
		if (key === "availability" || key === "notAvailableOn") setFieldError("notAvailableOn", nextValues);
	}
	function toggleNotAvailableOn(matchName) {
		const nextMatches = values.notAvailableOn.includes(matchName) ? values.notAvailableOn.filter((item) => item !== matchName) : [...values.notAvailableOn, matchName];
		setTouched((previousTouched) => ({
			...previousTouched,
			notAvailableOn: true
		}));
		update("notAvailableOn", nextMatches);
	}
	function handleFile(selectedFile) {
		setApiError(null);
		setFileError(null);
		if (!selectedFile) {
			setFile(null);
			return;
		}
		if (!ALLOWED_FILE_TYPES.includes(selectedFile.type)) {
			setFile(null);
			setFileError("Only JPG, JPEG, or PNG files are allowed");
			return;
		}
		if (selectedFile.size > 2097152) {
			setFile(null);
			setFileError("File must be 2 MB or smaller");
			return;
		}
		setFile(selectedFile);
	}
	function handleDrop(event) {
		event.preventDefault();
		handleFile(event.dataTransfer.files?.[0] ?? null);
	}
	async function onSubmit(event) {
		event.preventDefault();
		setApiError(null);
		const parsed = schema.safeParse(values);
		if (!parsed.success) {
			const fieldErrors = {};
			for (const issue of parsed.error.issues) {
				const key = issue.path[0];
				if (key && !fieldErrors[key]) fieldErrors[key] = issue.message;
			}
			setErrors(fieldErrors);
			setTouched(Object.keys(initial).reduce((accumulator, key) => {
				accumulator[key] = true;
				return accumulator;
			}, {}));
			toast.error("Please fix the highlighted fields");
			return;
		}
		if (!file) {
			const message = "Upload a clear headshot photo under 2 MB";
			setFileError(message);
			toast.error(message);
			return;
		}
		if (fileError) {
			toast.error(fileError);
			return;
		}
		const formData = new FormData();
		formData.append("firstName", parsed.data.firstName);
		formData.append("lastName", parsed.data.lastName);
		formData.append("fullName", `${parsed.data.firstName} ${parsed.data.lastName}`);
		formData.append("mobile", parsed.data.mobile);
		formData.append("email", parsed.data.email);
		formData.append("whatsappNumber", parsed.data.whatsappNumber);
		formData.append("jerseyName", parsed.data.jerseyName);
		formData.append("jerseyNumber", parsed.data.jerseyNumber);
		formData.append("jerseySize", parsed.data.jerseySize);
		formData.append("preferredSleeves", parsed.data.preferredSleeves);
		formData.append("currentClub", parsed.data.currentClub);
		formData.append("availability", parsed.data.availability);
		parsed.data.notAvailableOn.forEach((matchName) => formData.append("notAvailableOn", matchName));
		formData.append("feeAgreement", String(parsed.data.feeAgreement));
		formData.append("franchiseInterest", parsed.data.franchiseInterest);
		formData.append("photo", file);
		setSubmitting(true);
		try {
			const response = await fetch(`${API_BASE_URL}${submitPath}`, {
				method: "POST",
				body: formData
			});
			const payload = await response.json();
			if (!response.ok || !payload.ok) {
				if (!payload.ok && payload.errors) {
					setErrors(payload.errors);
					setTouched((previousTouched) => {
						const nextTouched = { ...previousTouched };
						for (const key of Object.keys(payload.errors)) nextTouched[key] = true;
						return nextTouched;
					});
					if (payload.errors.photo) setFileError(payload.errors.photo);
				}
				throw new Error(!payload.ok && payload.message ? payload.message : "Something went wrong. Please try again.");
			}
			toast.success(payload.message);
			navigate({ to: "/thank-you" });
		} catch (error) {
			console.error(error);
			const message = error instanceof Error ? error.message : `Could not reach the API at ${API_BASE_URL}`;
			setApiError(message);
			toast.error(message);
		} finally {
			setSubmitting(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit,
		noValidate: true,
		className: "relative min-w-0 max-w-full overflow-hidden border border-border bg-card p-5 shadow-[var(--shadow-elegant)] ring-1 ring-primary/10 sm:p-9",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-x-0 top-0 h-1 bg-[var(--primary-glow)]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute right-0 top-0 h-44 w-44 border-b border-l border-border/50 bg-[repeating-linear-gradient(45deg,transparent_0_9px,var(--border)_10px_11px)] opacity-30" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative min-w-0",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-8 flex flex-col gap-4 border-b border-border/70 pb-6 md:flex-row md:items-center md:justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mb-3 inline-flex items-center gap-2 border-l-4 border-[var(--primary-glow)] bg-primary px-3 py-1.5 text-xs font-bold uppercase tracking-[0.12em] text-primary-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3.5 w-3.5" }), "Player registration"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "font-display text-2xl font-extrabold tracking-tight sm:text-3xl",
									children: "Indoor Community League 1.0"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm text-muted-foreground",
									children: "Complete all required player, jersey, availability, and payment agreement details."
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "w-full min-w-0 border border-border bg-secondary/55 p-3.5 shadow-[inset_3px_0_0_var(--primary-glow)] md:w-auto md:min-w-48",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between text-xs font-medium text-muted-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Form completeness" }), progressPercent === 100 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4 text-success" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "font-display tabular-nums text-foreground",
										children: [progressPercent, "%"]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-2.5 h-2 overflow-hidden rounded-full bg-muted",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "h-full rounded-full bg-gradient-primary transition-all duration-500 ease-out",
										style: { width: `${progressPercent}%` }
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-1.5 text-xs text-muted-foreground",
									children: [
										completionCount,
										" of ",
										TOTAL_STEPS,
										" details captured"
									]
								})
							]
						})]
					}),
					apiError && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Alert, {
						variant: "destructive",
						className: "mb-6 bg-destructive/5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDescription, { children: apiError })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-0",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
								index: 1,
								total: 4,
								icon: UserRound,
								title: "Player details",
								description: "Player identity and contact information.",
								complete: playerComplete,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "First Name",
										error: touched.firstName ? errors.firstName : void 0,
										required: true,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusInput, {
											icon: UserRound,
											status: fieldStatus(Boolean(touched.firstName), errors.firstName, Boolean(values.firstName)),
											value: values.firstName,
											onChange: (event) => update("firstName", event.target.value),
											onBlur: () => markTouched("firstName"),
											placeholder: "First name",
											autoComplete: "given-name"
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Last Name",
										error: touched.lastName ? errors.lastName : void 0,
										required: true,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusInput, {
											icon: UserRound,
											status: fieldStatus(Boolean(touched.lastName), errors.lastName, Boolean(values.lastName)),
											value: values.lastName,
											onChange: (event) => update("lastName", event.target.value),
											onBlur: () => markTouched("lastName"),
											placeholder: "Last name",
											autoComplete: "family-name"
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Mobile Number",
										hint: "Example: +9715XXXXXXXX or 10 digits",
										error: touched.mobile ? errors.mobile : void 0,
										required: true,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusInput, {
											icon: Phone,
											type: "tel",
											status: fieldStatus(Boolean(touched.mobile), errors.mobile, Boolean(values.mobile)),
											value: values.mobile,
											onChange: (event) => update("mobile", event.target.value),
											onBlur: () => markTouched("mobile"),
											placeholder: "+9715XXXXXXXX",
											autoComplete: "tel"
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Email Address",
										error: touched.email ? errors.email : void 0,
										required: true,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusInput, {
											icon: Mail,
											type: "email",
											status: fieldStatus(Boolean(touched.email), errors.email, Boolean(values.email)),
											value: values.email,
											onChange: (event) => update("email", event.target.value),
											onBlur: () => markTouched("email"),
											placeholder: "name@example.com",
											autoComplete: "email"
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Whatsapp Number",
										error: touched.whatsappNumber ? errors.whatsappNumber : void 0,
										required: true,
										className: "sm:col-span-2",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusInput, {
											icon: Phone,
											type: "tel",
											status: fieldStatus(Boolean(touched.whatsappNumber), errors.whatsappNumber, Boolean(values.whatsappNumber)),
											value: values.whatsappNumber,
											onChange: (event) => update("whatsappNumber", event.target.value),
											onBlur: () => markTouched("whatsappNumber"),
											placeholder: "+9715XXXXXXXX",
											autoComplete: "tel"
										})
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
								index: 2,
								total: 4,
								icon: Shirt,
								title: "Jersey details",
								description: "Name, number, size, and sleeve preference.",
								complete: jerseyComplete,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Name of Jersey",
										error: touched.jerseyName ? errors.jerseyName : void 0,
										required: true,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusInput, {
											icon: Shirt,
											status: fieldStatus(Boolean(touched.jerseyName), errors.jerseyName, Boolean(values.jerseyName)),
											value: values.jerseyName,
											onChange: (event) => update("jerseyName", event.target.value),
											onBlur: () => markTouched("jerseyName"),
											placeholder: "Name on jersey"
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Number on Jersey",
										error: touched.jerseyNumber ? errors.jerseyNumber : void 0,
										required: true,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusInput, {
											icon: FileText,
											inputMode: "numeric",
											status: fieldStatus(Boolean(touched.jerseyNumber), errors.jerseyNumber, Boolean(values.jerseyNumber)),
											value: values.jerseyNumber,
											onChange: (event) => update("jerseyNumber", event.target.value),
											onBlur: () => markTouched("jerseyNumber"),
											placeholder: "10"
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Jersey Size",
										error: touched.jerseySize ? errors.jerseySize : void 0,
										required: true,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
											value: values.jerseySize,
											onValueChange: (value) => {
												setTouched((previousTouched) => ({
													...previousTouched,
													jerseySize: true
												}));
												update("jerseySize", value);
											},
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
												className: "h-12 rounded-xl bg-background/80",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Select size" })
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: JERSEY_SIZE_OPTIONS.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
												value: option,
												children: option
											}, option)) })]
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Preferred Sleeves",
										error: touched.preferredSleeves ? errors.preferredSleeves : void 0,
										required: true,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
											value: values.preferredSleeves,
											onValueChange: (value) => {
												setTouched((previousTouched) => ({
													...previousTouched,
													preferredSleeves: true
												}));
												update("preferredSleeves", value);
											},
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
												className: "h-12 rounded-xl bg-background/80",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Select sleeves" })
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: PREFERRED_SLEEVE_OPTIONS.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
												value: option,
												children: option
											}, option)) })]
										})
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
								index: 3,
								total: 4,
								icon: UsersRound,
								title: "Availability",
								description: "Current club/team (optional) and match availability.",
								complete: availabilityComplete,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Current Club/Team",
										hint: "Optional",
										error: touched.currentClub ? errors.currentClub : void 0,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusInput, {
											icon: UsersRound,
											status: fieldStatus(Boolean(touched.currentClub), errors.currentClub, Boolean(values.currentClub)),
											value: values.currentClub,
											onChange: (event) => update("currentClub", event.target.value),
											onBlur: () => markTouched("currentClub"),
											placeholder: "Club or team name (optional)"
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Availability",
										error: touched.availability ? errors.availability : void 0,
										required: true,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
											value: values.availability,
											onValueChange: (value) => {
												setTouched((previousTouched) => ({
													...previousTouched,
													availability: true
												}));
												update("availability", value);
											},
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
												className: "h-12 rounded-xl bg-background/80",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Select availability" })
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: AVAILABILITY_OPTIONS.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
												value: option,
												children: option
											}, option)) })]
										})
									}),
									values.availability === "Missing few matches" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Not Available On",
										error: touched.notAvailableOn ? errors.notAvailableOn : void 0,
										required: true,
										className: "sm:col-span-2",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "grid grid-cols-2 gap-2 sm:grid-cols-4",
											children: NOT_AVAILABLE_ON_OPTIONS.map((option) => {
												const checked = values.notAvailableOn.includes(option);
												return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
													className: cn("flex min-h-12 cursor-pointer items-center gap-2 rounded-xl border px-3 py-2.5 text-sm transition-all", checked ? "border-primary bg-primary/5 shadow-sm ring-2 ring-primary/10" : "border-input bg-background/80 hover:-translate-y-0.5 hover:bg-accent"),
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox, {
														checked,
														onCheckedChange: () => toggleNotAvailableOn(option)
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "font-medium",
														children: option
													})]
												}, option);
											})
										})
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
								index: 4,
								total: 4,
								icon: ImagePlus,
								title: "Photo and fees",
								description: "Upload a clear headshot and confirm the fee agreement.",
								complete: finalComplete,
								isLast: true,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Upload Photo",
										hint: "Required clear headshot. JPG, JPEG, or PNG. Max 2 MB.",
										error: fileError ?? errors.photo,
										required: true,
										className: "sm:col-span-2",
										children: file ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex flex-col gap-4 rounded-2xl border border-primary/15 bg-primary/5 p-3 sm:flex-row sm:items-center",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "flex h-24 w-full shrink-0 items-center justify-center overflow-hidden rounded-xl bg-background sm:w-24",
													children: filePreviewUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
														src: filePreviewUrl,
														alt: "Selected upload preview",
														className: "h-full w-full object-cover"
													}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImagePlus, { className: "h-7 w-7 text-primary" })
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "min-w-0 flex-1",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
															className: "truncate text-sm font-semibold",
															children: file.name
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
															className: "mt-1 text-xs text-muted-foreground",
															children: [(file.size / 1024).toFixed(0), " KB ready for upload"]
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
															className: "mt-2 inline-flex items-center gap-1.5 rounded-full bg-background px-2.5 py-1 text-xs text-success",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-3.5 w-3.5" }), "Valid image selected"]
														})
													]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													type: "button",
													onClick: () => handleFile(null),
													className: "inline-flex h-9 w-9 items-center justify-center rounded-xl text-muted-foreground transition-colors hover:bg-background hover:text-foreground",
													"aria-label": "Remove file",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" })
												})
											]
										}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
											onDrop: handleDrop,
											onDragOver: (event) => event.preventDefault(),
											className: "group flex min-h-40 cursor-pointer flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-input bg-background/80 p-6 text-center text-sm text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:bg-primary/5",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "rounded-full bg-primary/10 p-3 text-primary transition-transform group-hover:scale-105",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: "h-6 w-6" })
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-semibold text-foreground",
													children: "Click to upload"
												}), " or drag your headshot here"] }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-xs",
													children: "Max size allowed: 2 MB."
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													type: "file",
													className: "hidden",
													accept: "image/jpeg,image/jpg,image/png",
													onChange: (event) => handleFile(event.target.files?.[0] ?? null)
												})
											]
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Franchise opportunity",
										error: touched.franchiseInterest ? errors.franchiseInterest : void 0,
										required: true,
										className: "sm:col-span-2",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "overflow-hidden border-2 border-[var(--primary-glow)] bg-[linear-gradient(120deg,color-mix(in_oklab,var(--primary)_9%,var(--card)),var(--card)_55%,color-mix(in_oklab,var(--primary-glow)_14%,var(--card)))] p-5 shadow-[var(--shadow-soft)]",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-start gap-3",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "rounded-xl bg-primary p-2.5 text-primary-foreground shadow-sm",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-5 w-5" })
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "font-display text-lg font-bold leading-snug text-foreground",
														children: "Are you interested in owning a team franchise in this tournament for AED 500?"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "mt-3 text-sm font-semibold text-foreground",
														children: "As a Franchise Owner, you will receive:"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
														className: "mt-2 space-y-1.5 text-sm leading-6 text-muted-foreground",
														children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "• Exclusive Franchise Ownership Rights" }),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "• Branding on your team's official playing kits" }),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "• Promotion across the tournament's official social media platforms" }),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "• The opportunity to build your team through the live Player Auction" })
														]
													})
												] })]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioGroup, {
												value: values.franchiseInterest,
												onValueChange: (value) => {
													setTouched((previousTouched) => ({
														...previousTouched,
														franchiseInterest: true
													}));
													update("franchiseInterest", value);
												},
												className: "mt-5 grid gap-2 sm:grid-cols-2",
												children: ["Yes, I am interested.", "No, I am not interested."].map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
													className: cn("flex cursor-pointer items-center gap-3 rounded-xl border bg-background/90 p-4 transition-all", values.franchiseInterest === option ? "border-primary ring-2 ring-primary/15" : "border-input hover:bg-accent"),
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioGroupItem, { value: option }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "font-semibold",
														children: option
													})]
												}, option))
											})]
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Fee agreement",
										error: touched.feeAgreement ? errors.feeAgreement : void 0,
										required: true,
										className: "sm:col-span-2",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
											className: cn("flex cursor-pointer items-start gap-3 rounded-2xl border bg-background/80 p-4 text-sm transition-all", values.feeAgreement ? "border-primary bg-primary/5 ring-2 ring-primary/10" : "border-input hover:bg-accent"),
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox, {
												checked: values.feeAgreement,
												onCheckedChange: (checked) => {
													setTouched((previousTouched) => ({
														...previousTouched,
														feeAgreement: true
													}));
													update("feeAgreement", checked === true);
												}
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "leading-6",
												children: "I agree to pay registration fees of AED 50/- and match fees of AED 40/- per match."
											})]
										})
									})
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-2 flex justify-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							type: "submit",
							disabled: submitting,
							className: "animate-pulse-glow h-11 w-full max-w-56 rounded-xl px-8 text-sm font-semibold shadow-[var(--shadow-glow)]",
							children: [submitting && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "mr-2 h-4 w-4 animate-spin" }), submitting ? "Submitting" : "Submit registration"]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 flex items-center justify-center gap-1.5 text-center text-xs text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-3.5 w-3.5 text-success" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Your details are encrypted and only used to verify your registration." })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 rounded-2xl border border-border/70 bg-background/70 px-5 py-4 text-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-semibold text-foreground",
							children: "For more information, contact:"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3 space-y-1.5 text-sm text-muted-foreground",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
								"Quaid Joher",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									className: "font-medium text-foreground hover:text-primary",
									href: "tel:0556086529",
									children: "055-6086529"
								})
							] })
						})]
					})
				]
			})
		]
	});
}
function Section({ index, total, title, description, icon: Icon, complete, isLast = false, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-w-0 gap-3 sm:gap-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: cn("flex h-9 w-9 shrink-0 items-center justify-center rounded-full border font-display text-xs font-bold transition-colors duration-500", complete ? "border-primary bg-primary text-primary-foreground shadow-[var(--shadow-glow)]" : "border-border bg-background text-muted-foreground"),
				children: complete ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4" }) : index
			}), !isLast && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("mt-1 w-px flex-1 transition-colors duration-500", complete ? "bg-primary/50" : "bg-border") })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: cn("min-w-0 flex-1 pt-0.5", isLast ? "pb-1" : "pb-9"),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4 text-primary" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-sm font-bold uppercase tracking-wide text-foreground/90",
							children: title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-[11px] font-medium text-muted-foreground",
							children: [
								index,
								"/",
								total
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-0.5 text-xs text-muted-foreground",
					children: description
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 grid min-w-0 grid-cols-1 gap-5 sm:grid-cols-2",
					children
				})
			]
		})]
	});
}
function StatusInput({ icon: Icon, status, className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
				className: cn("h-12 rounded-xl bg-background/80 pl-10 pr-10", status === "error" && "border-destructive/60", status === "valid" && "border-success/50", className),
				...props
			}),
			status === "valid" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-success" }),
			status === "error" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-destructive" })
		]
	});
}
function Field({ label, children, error, hint, required, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("min-w-0 space-y-2", className),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
				className: "block text-sm font-semibold",
				children: [label, required && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "ml-1 text-destructive",
					children: "*"
				})]
			}),
			children,
			hint && !error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-muted-foreground",
				children: hint
			}),
			error && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "flex items-center gap-1 text-xs font-medium text-destructive animate-in fade-in-0 slide-in-from-top-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "h-3 w-3 shrink-0" }), error]
			})
		]
	});
}
function PrivateRegistration() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RegistrationPageShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RegistrationForm, { submitPath: "/api/private-registration-7h4k9m" }) });
}
//#endregion
export { PrivateRegistration as component };
