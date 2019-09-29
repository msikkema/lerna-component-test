import { storiesOf } from '@storybook/vue';
import Button from './Button';

const template = `
  <Button />
`;

storiesOf('Button', module)
  .add('normal', () => ({
    components: { Button },
    template,
    data: () => ({
      values: [
        'foo@bar.baz'
      ]
    })
  }));
