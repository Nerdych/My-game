import {Round} from '@entities/round';
import type {Option} from '@shared/ui-kit/Select';

type RoundTypeOption = Option<Round['difficulty']>;
type RoundTypeOptions = Array<RoundTypeOption>;

type RoundFormProps = Round;

export type {RoundTypeOptions, RoundFormProps};
