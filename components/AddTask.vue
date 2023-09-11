<template>
  <v-form ref="add_task_form">
    <v-row>
      <v-col md="4" sm="6" xs="12">
        <v-text-field :rules="titleRules" v-model="task.title" placeholder="Title" />
        <v-text-field v-model="task.description" placeholder="Description" />
      </v-col>
      <v-col md="4" sm="6" xs="12">
        <v-text-field v-model="task.question" placeholder="Question" />
        <v-text-field v-model="task.answer" placeholder="Answer" />
      </v-col>
      <v-col md="4" sm="6" xs="12">
        <v-text-field v-model="task.toDo" placeholder="ToDo" />
        <v-btn @click="submitForm">Add Task</v-btn>
      </v-col>
    </v-row>
  </v-form>
</template>
<script setup>
import { ref } from "vue";
import useAddtask from "~/composables/use-addtask";
const titleRules = [
  (v) => !!v || "Title is required",
  (v) => (v && v.length <= 255) || "Title must be less than 255 characters",
];
const {addTask} = useAddtask()
const task = ref({
  title: "",
  description: "",
  question: "",
  answser: "",
  toDo: "",
});
const add_task_form = ref(null); 
const submitForm = async () => {
  const {valid} = await  add_task_form.value.validate();
  if(valid){
    addTask(task.value);
  }
}
</script>
