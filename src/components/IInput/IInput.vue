<script setup>
import { defineProps } from 'vue'

defineProps({
  modelValue: String,
  placeholder: String,
  type: {
    default: 'text',
    type: String,
  },
})

const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <input
    class="w-full p-4 border-[1px] border-base-15 rounded-r-30 placeholder:text-base-50"
    v-bind="$props"
    :value="modelValue"
    @input="emit('update:modelValue', $event.target.value)"
  />
</template>
