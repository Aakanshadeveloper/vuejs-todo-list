<template>
  <div class="flex justify-center items-center space-x-4 mt-4">
    <BaseButton @click="count--">-</BaseButton>
    <span class="text-xl font-semibold w-8 text-center">{{ count }}</span>
    <BaseButton @click="count++">+</BaseButton>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import BaseButton from './BaseButton.vue';

const count = ref(0);
</script>
