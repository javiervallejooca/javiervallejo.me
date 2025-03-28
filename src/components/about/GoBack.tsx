import { Link } from 'react-router-dom';
import { useTranslator } from '../../hook/useTranslator';

const GoBack = () => {
  const { tr } = useTranslator();

  return (
    <Link
      to='/'
      className='text-slate-600 underline underline-offset-4 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300'
    >
      {tr('back_to_home')}
    </Link>
  );
};

export default GoBack;
