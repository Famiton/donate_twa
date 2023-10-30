<script setup lang="ts">
import { ref } from 'vue'

import {TonConnectUI} from '@tonconnect/ui'
import { THEME } from '@tonconnect/ui';

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

        <div class="card">
            
            
          <div class="card-body">
                <p>
                  Если вам нравится и вы хотите поддержать, вы можете пожертвовать любое количество монет <span style="color:#60a5fa;">(nanotons)</span> на этот адрес 
                {{ tx.messages[0].address }}
                </p>
                               
                <input type="text" v-model="tx.messages[0].amount" :placeholder="defaultTx.messages[0].amount" class="input input-bordered input-primary w-full max-w-xs" /> 
                
                <div class="card-actions justify-center">
                  <button v-if="wallst"  @click="tonConnectUI.sendTransaction(tx)" class="btn btn-primary">Перевести</button>
			  				  <button v-else @click="tonConnectUI.openModal()"  class="btn btn-primary">Подключите кошелек для отправки</button>
			          </div>
          </div>
        </div>
   
  <p v-if="wallst" class="read-the-docs"> Будет переведено <label >{{ Number(tx.messages[0].amount) / 1000000000 }} TON </label></p>
</template>

<style scoped>


.read-the-docs {
  color: #888;
  text-align:center;
}
.card-body{
  overflow-wrap: break-word;
}

</style>
