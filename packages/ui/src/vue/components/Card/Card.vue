<template>
  <div :class="mergedClass" v-bind="$attrs"><slot></slot></div>
</template>

<script lang="ts" setup>
import { get } from 'lodash-es';
import { twMerge } from 'tailwind-merge';
import { computed, useAttrs } from 'vue';

import { cardComponentWrapperClasses } from '../../../lib';

const cardPropsAttributes = defineProps();

const mergedClass = computed(() => {
  return twMerge(
    cardComponentWrapperClasses(),
    get(cardPropsAttributes, ['class']) as string | undefined,
  );
});
</script>
