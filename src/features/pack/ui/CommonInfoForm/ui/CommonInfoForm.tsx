import {Details} from '@shared/ui-kit/Details';
import styles from '../styles/PackCommonInfoForm.module.scss';
import {Header} from './Header';
import type {CommonInfoProps} from '../types';

const CommonInfoForm = (props: CommonInfoProps) => {
  const {children} = props;

  return (
    <div className={styles.root}>
      <Details header={<Header />} open>
        {children}
      </Details>
    </div>
  );
};

export {CommonInfoForm};
