import { o as __toESM } from "../_runtime.mjs";
import { t as logo_default } from "./logo-BQTsA3vG.mjs";
import { n as REGISTRATION_PHOTOS_PUBLIC_BASE_URL, t as API_BASE_URL } from "./api-DpyJ30dE.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { D as LoaderCircle, h as FileDown, o as Settings2, t as X, u as Minus, v as Download } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/players-D4da5TOv.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var PLAYER_ROSTER = [
	"Aadil Farooq",
	"Aamir Khan",
	"Abbas Kapadia",
	"Abbas Saify",
	"Abbas Hn",
	"Abbas Saifuddin",
	"Abishek Sudheer",
	"Afzal Khan",
	"Ahmad Waleed",
	"Akhil C Bhaskar",
	"Ali Balsi",
	"Ali Sajjad",
	"Ali Asghar Bhuriwala",
	"Aman Mishra",
	"Amir Parvez",
	"Aswin Jayaprakash",
	"Bhavesh Bharwani",
	"Bilal Noortheen",
	"Burhan Godhrawala",
	"Deepak Chand",
	"Deepu Devnani",
	"Fakhruddin Kanchwala",
	"Hasnen Valikarim",
	"Husain Yusuf Tinwala",
	"Hussain Abid Hussain",
	"Hussain Lakdawala",
	"Huzaifa Ayaz",
	"Huzaifa Mohammed Bastawala",
	"Huzefa Tarwala",
	"Huzefa Gangardiwala",
	"Huzefa Kanchwala",
	"Kevin Raj",
	"Kumail Tinwala",
	"Max Snow",
	"Mohammad Ali",
	"Mufaddal Tinwala",
	"Mufaddal Merchant",
	"Muffy Mama",
	"Muhammad Khan",
	"Muhammad Jodiawala",
	"Murtaza Pagri",
	"Mustafa Abdul Taiyab",
	"Mustafa Sadriwala",
	"Mustafa Tinwala",
	"Nitin Mahajan",
	"Pulkit Chhabra",
	"R Chaitanya",
	"Rasim Bhat",
	"Rohan Nanda",
	"Saifan Mukadam",
	"Saifee Virpurwala",
	"Sandeep Khedekar",
	"Saumyadeep Halder",
	"Schnian Mir",
	"Shabbir Mustansir",
	"Shabbir Alam",
	"Shabbir A Pumpwala",
	"Shane Fernandes",
	"Shankar A",
	"Sikander Khan",
	"Srinath Mehta",
	"Suraj Anand",
	"Taha Ali",
	"Tanweer Mughal",
	"Vivek Dubey",
	"Yasir Nadeem",
	"Zeeshan Ashrafi",
	"Zeeshan Khan",
	"Husain Motorwala",
	"Rahul Chhabra",
	"Mohammad Shahnawaz Khan",
	"Vikash Tripathi",
	"Raj Arakkal"
];
var PLAYER_PHOTO_FOCAL_POINTS = {
	"ali asghar bhuriwala": "50% 18%",
	"huzaifa mohammed bastawala": "50% 16%",
	"mohammad shahnawaz khan": "50% 18%"
};
function normalizePlayerName(value) {
	return value.normalize("NFKD").replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase("en").replace(/[^a-z0-9]+/g, " ").trim().replace(/\s+/g, " ");
}
function getSubmissionName(submission) {
	return [submission.firstName ?? submission.first_name ?? "", submission.lastName ?? submission.last_name ?? ""].filter(Boolean).join(" ") || submission.fullName || submission.full_name || "";
}
function getSubmissionPhotoUrl(submission) {
	const directUrl = submission.photoUrl ?? submission.photo_url;
	if (directUrl) return directUrl;
	const photoPath = submission.photoPath ?? submission.photo_path;
	if (!photoPath) return null;
	if (/^https?:\/\//i.test(photoPath)) return photoPath;
	const cleanPath = photoPath.replace(/^\/+/, "");
	if (REGISTRATION_PHOTOS_PUBLIC_BASE_URL) return `${REGISTRATION_PHOTOS_PUBLIC_BASE_URL}/${cleanPath.split("/").map(encodeURIComponent).join("/")}`;
	return `${API_BASE_URL}/${cleanPath}`;
}
function findEligiblePlayer(submissions, requestedName) {
	const key = normalizePlayerName(requestedName);
	if (!key) return { status: "not-found" };
	const matches = submissions.filter((submission) => normalizePlayerName(getSubmissionName(submission)) === key && Boolean(getSubmissionPhotoUrl(submission)));
	if (matches.length === 0) return { status: "not-found" };
	if (matches.length > 1) return { status: "ambiguous" };
	return {
		status: "matched",
		name: getSubmissionName(matches[0]).trim()
	};
}
function matchRosterPlayers(submissions, roster = PLAYER_ROSTER) {
	const recordsByName = /* @__PURE__ */ new Map();
	for (const submission of submissions) {
		const key = normalizePlayerName(getSubmissionName(submission));
		if (!key) continue;
		recordsByName.set(key, [...recordsByName.get(key) ?? [], submission]);
	}
	return roster.flatMap((rosterName) => {
		const matches = (recordsByName.get(normalizePlayerName(rosterName)) ?? []).filter((record) => Boolean(getSubmissionPhotoUrl(record)));
		if (matches.length !== 1) {
			console.warn(`[Players] Omitted ${rosterName}: expected one submission with a photo, found ${matches.length}.`);
			return [];
		}
		return [{
			id: matches[0].id,
			name: rosterName,
			photoUrl: getSubmissionPhotoUrl(matches[0]),
			focalPosition: PLAYER_PHOTO_FOCAL_POINTS[normalizePlayerName(rosterName)] ?? "50% 20%"
		}];
	});
}
function safePlayerFilename(name, extension = "jpg") {
	return `${name.trim().replace(/[^a-z0-9]+/gi, "-").replace(/^-+|-+$/g, "") || "player"}.${extension}`;
}
var ROSTER_STORAGE_KEY = "icl-player-roster-v1";
function PlayersPage() {
	const [submissions, setSubmissions] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [error, setError] = (0, import_react.useState)(false);
	const [downloadingAll, setDownloadingAll] = (0, import_react.useState)(false);
	const [exportingPdf, setExportingPdf] = (0, import_react.useState)(false);
	const [downloadStatus, setDownloadStatus] = (0, import_react.useState)("");
	const [roster, setRoster] = (0, import_react.useState)([...PLAYER_ROSTER]);
	const [managing, setManaging] = (0, import_react.useState)(false);
	const [playerName, setPlayerName] = (0, import_react.useState)("");
	const [managerMessage, setManagerMessage] = (0, import_react.useState)("");
	const players = (0, import_react.useMemo)(() => submissions.length > 0 ? matchRosterPlayers(submissions, roster) : [], [roster, submissions]);
	(0, import_react.useEffect)(() => {
		try {
			const saved = window.localStorage.getItem(ROSTER_STORAGE_KEY);
			if (!saved) return;
			const parsed = JSON.parse(saved);
			if (Array.isArray(parsed) && parsed.every((name) => typeof name === "string")) setRoster(parsed);
		} catch {
			console.warn("[Players] Could not read the saved browser roster.");
		}
	}, []);
	function saveRoster(nextRoster) {
		setRoster(nextRoster);
		try {
			window.localStorage.setItem(ROSTER_STORAGE_KEY, JSON.stringify(nextRoster));
		} catch {
			setManagerMessage("The roster changed, but this browser could not save it.");
		}
	}
	function addPlayer(event) {
		event.preventDefault();
		const result = findEligiblePlayer(submissions, playerName);
		if (result.status === "not-found") {
			setManagerMessage("No registration with that exact name and a photo was found.");
			return;
		}
		if (result.status === "ambiguous") {
			setManagerMessage("More than one registration matches that name. Nothing was added.");
			return;
		}
		if (roster.some((name) => normalizePlayerName(name) === normalizePlayerName(result.name))) {
			setManagerMessage(`${result.name} is already on the player wall.`);
			return;
		}
		saveRoster([...roster, result.name]);
		setPlayerName("");
		setManagerMessage(`${result.name} was added.`);
	}
	function removePlayer(name) {
		if (!window.confirm(`Remove ${name} from the player wall?`)) return;
		saveRoster(roster.filter((rosterName) => normalizePlayerName(rosterName) !== normalizePlayerName(name)));
		setManagerMessage(`${name} was removed.`);
	}
	(0, import_react.useEffect)(() => {
		const controller = new AbortController();
		async function load() {
			try {
				const response = await fetch("/api/player-gallery", { signal: controller.signal });
				if (!response.ok) throw new Error(`HTTP ${response.status}`);
				const payload = await response.json();
				setSubmissions(Array.isArray(payload) ? payload : payload.registrations ?? payload.data ?? []);
			} catch (loadError) {
				if (loadError instanceof DOMException && loadError.name === "AbortError") return;
				console.error("[Players] Could not load the player gallery.", loadError);
				setError(true);
			} finally {
				setLoading(false);
			}
		}
		load();
		return () => controller.abort();
	}, []);
	async function downloadPlayer(player) {
		setDownloadStatus(`Downloading ${player.name}.`);
		try {
			const blob = await fetchPhoto(player.photoUrl);
			downloadBlob(blob, safePlayerFilename(player.name, imageExtension(blob.type, player.photoUrl)));
			setDownloadStatus(`${player.name}'s photo downloaded.`);
		} catch (downloadError) {
			console.error(`[Players] Could not download ${player.name}.`, downloadError);
			setDownloadStatus(`${player.name}'s photo could not be downloaded. Please try again.`);
		}
	}
	async function downloadAll() {
		setDownloadingAll(true);
		setDownloadStatus("Preparing all player photos for download.");
		try {
			const { default: JSZip } = await import("../_libs/jszip+[...].mjs").then((n) => /* @__PURE__ */ __toESM(n.t()));
			const zip = new JSZip();
			for (let index = 0; index < players.length; index += 5) await Promise.all(players.slice(index, index + 5).map(async (player) => {
				const blob = await fetchPhoto(player.photoUrl);
				zip.file(safePlayerFilename(player.name, imageExtension(blob.type, player.photoUrl)), blob);
			}));
			downloadBlob(await zip.generateAsync({ type: "blob" }), "indoor-community-league-players.zip");
			setDownloadStatus(`${players.length} player photos downloaded in a ZIP file.`);
		} catch (downloadError) {
			console.error("[Players] Could not prepare the photo ZIP.", downloadError);
			setDownloadStatus("The player photo ZIP could not be downloaded. Please try again.");
		} finally {
			setDownloadingAll(false);
		}
	}
	async function exportPdf() {
		setExportingPdf(true);
		setDownloadStatus("Preparing PDF. Player photos are being arranged for print.");
		try {
			const { createPlayerPdf, downloadPlayerPdf } = await import("./player-pdf-BQQIueHE.mjs");
			const result = await createPlayerPdf(players, logo_default);
			downloadPlayerPdf(result.blob);
			setDownloadStatus(result.warningCount > 0 ? `PDF downloaded with ${result.warningCount} photo ${result.warningCount === 1 ? "warning" : "warnings"}. Player names are still included.` : `PDF downloaded with all ${players.length} players.`);
		} catch (exportError) {
			console.error("[Players] Could not prepare the player PDF.", exportError);
			setDownloadStatus("The player PDF could not be downloaded. Please try again.");
		} finally {
			setExportingPdf(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "players-page min-h-screen bg-[#f4f1eb] text-[#171719]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
			className: "border-b border-black/15 bg-[#f8f6f1]",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto flex max-w-[1500px] items-center px-5 py-4 sm:px-8 lg:px-12",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					"aria-label": "Indoor Community League home",
					className: "inline-flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: logo_default,
						alt: "",
						className: "h-14 w-20 object-contain sm:h-16 sm:w-24"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "hidden text-xs font-extrabold uppercase tracking-[0.22em] sm:block",
						children: "Indoor Community League 1.0"
					})]
				})
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-[1500px] px-5 pb-20 pt-12 sm:px-8 sm:pt-16 lg:px-12 lg:pt-20",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "sr-only",
					role: "status",
					"aria-live": "polite",
					children: downloadStatus || managerMessage
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-8 border-b-4 border-[#171719] pb-7 sm:mb-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "max-w-3xl font-display text-[clamp(2rem,5vw,4rem)] font-black leading-[0.94] tracking-[-0.04em]",
							children: [
								"Indoor Community",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", { className: "hidden sm:block" }),
								" League 1.0",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[#c51d2b]",
									children: "Players"
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => setManaging((open) => !open),
								"aria-expanded": managing,
								"aria-controls": "player-manager",
								className: "inline-flex h-12 items-center justify-center gap-2 border-2 border-[#171719] px-4 text-xs font-extrabold uppercase tracking-[0.12em] transition hover:bg-white focus-visible:outline-[#c51d2b]",
								children: [
									managing ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Settings2, { className: "size-4" }),
									" ",
									managing ? "Close manager" : "Manage players"
								]
							}), !loading && !error && players.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => void downloadAll(),
								disabled: downloadingAll || exportingPdf,
								className: "inline-flex h-12 shrink-0 items-center justify-center gap-2 border-2 border-[#171719] bg-[#171719] px-5 text-sm font-extrabold uppercase tracking-[0.12em] text-white transition hover:bg-[#c51d2b] focus-visible:outline-[#c51d2b] disabled:cursor-wait disabled:opacity-60",
								children: [downloadingAll ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-4 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "size-4" }), downloadingAll ? "Preparing" : "Download all"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => void exportPdf(),
								disabled: loading || error || players.length === 0 || exportingPdf || downloadingAll,
								className: "inline-flex h-12 shrink-0 items-center justify-center gap-2 border-2 border-[#171719] bg-[#f8f6f1] px-4 text-xs font-extrabold uppercase tracking-[0.12em] transition hover:bg-white focus-visible:outline-[#c51d2b] disabled:cursor-wait disabled:opacity-60",
								children: [exportingPdf ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-4 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileDown, { className: "size-4" }), exportingPdf ? "Preparing PDF" : "Export PDF"]
							})] })]
						})]
					}), managing && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
						id: "player-manager",
						className: "mt-7 border-l-4 border-[#c51d2b] bg-[#ebe6dc] p-4 sm:p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
								onSubmit: addPlayer,
								className: "flex flex-col gap-3 sm:flex-row sm:items-end",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "min-w-0 flex-1 text-xs font-extrabold uppercase tracking-[0.13em]",
									children: ["Add by full registration name", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										value: playerName,
										onChange: (event) => setPlayerName(event.target.value),
										required: true,
										autoComplete: "off",
										placeholder: "Type the exact player name",
										className: "mt-2 h-12 w-full border-2 border-[#171719] bg-[#f8f6f1] px-3 text-base font-medium normal-case tracking-normal outline-none focus:border-[#c51d2b]"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "submit",
									disabled: loading || error,
									className: "h-12 border-2 border-[#171719] bg-[#c51d2b] px-5 text-xs font-extrabold uppercase tracking-[0.12em] text-white hover:bg-[#171719] focus-visible:outline-[#c51d2b] disabled:opacity-50",
									children: "Add player"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-xs leading-relaxed text-black/65",
								children: "Photos come only from exact registration matches. Changes are saved on this browser."
							}),
							managerMessage && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm font-bold",
								role: "status",
								children: managerMessage
							})
						]
					})]
				}),
				loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex min-h-64 items-center justify-center border-y border-black/20",
					role: "status",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "inline-flex items-center gap-3 text-sm font-bold uppercase tracking-[0.15em]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-5 animate-spin text-[#c51d2b]" }), " Loading players"]
					})
				}) : error ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-h-64 border-y border-black/20 py-20 text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-2xl font-black",
						children: "The squad wall is unavailable right now."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-black/65",
						children: "Please refresh the page and try again."
					})]
				}) : players.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "min-h-64 border-y border-black/20 py-20 text-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-2xl font-black",
						children: "Player photos are being prepared."
					})
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-2 gap-x-3 gap-y-7 sm:grid-cols-3 sm:gap-x-5 sm:gap-y-9 lg:grid-cols-4 xl:grid-cols-5",
					children: players.map((player, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "group relative overflow-hidden bg-[#202023] shadow-[0_12px_30px_-20px_rgba(0,0,0,.75)] [animation:player-reveal_.5s_both]",
						style: { animationDelay: `${Math.min(index * 35, 450)}ms` },
						children: [
							managing && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => removePlayer(player.name),
								"aria-label": `Remove ${player.name} from the player wall`,
								className: "absolute right-2 top-2 z-10 inline-flex min-h-10 items-center gap-1 border border-white/70 bg-[#171719]/90 px-2.5 text-[.68rem] font-extrabold uppercase tracking-wider text-white shadow-lg hover:bg-[#c51d2b] focus-visible:outline-white",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { className: "size-3.5" }), " Remove"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "aspect-[4/5] overflow-hidden bg-[#252528]",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: player.photoUrl,
									alt: player.name,
									loading: "lazy",
									style: { objectPosition: player.focalPosition },
									className: "h-full w-full object-cover saturate-[.92] transition duration-500 ease-out group-hover:scale-[1.025] group-hover:saturate-100"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute inset-x-0 bottom-0 flex h-[5.6rem] items-end justify-between gap-2 bg-[linear-gradient(transparent,rgba(11,11,13,.96)_38%)] px-3 pb-3 pt-7 sm:h-24 sm:px-4 sm:pb-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									title: player.name,
									className: "line-clamp-2 min-h-[2.25rem] flex-1 text-balance font-display text-[clamp(.78rem,1.55vw,1.18rem)] font-black leading-[1.12] text-white sm:min-h-[2.65rem]",
									children: player.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => void downloadPlayer(player),
									"aria-label": `Download photo of ${player.name}`,
									title: `Download ${player.name}`,
									className: "grid size-9 shrink-0 place-items-center border border-white/50 bg-black/35 text-white transition hover:border-[#e32a39] hover:bg-[#c51d2b] focus-visible:outline-white",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "size-4" })
								})]
							})
						]
					}, player.id))
				})
			]
		})]
	});
}
async function fetchPhoto(url) {
	const response = await fetch(`/api/player-gallery/photo?url=${encodeURIComponent(url)}`);
	if (!response.ok) throw new Error(`Photo download failed with HTTP ${response.status}`);
	return response.blob();
}
function imageExtension(contentType, url) {
	if (contentType.includes("png")) return "png";
	if (contentType.includes("webp")) return "webp";
	return url.match(/\.(png|webp|jpe?g)(?:$|[?#])/i)?.[1]?.toLowerCase().replace("jpeg", "jpg") ?? "jpg";
}
function downloadBlob(blob, filename) {
	const url = URL.createObjectURL(blob);
	const link = document.createElement("a");
	link.href = url;
	link.download = filename;
	document.body.appendChild(link);
	link.click();
	link.remove();
	URL.revokeObjectURL(url);
}
//#endregion
export { PlayersPage as component };
