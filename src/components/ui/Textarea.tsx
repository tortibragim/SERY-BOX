import React from 'react';
import { cn } from '@/lib/utils';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  className?: string;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, className, name, rows = 4, ...props }, ref) => {
    return (
      <div className="w-full flex flex-col">
        {label && (
          <label
            htmlFor={name}
            className="block text-xs font-bold uppercase tracking-wider mb-1 text-primary"
          >
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          name={name}
          id={name}
          rows={rows}
          className={cn(
            'w-full text-base px-4 py-3 rounded-[.75rem] border border-gray-300 bg-gray-100 text-primary placeholder-gray-500 resize-none',
            'focus:outline-none focus:border-black',
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

Textarea.displayName = 'Textarea';
