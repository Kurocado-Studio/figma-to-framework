/* eslint import/no-default-export: 0 */
import { Typography, type TypographyProps } from '@kurocado-studio/ui/vue';
import type { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta<TypographyProps> = {
  title: 'Components/Typography',
  component: Typography,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: [
        'xs',
        'sm',
        'caption',
        'base',
        'lg',
        'xl',
        '2xl',
        '3xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      description: 'Semantic font-size alias',
    },
    weight: {
      control: 'select',
      options: [
        'thin',
        'extralight',
        'light',
        'normal',
        'medium',
        'semibold',
        'bold',
        'extrabold',
        'black',
      ],
      description: 'Font weight',
    },
    leading: {
      control: 'select',
      options: ['none', 'tight', 'snug', 'normal', 'relaxed', 'loose'],
      description: 'Line-height (leading)',
    },
    align: {
      control: 'select',
      options: ['left', 'center', 'right', 'justify'],
      description: 'Text alignment',
    },
    italic: {
      control: 'boolean',
      description: 'Toggle italic style',
    },
    as: {
      control: 'text',
      description: 'HTML as to render',
    },
    class: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
  args: {
    size: 'base',
    weight: 'normal',
    leading: 'normal',
    align: 'left',
    italic: false,
  },
};
export default meta;

type Story = StoryObj<TypographyProps>;

const renderTypography =
  (text: string): Story['render'] =>
  (args: unknown) => ({
    components: { Typography },
    setup() {
      return { args };
    },
    template: `<Typography v-bind="args">${text}</Typography>`,
  });

export const Heading1: Story = {
  args: {
    size: '4xl',
    weight: 'bold',
    leading: 'snug',
    as: 'h1',
  },
  render: renderTypography('Heading Level 1'),
};

export const ResponsiveDemo: Story = {
  args: {
    size: { base: 'sm', md: 'lg', lg: '4xl' },
    weight: { base: 'normal', lg: 'bold' },
    leading: 'normal',
  },
  render: renderTypography(`Resize the viewport: this text goes sm→lg→4xl.`),
};
