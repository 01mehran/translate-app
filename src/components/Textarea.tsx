import type { ChangeEvent } from 'react';
import type { ITextareaProps } from '../types/translation.types';

export default function Textarea({
  ref,
  value,
  onChange,
  isLoading = false,
  placeholder = '',
  readOnly = false,
  maxLength = 500,
  clearError,
}: ITextareaProps) {
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    clearError?.(null);

    if (newValue.length <= maxLength && !readOnly) {
      onChange?.(newValue);
    }
  };

  return (
    <textarea
      ref={ref}
      value={value}
      onChange={handleChange}
      className={`text-md placeholder:tracking-none placeholder:text-grey-100 h-full w-full resize-none border-0 pt-3 font-medium tracking-wide text-white outline-0 placeholder:text-sm placeholder:font-medium`}
      disabled={isLoading}
      placeholder={placeholder}
      readOnly={readOnly}
      maxLength={maxLength}
    />
  );
}
