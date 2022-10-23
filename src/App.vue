<script setup lang="ts">
import { ref } from 'vue';
import ProgressBar from './components/ProgressBar.vue';

const list = ref([
  {
    title: 'Initialisation du test technique',
    value: 50,
  },
  {
    title: 'Avancement de la phase de développement',
    value: 25,
  },
]);

function reset() {
  list.value.forEach((task) => {
    task.value = 0;
  });
}

function addFive() {
  list.value.forEach((task) => {
    if (task.value < 100) {
      task.value = task.value + 5 < 100 ? task.value + 5 : 100;
    }
  });
}

function addTen() {
  list.value.forEach((task) => {
    if (task.value < 100) {
      task.value = task.value + 10 < 100 ? task.value + 10 : 100;
    }
  });
}
</script>

<template>
  <div>
    <header>
      <p>Test technique WEB-ATRIO réalisé par HENRIQUES Ludwig</p>
      <p>réalisé le 23/10/2022</p>
    </header>
    <div class="list">
      <ProgressBar
        v-for="task in list"
        :key="task.title + task.value"
        :title="task.title"
        :progressValue="task.value"
      ></ProgressBar>
    </div>
    <div class="control">
      <span class="button" @click="reset">Remettre à zero les compteur</span>
      <span class="button" @click="addFive">Ajouter 5%</span>
      <span class="button" @click="addTen">Ajouter 10%</span>
    </div>
  </div>
</template>

<style scoped>
header {
  width: 450px;
  margin: 81px auto;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
}

.list {
  margin-bottom: 100px;
}

.control {
  display: flex;
  justify-content: center;
}

.button {
  background-color: #373737;
  padding: 10px 16px;
  font-size: 14px;
  font-weight: 300;
  cursor: pointer;
}

.button:not(:last-child){
  margin-right: 25px;
}
</style>
