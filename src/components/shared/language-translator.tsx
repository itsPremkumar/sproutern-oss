'use client';

import { useState, useEffect, useCallback, useMemo } from 'react';
import { Globe, ChevronDown, Loader2, Search, X } from 'lucide-react';

// Extend Window interface for Google Translate
declare global {
  interface Window {
    googleTranslateElementInit?: () => void;
    google?: {
      translate: {
        TranslateElement: new (
          options: {
            pageLanguage: string;
            includedLanguages?: string;
            layout?: number;
            autoDisplay?: boolean;
          },
          elementId: string,
        ) => void;
      };
    };
  }
}

// Complete list of all Google Translate supported languages
const ALL_LANGUAGES = [
  // Priority languages (based on traffic analytics) - shown first
  {
    code: 'de',
    name: 'Deutsch',
    englishName: 'German',
    flag: '🇩🇪',
    priority: true,
  },
  {
    code: 'hi',
    name: 'हिन्दी',
    englishName: 'Hindi',
    flag: '🇮🇳',
    priority: true,
  },
  {
    code: 'zh-CN',
    name: '中文 (简体)',
    englishName: 'Chinese (Simplified)',
    flag: '🇨🇳',
    priority: true,
  },
  {
    code: 'es',
    name: 'Español',
    englishName: 'Spanish',
    flag: '🇪🇸',
    priority: true,
  },
  {
    code: 'fr',
    name: 'Français',
    englishName: 'French',
    flag: '🇫🇷',
    priority: true,
  },
  {
    code: 'ar',
    name: 'العربية',
    englishName: 'Arabic',
    flag: '🇦🇪',
    priority: true,
  },
  {
    code: 'ja',
    name: '日本語',
    englishName: 'Japanese',
    flag: '🇯🇵',
    priority: true,
  },
  {
    code: 'ko',
    name: '한국어',
    englishName: 'Korean',
    flag: '🇰🇷',
    priority: true,
  },
  {
    code: 'pt',
    name: 'Português',
    englishName: 'Portuguese',
    flag: '🇧🇷',
    priority: true,
  },
  {
    code: 'ru',
    name: 'Русский',
    englishName: 'Russian',
    flag: '🇷🇺',
    priority: true,
  },
  {
    code: 'nl',
    name: 'Nederlands',
    englishName: 'Dutch',
    flag: '🇳🇱',
    priority: true,
  },
  {
    code: 'sv',
    name: 'Svenska',
    englishName: 'Swedish',
    flag: '🇸🇪',
    priority: true,
  },
  // All other languages (A-Z by English name)
  { code: 'af', name: 'Afrikaans', englishName: 'Afrikaans', flag: '🇿🇦' },
  { code: 'sq', name: 'Shqip', englishName: 'Albanian', flag: '🇦🇱' },
  { code: 'am', name: 'አማርኛ', englishName: 'Amharic', flag: '🇪🇹' },
  { code: 'hy', name: 'Հայերdelays', englishName: 'Armenian', flag: '🇦🇲' },
  { code: 'az', name: 'Azərbaycan', englishName: 'Azerbaijani', flag: '🇦🇿' },
  { code: 'eu', name: 'Euskara', englishName: 'Basque', flag: '🏴' },
  { code: 'be', name: 'Беларуская', englishName: 'Belarusian', flag: '🇧🇾' },
  { code: 'bn', name: 'বাংলা', englishName: 'Bengali', flag: '🇧🇩' },
  { code: 'bs', name: 'Bosanski', englishName: 'Bosnian', flag: '🇧🇦' },
  { code: 'bg', name: 'Български', englishName: 'Bulgarian', flag: '🇧🇬' },
  { code: 'my', name: 'မြန်မာ', englishName: 'Burmese', flag: '🇲🇲' },
  { code: 'ca', name: 'Català', englishName: 'Catalan', flag: '🏴' },
  { code: 'ceb', name: 'Cebuano', englishName: 'Cebuano', flag: '🇵🇭' },
  { code: 'ny', name: 'Chichewa', englishName: 'Chichewa', flag: '🇲🇼' },
  {
    code: 'zh-TW',
    name: '中文 (繁體)',
    englishName: 'Chinese (Traditional)',
    flag: '🇹🇼',
  },
  { code: 'co', name: 'Corsu', englishName: 'Corsican', flag: '🇫🇷' },
  { code: 'hr', name: 'Hrvatski', englishName: 'Croatian', flag: '🇭🇷' },
  { code: 'cs', name: 'Čeština', englishName: 'Czech', flag: '🇨🇿' },
  { code: 'da', name: 'Dansk', englishName: 'Danish', flag: '🇩🇰' },
  { code: 'eo', name: 'Esperanto', englishName: 'Esperanto', flag: '🌍' },
  { code: 'et', name: 'Eesti', englishName: 'Estonian', flag: '🇪🇪' },
  { code: 'tl', name: 'Filipino', englishName: 'Filipino', flag: '🇵🇭' },
  { code: 'fi', name: 'Suomi', englishName: 'Finnish', flag: '🇫🇮' },
  { code: 'fy', name: 'Frysk', englishName: 'Frisian', flag: '🇳🇱' },
  { code: 'gl', name: 'Galego', englishName: 'Galician', flag: '🇪🇸' },
  { code: 'ka', name: 'ქართული', englishName: 'Georgian', flag: '🇬🇪' },
  { code: 'el', name: 'Ελληνικά', englishName: 'Greek', flag: '🇬🇷' },
  { code: 'gu', name: 'ગુજરાતી', englishName: 'Gujarati', flag: '🇮🇳' },
  {
    code: 'ht',
    name: 'Kreyòl Ayisyen',
    englishName: 'Haitian Creole',
    flag: '🇭🇹',
  },
  { code: 'ha', name: 'Hausa', englishName: 'Hausa', flag: '🇳🇬' },
  { code: 'haw', name: 'ʻŌlelo Hawaiʻi', englishName: 'Hawaiian', flag: '🇺🇸' },
  { code: 'he', name: 'עברית', englishName: 'Hebrew', flag: '🇮🇱' },
  { code: 'hmn', name: 'Hmong', englishName: 'Hmong', flag: '🌏' },
  { code: 'hu', name: 'Magyar', englishName: 'Hungarian', flag: '🇭🇺' },
  { code: 'is', name: 'Íslenska', englishName: 'Icelandic', flag: '🇮🇸' },
  { code: 'ig', name: 'Igbo', englishName: 'Igbo', flag: '🇳🇬' },
  {
    code: 'id',
    name: 'Bahasa Indonesia',
    englishName: 'Indonesian',
    flag: '🇮🇩',
  },
  { code: 'ga', name: 'Gaeilge', englishName: 'Irish', flag: '🇮🇪' },
  { code: 'it', name: 'Italiano', englishName: 'Italian', flag: '🇮🇹' },
  { code: 'jw', name: 'Basa Jawa', englishName: 'Javanese', flag: '🇮🇩' },
  { code: 'kn', name: 'ಕನ್ನಡ', englishName: 'Kannada', flag: '🇮🇳' },
  { code: 'kk', name: 'Қазақ', englishName: 'Kazakh', flag: '🇰🇿' },
  { code: 'km', name: 'ខ្មែរ', englishName: 'Khmer', flag: '🇰🇭' },
  { code: 'rw', name: 'Kinyarwanda', englishName: 'Kinyarwanda', flag: '🇷🇼' },
  { code: 'ku', name: 'Kurdî', englishName: 'Kurdish', flag: '🌍' },
  { code: 'ky', name: 'Кыргызча', englishName: 'Kyrgyz', flag: '🇰🇬' },
  { code: 'lo', name: 'ລາວ', englishName: 'Lao', flag: '🇱🇦' },
  { code: 'la', name: 'Latina', englishName: 'Latin', flag: '🏛️' },
  { code: 'lv', name: 'Latviešu', englishName: 'Latvian', flag: '🇱🇻' },
  { code: 'lt', name: 'Lietuvių', englishName: 'Lithuanian', flag: '🇱🇹' },
  {
    code: 'lb',
    name: 'Lëtzebuergesch',
    englishName: 'Luxembourgish',
    flag: '🇱🇺',
  },
  { code: 'mk', name: 'Македонски', englishName: 'Macedonian', flag: '🇲🇰' },
  { code: 'mg', name: 'Malagasy', englishName: 'Malagasy', flag: '🇲🇬' },
  { code: 'ms', name: 'Bahasa Melayu', englishName: 'Malay', flag: '🇲🇾' },
  { code: 'ml', name: 'മലയാളം', englishName: 'Malayalam', flag: '🇮🇳' },
  { code: 'mt', name: 'Malti', englishName: 'Maltese', flag: '🇲🇹' },
  { code: 'mi', name: 'Māori', englishName: 'Maori', flag: '🇳🇿' },
  { code: 'mr', name: 'मराठी', englishName: 'Marathi', flag: '🇮🇳' },
  { code: 'mn', name: 'Монгол', englishName: 'Mongolian', flag: '🇲🇳' },
  { code: 'ne', name: 'नेपाली', englishName: 'Nepali', flag: '🇳🇵' },
  { code: 'no', name: 'Norsk', englishName: 'Norwegian', flag: '🇳🇴' },
  { code: 'or', name: 'ଓଡ଼ିଆ', englishName: 'Odia', flag: '🇮🇳' },
  { code: 'ps', name: 'پښتو', englishName: 'Pashto', flag: '🇦🇫' },
  { code: 'fa', name: 'فارسی', englishName: 'Persian', flag: '🇮🇷' },
  { code: 'pl', name: 'Polski', englishName: 'Polish', flag: '🇵🇱' },
  { code: 'pa', name: 'ਪੰਜਾਬੀ', englishName: 'Punjabi', flag: '🇮🇳' },
  { code: 'ro', name: 'Română', englishName: 'Romanian', flag: '🇷🇴' },
  { code: 'sm', name: 'Samoan', englishName: 'Samoan', flag: '🇼🇸' },
  { code: 'gd', name: 'Gàidhlig', englishName: 'Scots Gaelic', flag: '🏴󠁧󠁢󠁳󠁣󠁴󠁿' },
  { code: 'sr', name: 'Српски', englishName: 'Serbian', flag: '🇷🇸' },
  { code: 'st', name: 'Sesotho', englishName: 'Sesotho', flag: '🇱🇸' },
  { code: 'sn', name: 'Shona', englishName: 'Shona', flag: '🇿🇼' },
  { code: 'sd', name: 'سنڌي', englishName: 'Sindhi', flag: '🇵🇰' },
  { code: 'si', name: 'සිංහල', englishName: 'Sinhala', flag: '🇱🇰' },
  { code: 'sk', name: 'Slovenčina', englishName: 'Slovak', flag: '🇸🇰' },
  { code: 'sl', name: 'Slovenščina', englishName: 'Slovenian', flag: '🇸🇮' },
  { code: 'so', name: 'Soomaali', englishName: 'Somali', flag: '🇸🇴' },
  { code: 'su', name: 'Basa Sunda', englishName: 'Sundanese', flag: '🇮🇩' },
  { code: 'sw', name: 'Kiswahili', englishName: 'Swahili', flag: '🇰🇪' },
  { code: 'tg', name: 'Тоҷикӣ', englishName: 'Tajik', flag: '🇹🇯' },
  { code: 'ta', name: 'தமிழ்', englishName: 'Tamil', flag: '🇮🇳' },
  { code: 'tt', name: 'Татарча', englishName: 'Tatar', flag: '🇷🇺' },
  { code: 'te', name: 'తెలుగు', englishName: 'Telugu', flag: '🇮🇳' },
  { code: 'th', name: 'ไทย', englishName: 'Thai', flag: '🇹🇭' },
  { code: 'tr', name: 'Türkçe', englishName: 'Turkish', flag: '🇹🇷' },
  { code: 'tk', name: 'Türkmen', englishName: 'Turkmen', flag: '🇹🇲' },
  { code: 'uk', name: 'Українська', englishName: 'Ukrainian', flag: '🇺🇦' },
  { code: 'ur', name: 'اردو', englishName: 'Urdu', flag: '🇵🇰' },
  { code: 'ug', name: 'ئۇيغۇرچە', englishName: 'Uyghur', flag: '🇨🇳' },
  { code: 'uz', name: 'Oʻzbek', englishName: 'Uzbek', flag: '🇺🇿' },
  { code: 'vi', name: 'Tiếng Việt', englishName: 'Vietnamese', flag: '🇻🇳' },
  { code: 'cy', name: 'Cymraeg', englishName: 'Welsh', flag: '🏴󠁧󠁢󠁷󠁬󠁳󠁿' },
  { code: 'xh', name: 'isiXhosa', englishName: 'Xhosa', flag: '🇿🇦' },
  { code: 'yi', name: 'ייִדיש', englishName: 'Yiddish', flag: '🌍' },
  { code: 'yo', name: 'Yorùbá', englishName: 'Yoruba', flag: '🇳🇬' },
  { code: 'zu', name: 'isiZulu', englishName: 'Zulu', flag: '🇿🇦' },
];

// Get priority languages for quick access
const PRIORITY_LANGUAGES = ALL_LANGUAGES.filter((l) => l.priority);

// All language codes for Google Translate initialization (empty = all languages)
const LANG_CODES = ''; // Empty string = all languages supported

export function LanguageTranslator() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [currentLang, setCurrentLang] = useState('en');
  const [isTranslating, setIsTranslating] = useState(false);
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Load Google Translate script on mount
  useEffect(() => {
    console.group('🌐 [LanguageTranslator] Initialization');
    console.log('Starting Google Translate initialization...');
    console.log('Timestamp:', new Date().toISOString());

    // Check if script is already loaded
    if (document.getElementById('google-translate-script')) {
      console.log('✅ Script already exists in DOM');
      setIsScriptLoaded(true);
      console.groupEnd();
      return;
    }

    // Create hidden container for Google Translate element
    let translateElement = document.getElementById('google_translate_element');
    if (!translateElement) {
      translateElement = document.createElement('div');
      translateElement.id = 'google_translate_element';
      translateElement.style.display = 'none';
      document.body.appendChild(translateElement);
      console.log('✅ Created hidden google_translate_element container');
    } else {
      console.log('ℹ️ google_translate_element already exists');
    }

    // Define the initialization callback
    window.googleTranslateElementInit = () => {
      console.group('🔧 [GoogleTranslate] Init Callback');
      console.log('googleTranslateElementInit callback triggered');
      console.log('window.google exists:', !!window.google);
      console.log(
        'window.google?.translate exists:',
        !!window.google?.translate,
      );

      if (window.google?.translate) {
        console.log('Creating TranslateElement with options:', {
          pageLanguage: 'en',
          includedLanguages: LANG_CODES,
          autoDisplay: false,
        });

        try {
          new window.google.translate.TranslateElement(
            {
              pageLanguage: 'en',
              includedLanguages: LANG_CODES,
              autoDisplay: false,
            },
            'google_translate_element',
          );
          console.log('✅ TranslateElement created successfully');
          setIsScriptLoaded(true);

          // Check if combo box is available
          setTimeout(() => {
            const combo = document.querySelector('.goog-te-combo');
            console.log('Combo box check after 500ms:', {
              exists: !!combo,
              element: combo,
            });
          }, 500);
        } catch (error) {
          console.error('❌ Error creating TranslateElement:', error);
        }
      } else {
        console.error('❌ Google Translate API not available in window');
      }
      console.groupEnd();
    };

    // Load Google Translate script
    const script = document.createElement('script');
    script.id = 'google-translate-script';
    script.src =
      'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    script.async = true;

    script.onload = () => {
      console.log('✅ Google Translate script loaded successfully');
      console.log('Waiting for googleTranslateElementInit callback...');
    };

    script.onerror = (event) => {
      console.group('❌ [GoogleTranslate] Script Load Error');
      console.error('Failed to load Google Translate script');
      console.error('Error event:', event);
      console.error('Script src:', script.src);
      console.error('Possible causes:');
      console.error('  - Network connectivity issues');
      console.error('  - CORS restrictions');
      console.error('  - Ad blocker interference');
      console.error('  - Google services blocked');
      console.groupEnd();
      setIsScriptLoaded(true); // Allow fallback to cookie-based approach
    };

    console.log('Appending script to body:', script.src);
    document.body.appendChild(script);

    // Add CSS to hide Google Translate banner/bar
    const style = document.createElement('style');
    style.id = 'google-translate-styles';
    style.textContent = `
            .goog-te-banner-frame, .skiptranslate, #goog-gt-tt, .goog-te-balloon-frame {
                display: none !important;
            }
            body { top: 0 !important; }
            .goog-text-highlight { background: none !important; box-shadow: none !important; }
        `;
    document.head.appendChild(style);
    console.log('✅ Added Google Translate hide styles');
    console.groupEnd();

    return () => {
      console.log('🧹 [LanguageTranslator] Cleanup: Removing styles');
      // Cleanup on unmount
      const styleEl = document.getElementById('google-translate-styles');
      if (styleEl) styleEl.remove();
    };
  }, []);

  // Check cookie for current language on mount
  useEffect(() => {
    console.group('🍪 [LanguageTranslator] Cookie Check');
    const value = `; ${document.cookie}`;
    console.log('All cookies:', document.cookie);

    const parts = value.split('; googtrans=');
    console.log('googtrans cookie parts:', parts);

    if (parts.length === 2) {
      const lang = parts.pop()?.split(';').shift()?.split('/').pop();
      console.log('Extracted language from cookie:', lang);
      if (lang && lang !== 'en') {
        setCurrentLang(lang);
        console.log('✅ Set current language to:', lang);
      } else {
        console.log('ℹ️ Language is English or not set');
      }
    } else {
      console.log('ℹ️ No googtrans cookie found');
    }
    console.groupEnd();
  }, []);

  // Function to trigger translation via Google Translate combo
  const triggerTranslation = useCallback((langCode: string) => {
    console.group('🔄 [LanguageTranslator] triggerTranslation');
    console.log('Attempting to trigger translation for:', langCode);
    console.log('Querying for .goog-te-combo...');
    // Find and trigger the Google Translate dropdown
    const selectElement = document.querySelector(
      '.goog-te-combo',
    ) as HTMLSelectElement;

    if (selectElement) {
      console.log('✅ Found selectElement:', selectElement);
      console.log(
        'Current options:',
        Array.from(selectElement.options).map((o) => o.value),
      );
      console.log('Setting selectElement value to:', langCode);
      selectElement.value = langCode;
      console.log('Dispatching change event...');
      selectElement.dispatchEvent(new Event('change', { bubbles: true }));
      console.log('✅ Translation triggered successfully for:', langCode);
      setCurrentLang(langCode);
      setIsTranslating(false);
      console.groupEnd();
      return true;
    }
    console.warn('❌ .goog-te-combo not found in DOM');
    console.log(
      'Checking if google_translate_element exists:',
      !!document.getElementById('google_translate_element'),
    );
    console.log(
      'Checking if script loaded:',
      !!document.getElementById('google-translate-script'),
    );
    console.groupEnd();
    return false;
  }, []);

  // Function to translate to a specific language
  const translateTo = useCallback(
    (langCode: string) => {
      console.group('🌍 [LanguageTranslator] translateTo');
      console.log('Requested language:', langCode);
      console.log('isScriptLoaded:', isScriptLoaded);
      setIsTranslating(true);
      setShowDropdown(false);

      // Set the cookie for Google Translate (for persistence)
      const hostname = window.location.hostname;
      console.log('Setting googtrans cookie for hostname:', hostname);
      document.cookie = `googtrans=/en/${langCode}; path=/`;
      console.log('Set cookie: googtrans=/en/' + langCode + '; path=/');
      if (hostname !== 'localhost' && hostname !== '127.0.0.1') {
        document.cookie = `googtrans=/en/${langCode}; path=/; domain=.${hostname}`;
        console.log('Set domain cookie for:', hostname);
      }
      console.log('Current cookies after setting:', document.cookie);

      // Try to trigger translation immediately
      console.log('Attempting immediate translation trigger...');
      if (triggerTranslation(langCode)) {
        console.log('✅ Immediate translation successful');
        console.groupEnd();
        return;
      }

      // If Google Translate combo not ready, wait and retry
      console.log('❌ Immediate trigger failed, starting retry loop...');
      let attempts = 0;
      const maxAttempts = 20;
      const interval = setInterval(() => {
        attempts++;
        console.log(`Retry attempt ${attempts}/${maxAttempts}`);
        if (triggerTranslation(langCode) || attempts >= maxAttempts) {
          clearInterval(interval);
          if (attempts >= maxAttempts) {
            console.warn(
              '⚠️ Max attempts reached, falling back to page reload',
            );
            console.log('Cookie is set, page reload should apply translation');
            console.groupEnd();
            // Fallback: reload with cookie set
            window.location.reload();
          } else {
            console.log('✅ Translation triggered on attempt:', attempts);
            console.groupEnd();
          }
        }
      }, 250);
    },
    [triggerTranslation, isScriptLoaded],
  );

  // Reset to English
  const resetToEnglish = useCallback(() => {
    console.group('🔙 [LanguageTranslator] resetToEnglish');
    console.log('Resetting translation to English...');
    setIsTranslating(true);
    setShowDropdown(false);

    const hostname = window.location.hostname;

    // Clear cookies
    console.log('Clearing googtrans cookies...');
    document.cookie =
      'googtrans=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC';
    if (hostname !== 'localhost' && hostname !== '127.0.0.1') {
      document.cookie = `googtrans=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC; domain=.${hostname}`;
    }
    console.log('Cookies after clearing:', document.cookie);

    // Try to reset via Google Translate
    console.log('Looking for .goog-te-combo to reset...');
    const selectElement = document.querySelector(
      '.goog-te-combo',
    ) as HTMLSelectElement;

    if (selectElement) {
      console.log('✅ Found selectElement, resetting to English');
      selectElement.value = 'en';
      selectElement.dispatchEvent(new Event('change', { bubbles: true }));
      setCurrentLang('en');
      setIsTranslating(false);

      // Remove translated class from body if present
      console.log('Removing translated classes from body...');
      document.body.classList.remove('translated-ltr', 'translated-rtl');

      // Reload to ensure clean state
      console.log('Scheduling reload in 100ms...');
      console.groupEnd();
      setTimeout(() => {
        window.location.reload();
      }, 100);
    } else {
      // Fallback: just reload
      console.warn('❌ .goog-te-combo not found, falling back to reload');
      console.groupEnd();
      window.location.reload();
    }
  }, []);

  const getCurrentLangName = () => {
    if (currentLang === 'en') return 'English';
    const lang = ALL_LANGUAGES.find((l) => l.code === currentLang);
    return lang ? lang.name : currentLang.toUpperCase();
  };

  const getCurrentFlag = () => {
    if (currentLang === 'en') return '🌐';
    const lang = ALL_LANGUAGES.find((l) => l.code === currentLang);
    return lang ? lang.flag : '🌐';
  };

  // Filter languages based on search query
  const filteredLanguages = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();

    if (!query) {
      // No search: show priority languages only
      return PRIORITY_LANGUAGES;
    }

    // Search: filter all languages by name, English name, or code
    return ALL_LANGUAGES.filter(
      (lang) =>
        lang.name.toLowerCase().includes(query) ||
        lang.englishName.toLowerCase().includes(query) ||
        lang.code.toLowerCase().includes(query),
    );
  }, [searchQuery]);

  // Check if showing all languages (when searching)
  const isSearching = searchQuery.trim().length > 0;

  // Clear search when dropdown closes
  useEffect(() => {
    if (!showDropdown) {
      setSearchQuery('');
    }
  }, [showDropdown]);

  return (
    <div className="relative">
      <button
        onClick={() => setShowDropdown(!showDropdown)}
        className="flex items-center gap-2 rounded-lg border border-border bg-background/80 px-3 py-2 text-sm font-medium backdrop-blur-sm transition-all hover:bg-accent hover:text-accent-foreground"
        aria-label="Select language"
        aria-expanded={showDropdown}
        aria-haspopup="listbox"
        disabled={isTranslating}
      >
        {isTranslating ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          <span className="text-base">{getCurrentFlag()}</span>
        )}
        <span className="hidden sm:inline">
          {isTranslating ? 'Loading...' : getCurrentLangName()}
        </span>
        <ChevronDown
          className={`h-4 w-4 transition-transform ${showDropdown ? 'rotate-180' : ''}`}
        />
      </button>

      {showDropdown && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => setShowDropdown(false)}
          />

          {/* Dropdown */}
          <div
            className="absolute right-0 top-full z-50 mt-2 w-72 rounded-xl border border-border bg-background/95 shadow-xl backdrop-blur-md"
            role="listbox"
            aria-label="Available languages"
          >
            {/* Search Input */}
            <div className="sticky top-0 z-10 border-b border-border bg-background/95 p-2 backdrop-blur-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search 100+ languages..."
                  className="w-full rounded-lg border border-border bg-background py-2 pl-9 pr-8 text-sm placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  autoFocus
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-2 top-1/2 -translate-y-1/2 rounded p-1 text-muted-foreground hover:bg-accent hover:text-foreground"
                    aria-label="Clear search"
                  >
                    <X className="h-3 w-3" />
                  </button>
                )}
              </div>
            </div>

            {/* Language List */}
            <div className="max-h-72 overflow-y-auto p-2">
              {/* English - Default (always show unless searching for something else) */}
              {(!isSearching ||
                'english'.includes(searchQuery.toLowerCase())) && (
                <>
                  <button
                    onClick={resetToEnglish}
                    className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm transition-colors ${
                      currentLang === 'en'
                        ? 'bg-primary/10 font-semibold text-primary'
                        : 'hover:bg-accent hover:text-accent-foreground'
                    }`}
                    role="option"
                    aria-selected={currentLang === 'en'}
                  >
                    <span className="text-lg">🇬🇧</span>
                    <span className="flex-1">English</span>
                    {currentLang === 'en' && (
                      <span className="text-xs text-muted-foreground">
                        (Default)
                      </span>
                    )}
                  </button>
                  {!isSearching && (
                    <div className="my-2 border-t border-border" />
                  )}
                </>
              )}

              {/* Section Header when not searching */}
              {!isSearching && (
                <p className="mb-1 px-3 text-xs font-medium text-muted-foreground">
                  Popular Languages
                </p>
              )}

              {/* Filtered Languages */}
              {filteredLanguages.length > 0 ? (
                filteredLanguages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => translateTo(lang.code)}
                    className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm transition-colors ${
                      currentLang === lang.code
                        ? 'bg-primary/10 font-semibold text-primary'
                        : 'hover:bg-accent hover:text-accent-foreground'
                    }`}
                    role="option"
                    aria-selected={currentLang === lang.code}
                  >
                    <span className="text-lg">{lang.flag}</span>
                    <span className="flex-1">{lang.name}</span>
                    {isSearching && (
                      <span className="text-xs text-muted-foreground">
                        {lang.englishName}
                      </span>
                    )}
                  </button>
                ))
              ) : (
                <p className="px-3 py-4 text-center text-sm text-muted-foreground">
                  No languages found for "{searchQuery}"
                </p>
              )}

              {/* Show "more languages" hint when not searching */}
              {!isSearching && (
                <p className="mt-2 px-3 py-1 text-center text-xs text-muted-foreground">
                  Type to search 100+ languages
                </p>
              )}
            </div>

            {/* Footer */}
            <div className="border-t border-border p-2">
              <p className="px-3 py-1 text-xs text-muted-foreground">
                <Globe className="mr-1 inline h-3 w-3" />
                Powered by Google Translate
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
