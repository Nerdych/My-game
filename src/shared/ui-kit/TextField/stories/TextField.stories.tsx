import {TextField} from '../ui/TextField';
import type {ComponentProps} from 'react';
import type {Meta, StoryObj} from '@storybook/react';

const meta = {
  title: 'ui-kit/TextField',
  component: TextField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
    },
  },
  args: {
    variant: 'default',
  },
} satisfies Meta<typeof TextField>;

export default meta;

type Story = StoryObj<typeof meta>;

const allVariants: Array<ComponentProps<typeof TextField>['variant']> = ['default', 'ghost'];

const TextFieldCommon: Story = {
  render: (props) => (
    <>
      {allVariants.map((variant) => (
        <TextField {...props} key={variant} variant={variant} />
      ))}
    </>
  ),
};

export const InputWithLabel: Story = {
  ...TextFieldCommon,
  args: {
    label: 'Pack name',
    placeholder: 'Music pack by Nerd',
  },
};

export const InputWithoutLabel: Story = {
  ...TextFieldCommon,
  args: {
    placeholder: 'Music pack by Nerd',
  },
};
