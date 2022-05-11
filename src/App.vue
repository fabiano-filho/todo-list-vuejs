<template>
    <div id="align">
      <Tasks/>
    </div>
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

#align {
  padding-inline: 3rem;
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

