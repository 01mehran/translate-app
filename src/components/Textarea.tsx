import type { ITextareaProps } from '../types/translation.types';

export default function Textarea({
  ref,
  value,
  onChange,
  isLoading = false,
  placeholder = '',
  readOnly = false,
}: ITextareaProps) {
  return (
    <textarea
      ref={ref}
      value={value}
      onChange={(e) => {
        if (!readOnly && onChange) {
          onChange(e.target.value);
        }
      }}
      className={`text-md placeholder:tracking-none placeholder:text-grey-100 h-full w-full resize-none border-0 pt-3 font-medium tracking-wide text-white outline-0 placeholder:text-sm placeholder:font-medium`}
      disabled={isLoading}
      placeholder={placeholder}
      readOnly={readOnly}
    />
  );
}
