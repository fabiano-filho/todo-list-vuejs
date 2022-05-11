<template>
    <Tasks/>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
}

:root {
  font-size: 62.5%;
}

body {
  font-size: 1.6rem;
  font-family: "DM sans";
}

</style>

<script>
import FormTask from "@/components/FormTask.vue"
import Tasks from "@/components/Tasks.vue"

export default {
  name: 'App',
  components: {
    FormTask,
    Tasks
  }
}
</script>

