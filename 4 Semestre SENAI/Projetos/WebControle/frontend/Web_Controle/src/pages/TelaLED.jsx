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

  useEffect(() => {
    buscarDados();
    const intervalo = setInterval(buscarDados, 5000);
    return () => clearInterval(intervalo);
  })

  return (
    <div >
    <h1 className="text-xl font-bold text-black">Tela de Controle do LED via MQTT</h1>
    <p>Status: {statusLed}</p>
    </div>
  );
}