<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import TheHeader from './components/TheHeader.vue';
import { API } from "aws-amplify";
import { createPhone } from '@/shared/services/mutations';

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
}

await addPhone()

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

