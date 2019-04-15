<template>
  <div>
    <label>
      <input
              type="text"
              class="input"
              v-model="newTodoText"
              v-on:keydown.enter="addNewTodo"
      >
    </label>
    <ul v-if="todoList.length">
      <TodoListItem
              v-for="todo in todoList"
              :key="todo.id"
              :todo="todo"
      />
    </ul>
    <p v-else>
      Nothing todo!
    </p>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import TodoListItem from '@/components/TodoListItem.vue';
import todo from '@/shared/TodoModule';

@Component({
  components: {
    TodoListItem,
  },
})
export default class TodoList extends Vue {
  get todoList() {
    return todo.todos;
  }

  newTodoText: string = '';

  addNewTodo() {
    const trimmedText = this.newTodoText.trim();
    if (trimmedText) {
      todo.addTodo({
        id: -1,
        text: trimmedText,
        complete: false,
      });
      this.newTodoText = '';
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../variables.scss';

  .input {
    width: 100%;
    padding: 8px 10px;
    border: 1px solid $vue-blue;
  }
</style>
