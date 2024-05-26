<template>
  <div>
    <NavBar />
    <ResponsiveNavbar />
    <div class="buttons-container">
      <CustomButton
        :active-button="activeFilter === 'all'"
        @click="setFilter('all')"
        >All</CustomButton
      >
      <CustomButton
        text="Completed"
        :active-button="activeFilter === 'completed'"
        @click="setFilter('completed')"
        >Completed</CustomButton
      >
      <CustomButton
        :active-button="activeFilter === 'uncompleted'"
        @click="setFilter('uncompleted')"
        >Uncompleted</CustomButton
      >
    </div>
    <div class="loader-container">
      <LoadingAnimation v-if="state !== 'completed'" />
    </div>
    <div v-if="state === 'completed'" class="todos-container">
      <TodosGrid :todos="filteredTodos" />
      <CustomButton @click="() => showMore()">Show more</CustomButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Todo } from "../types";

type Filter = "all" | "completed" | "uncompleted";

const todos = ref<Todo[] | null>(null);
const activeFilter = ref<Filter>("all");
const state = ref<"loading" | "error" | "completed">("loading");
const page = ref(1);

const API_URL = "https://jsonplaceholder.typicode.com/todos";
const PER_PAGE = 10;

async function loadTodos() {
  try {
    state.value = "loading";

    const fetchOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await fetch(API_URL, fetchOptions);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    todos.value = Array.from(data);
    state.value = "completed";
  } catch (error) {
    if (error instanceof Error) {
      state.value = "error";
      console.error("Error fetching data:", error.message);
    }
  }
}

const setFilter = (filter: "all" | "completed" | "uncompleted") => {
  activeFilter.value = filter;
  page.value = 1;
};

const showMore = () => {
  page.value += 1;
};

const filteredTodos = computed(
  () =>
    todos.value
      ?.filter((todo: Todo) => {
        if (activeFilter.value === "all") {
          return true;
        } else if (activeFilter.value === "completed") {
          return todo.completed;
        } else if (activeFilter.value === "uncompleted") {
          return !todo.completed;
        }
      })
      ?.slice(0, PER_PAGE * page.value) ?? []
);

onMounted(() => {
  loadTodos();
});
</script>

<style scoped lang="scss">
.buttons-container {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 7rem;
  @media only screen and (max-width: 43.75rem) {
    flex-direction: column;
    width: fit-content;
    margin-inline: auto;
  }
}
.loader-container {
  display: flex;
  justify-content: center;
}

.todos-container {
  width: 90%;
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5rem;
  gap: 3rem;
}
</style>
