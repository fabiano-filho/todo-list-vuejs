<template>
  <div class="form-task">
      <input type="text" placeholder="Tarefa" class="text-task">
      <button type="submit" class="button">Adicionar</button>
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

      }
  }
}
</script>