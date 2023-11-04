<script setup lang="ts">
import { ref } from 'vue'

import {TonConnectUI} from '@tonconnect/ui'
import { THEME } from '@tonconnect/ui';
import WebApp from '@twa-dev/sdk'


const defaultTx = {
	validUntil: Math.floor(Date.now() / 1000) + 600, // unix epoch seconds
	messages: [
		{
			address: 'UQB5VHgPGXvToUOV5b64wlyQzGgYZfPjZ6CyrSnBSgVeo_qD',
			amount: '10000000'//Toncoin in nanotons
		}
	]
};

const tx = ref(defaultTx)
const wallst = ref()
const user = WebApp.initDataUnsafe.user?.first_name

const tonConnectUI = new TonConnectUI({ 
  manifestUrl: "https://famiton.github.io/donate_twa/tonconnect-manifest.json",
  buttonRootId: 'button-root',
  language: 'ru',
  actionsConfiguration:{
    twaReturnUrl: 'https://t.me/home_16_2_bot/donate' 
  },
  uiPreferences: {
        theme: THEME.DARK,        
        colorsSet: {
            [THEME.DARK]: {
                connectButton: {
                    background: '#60a5fa'
                }
            }
        }
    }
});
        

tonConnectUI.onStatusChange(wallet => { 
  wallst.value = wallet
 // tx.value.validUntil = Math.floor(Date.now() / 1000) + 300

 });
</script>

<template> 

        <div class="card bg-neutral my-1">
            
            
          <div class="card-body ">
                <p class="break-words">
                  Если вам нравится и вы хотите поддержать, вы можете пожертвовать любое количество монет <span class="text-primary">(nanotons)</span> на этот адрес 
                {{ tx.messages[0].address }}
                </p>
                               
                <input type="text" v-model="tx.messages[0].amount" :placeholder="defaultTx.messages[0].amount" class="input input-bordered input-primary input-sm w-full max-w-xs" /> 
                
                <div class="card-actions justify-center">
                  <button v-if="wallst"  @click="tonConnectUI.sendTransaction(tx)" class="btn btn-primary btn-sm">Перевести</button>
			  				  <button v-else @click="tonConnectUI.openModal()"  class="btn btn-primary btn-sm ">Подключите кошелёк для отправки</button>
			          </div>
          </div>
        </div>
   
  <p v-if="wallst" class="text-center text-lime-400 ">{{user}}, будет переведено <label>{{ Number(tx.messages[0].amount) / 1000000000 }} TON </label></p>
</template>

<style scoped>


</style>
