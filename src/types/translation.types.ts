import type { Dispatch, RefObject, SetStateAction } from 'react';

export interface ITranslationResponse {
  responseData: {
    translatedText: string;
    match?: number;
  };
  responseStatus: number;
  responseDetails?: string;
  quotaFinished: boolean;
  exception_code: number | null;
}

export interface ITranslateText {
  text: string;
  sourceLang: string;
  targetLang: string;
}

export interface ILanguages {
  code: string;
  name: string;
}

export interface ITextareaProps {
  ref?: RefObject<HTMLTextAreaElement | null>;
  value: string;
  onChange?: (value: string) => void;
  isLoading?: boolean;
  placeholder?: string;
  readOnly?: boolean;
  maxLength?: number;
  clearError?: Dispatch<SetStateAction<string | null>>;
}

export interface ISelectLanguagesProps {
  onChange: (value: string) => void;
  value: string;
}

export interface IActionButtonsProps {
  handleCopy: () => void;
  disabled: boolean;
}
