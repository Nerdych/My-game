import {Input} from '@shared/ui-kit/Input';
import {Heading} from '@shared/ui-kit/Heading';
import {Details} from '../ui/Details';
import type {Meta, StoryObj} from '@storybook/react';

const meta = {
  title: 'ui-kit/Details',
  component: Details,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Details>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DetailsText: Story = {
  args: {
    header: <Heading as="h4">Заголовок</Heading>,
    children: <Heading as="p">Скрытый текст</Heading>,
  },
};

export const DetailsControl: Story = {
  args: {
    header: <Input variant="ghost" bold placeholder="Музыкальный пак by Nerd" />,
    children: <Heading as="p">Скрытый текст</Heading>,
  },
};
