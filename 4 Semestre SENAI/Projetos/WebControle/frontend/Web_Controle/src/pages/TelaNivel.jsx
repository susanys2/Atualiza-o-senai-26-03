import React, {useState, useEffect}  from 'react';
import { enderecoServidor } from '../utils';

export default function TelaNivel(){
    const [nivelBoia, setNivelBoia] = useState("Desconhecido");

    const buscarDados = async () =>{
        try {
            const resposta = await fetch(
                `${enderecoServidor}/controleNivel/nivel`
            );
        const dados = await resposta.json();

        console.log('DADOS RECEBIDOS:', dados.nivelBoia);

        setNivelBoia(dados.nivelBoia);
        } catch(error){
            console.log(`ERRO ao buscar nivel da boia!`, error)
        }
    };
    useEffect(() => {
        buscarDados();

        const intervalo = setInterval(buscarDados, 5000);

        return () => clearInterval(intervalo);
    }, []);

    return (
        <div className='flex flex-col items-center justify-center'>
    <h1 className="text-4xl font-bold text-black font-['Limelight']">Tela de Controle do Nivel da Agua</h1>
    <p>Nivel da Boia: {nivelBoia}</p>
    </div>
    )
}