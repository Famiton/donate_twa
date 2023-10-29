<script setup lang="ts">
import { ref } from 'vue'
import Button from 'primevue/button';
import Card from 'primevue/card';
import InputText from 'primevue/inputtext';
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

        <Card class="m-1">
            <template #header>
            </template>
            
            <template #content>
                <p>
                  Если вам нравится и вы хотите поддержать, вы можете пожертвовать любое количество монет <span style="color:#60a5fa;">(nanotons)</span> на этот адрес 
                {{ tx.messages[0].address }}
                </p>
                
                
                  
                
                <InputText type="text" v-model="tx.messages[0].amount" :placeholder="defaultTx.messages[0].amount" size="small" />
                
                
            </template>

            <template #footer>
                <Button v-if="wallst"  @Click="tonConnectUI.sendTransaction(tx)" label="Перевести " class="m-1" size="small" rounded/>
			  				<Button v-else @Click="tonConnectUI.openModal()" label="Подключите кошелек для отправки" class="m-1" size="small" rounded/>
			      </template>
        </Card>
    
   
  <p v-if="wallst" class="read-the-docs"> Будет переведено <label >{{ Number(tx.messages[0].amount) / 1000000000 }} TON </label></p>
</template>

<style scoped>


.read-the-docs {
  color: #888;
  text-align:center;
}
</style>
