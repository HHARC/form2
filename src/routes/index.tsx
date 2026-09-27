import { createFileRoute } from "@tanstack/react-router";

import { RegistrationForm } from "@/components/registration/RegistrationForm";
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
      <RegistrationForm submitPath="/api/registrations" />
    </RegistrationPageShell>
  );
}
