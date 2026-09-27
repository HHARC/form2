import { Phone, ShieldCheck } from "lucide-react";

const contacts = [
  { name: "Hussein Sancha", number: "050-8759122", href: "tel:+971508759122" },
  { name: "Qasim Ali", number: "050-7862132", href: "tel:+971507862132" },
  { name: "Quaid Joher", number: "055-6086529", href: "tel:+971556086529" },
];

export function RegistrationClosed() {
  return (
    <section className="relative mx-auto w-full max-w-3xl overflow-hidden border border-border bg-card p-6 text-center shadow-[var(--shadow-elegant)] ring-1 ring-primary/10 sm:p-12">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-[var(--primary-glow)]" />
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
        <ShieldCheck className="h-8 w-8" />
      </div>
      <p className="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-primary">
        Registration closed
      </p>
      <h1 className="mt-2 font-display text-3xl font-black tracking-tight sm:text-4xl">
        Player registration has ended
      </h1>
      <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-muted-foreground">
        Thank you for your interest in The Masked Cup. Online registration is now closed. Please
        contact an organizer below if you need help or have an existing registration question.
      </p>

      <div className="mx-auto mt-8 grid max-w-xl gap-3 text-left sm:grid-cols-3">
        {contacts.map((contact) => (
          <a
            key={contact.name}
            href={contact.href}
            className="flex items-center gap-3 border border-border bg-background/75 p-3 transition-colors hover:border-primary hover:bg-primary/5"
          >
            <Phone className="h-4 w-4 shrink-0 text-primary" />
            <span className="min-w-0">
              <span className="block truncate text-sm font-semibold text-foreground">
                {contact.name}
              </span>
              <span className="block text-xs text-muted-foreground">{contact.number}</span>
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
