<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import TheHeader from './components/TheHeader.vue';
import { API } from "aws-amplify";
import { createPhone } from '@/shared/services/mutations';
import { listPhones } from '@/shared/services/queries';

async function addPhone() {
  const newPhone = await API.graphql({
    query: createPhone,
    variables: {
        input: {
		"imei": "486749499",
		"model": "iPhone X",
		"storage": "64GO",
		"color": "Noir",
		"editMode": false
	}
}
});
console.log('ok')
}

// List all items
async function seePhones() {
  const allPhones = await API.graphql({
      query: listPhones
  });
  console.log(listPhones.length);
}

addPhone()
seePhones()
</script>

<template>
  <amplify-authentificator>
    
  </amplify-authentificator>
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

