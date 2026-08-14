import React, {useState, useEffect}  from 'react';
import { enderecoServidor } from '../utils';


export default function TelaLED() {
  const [statusLed, setStatusLed] = useState(`Desconhecido`);

  const buscarDados = async() => {
    try{
      const resposta = await fetch(`${enderecoServidor}/controleLed/status`)
      const dados = await resposta.json();
      setStatusLed(dados.status);

    }catch(error){
      console.log(`Erro ao buscar dados`)
    }
  }

  const enviarComando = async(comando) => {
    try{
      const resposta = await fetch(`${enderecoServidor}/controleLed/comando`,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({comando})
      })
      console.log(resposta.message)
      buscarStatus();
    }
    catch(error){
      console.log("Erro ao enviar comando!")
    }
  }

  useEffect(() => {
    buscarDados();
    const intervalo = setInterval(buscarDados, 5000);
    return () => clearInterval(intervalo);
  })

  return (
    <div className='flex flex-col items-center justify-center'>
    <h1 className="text-4xl font-bold text-black font-['Limelight']">Tela de Controle do LED via MQTT</h1>
    <p>Status: {statusLed}</p>
    <p>Ligar/Desligar</p>
    <div className='flex gap-3' >
    <button onClick={() => enviarComando('LIGADO')} className='text-xl rounded-xl bg-pink-500 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-pink-500 p-3 ' 
    >Ligar</button>
    <button onClick={() => enviarComando('DESLIGADO')}  className='text-xl rounded-xl bg-pink-800 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-pink-800 p-3' 
    >Desligar</button>
    </div>
    </div>
  );
}