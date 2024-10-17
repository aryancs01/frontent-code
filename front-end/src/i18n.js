// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      'Welcome to CourseHive': 'Welcome to CourseHive',
      'This is an online course platform': 'This is an online course platform',
      'Signup': 'Signup',
      'Username': 'Username',
      'Password': 'Password',
      'Enter your username': 'Enter your username',
      'Enter your password': 'Enter your password',
      'Sign Up': 'Sign Up',
      'Security and help': 'Security and help',
      'Login': 'Login',
      'Choose Language': 'Choose Language',
      'English': 'English',
      'Korean': '한국어 (Korean)',
      'Close': 'Close',
    },
  },
  ko: {
    translation: {
      'Welcome to CourseHive': '코스하이브에 오신 것을 환영합니다',
      'This is an online course platform': '이것은 온라인 코스 플랫폼입니다',
      'Signup': '회원가입',
      'Username': '사용자 이름',
      'Password': '비밀번호',
      'Enter your username': '사용자 이름을 입력하세요',
      'Enter your password': '비밀번호를 입력하세요',
      'Sign Up': '가입하기',
      'Security and help': '보안 및 도움말',
      'Login': '로그인',
      'Choose Language': '언어 선택',
      'English': '영어',
      'Korean': '한국어 (Korean)',
      'Close': '닫기',
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',  // Default language
    interpolation: {
      escapeValue: false,  // React already handles escaping
    },
  });

export default i18n;
