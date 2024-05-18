import cn from 'classnames';
import styles from '../styles/Select.module.scss';
import {OptionsList} from './OptionsList';
import type {SelectProps} from '../types';

export function Select(props: SelectProps) {
  const {label, variant = 'default', options, placeholder, ...otherProps} = props;

  return (
    <label className={cn(styles.root, styles[variant])}>
      {label && <span className={styles.label}>{label}</span>}
      <select className={styles.select} {...otherProps}>
        {placeholder && (
          <option className={styles.placeholder} disabled selected>
            {placeholder}
          </option>
        )}

        <OptionsList options={options} />
      </select>
    </label>
  );
}
