import { useTranslation } from 'react-i18next';
import { PROJECTS } from '../../data/projects';
import ProjectDetail from './projects/ProjectDetail';

const Projects = () => {
  const { t } = useTranslation();

  return (
    <div className='relative mb-4 w-5/6 sm:w-3/4 md:w-3/5 xl:max-w-5xl'>
      <h2 className='sticky right-0 top-0 mb-4 bg-slate-100 px-4 py-4 text-xl font-bold text-slate-800 opacity-100 dark:bg-slate-900 dark:text-slate-200'>
        {t('projects.title')}
      </h2>
      <div className='text-slate-600 dark:text-slate-400'>
        <p className='mb-4'> {t('projects.motivation')}</p>
        <p className='mb-1'> {t('projects.keep_learning')}</p>
        <p className='mb-4'>{t('projects.satisfy')}</p>
      </div>
      {PROJECTS.map((project) => (
        <ProjectDetail key={project.name} project={project} />
      ))}
    </div>
  );
};

export default Projects;
