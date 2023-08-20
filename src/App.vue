<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import TheHeader from './components/TheHeader.vue';
</script>

<template>
  <div class="app-container">
    <TheHeader class="header"/>
    <div class="app-content">
      <RouterView />
    </div>
  </div>
</template>

<style scoped lang="scss">

.header {
  background: white;
}
</style>

