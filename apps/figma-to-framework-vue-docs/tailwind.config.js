import preset from '@kurocado-studio/figma-to-framework-ui/tailwind.preset';

export const content = [
  './src/**/*.{ts,tsx}',
  './stories/**/*.{ts,tsx}',
  './node_modules/@kurocado-studio/figma-to-framework-ui/dist/**/*.js',
];
export const presets = [preset];
