interface Props {
  name: string;
  color?: string;
  background: string;
}

export const TechnologyPill = ({ name, background }: Props) => {
  return (
    <div
      className='flex rounded-full text-sm px-2 py-1 border-2 text-slate-800 dark:text-slate-200'
      style={{ borderColor: background }}
    >
      {name}
    </div>
  );
};
