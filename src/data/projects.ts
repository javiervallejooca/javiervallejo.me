import { Project, TECHNOLOGY_KEYS } from '../types/types';

import cuentapalabras from '../img/projects/cuentapalabras.png';
import javiervallejo_com from '../img/projects/javiervallejo_com.png';
import javiervallejo_me from '../img/projects/javiervallejo_me.png';
import redireccion from '../img/projects/redireccion.png';
import tareas_1 from '../img/projects/tareas_1.png';
import tareas_2 from '../img/projects/tareas_2.png';
import beernes from '../img/projects/beernes.png';

export const PROJECTS: Project[] = [
  {
    name: 'Cuenta palabras',
    link: 'https://cuentapalabras.com',
    image: cuentapalabras,
    description: 'projects.description_cuentapalabras',
    technologies: [
      TECHNOLOGY_KEYS.REACT,
      TECHNOLOGY_KEYS.TYPESCRIPT,
      TECHNOLOGY_KEYS.TAILWIND,
      TECHNOLOGY_KEYS.NETLIFY,
    ],
  },
  {
    name: 'La redirección 301',
    link: 'https://laredireccion301.com',
    image: redireccion,
    description: 'projects.description_laredireccion',
    technologies: [
      TECHNOLOGY_KEYS.REACT,
      TECHNOLOGY_KEYS.TYPESCRIPT,
      TECHNOLOGY_KEYS.TAILWIND,
      TECHNOLOGY_KEYS.CONTEXT_API,
    ],
  },
  {
    name: 'Tareas repetitivas // Frontend',
    link: 'https://tareasrepetitivas.com',
    image: tareas_1,
    description: 'projects.description_tareasrepetitivas_frontend',
    technologies: [
      TECHNOLOGY_KEYS.REACT,
      TECHNOLOGY_KEYS.TYPESCRIPT,
      TECHNOLOGY_KEYS.MUI,
      TECHNOLOGY_KEYS.ZUSTAND,
    ],
  },
  {
    name: 'Tareas repetitivas // Backend',
    link: 'https://tareasrepetitivas.com',
    image: tareas_2,
    description: 'projects.description_tareasrepetitivas_backend',
    technologies: [
      TECHNOLOGY_KEYS.NODEJS,
      TECHNOLOGY_KEYS.EXPRESS,
      TECHNOLOGY_KEYS.JAVASCRIPT,
      TECHNOLOGY_KEYS.MYSQL,
      TECHNOLOGY_KEYS.MAILTRAP,
    ],
  },
  {
    name: 'Web a modo de CV',
    link: 'https://javiervallejo.me',
    image: javiervallejo_me,
    description: 'projects.description_javiervallejo_me',
    technologies: [
      TECHNOLOGY_KEYS.REACT,
      TECHNOLOGY_KEYS.TYPESCRIPT,
      TECHNOLOGY_KEYS.TAILWIND,
      TECHNOLOGY_KEYS.NETLIFY,
      TECHNOLOGY_KEYS.I18N,
    ],
  },
  {
    name: 'Web con tutoriales',
    link: 'https://javiervallejo.com',
    image: javiervallejo_com,
    description: 'projects.description_javiervallejo_com',
    technologies: [
      TECHNOLOGY_KEYS.WORDPRESS,
      TECHNOLOGY_KEYS.PHP,
      TECHNOLOGY_KEYS.JAVASCRIPT,
    ],
  },
  {
    name: 'Web Beernes',
    link: 'https://beernes.netlify.app',
    image: beernes,
    description: 'projects.description_beernes_es',
    technologies: [TECHNOLOGY_KEYS.REACT, TECHNOLOGY_KEYS.TYPESCRIPT],
  },
];
