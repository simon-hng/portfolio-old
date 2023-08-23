import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { type ComponentPropsWithRef } from "react";

const styles = cva(
  "flex content-center items-center rounded-full border-2 py-2 px-4 duration-500",
  {
    variants: {
      intent: {
        primary:
          "border-solid border-subtext0 text-subtext0 hover:border-rosewater hover:fill-rosewater hover:text-rosewater",
      },
    },
    defaultVariants: {
      intent: "primary",
    },
  }
);

export interface Props
  extends VariantProps<typeof styles>,
    ComponentPropsWithRef<"button"> {
  className?: string;
  children: React.ReactNode;
  asChild?: boolean;
}

export const Button = ({ className, children, asChild, ...props }: Props) => {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp className={styles({ className })} {...props}>
      {children}
    </Comp>
  );
};
