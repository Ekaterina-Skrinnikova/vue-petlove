<script setup>
import PetBlock from '@/components/PetBlock/PetBlock.vue'
import ITitle from '../components/ITitle/ITitle.vue'
import RegistrationForm from '../components/RegisrationForm/RegisrationForm.vue'
</script>

<template>
  <div>
    <PetBlock src="" alt="photo cat" />
    <div
      class="flex flex-col gap-3 justify-center items-center max-w-[335px] px-5 py-[27px] m-auto"
    >
      <ITitle>Registration</ITitle>
      <p>Thank you for your interest in our platform.</p>
      <RegistrationForm />
      <p>Already have an account? <a href="/login">Login</a></p>
    </div>
  </div>
</template>
