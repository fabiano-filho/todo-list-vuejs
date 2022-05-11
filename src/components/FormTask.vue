<template>
  <div class="form-task">
      <input @keypress="keyPress($event)" v-model="task" type="text" placeholder="Digite sua tarefa" class="text-task">
      <button  @click.prevent="addTask" class="button">Adicionar</button>
  </div>
</template>

<style scoped>
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

.button {
    padding: 0.9rem 1.6rem;
    background-color: rgb(0, 108, 250);
    color: white;
    border: none;
    border-radius: .6rem;
    cursor: pointer;
}
</style>

<script>
export default {
  name: "FormTask",
  data(){
      return {
          task: ''
      }
  },
  methods: {
      addTask(){
        if(this.task.trim() == '') {
            return
        }
        this.$emit('add-task', this.task)

        this.task = ''
      },
      keyPress(event) {
        if(event.key == 'Enter') {
            this.addTask()
        }
      }
  }
}
</script>