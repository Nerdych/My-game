import {Input} from '../ui/Input';
import type {Meta, StoryObj} from '@storybook/react';

const meta = {
  title: 'ui-kit/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const InputWithLabel: Story = {
  args: {
    label: 'Название пака',
    placeholder: 'Музыкальный пак by Nerd',
  },
};

export const InputWithoutLabel: Story = {
  args: {
    placeholder: 'Музыкальный пак by Nerd',
  },
};
