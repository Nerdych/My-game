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

export const HeaderH1: Story = {
  args: {
    children: 'Header h1 level',
    as: 'h1',
  },
};

export const HeaderH2: Story = {
  args: {
    children: 'Header h2 level',
    as: 'h2',
  },
};

export const HeaderH3: Story = {
  args: {
    children: 'Header h3 level',
    as: 'h3',
  },
};

export const HeaderH4: Story = {
  args: {
    children: 'Header h4 level',
    as: 'h4',
  },
};

export const HeaderH5: Story = {
  args: {
    children: 'Header h5 level',
    as: 'h5',
  },
};

export const HeaderH6: Story = {
  args: {
    children: 'Header h6 level',
    as: 'h6',
  },
};

export const HeadingBold: Story = {
  args: {
    children: 'Header bold h1 level',
    as: 'h1',
    weight: 'bold',
  },
};

export const HeadingParagraph: Story = {
  args: {
    children: 'Paragraph',
    as: 'p',
  },
};

export const HeadingBlock: Story = {
  args: {
    children: 'Block',
    as: 'div',
  },
};
