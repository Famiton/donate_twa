//import { useState } from 'react'
import { TonConnectUIProvider} from "@tonconnect/ui-react";
import {Header} from "./components/Header/Header";
import {Sendtx} from "./components/Sendtx/Sendtx";
import './App.scss'

function App() {
 
  return (
    <TonConnectUIProvider
    manifestUrl="https://famiton.github.io/donate_twa/tonconnect-manifest.json"
    language='ru'
   // uiPreferences={{ theme: 'SYSTEM' }}
    
  >
  <div className="app">
  <Header />
    <Sendtx/> 
  </div>
</TonConnectUIProvider>
  )
}

export default App
