<script setup lang="ts">
import Toolbar from 'primevue/toolbar';
import SendTX from './components/SendTX.vue';
</script>

<template>

<Toolbar class="m-1">
    <template #start>
      <h3>Поблагодарить </h3> 
    </template>

    <template #end>
      <div id="button-root"></div>
    </template>
</Toolbar>
 
 <SendTX/>
</template>

<style scoped>

  
</style>
