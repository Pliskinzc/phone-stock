<template>
    <div class="m-20 d-flex justify-content-center">
        <div class="card d-flex flex-column">
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
                <button class="btn btn-primary" @click="updatePhone">ENREGISTRER</button>
                <button class="btn btn-secondary" @click="emit('cancel-edit-mode', false )">ANNULER</button>
            </div>
        </div>
    </div>
</template>
  
<script setup lang="ts">
import { ref } from 'vue';
import { iphoneModels, colors, storageCapacities } from '@/shared/data/specs';
import type { Color, IPhoneModel, PhoneFormInterface, StorageCapacity } from '@/shared/interfaces';
import { usePhoneListStore } from '@/stores/phoneStore';
const phoneStore = usePhoneListStore()

const props = defineProps<{
    phone: PhoneFormInterface
    initialEditMode: boolean;
}>()
const emit = defineEmits(['update-phone', 'cancel-edit-mode']);
const editMode = ref(props.initialEditMode);

const selectedModel = ref(props.phone.model || ''); // Fix here
const selectedCapacity = ref(props.phone.storage || ''); // Fix here
const selectedColor = ref(props.phone.color || ''); // Fix here
const imei = ref(props.phone.imei || ''); // Fix here

 
function updatePhone() {
    phoneStore.updatePhone(props.phone.imei as string,{
        imei: imei.value,
        model: selectedModel.value as IPhoneModel,
        storage: selectedCapacity.value as StorageCapacity,
        color: selectedColor.value as Color,
        editMode: false
    }) 
}

</script>
  
<style scoped lang="scss">
.card {
    width: 500px;
}
</style>
  