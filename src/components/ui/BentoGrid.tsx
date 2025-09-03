"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

type BentoGridProps = {
  className?: string;
  children: React.ReactNode;
  gap?: "sm" | "md" | "lg";
};

type BentoCardProps = {
  className?: string;
  title?: string;
  description?: string;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "default" | "glass" | "dark" | "gold";
  hoverEffect?: boolean;
};

export function BentoGrid({
  className,
  children,
  gap = "md",
}: BentoGridProps) {
  const gapClass = {
    sm: "gap-4",
    md: "gap-6",
    lg: "gap-8",
  }[gap];

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-3 auto-rows-[minmax(180px,auto)]",
        gapClass,
        className
      )}
    >
      {children}
    </div>
  );
}

export function BentoCard({
  className,
  title,
  description,
  header,
  icon,
  children,
  size = "md",
  variant = "default",
  hoverEffect = true,
}: BentoCardProps) {
  // Size classes for grid span
  const sizeClasses = {
    sm: "md:col-span-1 md:row-span-1",
    md: "md:col-span-1 md:row-span-2",
    lg: "md:col-span-2 md:row-span-1",
    xl: "md:col-span-2 md:row-span-2",
  }[size];

  // Variant classes for styling
  const variantClasses = {
    default: "bg-neutral-100 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100",
    glass: "glass-morphism text-neutral-100",
    dark: "bg-neutral-950 text-neutral-100",
    gold: "bg-gradient-to-br from-gold-100 to-gold-300 text-neutral-950",
  }[variant];

  // Hover effect animation
  const hoverAnimation = hoverEffect
    ? "transition-all duration-300 hover:shadow-gold-lg hover:-translate-y-1"
    : "";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={cn(
        "rounded-3xl overflow-hidden p-4 md:p-6",
        sizeClasses,
        variantClasses,
        hoverAnimation,
        className
      )}
    >
      {header && <div className="mb-4">{header}</div>}
      
      <div className="flex flex-col h-full justify-between">
        <div>
          {icon && (
            <div className="mb-4 opacity-80">
              {icon}
            </div>
          )}
          
          {title && (
            <h3 className="heading-3 mb-2 mt-2">
              {title}
            </h3>
          )}
          
          {description && (
            <p className="body text-neutral-700 dark:text-neutral-300 mb-4">
              {description}
            </p>
          )}
        </div>
        
        {children && <div className="mt-auto">{children}</div>}
      </div>
    </motion.div>
  );
}