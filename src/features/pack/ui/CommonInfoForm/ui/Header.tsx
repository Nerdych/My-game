import {InputFile} from '@shared/ui-kit/InputFile';
import {TextField} from '@shared/ui-kit/TextField';
import {useTranslation} from 'react-i18next';
import {useState} from 'react';
import {ContextTarget} from '@features/pack/ui/ContextMenu/ui/ContextTarget';
import {useForm} from '@shared/lib/hooks/useForm';
import {useStore} from '@app/store';
import {withStore} from '@app/store/hocs/withStore';
import styles from '../styles/Header.module.scss';
import {useUpdateGlobalState} from '../hooks/useUpdateGlobalState';
import {DifficultySelect} from './DifficultySelect';
import {TagsButton} from './TagsButton';
import {TagList} from './TagList';
import type {FormValues} from '../types';

const Header = withStore(() => {
  const {t} = useTranslation('features/pack/index');

  const {name, author, difficulty} = useStore((store) => store.pack);
  const {register, formValues} = useForm<FormValues>({name, author, difficulty});
  const [tags, setTags] = useState([]);

  useUpdateGlobalState(formValues);

  return (
    <ContextTarget>
      <section className={styles.form}>
        <fieldset className={styles.fields}>
          <div className={styles.leftSide}>
            <InputFile previewUrl={formValues.file?.previewUrl} {...register('file')} />
          </div>

          <div className={styles.rightSide}>
            <TextField placeholder={t('name', {defaultValue: 'Pack name'})} {...register('name')} />
            <TextField placeholder={t('author', {defaultValue: 'Pack author'})} {...register('author')} />
            <DifficultySelect size="l" {...register('difficulty')} />
            <TagsButton setTags={setTags} />
          </div>
        </fieldset>

        <TagList tags={tags} />
        {name}
      </section>
    </ContextTarget>
  );
});

export {Header};
