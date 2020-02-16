<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card class="mx-auto" max-width="600" tile>
          <v-subheader>Todos</v-subheader>
          <v-list-item-group color="primary">
            <v-list-item
              v-for="todo in allTodos"
              :key="todo.id"
              class="subheading mx-3"
              target="_blank"
            >
              <v-list-item-content v-on:click='onDblClick(todo)'>
                <v-list-item-title>{{ todo.title }}</v-list-item-title>
              </v-list-item-content>

              <v-list-item-action>
                <v-btn icon v-if="todo.completed">
                  <v-icon cocolor="grey lighten-1" >mdi-check</v-icon>
                </v-btn>
              </v-list-item-action>
               <v-list-item-action>
                <v-btn icon >
                  <v-icon v-on:click='deleteTodo(todo.id)' cocolor="grey lighten-1" >mdi-delete</v-icon>
                </v-btn>
              </v-list-item-action>
            </v-list-item>
          </v-list-item-group>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>



<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Todos",
  methods: {
    ...mapActions(["fetchTodos", "deleteTodo", "updateTodo"]),
    onDblClick(todo) {
      const updTodo = {
        id: todo.id,
        title: todo.title,
        completed: !todo.completed
      };

      this.updateTodo(updTodo);
    }
  },
  computed: mapGetters(["allTodos"]),
  created() {
    this.fetchTodos();
  }
};
</script>


// icons from https://materialdesignicons.com/