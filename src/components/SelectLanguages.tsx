// Languages;
import { languages } from '../data/languages';

// Types;
import type { ISelectLanguagesProps } from '../types/translation.types';

export default function SelectLanguages({
  onChange,
  value,
}: ISelectLanguagesProps) {
  return (
    <select
      onChange={(e) => onChange(e.target.value)}
      value={value}
      className="cursor-pointer border-0 outline-0"
    >
      {languages.map((lan) => (
        <option key={lan.code} value={lan.code}>
          {lan.name}
        </option>
      ))}
    </select>
  );
}
