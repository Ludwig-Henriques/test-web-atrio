<script setup lang="ts">
import ProgressBar from './components/ProgressBar.vue';
</script>

<template>
  <div>
    <header>
      <p>Test technique WEB-ATRIO réalisé par HENRIQUES Ludwig</p>
      <p>réalisé le 23/10/2022</p>
    </header>
    <div class="list">
      <ProgressBar
        title="Initialisation du test technique"
        :progressValue="50"
      ></ProgressBar>
      <ProgressBar
        title="Avancement de la phase de développement"
        :progressValue="25"
      ></ProgressBar>
    </div>
    <div class="control">
      <span class="button">Remettre à zero les compteur</span>
      <span class="button">Ajouter 5%</span>
      <span class="button">Ajouter 10%</span>
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
  font-weight: 200;
}

.button:not(:last-child){
  margin-right: 25px;
}
</style>
