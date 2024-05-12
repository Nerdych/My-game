import {Heading} from '../ui/Heading';
import type {Meta, StoryObj} from '@storybook/react';

const meta = {
  title: 'ui-kit/Heading',
  component: Heading,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Heading>;

export default meta;

type Story = StoryObj<typeof meta>;

export const HeadingH1: Story = {
  args: {
    children: 'Заголовок первого уровня',
    as: 'h1',
  },
};

export const HeadingH2: Story = {
  args: {
    children: 'Заголовок второго уровня',
    as: 'h2',
  },
};

export const HeadingH3: Story = {
  args: {
    children: 'Заголовок третьего уровня',
    as: 'h3',
  },
};

export const HeadingH4: Story = {
  args: {
    children: 'Заголовок четвертого уровня',
    as: 'h4',
  },
};

export const HeadingH5: Story = {
  args: {
    children: 'Заголовок пятого уровня',
    as: 'h5',
  },
};

export const HeadingH6: Story = {
  args: {
    children: 'Заголовок шестого уровня',
    as: 'h6',
  },
};

export const HeadingBold: Story = {
  args: {
    children: 'Заголовок первого уровня',
    as: 'h1',
    weight: 'bold',
  },
};

export const HeadingParagraph: Story = {
  args: {
    children: 'Параграф',
    as: 'p',
  },
};

export const HeadingBlock: Story = {
  args: {
    children: 'Блок',
    as: 'div',
  },
};
