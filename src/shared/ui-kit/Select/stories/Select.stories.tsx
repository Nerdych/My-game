import {Select} from '../ui/Select';
import type {ComponentProps} from 'react';
import type {Meta, StoryObj} from '@storybook/react';

const meta = {
  title: 'ui-kit/Select',
  component: Select,
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
  },
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof meta>;

const allVariants: Array<ComponentProps<typeof Select>['variant']> = ['default', 'ghost'];
const allSizes: Array<ComponentProps<typeof Select>['size']> = ['s', 'l'];

const options = [
  {id: 1, text: 'First option', value: 'first'},
  {id: 2, text: 'Second option', value: 'second'},
];

const SelectCommon: Story = {
  render: (props) => (
    <>
      {allSizes.map((size) =>
        allVariants.map((variant) => <Select {...props} size={size} key={variant} variant={variant} />)
      )}
    </>
  ),
  args: {
    options,
  },
};

export const SelectWithPlaceholder: Story = {
  ...SelectCommon,
  args: {
    value: undefined,
    placeholder: 'Choise option',
    options,
  },
};

export const SelectWithoutPlaceholder: Story = {
  ...SelectCommon,
  args: {
    defaultValue: 1,
    options,
  },
};

export const SelectWithLabel: Story = {
  ...SelectCommon,
  args: {
    label: 'Label',
    value: undefined,
    placeholder: 'Choise option',
    options,
  },
};
