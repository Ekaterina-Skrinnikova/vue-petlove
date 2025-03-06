<script setup>
import PetBlock from '@/components/PetBlock/PetBlock.vue'
import ITitle from '../components/ITitle/ITitle.vue'
import RegistrationForm from '../components/Auth/RegisrationForm/RegisrationForm.vue'
</script>

<template>
  <div class="flex flex-col gap-[10px] items-center py-5 max-w-[335px] m-auto">
    <PetBlock src="/images/cat.png" alt="photo cat" />
    <div class="flex flex-col gap-3 items-center px-5 py-[27px] bg-white rounded-r-30 w-full">
      <ITitle>Registration</ITitle>
      <p>Thank you for your interest in our platform.</p>
      <RegistrationForm @submit="console.log" />
      <p class="text-[12px] text-[12px]/1.16 text-base-50">
        Already have an account? <a class="text-primary" href="/login">Login</a>
      </p>
    </div>
  </div>
</template>
