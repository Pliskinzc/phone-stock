<template>
  <div>
      <AddPhoneForm
      />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { usePhoneListStore } from '@/stores/phoneStore';
import type { PhoneFormInterface } from '@/shared/interfaces';
import AddPhoneForm from '@/components/AddPhoneForm.vue';

const phoneStore = usePhoneListStore()


function addPhone(data: PhoneFormInterface) {
  phoneStore.addPhone(data)
}

</script>

<style scoped>

</style>
