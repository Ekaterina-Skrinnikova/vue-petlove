<script setup>
import { defineProps } from 'vue'
const props = defineProps({
  modelValue: String,
  placeholder: String,
  type: {
    default: 'text',
    type: String,
  },
})
</script>

<template>
  <input
    class="w-full p-4 border-[1px] border-base-15 rounded-r-30 placeholder:text-base-50"
    :placeholder="props.placeholder"
    :type="props.type"
  />
</template>
