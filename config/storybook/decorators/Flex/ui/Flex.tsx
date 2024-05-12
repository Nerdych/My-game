import styles from '../styles/Flex.module.scss';
import type {StoryFn} from '@storybook/react';
import type {PropsWithChildren} from 'react';

type FlexProps = PropsWithChildren;

function Flex(props: FlexProps) {
  const {children} = props;
  return <div className={styles.root}>{children}</div>;
}

export const flexDecorator = (Story: StoryFn) => (
  <Flex>
    <Story />
  </Flex>
);
