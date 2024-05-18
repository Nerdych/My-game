import {Input} from '../ui/Input';
import type {ComponentProps} from 'react';
import type {Meta, StoryObj} from '@storybook/react';

const meta = {
  title: 'ui-kit/Input',
  component: Input,
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
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

const allVariants: Array<ComponentProps<typeof Input>['variant']> = ['default', 'ghost'];

const InputCommon: Story = {
  render: (props) => (
    <>
      {allVariants.map((variant) => (
        <Input {...props} key={variant} variant={variant} />
      ))}
    </>
  ),
};

export const InputWithLabel: Story = {
  ...InputCommon,
  args: {
    label: 'Pack name',
    placeholder: 'Music pack by Nerd',
  },
};

export const InputWithoutLabel: Story = {
  ...InputCommon,
  args: {
    placeholder: 'Music pack by Nerd',
  },
};
