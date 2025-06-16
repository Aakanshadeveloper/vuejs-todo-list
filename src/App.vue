<template>
  <div class="p-6 max-w-lg mx-auto text-white">
    <h1 class="text-3xl font-bold mb-6 text-center">Vue Assessment</h1>

    <section>
      <h2 class="text-xl font-semibold mt-6 mb-2">1. Item List</h2>
      <ItemList :items="['Apple', 'Banana', 'Orange']" />
    </section>

    <section class="text-center mt-6">
      <h2 class="text-xl font-semibold mb-2">2. Counter</h2>
      <Counter />
    </section>

    <section>
      <h2 class="text-xl font-semibold mt-6 mb-2">3. Form</h2>
      <!-- Inline form instead of importing Home.vue -->
      <form class="space-y-3">
        <input type="text" placeholder="Your Name" class="w-full p-2 border rounded text-black" />
        <input type="email" placeholder="Email" class="w-full p-2 border rounded text-black" />
        <BaseButton>Submit</BaseButton>
      </form>
    </section>

    <section>
      <h2 class="text-xl font-semibold mt-6 mb-2">4. Todo List</h2>
      <form @submit.prevent="addTodo(todoInput)" class="flex gap-2 mb-4">
        <input v-model="todoInput" class="border p-2 flex-1 text-black rounded" placeholder="New todo" />
        <BaseButton>Add</BaseButton>
      </form>
      <TodoItem
        v-for="todo in todos"
        :key="todo.id"
        :todo="todo"
        @toggle="toggleTodo"
        @remove="removeTodo"
      />
    </section>
  </div>
</template>

<script setup>
import ItemList from './components/ItemList.vue';
import Counter from './components/Counter.vue';
import BaseButton from './components/BaseButton.vue';
import TodoItem from './components/TodoItem.vue';
import { useTodos } from './composables/useTodos';
import { ref } from 'vue';

const todoInput = ref('');
const { todos, addTodo, removeTodo, toggleTodo } = useTodos();
</script>
