import { configure } from '@storybook/vue';

// automatically import all files ending in *.stories.js
configure(require.context('../packages', true, /\.stories\.js$/), module);
