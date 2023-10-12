import  {useState} from 'react';
import './sendtx.scss';
import {useTonConnectUI, useTonWallet} from "@tonconnect/ui-react";



const defaultTx = {
	validUntil: Math.floor(Date.now() / 1000) + 600, // unix epoch seconds
	messages: [
		{
			address: 'UQB5VHgPGXvToUOV5b64wlyQzGgYZfPjZ6CyrSnBSgVeo_qD',
			amount: '10000000'//Toncoin in nanotons
		}
	]
};



export function Sendtx() {
	const [tx,setTx] = useState(defaultTx);
	const wallet = useTonWallet();
	const [tonConnectUi] = useTonConnectUI();
	
		
	
	
	
	const onReturnAmountInputBlur = () => {
		if (!tx.messages[0].amount) {
			setTx({
				validUntil: tx.validUntil,
				messages: [
					{
						address: tx.messages[0].address,
						amount: defaultTx.messages[0].amount
					}
				]
			}

			)
			return
		}
						
	}

	return (
		<div className="send-tx-form">
			<h3>Перевод по кнопке {tx.messages[0].amount} nanoTONs </h3>
			<label> в {tx.messages[0].address}  </label>
			<label>  
			Сколько нанотон
                <input
                    style={{ width: '200px' }}
                    value={tx.messages[0].amount}
                    onChange={e=>setTx({
						validUntil: tx.validUntil,
						messages: [
							{
								address: tx.messages[0].address,
								amount: e.target.value
							}
						]
					}
						
						)} onBlur={onReturnAmountInputBlur}
                />
				
            </label>
        			
			{wallet ? (
				
                				
				<button onClick={() => tonConnectUi.sendTransaction(tx)}>
					Перевести 
				</button>
			) : (
				<button onClick={() => tonConnectUi.connectWallet()}>Подключите кошелек для отправки</button>
			)}
		</div>
	);
}