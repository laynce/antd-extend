<template>
  <div
    :style="{width}"
    class="relative"
    @click.stop="open"
  >
    <a-input
      v-model:value="selectVal"
      :style="{width}"
      :bordered="false"
      v-bind="$attrs"
      :placeholder="placeholder"
      class="absolute top-0 left-0 z-999"  
      style="background: #fff !important;"
      @blur="blur"
    />
    <a-select
      v-model:value="selectVal"
      :options="options"
      style="width: 100%; margin-left: 0;"
      :open="isOpen"
      :list-height="320"
      v-bind="$attrs"
      @blur="blur"
      @select="blur"
    />
  </div>
</template>
<script setup>
import { ref, watch } from 'vue'
// 可输入可选择组件
const props = defineProps({
  value: {
    type: [String, Number],
    default: undefined
  },
  options: {
    type: Array,
    default: () => ([])
  },
  width: {
    default: '100%',
    type: String
  },
  placeholder: {
    default: '请输入',
    type: String
  }
})

const emit = defineEmits(['update:value'])

const selectVal = ref(props.value || undefined)

const isOpen = ref(false)

const open = () => {
  isOpen.value = !isOpen.value
}

const blur = () => {
  isOpen.value = false
}

watch(selectVal, (val) => {
  if (val !== props.value) {
    emit('update:value', val)
  }
}, { immediate: true })

watch(() => props.value, (val) => {
  if (val !== selectVal.value) {
    selectVal.value = val
  }
})

</script>
<script>
export default {
  name: 'AdInputSelect'
}
</script>
 <style scoped lang="scss">
 </style>
