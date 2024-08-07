import {useTranslation} from 'react-i18next';
import {CrossIcon} from '@shared/ui-kit/Icons';
import {Button} from '@shared/ui-kit/Button';
import cn from 'classnames';
import styles from '../styles/Modal.module.scss';
import {Header} from './Header';
import {Body} from './Body';
import {Footer} from './Footer';
import type {ModalComponent, ModalProps} from '../types';

const Modal: ModalComponent = <T,>(props: ModalProps<T>) => {
  const {children, close, className} = props;
  const {t} = useTranslation('ui-kit/modal');

  const closeLabel = t('closeLabel', {defaultValue: 'Close modal'});

  const closeModal = () => {
    close();
  };

  return (
    <>
      <div className={styles.backdrop} role="presentation" tabIndex={-1} aria-label={closeLabel} onClick={closeModal} />
      <div className={styles.modal} role="dialog" aria-modal>
        <Button onClick={closeModal} variant="clear" className={styles.closeButton} aria-label={closeLabel}>
          <CrossIcon width={32} height={32} />
        </Button>

        <div className={cn(styles.modalContent, className)}>{children}</div>
      </div>
    </>
  );
};

Modal.Header = Header;
Modal.Body = Body;
Modal.Footer = Footer;

export {Modal};
