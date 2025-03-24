import { useTranslation } from 'react-i18next';
import { Project } from '../../../types/types';
import { TechnologiesUsed } from './TechnologiesUsed';
import { HiOutlineExternalLink } from 'react-icons/hi';

const removeHttps = (url: string): string => {
  return url.split('://')[1] || url; // Devuelve la segunda parte del split o el original si no hay '://'
};

interface Props {
  project: Project;
}
const ProjectDetail = ({ project }: Props) => {
  const { name, link, image, description, technologies } = project;

  const { t } = useTranslation();

  return (
    <div className='flex flex-col lg:flex-row rounded border border-slate-200 bg-slate-200 p-4 shadow dark:border-slate-800 dark:bg-slate-800 gap-2 mb-4'>
      <div className='w-full lg:w-1/4 justify-center items-center h-full'>
        <a className='pointer' href={link} target='_blank'>
          <img
            src={image}
            alt='Imagen de la proyecto'
            className='shadow-md bg-yellow-800'
            decoding='async'
            loading='lazy'
          />
        </a>
      </div>
      <div className='w-full lg:w-3/4 flex'>
        <div className='text-slate-600 dark:text-slate-400'>
          <div className='flex gap-2 align-middle'>
            <h3 className='font-extrabold text-xl text-slate-800 dark:text-slate-200'>
              {name}
            </h3>
            <a
              className='flex text-xl items-center gap-1 text-slate-600 underline underline-offset-4 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300'
              href={link}
              target='_blank'
            >
              <HiOutlineExternalLink />
            </a>
          </div>
          <a
            className='italic font-light flex text-sm items-center gap-1 text-slate-600 underline underline-offset-4 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300'
            href={link}
            target='_blank'
          >
            {removeHttps(link)}
          </a>
          <p className='my-4'>{t(description)}</p>
          <TechnologiesUsed technologyKeys={technologies} />
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
