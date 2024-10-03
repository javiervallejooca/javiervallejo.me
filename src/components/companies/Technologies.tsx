import Technology from './Technology';

interface Props {
  technologies: string[];
}

const Technologies = ({ technologies }: Props) => {
  return (
    <div className='mt-2 flex flex-wrap'>
      {technologies.map((technology) => {
        return <Technology key={technology.toString()} name={technology} />;
      })}
    </div>
  );
};

export default Technologies;
