import { createFileRoute } from "@tanstack/react-router";

import { RegistrationClosed } from "@/components/registration/RegistrationClosed";
import { RegistrationPageShell } from "@/components/registration/RegistrationPageShell";

export const Route = createFileRoute("/private-registration-7h4k9m")({
  head: () => ({
    meta: [
      { title: "The Masked Cup | Player Registration" },
      {
        name: "description",
        content: "Register to play in The Masked Cup.",
      },
      { name: "robots", content: "noindex,nofollow" },
    ],
  }),
  component: PrivateRegistration,
});

function PrivateRegistration() {
  return (
    <RegistrationPageShell>
      <RegistrationClosed />
    </RegistrationPageShell>
  );
}
