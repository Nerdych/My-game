import {useStore} from '@app/store';
import {RoundDetail} from './RoundDetail';

const RoundsForm = () => {
  const roundIds = useStore((store) => store.pack.roundIds);
  // return roundIds.map((roundId) => <RoundDetail key={roundId} roundId={roundId} />);
  return roundIds.map((roundId) => <></>);
};

export {RoundsForm};
