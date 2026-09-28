import { createFileRoute } from "@tanstack/react-router";

import { RegistrationClosed } from "@/components/registration/RegistrationClosed";
import { RegistrationPageShell } from "@/components/registration/RegistrationPageShell";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Masked Cup | Player Registration" },
      {
        name: "description",
        content: "Register to play in The Masked Cup.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <RegistrationPageShell>
      <RegistrationClosed />
    </RegistrationPageShell>
  );
}
