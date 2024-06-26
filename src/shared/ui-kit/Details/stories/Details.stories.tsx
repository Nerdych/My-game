import {Input} from '@shared/ui-kit/TextField';
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
    header: <Heading as="h4">Heading</Heading>,
    children: <Heading as="p">Hidden text</Heading>,
  },
};

export const DetailsControl: Story = {
  args: {
    header: <Input variant="ghost" placeholder="Music pack by Nerd" />,
    children: <Heading as="p">Hidden text</Heading>,
  },
};
