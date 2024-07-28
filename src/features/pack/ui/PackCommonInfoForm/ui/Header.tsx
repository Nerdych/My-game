import {InputFile} from '@shared/ui-kit/InputFile';
import {TextField} from '@shared/ui-kit/TextField';
import {useTranslation} from 'react-i18next';
import {useState} from 'react';
import {Form} from '@shared/ui-kit/Form';
import styles from '../styles/Header.module.scss';
import {DifficultySelect} from './DifficultySelect';

import {TagsButton} from './TagsButton';
import type {ChangeEvent} from 'react';
import type {HeaderProps} from '../types';

const Header = (props: HeaderProps) => {
  const {} = props;
  const {t} = useTranslation('features/pack/index');

  ///

  const [file, setFile] = useState<File>();

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) {
      return;
    }

    setFile(event.target.files[0]);
  };

  const fileName = file?.name;
  const previewUrl = file ? URL.createObjectURL(file) : undefined;

  ///

  return (
    <section>
      <Form className={styles.form}>
        <div className={styles.leftSide}>
          <InputFile onChange={onChange} previewUrl={previewUrl} fileName={fileName} />
        </div>

        <div className={styles.rightSide}>
          <TextField placeholder={t('packName', {defaultValue: 'Pack name'})} />
          <TextField placeholder={t('author', {defaultValue: 'Pack author'})} />
          <DifficultySelect size="l" />
          <TagsButton />
        </div>
      </Form>
    </section>
  );
};

export {Header};
