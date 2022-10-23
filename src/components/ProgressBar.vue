<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  progressValue: {
    type: Number,
    required: true,
  },
});

const classColor = computed(() => {
  if (props.progressValue < 25) {
    return '#7160E8';
  } else if (props.progressValue < 50) {
    return '#60ADE8';
  } else if (props.progressValue < 75) {
    return '#60E8B6';
  } else {
    return '#30DB63';
  }
});
</script>

<template>
  <div class="progress-bar">
    <p class="progress-bar__title">{{ title }}</p>
    <div class="progress-bar__content">
      <p class="progress-bar__content__value">{{ progressValue }}%</p>
      <p class="progress-bar__content__bar"></p>
    </div>
  </div>
</template>

<style scoped>
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
  width: v-bind(progressValue + '%');
  background-color: v-bind(classColor);
}
</style>
