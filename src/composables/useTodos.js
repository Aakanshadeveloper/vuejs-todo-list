import { ref } from 'vue';

export function useTodos() {
  const todos = ref([]);

  function addTodo(text) {
    todos.value.push({ id: Date.now(), text, done: false });
  }

  function removeTodo(id) {
    todos.value = todos.value.filter(t => t.id !== id);
  }

  function toggleTodo(id) {
    const todo = todos.value.find(t => t.id === id);
    if (todo) todo.done = !todo.done;
  }

  return { todos, addTodo, removeTodo, toggleTodo };
}
