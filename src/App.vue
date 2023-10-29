<script setup lang="ts">
//import SendTX from './components/SendTX.vue';
</script>

<template>
<div class="header m-1" >
  <h3>Поблагодарить </h3> 
  <div id="button-root"></div>
</div>
  <SendTX/>
</template>

<style scoped>
.header{
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 10px;
  background: #1f2937;
  border: 1px solid #424b57;
  border-radius: 6px;
  gap: 0.2rem;

}

</style>
