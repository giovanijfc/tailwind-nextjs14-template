import { ComponentProps, FC } from "react";
import { tv, VariantProps } from "tailwind-variants";

const text = tv({
  base: "base:text-neutral-textPrimary",

  variants: {
    size: {
      default: "base:text-medium base:font-regular",
      title: "base:text-large lg:text-extraLarge font-semibold",
      description: "base:text-extraSmall lg:text-medium font-medium",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

interface Props extends ComponentProps<"span">, VariantProps<typeof text> {}

export const Text: FC<Props> = ({ size, className, ...props }) => {
  return <span {...props} className={text({ size, className })} />;
};
