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

body, textarea {
  font-size: 1.6rem;
  font-family: "DM sans";
}

#align {
  padding-inline: 3rem;
}

.button {
    padding: 0.9rem 1.6rem;
    background-color: rgb(0, 108, 250);
    color: white;
    border: none;
    border-radius: .6rem;
    cursor: pointer;
}

.form-task {
    display: flex;
    gap: 2rem;
    justify-content: space-between;
    align-items: center;
    margin-block: 3rem;
}

.text-task {
    width: 100%;
    padding: 0.9rem 1.6rem;
    outline: none;
    border: 1px solid cornflowerblue;
    border-radius: .6rem;
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

