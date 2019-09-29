import { storiesOf } from '@storybook/vue';
import { css } from 'emotion';
import { lighten } from 'polished';
import Button from './Button';

const templateTheme = css`
  padding: 20px;
  font-family: "Neue Helvetica W01","Helvetica Neue",Helvetica,Roboto,Arial,sans-serif;
`;

const primaryTemplate = `
  <div class='${templateTheme}'>
    <Button />
  </div>
`;

const extendStyle = css`
  color: blue;
  font-size: 35px;
`;

const extendStylingTemplate = `
  <div class="${templateTheme}">
    <Button
      label="Extended styling - blue text and large font"
      :extendStyle="extendStyle"
    />
  </div>
`;

const slotButtonTemplate = `
  <div class="${templateTheme}">
    <Button>
      <h1>This is a header, passed into the button slot</h1>
      <p>This is a paragraph in the button slot too</p>
    </Button>
  </div>
`;

const overrideStyle = css`
  label: overridden-style;
  display: inline-block;
  background-color: #FF0080;
  border-radius: 15px;
  color: white;
  font-size: 20px;
  padding: 15px 45px;
  transition: all 0.3s;

  &:hover {
    cursor: pointer;
    background-color: ${lighten(0.2, '#FF0080')};
  }
`;

const overrideStyleTemplate = `
  <div class="${templateTheme}">
    <Button
      label="replaced styling - hot pink with hover effect!"
      :overrideStyle="overrideStyle"
    />
  </div>
`;

storiesOf('Button', module)
  .add('primary', () => ({
    components: { Button },
    template: primaryTemplate,
    data: () => ({})
  }))
  .add('extended styling', () => ({
    components: { Button },
    template: extendStylingTemplate,
    data: () => ({
      extendStyle
    })
  }))
  .add('button with slot', () => ({
    components: { Button },
    template: slotButtonTemplate
  }))
  .add('overridden styling', () => ({
    components: { Button },
    template: overrideStyleTemplate,
    data: () => ({ overrideStyle })
  }))
