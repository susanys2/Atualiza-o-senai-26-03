import React, { useState } from "react";
import Botao from "../components/Botao";
 
export default function Aula02(){
    const [corFundo, setCorFundo] = useState('bg-white')
    const [degrade, setDegrade] = useState('')
    const [tamanhoFundo, setTamanhoFundo] = useState('')
    const [posicaoFundo, setPosicaoFundo] = useState('')
    const [repeticaoFundo, setRepeticaoFundo] = useState('')
    return(
    <div>
        <h1>Aula02</h1>
        <h2 className="text-3xl font-bold mb-4 text-slate-800">
            2. Backgrounds, gradientes, imagens e responsividade
        </h2>

        <div className="mb-8 p-4 bg-slate-200 rounded">
            <p>Use bg-* para cores sólidas</p>
            <div className={`${corFundo} p-8`} >{corFundo}</div>
            <h3>Cores de Fundo</h3>
            <div className="flex flex-wrap gap-2 my-4" >
                <Botao funcao={setCorFundo} classe='bg-red-500'/>
                <Botao funcao={setCorFundo} classe='bg-[#036F8A]'/>
                <Botao funcao={setCorFundo} classe='bg-green-500'/>
                <Botao funcao={setCorFundo} classe='bg-purple-400'/>
                <Botao funcao={setCorFundo} classe='bg-yellow-500'/>
                <Botao funcao={setCorFundo} classe='bg-green-700'/>
                <Botao funcao={setCorFundo} classe='bg-yellow-800'/>
            </div>
            <div className={`${degrade} p-8`} >{degrade}</div>
            <h3>Gradientes Interativos (degrades)</h3>
            <div className="flex flex-wrap gap-2 my-4" >
                <Botao funcao={setCorFundo} classe='bg-gradient-to-r from-purple-400 to-pink-500'/>
                <Botao funcao={setCorFundo} classe='bg-gradient-to-l from-purple-900 via-purple-500 to-purple-400'/>
                <Botao funcao={setCorFundo} classe='bg-gradient-to-l from-green-200 via-green-400 to-green-800'/>
                <Botao funcao={setCorFundo} classe='bg-gradient-to-r from-red-100 via-red-400 to-red-600'/>
                <Botao funcao={setCorFundo} classe='bg-gradient-to-b from-yellow-400 via-red-400 to-red-600'/>
                <Botao funcao={setCorFundo} classe='bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-800'/>
            </div>

            <h3>Imagens e seus controles</h3>
            <div className={`h-80 bg-white bg-[url(https://picsum.photos/150)]
            ${tamanhoFundo} ${posicaoFundo} ${repeticaoFundo}`}>
            </div>
            <h4>Tamanho (background-size)</h4>
            <div className="flex flex-wrap gap-2 my-4" >
                <Botao funcao={setTamanhoFundo} classe='bg-auto' ></Botao>
                <Botao funcao={setTamanhoFundo} classe='bg-cover' ></Botao>
                <Botao funcao={setTamanhoFundo} classe='bg-contain' ></Botao>
            </div>

            <h4>Posição (background-position)</h4>
            <div className="flex flex-wrap gap-2 my-4" >
                <Botao funcao={setPosicaoFundo} classe='bg-left-top' ></Botao>
                <Botao funcao={setPosicaoFundo} classe='bg-center' ></Botao>
                <Botao funcao={setPosicaoFundo} classe='bg-right-bottom' ></Botao>
            </div>

            <h4>Repetição (background-repeat)</h4>
            <div className="flex flex-wrap gap-2 my-4" >
                <Botao funcao={setPosicaoFundo} classe='bg-repeat' ></Botao>
                <Botao funcao={setPosicaoFundo} classe='bg-no-repeat' ></Botao>
                <Botao funcao={setPosicaoFundo} classe='bg-repeat-x' ></Botao>
                <Botao funcao={setPosicaoFundo} classe='bg-repeat-y' ></Botao>
            </div>

        </div>
    </div>
    )
}