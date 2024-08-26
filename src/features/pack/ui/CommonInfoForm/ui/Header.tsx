import {InputFile} from '@shared/ui-kit/InputFile';
import {TextField} from '@shared/ui-kit/TextField';
import {useTranslation} from 'react-i18next';
import {useState} from 'react';
import {ContextTarget} from '@features/pack/ui/ContextMenu/ui/ContextTarget';
import styles from '../styles/Header.module.scss';
import {DifficultySelect} from './DifficultySelect';

import {TagsButton} from './TagsButton';
import {TagList} from './TagList';
import type {ChangeEvent} from 'react';

const Header = () => {
  const {t} = useTranslation('features/pack/index');

  ///

  const [tags, setTags] = useState([]);
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
    <ContextTarget>
      <section className={styles.form}>
        <fieldset className={styles.fields}>
          <div className={styles.leftSide}>
            <InputFile onChange={onChange} previewUrl={previewUrl} fileName={fileName} />
          </div>

          <div className={styles.rightSide}>
            <TextField placeholder={t('packName', {defaultValue: 'Pack name'})} />
            <TextField placeholder={t('author', {defaultValue: 'Pack author'})} />
            <DifficultySelect size="l" />
            <TagsButton setTags={setTags} />
          </div>
        </fieldset>

        <TagList tags={tags} />
      </section>
    </ContextTarget>
  );
};

export {Header};
