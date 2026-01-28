"use client";

import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

interface CardProps extends Omit<HTMLMotionProps<"div">, "children"> {
  hover?: boolean;
  glow?: boolean;
  children?: React.ReactNode;
}

export default function Card({
  className,
  hover = true,
  glow = false,
  children,
  ...props
}: CardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -5 } : undefined}
      transition={{ duration: 0.2 }}
      className={cn(
        "bg-brand-navy border border-brand-slate/30 rounded-xl p-6",
        hover && "hover:border-brand-accent/50 transition-all duration-300",
        glow && "shadow-lg shadow-brand-accent/10",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
}
