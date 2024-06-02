import {Details} from '@shared/ui-kit/Details';
import styles from '../styles/PackCommonInfoForm.module.scss';
import {Header} from './Header';
import type {PackCommonInfoProps} from '../types';

function PackCommonInfoForm(props: PackCommonInfoProps) {
  const {children} = props;

  return (
    <div className={styles.root}>
      <Details header={<Header />}>{children}</Details>
    </div>
  );
}

export {PackCommonInfoForm};
