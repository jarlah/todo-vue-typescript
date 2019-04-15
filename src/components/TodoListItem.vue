<template>
  <li>
    <span @click="itemActions.completeTodo(todo.id)"
          v-bind:style="[todo.complete ? { textDecoration: 'line-through' } : {}]">
      {{ todo.text }}
    </span>
    <button @click="itemActions.removeTodo(todo.id)">
      X
    </button>
  </li>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import todo, { Todo } from '@/shared/TodoModule';

@Component
export default class TodoListItem extends Vue {
  @Prop() todo!: Todo;
  itemActions = {
    completeTodo: todo.completeTodo,
    removeTodo: todo.removeTodo,
  };
}
</script>
