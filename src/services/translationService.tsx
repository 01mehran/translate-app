// Libraries;
import axios from 'axios';

// Types;
import type {
  ITranslateText,
  ITranslationResponse,
} from '../types/translation.types';

export const translateText = async ({
  text,
  sourceLang,
  targetLang,
}: ITranslateText) => {
  if (!text.trim()) {
    throw new Error('Please enter some text to translate');
  }

  try {
    const { data } = await axios.get<ITranslationResponse>(
      'https://api.mymemory.translated.net/get',
      {
        params: {
          q: text,
          langpair: `${sourceLang}|${targetLang}`,
          mt: 1,
          de: 'mehranmohamadi1311@gmail.com',
        },
        headers: {
          Accept: 'application/json',
        },
      },
    );

    if (data.responseStatus !== 200) {
      let msg = 'Translation failed';

      if (data.quotaFinished) {
        msg = 'Daily quota exceeded (limit reached)';
      } else if (data.responseDetails) {
        msg = `Server error: ${data.responseDetails}`;
      }

      throw new Error(msg);
    }

    const translated =
      data.responseData.translatedText || '(No translation available)';
    return translated;
  } catch (err) {
    let errorMessage = 'An unknown error occurred';

    if (axios.isAxiosError(err)) {
      if (err.code === 'ECONNABORTED') {
        errorMessage = 'Request timed out. Please try again.';
      } else if (err.response?.status === 429 || err.response?.status === 403) {
        errorMessage = 'Quota exceeded or access restricted.';
      } else if (err.response) {
        errorMessage = `Server error (${err.response.status})`;
      } else if (err.request) {
        errorMessage = 'Network error. Please check your connection.';
      } else {
        errorMessage = err.message || 'Unexpected error';
      }
    } else if (err instanceof Error) {
      errorMessage = err.message;
    }

    throw new Error(errorMessage);
  }
};
