<template>
  <div class="flex items-center justify-between p-2 border-b">
    <label class="flex items-center gap-2">
      <input type="checkbox" :checked="todo.done" @change="handleToggle" />
      <span :class="{ 'line-through text-gray-400': todo.done }">
        {{ todo.text }}
      </span>
    </label>
    <button class="text-red-500" @click="handleRemove">🗑</button>
  </div>
</template>


<script setup>
const props = defineProps(['todo']);
const emit = defineEmits(['toggle', 'remove']);

const handleToggle = () => emit('toggle', props.todo.id);
const handleRemove = () => emit('remove', props.todo.id);
</script>

