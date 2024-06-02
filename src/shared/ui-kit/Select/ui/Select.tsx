import cn from 'classnames';
import styles from '../styles/Select.module.scss';
import {OptionsList} from './OptionsList';
import type {SelectProps} from '../types';

export function Select(props: SelectProps) {
  const {label, size = 's', variant = 'default', options, placeholder, ...otherProps} = props;

  return (
    <label className={cn(styles.root, styles[variant], styles[size])}>
      {label && <span className={styles.label}>{label}</span>}

      <select className={styles.select} defaultValue={placeholder && 'placeholder'} {...otherProps}>
        {placeholder && (
          <option value="placeholder" className={styles.placeholder} disabled>
            {placeholder}
          </option>
        )}

        <OptionsList options={options} />
      </select>
    </label>
  );
}
