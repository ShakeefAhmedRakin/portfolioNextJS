import { cva } from "class-variance-authority";

export const containerVariants = cva("", {
  variants: {
    variant: {
      outlined: "outline-primary/50 outline",
      gradient:
        "from-secondary/60 to-background shadow-primary/10 outline-primary/10 bg-gradient-to-br shadow outline",
      clear: "bg-secondary/30",
    },
  },
  defaultVariants: {
    variant: "outlined",
  },
});
