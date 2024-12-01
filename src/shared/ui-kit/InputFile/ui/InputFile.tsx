import {useTranslation} from 'react-i18next';
import {EditIcon, UploadIcon} from '@shared/ui-kit/Icons';
import {guards} from '@shared/lib/guards';
import styles from '../styles/InputFile.module.scss';
import type {InputFileProps} from '../types';

const InputFile = (props: InputFileProps) => {
  const {fileName, previewUrl, value, ...otherProps} = props;
  const {t} = useTranslation('ui-kit/input-file');

  const hasValue = guards.defined(value);
  const hasPreview = guards.defined(previewUrl);
  const text = fileName ?? t('uploadFile', {defaultValue: 'Upload file'});
  const icon = hasValue ? <EditIcon /> : <UploadIcon />;

  return (
    <label className={styles.root}>
      {hasPreview && <img className={styles.preview} src={previewUrl} alt={t('loadedImage', {defaultValue: 'Loaded image'})} />}
      <span className={styles.icon}>{icon}</span>
      <span className={styles.text}>{text}</span>
      <input className={styles.input} type="file" value={value} {...otherProps} />
    </label>
  );
};

export {InputFile};
