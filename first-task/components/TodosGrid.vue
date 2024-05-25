<template>
  <ul class="todos-grid">
    <li v-for="todo in todos" :key="todo.id" class="todo-card">
      <span class="todo-id">#{{ todo.id }}</span>
      <span class="todo-user"
        ><img src="/images/person.svg" alt="person icon" />{{ todo.userId }}
      </span>
      <span :class="{ 'todo-title': todo.completed ? true : false }">{{
        todo.title
      }}</span>
    </li>
  </ul>
</template>

<script setup lang="ts">
import type { Todo } from "~/types";

defineProps<{
  todos: Todo[];
}>();
</script>

<style scoped lang="scss">
.todos-grid {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;

  @media only screen and (max-width: 75rem) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (max-width: 46.875rem) {
    width: 70%;
    grid-template-columns: repeat(1, 1fr);
  }
  @media only screen and (max-width: 34.375rem) {
    width: 100%;
  }
}
.todo-card {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  text-align: center;
  background: #1a1a1a;
  color: FEFEFE;
  border-radius: 1rem;
  padding: 1.25rem;
  font-size: 32px;
  font-style: bold;
}
.todo-title {
  text-decoration: line-through;
  text-decoration-color: #52057b;
  text-decoration-thickness: 5px;
}
.todo-user {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  img {
    width: 35px;
    height: 35px;
  }
}
</style>
