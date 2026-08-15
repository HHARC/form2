import { t as require_lib } from "../_libs/mongodb.mjs";
import { randomUUID } from "node:crypto";
import { mkdir, readFile, stat, writeFile } from "node:fs/promises";
import { extname, join, relative, resolve } from "node:path";
//#region node_modules/.nitro/vite/services/ssr/index.js
var import_lib = require_lib();
var lastCapturedError;
var TTL_MS = 5e3;
function record(error) {
	lastCapturedError = {
		error,
		at: Date.now()
	};
}
if (typeof globalThis.addEventListener === "function") {
	globalThis.addEventListener("error", (event) => record(event.error ?? event));
	globalThis.addEventListener("unhandledrejection", (event) => record(event.reason));
}
function consumeLastCapturedError() {
	if (!lastCapturedError) return void 0;
	if (Date.now() - lastCapturedError.at > TTL_MS) {
		lastCapturedError = void 0;
		return;
	}
	const { error } = lastCapturedError;
	lastCapturedError = void 0;
	return error;
}
function renderErrorPage() {
	return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>This page didn't load</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      body { font: 15px/1.5 system-ui, -apple-system, sans-serif; background: #fafafa; color: #111; display: grid; place-items: center; min-height: 100vh; margin: 0; padding: 1.5rem; }
      .card { max-width: 28rem; width: 100%; text-align: center; padding: 2rem; }
      h1 { font-size: 1.25rem; margin: 0 0 0.5rem; }
      p { color: #4b5563; margin: 0 0 1.5rem; }
      .actions { display: flex; gap: 0.5rem; justify-content: center; flex-wrap: wrap; }
      a, button { padding: 0.5rem 1rem; border-radius: 0.375rem; font: inherit; cursor: pointer; text-decoration: none; border: 1px solid transparent; }
      .primary { background: #111; color: #fff; }
      .secondary { background: #fff; color: #111; border-color: #d1d5db; }
    </style>
  </head>
  <body>
    <div class="card">
      <h1>This page didn't load</h1>
      <p>Something went wrong on our end. You can try refreshing or head back home.</p>
      <div class="actions">
        <button class="primary" onclick="location.reload()">Try again</button>
        <a class="secondary" href="/">Go home</a>
      </div>
    </div>
  </body>
</html>`;
}
var serverEntryPromise;
var mongoClient;
var MAX_FILE_SIZE = 2 * 1024 * 1024;
var uploadDir = join(process.env.TMPDIR ?? process.env.TEMP ?? "/tmp", "uploads");
var MONGODB_URI = process.env.MONGODB_URI ?? void 0;
var MONGODB_DB = process.env.MONGODB_DB ?? "registrations_db";
var JERSEY_SIZES = /* @__PURE__ */ new Set([
	"Small",
	"Medium",
	"Large",
	"XL",
	"XXL",
	"3XL",
	"4XL"
]);
var PREFERRED_SLEEVES = /* @__PURE__ */ new Set(["Full Sleeves", "Half Sleeves"]);
var AVAILABILITY_OPTIONS = /* @__PURE__ */ new Set(["Available all matches", "Missing few matches"]);
var REGISTRATION_CLOSED_MESSAGE = "Registration for Indoor Community League 1.0 is closed. Please get ready early next time because spots move fast.";
var PLAYER_GALLERY_SOURCE = "https://api.stride-events.net";
async function getServerEntry() {
	if (!serverEntryPromise) serverEntryPromise = import("./server-DVhiItC6.mjs").then((m) => m.default ?? m);
	return serverEntryPromise;
}
async function getRegistrationsCollection() {
	if (!MONGODB_URI) throw new Error("Missing MONGODB_URI in production.");
	if (!mongoClient) {
		mongoClient = new import_lib.MongoClient(MONGODB_URI, { serverSelectionTimeoutMS: 5e3 });
		await mongoClient.connect();
	}
	return mongoClient.db(MONGODB_DB).collection("registrations");
}
async function handleApiRequest(request) {
	const url = new URL(request.url);
	if (request.method === "GET" && url.pathname === "/api/player-gallery") {
		const upstream = await fetch(`${PLAYER_GALLERY_SOURCE}/api/registrations`, { headers: { accept: "application/json" } });
		return new Response(upstream.body, {
			status: upstream.status,
			headers: {
				"content-type": upstream.headers.get("content-type") ?? "application/json; charset=utf-8",
				"cache-control": "public, max-age=60, stale-while-revalidate=300"
			}
		});
	}
	if (request.method === "GET" && url.pathname === "/api/player-gallery/photo") {
		const source = url.searchParams.get("url");
		if (!source) return json(400, {
			ok: false,
			message: "Missing photo URL."
		});
		let photoUrl;
		try {
			photoUrl = new URL(source);
		} catch {
			return json(400, {
				ok: false,
				message: "Invalid photo URL."
			});
		}
		if (photoUrl.protocol !== "https:" || photoUrl.hostname !== "res.cloudinary.com") return json(400, {
			ok: false,
			message: "Unsupported photo host."
		});
		const upstream = await fetch(photoUrl, { headers: { accept: "image/*" } });
		if (!upstream.ok) return json(upstream.status, {
			ok: false,
			message: "Photo unavailable."
		});
		return new Response(upstream.body, {
			status: 200,
			headers: {
				"content-type": upstream.headers.get("content-type") ?? "image/jpeg",
				"cache-control": "public, max-age=86400, stale-while-revalidate=604800"
			}
		});
	}
	if (request.method === "GET" && url.pathname === "/api/health") return json(200, {
		ok: true,
		service: "registration-api",
		storage: "mongodb"
	});
	if (request.method === "OPTIONS" && url.pathname.startsWith("/api/")) return new Response(null, {
		status: 204,
		headers: corsHeaders()
	});
	if (request.method === "GET" && url.pathname === "/api/registrations") return json(200, {
		ok: true,
		registrations: (await (await getRegistrationsCollection()).find().sort({ _id: -1 }).limit(50).toArray()).map(formatRegistration)
	});
	if (request.method === "POST" && url.pathname === "/api/registrations") return handleRegistration(request, { requireRegistrationOpen: true });
	if (request.method === "POST" && url.pathname === "/api/private-registration-7h4k9m") return handleRegistration(request, { requireRegistrationOpen: false });
	if (request.method === "GET" && url.pathname.startsWith("/uploads/")) return serveUploadedFile(url.pathname);
	if (url.pathname.startsWith("/api/") || url.pathname.startsWith("/uploads/")) return json(404, {
		ok: false,
		message: "Route not found."
	});
	return null;
}
async function handleRegistration(request, { requireRegistrationOpen }) {
	if (requireRegistrationOpen && true) return json(403, {
		ok: false,
		message: REGISTRATION_CLOSED_MESSAGE
	});
	if (!(request.headers.get("content-type") ?? "").toLowerCase().startsWith("multipart/form-data")) return json(415, {
		ok: false,
		message: "Use multipart/form-data to submit the registration."
	});
	const formData = await request.formData();
	const registration = normalizeRegistration(formData);
	const photo = formData.get("photo");
	const errors = await validateRegistration(registration, photo);
	if (Object.keys(errors).length > 0) return json(400, {
		ok: false,
		message: "Please fix the highlighted fields.",
		errors
	});
	const file = photo;
	const photoBuffer = Buffer.from(await file.arrayBuffer());
	const imageExtension = detectImageExtension(photoBuffer);
	const storedFileName = `${randomUUID()}${imageExtension}`;
	const photoPath = `/uploads/${storedFileName}`;
	await mkdir(uploadDir, { recursive: true });
	await writeFile(join(uploadDir, storedFileName), photoBuffer, { flag: "wx" });
	const collection = await getRegistrationsCollection();
	const insertDoc = {
		first_name: registration.firstName,
		last_name: registration.lastName,
		full_name: `${registration.firstName} ${registration.lastName}`.trim(),
		email: registration.email,
		mobile: registration.mobile,
		whatsapp_number: registration.whatsappNumber,
		jersey_name: registration.jerseyName,
		jersey_number: registration.jerseyNumber,
		jersey_size: registration.jerseySize,
		preferred_sleeves: registration.preferredSleeves,
		current_club: registration.currentClub,
		availability: registration.availability,
		not_available_on: registration.notAvailableOn,
		fee_agreement: registration.feeAgreement,
		franchise_interest: registration.franchiseInterest,
		photo_path: photoPath,
		original_photo_name: file.name,
		created_at: (/* @__PURE__ */ new Date()).toISOString()
	};
	const result = await collection.insertOne(insertDoc);
	return json(201, {
		ok: true,
		message: "Registration submitted successfully.",
		registration: formatRegistration(await collection.findOne({ _id: result.insertedId }))
	});
}
async function serveUploadedFile(pathname) {
	const fileName = decodeURIComponent(pathname.replace(/^\/uploads\//, ""));
	const filePath = resolve(uploadDir, fileName);
	const safeRelativePath = relative(uploadDir, filePath);
	if (!fileName || safeRelativePath.startsWith("..")) return json(400, {
		ok: false,
		message: "Invalid upload path."
	});
	try {
		await stat(filePath);
	} catch {
		return json(404, {
			ok: false,
			message: "Uploaded file not found."
		});
	}
	const body = await readFile(filePath);
	return new Response(body, {
		status: 200,
		headers: {
			...corsHeaders(),
			"content-type": imageContentType(extname(fileName)),
			"cache-control": "public, max-age=31536000, immutable"
		}
	});
}
function normalizeRegistration(formData) {
	return {
		firstName: getString(formData, "firstName").trim(),
		lastName: getString(formData, "lastName").trim(),
		email: getString(formData, "email").trim().toLowerCase(),
		mobile: getString(formData, "mobile").trim(),
		whatsappNumber: getString(formData, "whatsappNumber").trim(),
		jerseyName: getString(formData, "jerseyName").trim(),
		jerseyNumber: getString(formData, "jerseyNumber").trim(),
		jerseySize: getString(formData, "jerseySize").trim(),
		preferredSleeves: getString(formData, "preferredSleeves").trim(),
		currentClub: getString(formData, "currentClub").trim(),
		availability: getString(formData, "availability").trim(),
		notAvailableOn: formData.getAll("notAvailableOn").map((value) => String(value).trim()).filter(Boolean),
		feeAgreement: getString(formData, "feeAgreement").trim() === "true",
		franchiseInterest: getString(formData, "franchiseInterest").trim()
	};
}
async function validateRegistration(registration, photo) {
	const errors = {};
	const phoneRegex = /^(\+9715\d{8}|\d{10})$/;
	if (!registration.firstName) errors.firstName = "First name is required.";
	if (!registration.lastName) errors.lastName = "Last name is required.";
	if (!phoneRegex.test(registration.mobile)) errors.mobile = "Use 10 digits or UAE format +9715XXXXXXXX.";
	if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(registration.email)) errors.email = "Enter a valid email address.";
	if (!phoneRegex.test(registration.whatsappNumber)) errors.whatsappNumber = "Use 10 digits or UAE format +9715XXXXXXXX.";
	if (!registration.jerseyName) errors.jerseyName = "Name of jersey is required.";
	if (!/^\d{1,3}$/.test(registration.jerseyNumber)) errors.jerseyNumber = "Jersey number must be whole numbers only.";
	if (!JERSEY_SIZES.has(registration.jerseySize)) errors.jerseySize = "Select a jersey size.";
	if (!PREFERRED_SLEEVES.has(registration.preferredSleeves)) errors.preferredSleeves = "Select preferred sleeves.";
	if (!AVAILABILITY_OPTIONS.has(registration.availability)) errors.availability = "Select availability.";
	if (registration.availability === "Missing few matches" && registration.notAvailableOn.length === 0) errors.notAvailableOn = "Select at least one match.";
	if (!registration.feeAgreement) errors.feeAgreement = "You must agree to the registration and match fees.";
	if (!["Yes, I am interested.", "No, I am not interested."].includes(registration.franchiseInterest)) errors.franchiseInterest = "Select whether you are interested in owning a team franchise.";
	if (!(photo instanceof File) || photo.size === 0) errors.photo = "Upload a JPG or PNG photo under 2 MB.";
	else if (![
		"image/jpeg",
		"image/jpg",
		"image/png"
	].includes(photo.type.toLowerCase())) errors.photo = "Only JPG, JPEG, or PNG files are allowed.";
	else if (photo.size > MAX_FILE_SIZE) errors.photo = "Photo must be 2 MB or smaller.";
	else if (!detectImageExtension(Buffer.from(await photo.arrayBuffer()))) errors.photo = "Upload a valid JPG or PNG image.";
	return errors;
}
function formatRegistration(row) {
	return {
		id: row?._id ? String(row._id) : "",
		firstName: row?.first_name,
		lastName: row?.last_name,
		fullName: row?.full_name,
		email: row?.email,
		mobile: row?.mobile,
		whatsappNumber: row?.whatsapp_number,
		jerseyName: row?.jersey_name,
		jerseyNumber: row?.jersey_number,
		jerseySize: row?.jersey_size,
		preferredSleeves: row?.preferred_sleeves,
		currentClub: row?.current_club,
		availability: row?.availability,
		notAvailableOn: Array.isArray(row?.not_available_on) ? row.not_available_on : [],
		feeAgreement: Boolean(row?.fee_agreement),
		franchiseInterest: row?.franchise_interest,
		photoPath: row?.photo_path,
		originalPhotoName: row?.original_photo_name,
		createdAt: row?.created_at
	};
}
function detectImageExtension(buffer) {
	if (buffer.length >= 4 && buffer[0] === 255 && buffer[1] === 216 && buffer[2] === 255) return ".jpg";
	if (buffer.length >= 8 && buffer[0] === 137 && buffer[1] === 80 && buffer[2] === 78 && buffer[3] === 71 && buffer[4] === 13 && buffer[5] === 10 && buffer[6] === 26 && buffer[7] === 10) return ".png";
	return "";
}
function getString(formData, name) {
	const value = formData.get(name);
	return typeof value === "string" ? value : "";
}
function imageContentType(extension) {
	return extension.toLowerCase() === ".png" ? "image/png" : "image/jpeg";
}
function json(status, payload) {
	return new Response(JSON.stringify(payload), {
		status,
		headers: {
			...corsHeaders(),
			"content-type": "application/json; charset=utf-8"
		}
	});
}
function corsHeaders() {
	return {
		"access-control-allow-origin": "*",
		"access-control-allow-methods": "GET,POST,OPTIONS",
		"access-control-allow-headers": "Content-Type, Accept"
	};
}
async function normalizeCatastrophicSsrResponse(response) {
	if (response.status < 500) return response;
	if (!(response.headers.get("content-type") ?? "").includes("application/json")) return response;
	const body = await response.clone().text();
	if (!body.includes("\"unhandled\":true") || !body.includes("\"message\":\"HTTPError\"")) return response;
	console.error(consumeLastCapturedError() ?? /* @__PURE__ */ new Error(`h3 swallowed SSR error: ${body}`));
	return new Response(renderErrorPage(), {
		status: 500,
		headers: { "content-type": "text/html; charset=utf-8" }
	});
}
var server_default = { async fetch(request, env, ctx) {
	try {
		const apiResponse = await handleApiRequest(request);
		if (apiResponse) return apiResponse;
		return await normalizeCatastrophicSsrResponse(await (await getServerEntry()).fetch(request, env, ctx));
	} catch (error) {
		console.error(error);
		return new Response(renderErrorPage(), {
			status: 500,
			headers: { "content-type": "text/html; charset=utf-8" }
		});
	}
} };
//#endregion
export { server_default as default, renderErrorPage as t };
