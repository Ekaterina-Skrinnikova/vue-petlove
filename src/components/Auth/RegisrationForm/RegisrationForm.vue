<script setup>
import IInput from '../../IInput/IInput.vue'
import IButton from '../../IButton/IButton.vue'
import { reactive } from 'vue'
import FormContainer from '../FormContainer.vue'

const emit = defineEmits(['submit'])
const userData = reactive({
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
})
</script>

<template>
  <FormContainer
    class="w-full flex flex-col gap-5 items-center mt-2 mb-3"
    @submit.prevent="emit('submit', userData)"
  >
    <div class="w-full flex flex-col gap-[10px]">
      <IInput placeholder="Name" v-model="userData.name" />
      <IInput type="email" placeholder="Email" v-model="userData.email" />
      <IInput type="password" placeholder="Password" v-model="userData.password" />
      <IInput type="password" placeholder="Confirm password" v-model="userData.confirmPassword" />
    </div>
    <IButton>REGISTRATION</IButton>
  </FormContainer>
</template>
