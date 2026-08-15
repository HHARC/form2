import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";

import { cn } from "@/lib/utils";

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      "grid place-content-center peer h-5 w-5 shrink-0 rounded-md border-2 border-border bg-background shadow transition-all duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:border-primary focus-visible:shadow-[0_0_0_4px_var(--primary,rgba(88,64,255,0.15))] disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-gradient-primary data-[state=checked]:border-primary data-[state=checked]:text-primary-foreground data-[state=checked]:shadow-[0_4px_12px_-4px_var(--primary,rgba(88,64,255,0.4))]",
      className,
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator className={cn("grid place-content-center text-current animate-field-valid")}>
      <Check className="h-4 w-4 font-bold" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
