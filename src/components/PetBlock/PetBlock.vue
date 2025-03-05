<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  src: { required: true, type: String },
  alt: { required: true, type: String },
})
</script>

<template>
  <img :src="props.src" :alt="props.alt" />
</template>
