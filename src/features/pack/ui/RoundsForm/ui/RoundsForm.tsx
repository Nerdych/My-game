import {Details} from '@shared/ui-kit/Details';
import {RoundForm} from './RoundForm';
import {rounds} from '../mocks/rounds';
import {CategoriesForm} from '@features/pack/ui/CategoriesForm';

const RoundsForm = () => {
  ///

  const roundsJSX = rounds.map((round) => (
    <Details open header={<RoundForm {...round} />}>
      {round.categories.length ? <CategoriesForm categories={round.categories} /> : null}
    </Details>
  ));

  ///
  return roundsJSX;
};

export {RoundsForm};
