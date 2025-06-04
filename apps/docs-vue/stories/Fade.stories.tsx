/* eslint import/no-default-export: 0 */
import { FadeStories } from '@kurocado-studio/ui/stories';
import {
  type FadePropsOptions,
  Grid,
  Typography,
  useMotion,
} from '@kurocado-studio/ui/vue';
import type { StoryObj } from '@storybook/vue3';

type Story = StoryObj<FadePropsOptions>;

export default {
  ...FadeStories.meta,
  title: 'composable/useMotion/createFadeProps',
};

export const withStaggerOrder: Story = {
  ...FadeStories.withStaggerOrder,
  render: (args: FadePropsOptions) => ({
    components: { Grid, Typography },
    setup() {
      const { createStaggerContainerProps, createFadeProps } = useMotion();

      return {
        args,
        createFadeProps,
        createStaggerContainerProps,
      };
    },
    template: `
      <Grid v-bind="createStaggerContainerProps()">
        <Typography v-bind="createFadeProps({ staggerOrder: 0 })">
          Not being edited
        </Typography>
        <!-- sidesteps the root issue: animation lifecycle and motion systems don't re-run just because props change. on storybook-->
        <Typography :key="JSON.stringify(args)" v-bind="createFadeProps(args)">
          Being edited by you
        </Typography>
      </Grid>
    `,
  }),
};

export const withPlayground: Story = {
  ...FadeStories.withPlayground,
  render: (args: FadePropsOptions) => ({
    components: { Typography },
    setup() {
      const { createFadeProps } = useMotion();

      return { args, Typography, createFadeProps };
    },
    template: `
      <!-- sidesteps the root issue: animation lifecycle and motion systems don't re-run just because props change. on storybook-->
      <Typography :key="JSON.stringify(args)"  v-bind="createFadeProps(args)">Stand Alone</Typography>
    `,
  }),
};
