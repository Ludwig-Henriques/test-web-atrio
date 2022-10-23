<script setup lang="ts">
</script>

<template>
  <div>
    <header>
      <p>Test technique WEB-ATRIO réalisé par HENRIQUES Ludwig</p>
      <p>réalisé le 23/10/2022</p>
    </header>
    <div class="list">
      <div class="progress-bar">
        <p class="progress-bar__title">Initialisation du test technique</p>
        <div class="progress-bar__content">
          <p class="progress-bar__content__value">50%</p>
          <p class="progress-bar__content__bar"></p>
        </div>
      </div>
      <div class="progress-bar">
        <p class="progress-bar__title">Avancement de la phase de développement</p>
        <div class="progress-bar__content">
          <p class="progress-bar__content__value">50%</p>
          <p class="progress-bar__content__bar"></p>
        </div>
      </div>
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

.progress-bar {
  font-weight: 200;
}

.progress-bar:not(:last-child) {
  margin-bottom: 49px;
}

.progress-bar__title {
  margin-bottom: 18px;
  font-size: 14px;
}

.progress-bar__content {
  display: flex;
  align-items: center;
}

.progress-bar__content__value {
  font-size: 20px;
  margin-right: 21px;
}

.progress-bar__content__bar {
  position: relative;
  background-color: #373737;
  width: 100%;
  height: 15px;
}

.progress-bar__content__bar::after {
  position: absolute;
  content: '';
  height: 100%;
  width: 50%;
  background-color: #60ade8;
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
