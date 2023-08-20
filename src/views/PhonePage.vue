<template>
  <div class="container">
    <div class="search-bar d-flex justify-c-s-b align-items-center">
      <SearchBar class="search-bar" :searchQuery="phoneStore.searchQuery" @search="handleSearch" />
      <span v-if="filteredPhones.length">{{ filteredPhones.length }} en stock</span>
    </div>
    <div v-if="phoneStore.isLoading" class="empty d-flex flex-column align-items-center justify-content-center">
      <i class="fa-solid fa-bars-progress" style="color: var(--primary-1);"></i>
      <p>Chargement en cours...</p>
    </div>
    <ListPhoneItem
      v-else-if="filteredPhones.length > 0"
      @delete-phone="phoneStore.deletePhone"
      :phones="filteredPhones"
      />
    <div v-else class="empty d-flex flex-column align-items-center justify-content-center">
      <i class="fa-solid fa-boxes-stacked" style="color: var(--primary-1);"></i>
      <p>VIDE</p>
    </div>

  </div>
</template>

<script setup lang="ts">
import ListPhoneItem from '@/components/ListPhoneItem.vue';
import SearchBar from '@/components/SearchBar.vue'
import type { PhoneFormInterface } from '@/shared/interfaces';
import { usePhoneListStore } from '@/stores/phoneStore';
import { computed } from 'vue';

const phoneStore = usePhoneListStore()
// phoneStore.seed()
// phoneStore.fetchPhone()
const filteredPhones = computed(() => phoneStore.filteredPhoneList || []); // Fix here

function handleSearch(query: string) {
  phoneStore.setSearchQuery(query);
}

</script>

<style scoped lang="scss">

.container{
margin: 50px 20px;
  .empty {
    height: 75vh;
    i {
      font-size: 80px;
    }
    p {
      font-weight: bold;
      font-size: 30px;
    }
  }
}
</style>

