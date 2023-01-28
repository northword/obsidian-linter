import en from './locale/en';
import zhCN from './locale/zh-cn';

const localeMap: { [k: string]: Partial<typeof en> } = {
  en,
  zh: zhCN,
};

const lang = window.localStorage.getItem('language');
const locale = localeMap[lang || 'en'];

export function t(str: keyof typeof en): string {
  if (!locale) {
    console.error('Error: linter locale not found', lang);
  }

  return (locale && locale[str]) || en[str];
}
