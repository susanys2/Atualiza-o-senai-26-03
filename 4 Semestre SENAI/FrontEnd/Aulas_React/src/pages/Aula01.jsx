import { useState } from "react"

export default function Aula01() {
    const [tamanhoFonte, setTamanhoFonte] = useState("text-base")
    const [corFonte, setCorFonte] = useState("text-black")


    return (
        <div className="" >
            <h1 className="text-4xl font-bold text-White text-center" >Tailwind funcionando! </h1>
            <h2 className="text-3xl font-bold mb-4" >1. Demonstração Interativa do Tamanho das Fontes</h2>
            <div className="mb-8 p-4 bg-slate-200 rounded">
                <p className={`${tamanhoFonte} ${corFonte}`}> Texto de Exemplo: {tamanhoFonte} {corFonte}</p>
                <h3>Tamanhos do Texto</h3>
                <button
                    onClick={() => setTamanhoFonte(`text-xs`)}
                    className="px-3 py-1 bg-sky-500 text-white rounded mr-2" >
                    text-xs (12px)
                </button>
                <button
                    onClick={() => setTamanhoFonte(`text-sm`)}
                    className="px-3 py-1 bg-sky-500 text-white rounded mr-2" >
                    text-sm (14px)
                </button>
                <button
                    onClick={() => setTamanhoFonte(`text-base`)}
                    className="px-3 py-1 bg-sky-500 text-white rounded mr-2" >
                    text-base (16px)
                </button>
                <button
                    onClick={() => setTamanhoFonte(`text-2xl`)}
                    className="px-3 py-1 bg-sky-500 text-white rounded mr-2" >
                    text-2xl (24px)
                </button>
                <button
                    onClick={() => setTamanhoFonte(`text-3xl`)}
                    className="px-3 py-1 bg-sky-500 text-white rounded mr-2" >
                    text-3xl (30px)
                </button>
                <button
                    onClick={() => setTamanhoFonte(`text-4xl`)}
                    className="px-3 py-1 bg-sky-500 text-white rounded mr-2" >
                    text-4xl (35px)
                </button>
                <button
                    onClick={() => setTamanhoFonte(`text-5xl`)}
                    className="px-3 py-1 bg-sky-500 text-white rounded mr-2" >
                    text-5xl (48px)
                </button>

                <h3>Cores das Fontes</h3>
                <button
                    onClick={() => setCorFonte(`text-black`)}
                    className="px-3 py-1 bg-black text-white rounded mr-2" >
                    text-black (12px)
                </button>
                <button
                    onClick={() => setCorFonte(`text-red-500`)}
                    className="px-3 py-1 bg-red-500 text-white rounded mr-2">
                    text-red-500 (12px)
                </button>
                <button
                    onClick={() => setCorFonte(`text-purple-500`)}
                    className="px-3 py-1 bg-purple-500 text-white rounded mr-2">
                    text-purple-500 (12px)
                </button>
                <button
                    onClick={() => setCorFonte(`text-orange-400`)}
                    className="px-3 py-1 bg-orange-400 text-white rounded mr-2">
                    text-orange-400 (12px)
                </button>
                <button
                    onClick={() => setCorFonte(`text-blue-800`)}
                    className="px-3 py-1 bg-blue-800 text-white rounded mr-2">
                    text-blue-800 (12px)
                </button>
                <button
                    onClick={() => setCorFonte(`text-gray-800`)}
                    className="px-3 py-1 bg-gray-800 text-white rounded mr-2">
                    text-gray-800 (12px)
                </button>

            </div>

        </div>
    )
}
