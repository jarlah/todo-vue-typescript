<template>
  <li>
    <span @click="completeTodoItem(todo.id)"
          v-bind:style="[todo.complete ? { textDecoration: 'line-through' } : {}]">
      {{ todo.text }}
    </span>
    <button @click="removeTodoItem(todo.id)">
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

  completeTodoItem = todo.completeTodo;

  removeTodoItem = todo.removeTodo;
}
</script>
