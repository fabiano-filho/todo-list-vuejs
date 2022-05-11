<template>
    <div class="container">
        <h1>Tarefas</h1>
        <FormTask @add-task="addTask" />
        <ul v-show="!!tasks" v-for="task, id in allTasks" :key="id" class="list-tasks">
            <li class="task-item"><span>{{ task }}</span><a ><i class="fa fa-trash" aria-hidden="true" @click="deleteTask(id)"></i></a></li>
        </ul>
    </div>
</template>

<style scoped>
.container {
    margin-block: 6rem;
    max-width: 60rem;
    min-width: 30rem;
    margin-inline: auto;
}

.task-item i {
    font-size: 2.4rem;
    color: rgb(248, 49, 14)
}

.task-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    margin-block: 1rem;
}

.task-item span {
    width: 100%;
    padding: 1.5rem;
    color: black;
}

.task-item a {
    padding-right: 1.5rem;
    cursor: pointer;
}

.task-item  {
    border: 1px solid cornflowerblue;
    border-radius: .6rem;
}

h1 {
    font-family: 'DM sans', sans-serif;
    font-size: 6rem;
}
</style>


<script>
import FormTask from "@/components/FormTask.vue"

export default {
    name: "Tasks",
    data(){
        return {
            tasks: []
        }
    },
    components: {
        FormTask
    },
    methods: {
        addTask(task) {
            this.tasks.push(task)
        },
        deleteTask(id) {
            this.tasks.splice(id, 1)
        }
    },
    computed: {
      allTasks() {
        return this.tasks.reverse()
    }
  }
}
</script>