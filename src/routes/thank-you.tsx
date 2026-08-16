import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, Clock3, Loader2, XCircle } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { API_BASE_URL } from "@/lib/api";

type PaymentState = "checking" | "paid" | "unpaid" | "cancelled" | "error";

export const Route = createFileRoute("/thank-you")({
  head: () => ({ meta: [{ title: "Payment status | Registration" }] }),
  component: ThankYou,
});

function ThankYou() {
  const [status, setStatus] = useState<PaymentState>("checking");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const sessionId = params.get("session_id");
    if (params.get("payment") === "cancelled") {
      setStatus("cancelled");
      return;
    }
    if (!sessionId) {
      setStatus("unpaid");
      return;
    }

    fetch(`${API_BASE_URL}/api/payments/session/${encodeURIComponent(sessionId)}`)
      .then(async (response) => {
        if (!response.ok) throw new Error("Could not verify payment");
        return response.json();
      })
      .then((payload) => setStatus(payload.payment?.status === "paid" ? "paid" : "unpaid"))
      .catch(() => setStatus("error"));
  }, []);

  const content = {
    checking: { icon: <Loader2 className="h-9 w-9 animate-spin" />, title: "Checking payment…", text: "Please wait while we confirm your AED 159 payment." },
    paid: { icon: <CheckCircle2 className="h-9 w-9" />, title: "Payment successful!", text: "Your registration is complete and AED 159 has been paid." },
    unpaid: { icon: <Clock3 className="h-9 w-9" />, title: "Payment not confirmed", text: "Your registration is saved, but the AED 159 payment is still unpaid." },
    cancelled: { icon: <XCircle className="h-9 w-9" />, title: "Payment cancelled", text: "Your registration is saved, but you did not complete the AED 159 payment." },
    error: { icon: <Clock3 className="h-9 w-9" />, title: "Could not verify payment", text: "Please contact the organizer before paying again." },
  }[status];

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-16" style={{ backgroundImage: "var(--gradient-surface)" }}>
      <div className="relative w-full max-w-lg overflow-hidden border-2 border-[var(--primary-glow)] bg-card p-8 text-center shadow-[var(--shadow-elegant)]">
        <div className="mx-auto mb-5 inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-primary text-primary-foreground">{content.icon}</div>
        <h1 className="text-3xl font-black tracking-tight">{content.title}</h1>
        <p className="mt-3 text-muted-foreground">{content.text}</p>
        {status !== "checking" && <Button asChild className="mt-7 h-11 rounded-xl px-6 font-semibold"><Link to="/">Back to form</Link></Button>}
      </div>
    </main>
  );
}
