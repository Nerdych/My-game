import {Details} from '@shared/ui-kit/Details';
import {memo, type FC} from 'react';
import {CategoriesForm} from '../../CategoriesForm';
import {useGetRound} from '../hooks/useGetRound';
import {RoundForm} from './RoundForm';
import type {RoundDetailProps} from '../types';

const RoundDetailComponent: FC<RoundDetailProps> = (props) => {
  const {roundId} = props;
  const round = useGetRound(roundId);

  if (!round) {
    return null;
  }

  console.log('test - // render', roundId);

  return (
    <Details key={roundId} open header={<RoundForm {...round} />}>
      {round.categoryIds.length ? <CategoriesForm categoryIds={round.categoryIds} /> : null}
    </Details>
  );
};

const RoundDetail = memo(RoundDetailComponent);

export {RoundDetail};
