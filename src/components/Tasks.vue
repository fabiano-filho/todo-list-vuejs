<template>
    <div class="container">
        <h1>Tarefas</h1>
        <FormTask @add-task="addTask" buttonText="Adicionar" />
        <ul v-if="!!tasks" v-for="task, id in allTasks" :key="id" class="list-tasks">
            <li class="task-item"><span :class="{'finished': task.concluded == true }">{{ task.name }}</span>
                <div class="changed-buttons">
                    <i class="fa fa-check icon i-check" @click.prevent="finishedTask(id)"></i>
                    <i class="fa fa-edit icon i-edit"  @click.prevent="editTask(id)" ></i>
                    <i class="fa fa-trash icon i-trash" @click="deleteTask(id)"></i>
                </div>             
            </li>
        </ul>
        <div id="modal" class="modal-wrapper">
        <div class="modal">
            <div class="wrapper">
                <textarea v-model="task" id="textarea"></textarea>
                <div class="container-buttons">
                    <button @click="closeModal" class="button cancel">Cancelar</button>
                    <button @click="addTask(task)" class="button salve">Salvar</button>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
import FormTask from "@/components/FormTask.vue"

export default {
    name: "Tasks",
    data(){
        return {
            tasks: [],
            active: false,
            task: '',
            editedTask: null,
            statusFinished: null
        }
    },
    components: {
        FormTask,
    },
    methods: {
        addTask(task) {
            
            if(this.editedTask === null) {
                this.tasks.unshift({name: task, concluded: false})
            }else {
                this.tasks[this.editedTask].concluded = false;
                this.tasks[this.editedTask].name = this.task
                this.editedTask = null;
                this.closeModal()
            }

        },
        deleteTask(id) {
            this.tasks.splice(id, 1)
        },
        editTask(id){
            this.task = this.tasks[id].name
            let modal = document.getElementById('modal')
            modal.style.visibility = 'visible';
            modal.style.opacity = '1';

            this.editedTask = id;
        },
        closeModal() {
            let modal = document.getElementById('modal')
            modal.style.visibility = 'hidden';
            modal.style.opacity = '0';
        },
        finishedTask(id) {
            this.tasks[id].concluded = true;
        }
    },
    created() {
        if(localStorage.length > 0) {
            this.tasks = JSON.parse(localStorage.getItem('tasks'))
        }
    },
    updated() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks))
    },
    computed: {
        allTasks() {
            return this.tasks
        }
    }
}
</script>

<style scoped>
.container {
    margin-block: 6rem;
    max-width: 60rem;
    min-width: 30rem;
    margin-inline: auto;
}

.changed-buttons{
    display: flex;
    align-items: center;
    gap: 1.2rem;
    justify-content: space-around;
    padding-right: .5rem;
    
}

.finished {
    text-decoration: line-through;
}

.icon {
    font-size: 2.4rem;
    cursor: pointer;
}

.task-item .i-trash {
    
    color: #FF3019;
}

.task-item .i-check {
    color: #27FF0D;
}

.task-item .i-edit {
    color: #000;
    padding-top: .3rem;
}

.task-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    margin-block: 1rem;
    padding-right: .5rem;
}

.task-item span {
    width: 100%;
    padding: 1.5rem;
    color: black;
}

.task-item a {
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

.modal-wrapper {
    visibility: hidden;
    opacity: 0;
    position: fixed;
    display: flex;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    background-color: rgba(4, 9, 17, .5);
}

.modal-wrapper .modal{
    background: #fff;
    width: 60rem;
    height: 20rem;
    margin-top: translateY(-50%);
    margin: auto;
    padding: 2rem;
    border-radius: .6rem;
}

.modal-wrapper .form-task {
    flex-direction: column;
    align-items: start;
}

.i-x {
    padding: ;
}
.button.cancel {
    background-color: #FF3019;
}

.wrapper {
    display: flex;
    flex-direction: column;
    gap: 3rem;
}

.container-buttons {
    display: flex;
    justify-content: center;
    gap: 14rem;
    align-items: center;
}
#textarea {
    min-width: 100%;
    max-width: 100%;
    min-height: 10rem;
    max-height: 10rem;
    outline: none;
    padding: 0.5rem;
}
</style>


