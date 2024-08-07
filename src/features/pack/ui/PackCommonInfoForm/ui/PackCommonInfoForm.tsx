import {Details} from '@shared/ui-kit/Details';
import {ContextMenu} from '@features/pack/ui/ContextMenu';
import styles from '../styles/PackCommonInfoForm.module.scss';
import {Header} from './Header';
import type {PackCommonInfoProps} from '../types';

const PackCommonInfoForm = (props: PackCommonInfoProps) => {
  const {children} = props;

  return (
    <div className={styles.root}>
      <Details header={<Header />} open>
        {children}
      </Details>
      <ContextMenu />
    </div>
  );
};

export {PackCommonInfoForm};
