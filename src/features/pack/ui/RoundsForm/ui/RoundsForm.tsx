import {useStore} from '@app/store';
import {RoundDetail} from './RoundDetail';

const RoundsForm = () => {
  const roundIds = useStore((store) => store.packReducer.roundIds);
  return roundIds.map((roundId) => <RoundDetail key={roundId} roundId={roundId} />);
};

export {RoundsForm};
