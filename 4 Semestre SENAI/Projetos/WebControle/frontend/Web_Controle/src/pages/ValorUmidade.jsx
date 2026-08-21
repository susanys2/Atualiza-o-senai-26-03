import React, {useState, useEffect}  from 'react';
import { enderecoServidor } from '../utils';

export default function TelaNivelUmidade(){
    const [nivelUmidade, setNivelUmidade] = useState("Desconhecido");

    const buscarDados = async () =>{
        try {
            const resposta = await fetch(
                `${enderecoServidor}/controleUmidade/nivelUmidade`
            );
        const dados = await resposta.json();

        console.log('DADOS RECEBIDOS:', dados.nivelUmidade);

        setNivelUmidade(dados.nivelUmidade);
        } catch(error){
            console.log(`ERRO ao buscar nivel da Umidade!`, error)
        }
    };
    useEffect(() => {
        buscarDados();

        const intervalo = setInterval(buscarDados, 5000);

        return () => clearInterval(intervalo);
    }, []);

    return (
        <div className='flex flex-col items-center justify-center'>
    <h1 className="text-4xl font-bold text-black font-['Limelight']">Tela de Controle do Nivel de Umidade</h1>
    <p>Umidade: {nivelUmidade}</p>
    </div>
    )
}