<template>
<div>
  <div class="container d-flex justify-content-center">
    <ul class="responsive-table">
      <li class="table-header mb-10">
        <div class="col col-1">Modèle</div>
        <div class="col col-2">Capacité</div>
        <div class="col col-3">Couleur</div>
        <div class="col col-4">IMEI</div>
        <div class="col col-5"></div>
      </li>
      <li  v-for="phone in phones" :key="phone.imei">
        <div class="table-row">
          <div class="col col-1 mr-20" data-label="Modèle">{{ phone.model }}</div>
          <div class="col col-2 mr-20" data-label="Capacité">{{ phone.storage }}</div>
          <div class="col col-3 mr-20" data-label="Couleur">{{ phone.color }}</div>
          <div class="col col-4 mr-20" data-label="IMEI">{{ phone.imei }}</div>
          <div class="col col-5 mr-20 d-flex" data-label="Action">
            <button class="btn btn-danger mr-20" @click="emit('deletePhone', phone.imei)">Retirer</button>
            <button class="btn btn-primary" @click="phone.editMode = true">Modifier</button>
          </div>
        </div>
        <UpdatePhoneVue v-if="phone.editMode" :phone="phone" :initialEditMode="phone.editMode" />
      </li>
    </ul>
  </div>

  

</div>
</template>

<script setup lang="ts">
import type { PhoneFormInterface, PhoneInterface } from '@/shared/interfaces';
import UpdatePhoneVue from '@/components/UpdatePhone.vue'
const props = defineProps<{
  phones: PhoneInterface[]
}>();

const emit = defineEmits<{
  (e: 'deletePhone', imei: string): void
}>();



</script>

<style scoped lang="scss">
.container {
  max-width: 2000px;
  margin: 0 auto;
  padding: 10px;
}

h2 {
  font-size: 26px;
  margin: 20px 0;
  text-align: center;
}

.small {
  font-size: 0.5em;
}

.responsive-table {
  list-style: none;
  padding: 0;
  margin: 0;

  .table-header {
    background-color: var(--primary-1);
    color: white;
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 0.03em;
    display: flex;
    justify-content: space-between;
    padding: 25px 30px;
    border-radius: 3px;
  }

  .table-row {
    background-color: #ffffff;
    box-shadow: 0px 0px 9px 0px rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: space-between;
    align-content: center;
    align-items: center;
    padding: 25px 30px;
    margin-bottom: 25px;
    border-radius: 3px;
  }

  .col {
    flex-basis: 20%;
  }

  @media all and (max-width: 767px) {
    .table-header {
      display: none;
    }

    .table-row {
      flex-wrap: wrap;
    }

    .col {
      flex-basis: 100%;
      display: flex;
      padding: 10px 0;
      align-items: center;

      &:before {
        color: #6C7A89;
        padding-right: 10px;
        content: attr(data-label);
        text-align: right;
        flex-basis: 30%;
      }
    }
  }
}
</style>