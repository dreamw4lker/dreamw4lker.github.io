import {h} from "vue";
import type {IconSet, IconProps} from "vuetify";
import vk from './VK.vue'
import leetcode from './Leetcode.vue'

const customSvgNameToComponent: any = {
  vk,
  leetcode
};

const customIcons: IconSet = {
  component: (props: IconProps) => h(customSvgNameToComponent[props.icon as string]),
};

export {customIcons /* aliases */};
