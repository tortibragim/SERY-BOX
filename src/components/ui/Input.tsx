import React from 'react';
import { cn } from '@/lib/utils';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  className?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className, name, ...props }, ref) => {
    return (
      <div className="w-full flex flex-col">
        {label && (
          <label htmlFor={name} className="block text-xs font-bold uppercase tracking-wider mb-1 text-primary">
            {label}
          </label>
        )}
        <input
          ref={ref}
          name={name}
          id={name}
          className={cn(
            'w-full text-base px-4 py-3 rounded-[.75rem] border border-gray-300 bg-gray-100 text-primary placeholder-gray-500',
            'focus:outline-none focus:border-black',
            'h-[50px]',
            error && 'border-red-600',
            className
          )}
          {...props}
        />
        {error && (
          <p className="text-red-600 text-xs font-bold uppercase mt-1 tracking-wider">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
