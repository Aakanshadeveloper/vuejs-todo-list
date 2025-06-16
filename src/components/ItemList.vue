<template>
  <ul class="list-disc list-inside space-y-1">
    <li v-for="(item, i) in items" :key="i">{{ item }}</li>
  </ul>
</template>

<script setup>
defineProps({
  items: Array,
});
</script>