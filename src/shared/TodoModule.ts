import {RootState} from '@/shared/store';
import {getStoreBuilder} from 'vuex-typex';

export const namespace = 'todo';

export interface Todo {
    id: number;
    text: string;
    complete: boolean;
}

export interface TodoState {
    nextTodoId: number;
    todos: Todo[];
}

const initialState: TodoState = {
    nextTodoId: 1,
    todos: [],
};

const builder = getStoreBuilder<RootState>().module(namespace, initialState);

const getTodosGetter = builder.read(function getTodos(state: TodoState) {
    return state.todos;
});

function addTodo(state: TodoState, todo: Todo) {
    state.todos = [...state.todos, { ...todo, id: state.nextTodoId }];
    state.nextTodoId = state.nextTodoId + 1;
}

function removeTodo(state: TodoState, id: number) {
    state.todos = state.todos.filter((todo) => todo.id !== id);
}

function completeTodo(state: TodoState, id: number) {
    state.todos = state.todos.map((todo) => {
        if (todo.id === id) {
            return {...todo, complete: !todo.complete };
        }
        return todo;
    });
}

const todos = {
    get todos() { return getTodosGetter(); },
    addTodo: builder.commit(addTodo),
    removeTodo: builder.commit(removeTodo),
    completeTodo: builder.commit(completeTodo),
};

export default todos;

