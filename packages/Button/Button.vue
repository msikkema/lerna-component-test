<template>
  <div
    :class="overrideStyle || cx(primary, extendStyle)"
    v-on="$listeners"
    v-bind="$attrs"
  >
    <slot />
    {{ hasSlot ? '' : label }}
  </div>
</template>

<script>
import { css, cx } from 'emotion';

const primary = css`
  label: ro-button;
  display: inline-block;
  background-color: #FFEF5E;
  padding: 15px 25px;
  font-size: 18px;
  font-weight: 700;

  &:hover {
    cursor: pointer;
  }
`;

export default {
  name: 'Button',
  props: {
    label: {
      type: String,
      default: 'ReachOut Button'
    },
    type: {
      type: String,
      default: 'primary'
    },
    extendStyle: {
      type: String,
      default: ''
    },
    overrideStyle: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      primary
    }
  },
  methods: {
    cx
  },
  computed: {
    hasSlot() {
      return !!this.$slots.default
    }
  }
}
</script>
