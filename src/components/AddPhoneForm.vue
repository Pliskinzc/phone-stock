<template>
  <div class="m-20 d-flex justify-content-center">
    <div class="card d-flex flex-column" @keyup.enter="addPhone">
      <select class="mb-20" v-model="selectedModel">
        <option value="">Sélectionnez un modèle</option>
        <option v-for="model in iphoneModels" :key="model" :value="model">{{ model }}</option>
      </select>
  
      <select class="mb-20" v-model="selectedCapacity">
        <option value="">Sélectionnez une capacité de stockage</option>
        <option v-for="capacity in storageCapacities" :key="capacity" :value="capacity">{{ capacity }}</option>
      </select>
  
      <select class="mb-20" v-model="selectedColor">
        <option value="">Sélectionnez une couleur</option>
        <option v-for="color in colors" :key="color" :value="color">{{ color }}</option>
      </select>
  
      <input class="mb-20" v-model="imei" type="text" placeholder="IMEI">
      
      <div class="mt-20 d-flex justify-content-center">
        <button class="btn btn-primary" @click="addPhone">ENREGISTRER</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { iphoneModels, colors, storageCapacities } from '@/shared/data/specs';
import type { Color, IPhoneModel, StorageCapacity } from '@/shared/interfaces';
import { usePhoneListStore } from '@/stores/phoneStore';
const phoneStore = usePhoneListStore()

const selectedModel = ref('');
const selectedCapacity = ref('');
const selectedColor = ref('');
const imei = ref('');

// function addPhone() {
//   phoneStore.phones.push({
//     _id: '000',
//     imei: imei.value,
//     model: selectedModel.value as IPhoneModel,
//     storage: selectedCapacity.value as StorageCapacity,
//     color: selectedColor.value as Color,
//     editMode: false,
//   })
//     selectedModel.value = '';
//   selectedCapacity.value = '';
//   selectedColor.value = '';
//   imei.value = '';
// }

const emit = defineEmits(['add-phone']);

function addPhone() {
  emit('add-phone', {
    imei: imei.value,
    model: selectedModel.value as IPhoneModel,
    storage: selectedCapacity.value as StorageCapacity,
    color: selectedColor.value as Color
  });

  selectedModel.value = '';
  selectedCapacity.value = '';
  selectedColor.value = '';
  imei.value = '';
}

</script>

<style scoped lang="scss">
.card {
  width: 500px;
}
</style>
