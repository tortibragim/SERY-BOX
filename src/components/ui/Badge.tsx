import React from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
  className?: string;
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ variant = 'primary', className, children, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center gap-2 font-bold uppercase tracking-wider px-3 py-1 rounded-full text-xs';

    const variantStyles = {
      primary: 'bg-primary text-white',
      secondary: 'bg-gray-100 text-primary',
      outline: 'bg-transparent text-primary border border-primary',
    };

    return (
      <span
        ref={ref}
        className={cn(baseStyles, variantStyles[variant], className)}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Badge.displayName = 'Badge';
