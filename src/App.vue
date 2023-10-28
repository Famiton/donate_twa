<script setup lang="ts">
import Toolbar from 'primevue/toolbar';
import HelloWorld from './components/SendTX.vue'
</script>

<template>

<Toolbar class="m-1">
    <template #start>
      <H3>Поблагодарить </H3> 
    </template>

    <template #end>
      <div id="button-root"></div>
    </template>
</Toolbar>
 
   <HelloWorld/>
</template>

<style scoped>

  
</style>
