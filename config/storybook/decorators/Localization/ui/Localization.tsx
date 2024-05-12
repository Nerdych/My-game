import {useEffect, type PropsWithChildren} from 'react';
import {useTranslation} from 'react-i18next';
import type {StoryContext, StoryFn} from '@storybook/react';

type LocalizationProps = PropsWithChildren & StoryContext;

export function Localization(props: LocalizationProps) {
  const {children, globals} = props;
  const {locale} = globals;

  const {i18n} = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [locale]);

  return children;
}

export const localizationDecorator = (Story: StoryFn, context: StoryContext) => (
  <Localization {...context}>
    <Story />
  </Localization>
);
