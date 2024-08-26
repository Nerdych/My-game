import type {IRound} from '@entities/round';
import type {Option} from '@shared/ui-kit/Select';

type RoundTypeOption = Option<IRound['type']>;
type RoundTypeOptions = Array<RoundTypeOption>;

type RoundFormProps = IRound;

type RoundDetailProps = {
  roundId: IRound['id'];
};

export type {RoundTypeOptions, RoundFormProps, RoundDetailProps};
