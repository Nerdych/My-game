import styles from '../styles/Select.module.scss';
import type {SelectProps} from '../types';

export function OptionsList(props: Pick<SelectProps, 'options'>) {
  const {options} = props;

  return options.map(({id, text, value}) => (
    <option className={styles.option} key={id} value={value}>
      {text}
    </option>
  ));
}
