<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
         <v-subheader>Todos app</v-subheader>
      </div>

      <v-spacer></v-spacer>

    </v-app-bar>

    <v-content>

      <AddTodoComponent/>
      <Todos/>
    </v-content>
  </v-app>
</template>

<script>
import Todos from "./components/Todos.vue";
import AddTodoComponent from "./components/AddTodo.vue";

export default {
  name: 'App',

  components: {
    Todos,
    AddTodoComponent
  },

  data: () => ({
    //
  }),
};
</script>
