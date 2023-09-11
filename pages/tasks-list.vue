<template>
  <v-container fluid>
   
    <AddTask>
    </AddTask>
    <v-data-table item-value="name" :headers="headers" :items="tasks" :items-per-page="5"
    
    
    >
    </v-data-table>
  </v-container>
</template>
<script setup >
const tasks = useTasks();
const { fetchTasks } = useFetchtasks();
const headers = [
  {
    title: 'Title',
    key: 'title'
  },
  {
    title: 'Description',
    key: 'description',
  },
  {
    title: 'Question',
    key: 'question',
  },
  {
    title: 'Answer',
    key: 'answer',
  },
  {
    title: 'ToDo',
    key: 'toDo',
  },
];
onMounted(async () => {
  tasks.value = await fetchTasks();
});

</script>



