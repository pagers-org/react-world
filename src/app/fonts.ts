import {
  Merriweather_Sans,
  Source_Sans_3,
  Source_Serif_4,
  Titillium_Web,
} from 'next/font/google';

// Titillium Web
export const titilliumWeb = Titillium_Web({
  weight: ['700'],
  style: ['normal'],
  subsets: ['latin', 'latin-ext'],
  variable: '--font-titillium-web',
});

// Source Serif 4 - latest version
export const sourceSerif4 = Source_Serif_4({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: [
    'latin',
    'latin-ext',
    'vietnamese',
    'greek',
    'cyrillic',
    'cyrillic-ext',
  ],
  variable: '--font-source-serif-4',
});

// Merriweather Sans
export const merriweatherSans = Merriweather_Sans({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin', 'latin-ext', 'vietnamese', 'cyrillic-ext'],
  variable: '--font-merriweather-sans',
});

// Source Sans 3 - the family's major version
export const sourceSansPro = Source_Sans_3({
  weight: ['300', '400', '600', '700'],
  style: ['normal', 'italic'],
  subsets: [
    'latin',
    'latin-ext',
    'vietnamese',
    'greek',
    'greek-ext',
    'cyrillic',
    'cyrillic-ext',
  ],
  variable: '--font-source-sans-pro',
});
