import { TECHNOLOGIES } from '../../../data/tecnologies';
import { TECHNOLOGY_KEYS } from '../../../types/types';
import { TechnologyPill } from './TechnologyPill';

interface Props {
  technologyKeys: TECHNOLOGY_KEYS[];
}

export const TechnologiesUsed = ({ technologyKeys }: Props) => {
  return (
    <div className='flex flex-wrap gap-2'>
      {technologyKeys.map((key: TECHNOLOGY_KEYS) => {
        const { name, color, backgroundColor } = TECHNOLOGIES[key];
        return (
          <TechnologyPill
            key={key}
            name={name}
            color={color}
            background={backgroundColor}
          />
        );
      })}
    </div>
  );
};
