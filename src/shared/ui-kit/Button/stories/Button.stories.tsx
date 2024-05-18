import {Button} from '../ui/Button';
import type {ComponentProps} from 'react';
import type {Meta, StoryObj} from '@storybook/react';

const meta = {
  title: 'ui-kit/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
    },
    size: {
      control: 'select',
    },
    disabled: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

const allSizes: Array<ComponentProps<typeof Button>['size']> = ['small', 'medium', 'large'];

const ButtonCommon: Story = {
  render: ({children, ...props}) => (
    <>
      {allSizes.map((size) => (
        <Button {...props} key={size} size={size}>
          {children}
        </Button>
      ))}
    </>
  ),
};

export const ButtonAccent: Story = {
  ...ButtonCommon,
  args: {
    variant: 'accent',
    children: 'Accent button',
  },
};

export const ButtonRegular: Story = {
  ...ButtonCommon,
  args: {
    variant: 'regular',
    children: 'Regular button',
  },
};

export const ButtonGhost: Story = {
  ...ButtonCommon,
  args: {
    variant: 'ghost',
    children: 'Ghost button',
  },
};
