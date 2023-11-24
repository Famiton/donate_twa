<script setup lang="ts">
import WebApp from '@twa-dev/sdk'
import { onMounted } from 'vue'
import SendTX from './components/SendTX.vue'

onMounted(() => {
   WebApp.ready()
   WebApp.sendData(WebApp.initData)
   WebApp.expand()
})

</script>

<template>
 <div class="navbar bg-neutral rounded-2xl w-auto m-1" >
  <div class="navbar-start text-xl text-primary"> Поблагодарить</div>
  <div class="navbar-end"><div id="button-root"></div></div>
</div>
   <SendTX/>
</template>

<style scoped>

</style>
