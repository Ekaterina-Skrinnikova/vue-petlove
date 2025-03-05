<script setup>
import IInput from '../IInput/IInput.vue'
import IButton from './IButton/IButton.vue'
</script>

<template>
  <form class="w-full flex flex-col gap-5 items-center mt-2 mb-3">
    <div class="w-full flex flex-col gap-[10px]">
      <IInput placeholder="Name" />
      <IInput type="email" placeholder="Email" />
      <IInput type="password" placeholder="Password" />
      <IInput type="password" placeholder="Confirm password" />
    </div>
    <IButton>REGISTRATION</IButton>
  </form>
</template>
