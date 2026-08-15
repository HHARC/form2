import { o as __toESM } from "../_runtime.mjs";
import { t as logo_default } from "./logo-BQTsA3vG.mjs";
import { n as REGISTRATION_PHOTOS_PUBLIC_BASE_URL, t as API_BASE_URL } from "./api-DpyJ30dE.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { C as CalendarDays, D as LoaderCircle, _ as Eye, c as RefreshCcw, g as FileArchive, m as FileImage, r as TableProperties, s as Search, t as X, v as Download } from "../_libs/lucide-react.mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { n as cn, t as Button } from "./button-B2LyfGb_.mjs";
import { n as AlertDescription, r as Input, t as Alert } from "./input-CIuoq6qx.mjs";
import { a as DialogOverlay$1, i as DialogDescription$1, n as DialogClose, o as DialogPortal$1, r as DialogContent$1, s as DialogTitle$1, t as Dialog$1 } from "../_libs/@radix-ui/react-dialog+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/submissions-D9l6SamN.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var badgeVariants = cva("inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
	variants: { variant: {
		default: "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
		secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
		destructive: "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
		outline: "text-foreground"
	} },
	defaultVariants: { variant: "default" }
});
function Badge({ className, variant, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn(badgeVariants({ variant }), className),
		...props
	});
}
var Dialog = Dialog$1;
var DialogPortal = DialogPortal$1;
var DialogOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
	ref,
	className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props
}));
DialogOverlay.displayName = DialogOverlay$1.displayName;
var DialogContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
	ref,
	className: cn("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	})]
})] }));
DialogContent.displayName = DialogContent$1.displayName;
var DialogHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className),
	...props
});
DialogHeader.displayName = "DialogHeader";
var DialogFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
});
DialogFooter.displayName = "DialogFooter";
var DialogTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle$1, {
	ref,
	className: cn("text-lg font-semibold leading-none tracking-tight", className),
	...props
}));
DialogTitle.displayName = DialogTitle$1.displayName;
var DialogDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription$1, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
DialogDescription.displayName = DialogDescription$1.displayName;
var columns = [
	"First Name",
	"Last Name",
	"Email",
	"Mobile Number",
	"Whatsapp Number",
	"Jersey Name",
	"Jersey Size",
	"Jersey Number",
	"Preferred Sleeves",
	"Current Club/Team",
	"Availability",
	"Not Available On",
	"Fee Agreement",
	"Franchise Interest",
	"Created At",
	"File"
];
var excelColumns = [
	...columns,
	"Photo Filename Key",
	"File URL"
];
function SubmissionsPage() {
	const [submissions, setSubmissions] = (0, import_react.useState)([]);
	const [searchQuery, setSearchQuery] = (0, import_react.useState)("");
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [downloadingPhotos, setDownloadingPhotos] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)(null);
	const [selectedFile, setSelectedFile] = (0, import_react.useState)(null);
	async function loadSubmissions() {
		setLoading(true);
		setError(null);
		try {
			const response = await fetch(`${API_BASE_URL}/api/registrations`);
			const payload = await response.json();
			if (!response.ok) throw new Error("Could not load registration submissions.");
			setSubmissions(Array.isArray(payload) ? payload : payload.registrations ?? payload.data ?? []);
		} catch (loadError) {
			console.error(loadError);
			setError(loadError instanceof Error ? loadError.message : "Could not load registration submissions.");
		} finally {
			setLoading(false);
		}
	}
	(0, import_react.useEffect)(() => {
		loadSubmissions();
	}, []);
	async function handleDownloadPhotos() {
		setDownloadingPhotos(true);
		setError(null);
		try {
			await downloadSubmissionPhotos(filteredSubmissions);
		} catch (downloadError) {
			console.error(downloadError);
			setError(downloadError instanceof Error ? downloadError.message : "Could not download the submitted photos.");
		} finally {
			setDownloadingPhotos(false);
		}
	}
	const totalFiles = (0, import_react.useMemo)(() => submissions.filter((submission) => getFileUrl(submission)).length, [submissions]);
	const filteredSubmissions = (0, import_react.useMemo)(() => {
		const normalizedQuery = normalizeSearchValue(searchQuery);
		if (!normalizedQuery) return submissions;
		return submissions.filter((submission) => getSubmissionSearchText(submission).includes(normalizedQuery));
	}, [searchQuery, submissions]);
	const filteredFiles = (0, import_react.useMemo)(() => filteredSubmissions.filter((submission) => getFileUrl(submission)).length, [filteredSubmissions]);
	const hasSearchQuery = searchQuery.trim().length > 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "min-h-screen bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "border-b border-border bg-card/95 px-4 py-3 shadow-sm sm:px-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: logo_default,
							alt: "Event logo",
							className: "h-16 w-24 shrink-0 object-contain"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-2xl font-black tracking-tight text-foreground",
							children: "Indoor Community League 1.0"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						className: "flex items-center gap-4 text-sm font-semibold",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							className: "text-muted-foreground transition-colors hover:text-foreground",
							children: "Form"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/submissions",
							className: "text-foreground",
							children: "Submissions"
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto max-w-7xl px-4 py-8 sm:px-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-5 border-b border-border pb-8 sm:flex-row sm:items-end sm:justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mb-4 flex items-center gap-3 text-sm font-semibold text-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, { className: "h-5 w-5" })
								}), formatDate((/* @__PURE__ */ new Date()).toISOString())]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "text-3xl font-black tracking-tight text-foreground",
								children: "Registration submissions"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-base text-muted-foreground",
								children: "All submitted registration data in table format."
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
									label: "Submissions",
									value: submissions.length.toString()
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
									label: "Files",
									value: totalFiles.toString()
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									type: "button",
									variant: "outline",
									className: "h-11 rounded-xl",
									onClick: () => void loadSubmissions(),
									disabled: loading,
									children: [loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCcw, { className: "h-4 w-4" }), "Refresh"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									type: "button",
									variant: "outline",
									className: "h-11 rounded-xl",
									onClick: () => void handleDownloadPhotos(),
									disabled: loading || downloadingPhotos || filteredFiles === 0,
									children: [downloadingPhotos ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileArchive, { className: "h-4 w-4" }), downloadingPhotos ? "Preparing ZIP" : "Download Photos"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									type: "button",
									className: "h-11 rounded-xl",
									onClick: () => exportSubmissionsToExcel(filteredSubmissions),
									disabled: loading || filteredSubmissions.length === 0,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-4 w-4" }), "Export Excel"]
								})
							]
						})]
					}),
					error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Alert, {
						variant: "destructive",
						className: "mt-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDescription, { children: error })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10 overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-soft)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-4 border-b border-border px-6 py-4 lg:flex-row lg:items-center lg:justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableProperties, { className: "h-5 w-5 text-primary" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-semibold text-foreground",
										children: "Submitted entries"
									}),
									hasSearchQuery && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-sm text-muted-foreground",
										children: [
											filteredSubmissions.length,
											" match",
											filteredSubmissions.length === 1 ? "" : "es"
										]
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative w-full lg:max-w-sm",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										type: "search",
										value: searchQuery,
										onChange: (event) => setSearchQuery(event.target.value),
										placeholder: "Search submissions",
										className: "h-11 rounded-xl bg-background pl-10 pr-10"
									}),
									hasSearchQuery && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										type: "button",
										variant: "ghost",
										size: "icon",
										className: "absolute right-1 top-1/2 h-8 w-8 -translate-y-1/2 rounded-lg",
										onClick: () => setSearchQuery(""),
										"aria-label": "Clear search",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" })
									})
								]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "overflow-x-auto border-b-4 border-primary/20 [background:linear-gradient(to_right,var(--card)_30%,transparent),linear-gradient(to_left,var(--card)_30%,transparent)] [background-attachment:local,local]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
								className: "w-full min-w-[2100px] border-collapse text-left text-sm",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("caption", {
										className: "sr-only",
										children: "Indoor Community League player registration submissions"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", {
										className: "border-b border-border",
										children: columns.map((column) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											scope: "col",
											className: "whitespace-nowrap bg-primary px-4 py-4 text-xs font-bold uppercase tracking-wide text-primary-foreground",
											children: column
										}, column))
									}) }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										colSpan: columns.length,
										className: "px-6 py-16 text-center",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "inline-flex items-center gap-2 text-muted-foreground",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }), "Loading submissions"]
										})
									}) }) : submissions.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										colSpan: columns.length,
										className: "px-6 py-16 text-center text-muted-foreground",
										children: "No submissions found."
									}) }) : filteredSubmissions.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										colSpan: columns.length,
										className: "px-6 py-16 text-center text-muted-foreground",
										children: "No submissions match your search."
									}) }) : filteredSubmissions.map((submission) => {
										const firstName = submission.firstName ?? submission.first_name ?? "";
										const lastName = submission.lastName ?? submission.last_name ?? "";
										const fallbackName = submission.fullName ?? submission.full_name ?? "Unknown";
										const displayName = [firstName, lastName].filter(Boolean).join(" ") || fallbackName;
										const fileUrl = getFileUrl(submission);
										return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
											className: "border-b border-border last:border-b-0",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													className: "whitespace-nowrap px-4 py-4 align-middle font-bold text-foreground",
													children: firstName || fallbackName
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													className: "whitespace-nowrap px-4 py-4 align-middle font-bold text-foreground",
													children: lastName || "-"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													className: "whitespace-nowrap px-4 py-4 align-middle text-muted-foreground",
													children: submission.email
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													className: "whitespace-nowrap px-4 py-4 align-middle text-muted-foreground",
													children: submission.mobile
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													className: "whitespace-nowrap px-4 py-4 align-middle text-muted-foreground",
													children: submission.whatsappNumber ?? submission.whatsapp_number ?? "-"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													className: "whitespace-nowrap px-4 py-4 align-middle text-muted-foreground",
													children: submission.jerseyName ?? submission.jersey_name ?? "-"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													className: "whitespace-nowrap px-4 py-4 align-middle text-muted-foreground",
													children: submission.jerseySize ?? submission.jersey_size ?? "-"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													className: "whitespace-nowrap px-4 py-4 align-middle text-muted-foreground",
													children: submission.jerseyNumber ?? submission.jersey_number ?? "-"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													className: "whitespace-nowrap px-4 py-4 align-middle text-muted-foreground",
													children: submission.preferredSleeves ?? submission.preferred_sleeves ?? "-"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													className: "whitespace-nowrap px-4 py-4 align-middle text-muted-foreground",
													children: submission.currentClub ?? submission.current_club ?? "-"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													className: "whitespace-nowrap px-4 py-4 align-middle text-muted-foreground",
													children: submission.availability ?? "-"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													className: "px-4 py-4 align-middle",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "flex max-w-72 flex-wrap gap-1.5",
														children: (submission.notAvailableOn ?? submission.not_available_on ?? []).length > 0 ? (submission.notAvailableOn ?? submission.not_available_on ?? []).map((matchName) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
															variant: "secondary",
															className: "rounded-full",
															children: matchName
														}, matchName)) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "text-muted-foreground",
															children: "-"
														})
													})
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													className: "whitespace-nowrap px-4 py-4 align-middle text-muted-foreground",
													children: submission.feeAgreement ?? submission.fee_agreement ? "Accepted" : "-"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													className: "whitespace-nowrap px-4 py-4 align-middle font-semibold text-primary",
													children: submission.franchiseInterest ?? submission.franchise_interest ?? "-"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													className: "whitespace-nowrap px-4 py-4 align-middle text-muted-foreground",
													children: formatDateTime(submission.createdAt ?? submission.created_at)
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													className: "whitespace-nowrap px-4 py-4 align-middle",
													children: fileUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
														type: "button",
														variant: "ghost",
														className: "h-9 rounded-xl px-3 text-sm font-semibold",
														onClick: () => setSelectedFile({
															name: displayName,
															url: fileUrl
														}),
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "h-4 w-4" }), "View"]
													}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-muted-foreground",
														children: "No file"
													})
												})
											]
										}, submission.id);
									}) })
								]
							})
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: Boolean(selectedFile),
				onOpenChange: (open) => !open && setSelectedFile(null),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
					className: "max-w-4xl rounded-2xl border-white/20 bg-card p-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, {
						className: "border-b border-border px-6 py-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogTitle, {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileImage, { className: "h-5 w-5 text-primary" }), "Uploaded file"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: selectedFile?.name })]
					}), selectedFile && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "max-h-[75vh] overflow-auto p-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: selectedFile.url,
							alt: `${selectedFile.name} uploaded file`,
							className: "mx-auto max-h-[68vh] w-auto rounded-xl object-contain"
						})
					})]
				})
			})
		]
	});
}
function Stat({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl border border-border bg-card px-4 py-2.5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs font-semibold text-muted-foreground",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-lg font-black text-foreground",
			children: value
		})]
	});
}
function getSubmissionSearchText(submission) {
	return normalizeSearchValue([
		submission.firstName,
		submission.first_name,
		submission.lastName,
		submission.last_name,
		submission.fullName,
		submission.full_name,
		submission.email,
		submission.mobile,
		submission.whatsappNumber,
		submission.whatsapp_number,
		submission.jerseyName,
		submission.jersey_name,
		submission.jerseySize,
		submission.jersey_size,
		submission.jerseyNumber,
		submission.jersey_number,
		submission.preferredSleeves,
		submission.preferred_sleeves,
		submission.currentClub,
		submission.current_club,
		submission.availability,
		...submission.notAvailableOn ?? submission.not_available_on ?? [],
		submission.feeAgreement ?? submission.fee_agreement ? "Accepted" : "",
		submission.franchiseInterest,
		submission.franchise_interest,
		formatDateTime(submission.createdAt ?? submission.created_at)
	].filter(Boolean).join(" "));
}
function normalizeSearchValue(value) {
	return value.trim().toLowerCase();
}
function exportSubmissionsToExcel(submissions) {
	const csv = [excelColumns, ...submissions.map((submission) => {
		const fileUrl = getFileUrl(submission) ?? "";
		return [
			submission.firstName ?? submission.first_name ?? submission.fullName ?? submission.full_name ?? "",
			submission.lastName ?? submission.last_name ?? "",
			submission.email,
			submission.mobile,
			submission.whatsappNumber ?? submission.whatsapp_number ?? "",
			submission.jerseyName ?? submission.jersey_name ?? "",
			submission.jerseySize ?? submission.jersey_size ?? "",
			submission.jerseyNumber ?? submission.jersey_number ?? "",
			submission.preferredSleeves ?? submission.preferred_sleeves ?? "",
			submission.currentClub ?? submission.current_club ?? "",
			submission.availability ?? "",
			(submission.notAvailableOn ?? submission.not_available_on ?? []).join(", "),
			submission.feeAgreement ?? submission.fee_agreement ? "Accepted" : "",
			submission.franchiseInterest ?? submission.franchise_interest ?? "",
			formatDateTime(submission.createdAt ?? submission.created_at),
			fileUrl ? "View" : "",
			fileUrl ? getPhotoFileKey(submission) : "",
			fileUrl
		];
	})].map((row) => row.map(formatCsvCell).join(",")).join("\r\n");
	const blob = new Blob([`\uFEFF${csv}`], { type: "text/csv;charset=utf-8;" });
	const url = URL.createObjectURL(blob);
	const link = document.createElement("a");
	link.href = url;
	link.download = `registration-submissions-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.csv`;
	document.body.appendChild(link);
	link.click();
	link.remove();
	URL.revokeObjectURL(url);
}
async function downloadSubmissionPhotos(submissions) {
	const { default: JSZip } = await import("../_libs/jszip+[...].mjs").then((n) => /* @__PURE__ */ __toESM(n.t()));
	const photoEntries = submissions.map((submission, index) => ({
		index,
		submission,
		url: getFileUrl(submission)
	})).filter((entry) => Boolean(entry.url));
	if (photoEntries.length === 0) throw new Error("There are no photos in the selected submissions.");
	const zip = new JSZip();
	const photoFolder = zip.folder("registration-photos");
	if (!photoFolder) throw new Error("Could not prepare the photo ZIP.");
	const manifestRows = [];
	const failedRows = [];
	for (let start = 0; start < photoEntries.length; start += 5) {
		const batch = photoEntries.slice(start, start + 5);
		await Promise.all(batch.map(async ({ index, submission, url }) => {
			const fileKey = getPhotoFileKey(submission);
			try {
				const response = await fetch(url);
				if (!response.ok) throw new Error(`HTTP ${response.status}`);
				const photoBlob = await response.blob();
				const fileName = `${fileKey}.${getImageExtension(photoBlob.type, url)}`;
				photoFolder.file(fileName, photoBlob);
				manifestRows.push([
					index,
					fileName,
					fileKey,
					getSubmissionName(submission),
					submission.jerseyNumber ?? submission.jersey_number ?? "",
					submission.email,
					url,
					"Downloaded"
				]);
			} catch (error) {
				failedRows.push([
					index,
					"",
					fileKey,
					getSubmissionName(submission),
					submission.jerseyNumber ?? submission.jersey_number ?? "",
					submission.email,
					url,
					error instanceof Error ? error.message : "Download failed"
				]);
			}
		}));
	}
	if (manifestRows.length === 0) throw new Error("None of the photos could be downloaded. Check that the public photo links are accessible.");
	const manifestCsv = [[
		"Photo Filename",
		"Photo Filename Key",
		"Participant Name",
		"Jersey Number",
		"Email",
		"File URL",
		"Status"
	], ...[...manifestRows, ...failedRows].sort((left, right) => Number(left[0]) - Number(right[0])).map((row) => row.slice(1))].map((row) => row.map(formatCsvCell).join(",")).join("\r\n");
	zip.file("photo-manifest.csv", `\uFEFF${manifestCsv}`);
	downloadBlob(await zip.generateAsync({ type: "blob" }), `registration-photos-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.zip`);
	if (failedRows.length > 0) throw new Error(`${manifestRows.length} photos downloaded; ${failedRows.length} failed. See photo-manifest.csv in the ZIP.`);
}
function getPhotoFileKey(submission) {
	const jerseyNumber = submission.jerseyNumber ?? submission.jersey_number ?? "no-jersey";
	return [
		`jersey-${sanitizeFilenamePart(String(jerseyNumber))}`,
		sanitizeFilenamePart(getSubmissionName(submission)),
		sanitizeFilenamePart(String(submission.id))
	].join("_");
}
function getSubmissionName(submission) {
	return [submission.firstName ?? submission.first_name ?? "", submission.lastName ?? submission.last_name ?? ""].filter(Boolean).join(" ") || submission.fullName || submission.full_name || "Unknown";
}
function sanitizeFilenamePart(value) {
	return value.trim().replace(/[^a-z0-9]+/gi, "-").replace(/^-+|-+$/g, "") || "unknown";
}
function getImageExtension(contentType, url) {
	const normalizedType = contentType.toLowerCase();
	if (normalizedType.includes("png")) return "png";
	if (normalizedType.includes("webp")) return "webp";
	if (normalizedType.includes("gif")) return "gif";
	if (normalizedType.includes("jpeg") || normalizedType.includes("jpg")) return "jpg";
	return url.match(/\.(png|webp|gif|jpe?g)(?:$|[?#])/i)?.[1]?.toLowerCase().replace("jpeg", "jpg") ?? "jpg";
}
function downloadBlob(blob, fileName) {
	const url = URL.createObjectURL(blob);
	const link = document.createElement("a");
	link.href = url;
	link.download = fileName;
	document.body.appendChild(link);
	link.click();
	link.remove();
	URL.revokeObjectURL(url);
}
function formatCsvCell(value) {
	const cell = String(value ?? "");
	return `"${(/^[=+\-@]/.test(cell) ? `'${cell}` : cell).replace(/"/g, "\"\"")}"`;
}
function getFileUrl(submission) {
	const directUrl = submission.photoUrl ?? submission.photo_url;
	if (directUrl) return directUrl;
	const photoPath = submission.photoPath ?? submission.photo_path;
	if (!photoPath) return null;
	if (/^https?:\/\//i.test(photoPath)) return photoPath;
	const cleanPath = photoPath.replace(/^\/+/, "");
	if (REGISTRATION_PHOTOS_PUBLIC_BASE_URL) return `${REGISTRATION_PHOTOS_PUBLIC_BASE_URL}/${encodeStoragePath(cleanPath)}`;
	return `${API_BASE_URL}/${cleanPath}`;
}
function encodeStoragePath(path) {
	return path.split("/").map((segment) => encodeURIComponent(segment)).join("/");
}
function formatDate(value) {
	if (!value) return "-";
	const date = new Date(value);
	if (Number.isNaN(date.getTime())) return value;
	return new Intl.DateTimeFormat("en", {
		month: "long",
		day: "numeric",
		year: "numeric"
	}).format(date);
}
function formatDateTime(value) {
	if (!value) return "-";
	const date = new Date(value);
	if (Number.isNaN(date.getTime())) return value;
	return new Intl.DateTimeFormat("en", {
		year: "numeric",
		month: "2-digit",
		day: "2-digit",
		hour: "2-digit",
		minute: "2-digit"
	}).format(date);
}
//#endregion
export { SubmissionsPage as component };
