export type Language = 'es' | 'en';

export type Technology = {
  name: string;
  color: string;
  backgroundColor: string;
};

export type Project = {
  name: string;
  link: string;
  image: string;
  description: string;
  technologies: TECHNOLOGY_KEYS[];
};

export enum TECHNOLOGY_KEYS {
  REACT = 'react',
  PREACT = 'preact',
  JAVASCRIPT = 'javascript',
  TYPESCRIPT = 'typescript',
  MUI = 'mui',
  PHP = 'php',
  WORDPRESS = 'wordpress',
  PRESTASHOP = 'prestashop',
  CSHARP = 'csharp',
  NODEJS = 'nodejs',
  EXPRESS = 'express',
  TAILWIND = 'tailwind',
  CONTEXT_API = 'context_api',
  ZUSTAND = 'zustand',
  NETLIFY = 'netlify',
  MAILTRAP = 'mailtrap',
  MYSQL = 'mysql',
  I18N = 'i18n',
  SUPABASE = 'supabase',
}
