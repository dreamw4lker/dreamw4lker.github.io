import {h} from "vue"
import type {IconProps, IconSet} from "vuetify"

import vk from './x-set/VK.vue'
import leetcode from './x-set/Leetcode.vue'

//Все новые иконки следует добавлять в эту константу
const mapNameToComponent: any = {
  vk,
  leetcode
};

const systemIcons: IconSet = {
  component: (props: IconProps) =>
    h(props.tag, [h(mapNameToComponent[props.icon as string], {class: 'v-icon__svg'})]),
}

export {systemIcons}
