<template>
  <div class="min-h-screen bg-gray-900 text-white py-10 px-4">
    <div class="max-w-2xl mx-auto space-y-10">

      <h1 class="text-4xl font-extrabold text-center">Vue Assessment</h1>

      <!-- Item List -->
      <section>
        <h2 class="text-2xl font-semibold mb-2">1. Item List</h2>
        <ItemList :items="['Apple', 'Banana', 'Orange']" />
      </section>

      <!-- Counter -->
      <section>
        <h2 class="text-2xl font-semibold mb-2">2. Counter</h2>
        <Counter />
      </section>

      <!-- Form -->
      <section>
        <h2 class="text-2xl font-semibold mb-2">3. Form</h2>
        <FormComponent />
      </section>

      <!-- Todo List -->
      <section>
        <h2 class="text-2xl font-semibold mb-2">4. Todo List</h2>
        <form @submit.prevent="addTodo(todoInput)" class="flex gap-2 mb-4">
          <input
            v-model="todoInput"
            class="border border-gray-600 bg-gray-800 text-white px-4 py-2 rounded w-full"
            placeholder="New todo"
          />
          <BaseButton>Add</BaseButton>
        </form>

        <div class="space-y-2">
          <TodoItem
            v-for="todo in todos"
            :key="todo.id"
            :todo="todo"
            @toggle="toggleTodo"
            @remove="removeTodo"
          />
        </div>
      </section>

    </div>
  </div>
</template>
