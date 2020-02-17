<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card class="mx-auto" max-width="600" tile>
          <v-form @submit="onSubmit">
            <v-container>
              <v-row>
                <v-col cols="12" md="4">
                  <v-text-field v-model="title" label="Add Todo" type="text" required></v-text-field>
                </v-col>
              </v-row>
             <v-btn class="mr-4" @click="onSubmit">Add</v-btn>
            </v-container>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
import { mapActions } from "vuex";
export default {
  name: "AddTodoComponent",
  data() {
    return {
      title: ""
    };
  },
  methods: {
    ...mapActions(["addTodo"]),
    onSubmit(e) {
      e.preventDefault();
      this.addTodo(this.title);
      this.title = "";

    }
  }
};
</script>
<style scoped>
</style>

// icons from https://materialdesignicons.com/