"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
  glow?: boolean;
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
