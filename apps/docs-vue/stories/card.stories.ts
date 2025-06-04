/* eslint import/no-default-export: 0 */
import { Card, CardBody, type CardProps, Input } from '@kurocado-studio/ui/vue';
import { fn } from '@storybook/test';
import type { Meta, StoryObj } from '@storybook/vue3';

const meta = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {},
  args: {
    onClick: fn(),
  },
} satisfies Meta<CardProps>;

export default meta;

type Story = StoryObj<CardProps>;

const template = `
<Card v-bind="args">
  <CardBody>
    <p class="text-sm">Card Body</p>
  </CardBody>
</Card>
`;

export const Default: Story = {
  render: (args: CardProps) => ({
    components: { Card, CardBody, Input },
    setup() {
      return { args };
    },
    template,
  }),
  parameters: {
    docs: {
      source: {
        code: `<template>${template}</template>`,
      },
    },
  },
};
