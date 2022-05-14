<template>
  <div class="form-task">
      <input @keypress="keyPress($event)" v-model="task" type="text" placeholder="Digite sua tarefa" class="text-task">
      <button  @click.prevent="addTask" class="button">{{buttonText}}</button>
  </div>
</template>

<script>
export default {
  name: "FormTask",
  data(){
      return {
          task: ''
      }
  },
  props: {
      buttonText: String,
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