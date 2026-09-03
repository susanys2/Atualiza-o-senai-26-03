import React, {useState, useEffect}  from 'react';
import { enderecoServidor } from '../utils';

export default function TelaRadarChuva(){
    const [statusChuva, setStatusChuva] = useState("Desconhecido");

    const buscarDados = async () =>{
        try {
            const resposta = await fetch(
                `${enderecoServidor}/controleChuva/statusChuva`
            );
        const dados = await resposta.json();

        console.log('DADOS RECEBIDOS:', dados.statusChuva);

        setStatusChuva(dados.statusChuva);
        } catch(error){
            console.log(`ERRO ao buscar o Status da Chuva!`, error)
        }
    };
    useEffect(() => {
        buscarDados();

        const intervalo = setInterval(buscarDados, 5000);

        return () => clearInterval(intervalo);
    }, []);

    return (
        <div className='flex flex-col items-center justify-center'>
    <h1 className="text-4xl font-bold text-black font-['Limelight']">Tela de Controle de Status da Chuva</h1>
    <p>Status Chuva: {statusChuva}</p>
    <a href='https://wokwi.com/projects/474158457369105409'>Monitor de Status da Chuva</a>
    </div>
    )
}