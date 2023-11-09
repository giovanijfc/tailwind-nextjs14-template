import { ComponentProps, FC } from "react";
import { tv, VariantProps } from "tailwind-variants";

const button = tv({
  base: "px-medium py-small rounded-medium text-extraSmall font-medium font-inter",

  variants: {
    variant: {
      default: "bg-primary-600 hover:bg-primary-400 base:text-white",
      ghost: "bg-transparent hover:bg-gray-50 base:text-primary-600",
    },
  },

  defaultVariants: {
    variant: "default",
  },
});

interface ButtonProps
  extends ComponentProps<"button">,
    VariantProps<typeof button> {}

export const Button: FC<ButtonProps> = ({ variant, className, ...props }) => {
  return <button {...props} className={button({ variant, className })} />;
};
