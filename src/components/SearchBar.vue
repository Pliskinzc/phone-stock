<template>
  <div class="search">
    <input type="text" placeholder="Rechercher" v-model="searchQuery" @input="emitSearch">
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const searchQuery = ref('');

const emit = defineEmits(['search']);

function emitSearch() {
  emit('search', searchQuery.value);
}
</script>

<style scoped lang="scss">
.search {
  // Votre style spécifique pour la barre de recherche
}
</style>