import { Link } from 'react-router-dom' //importação de um componente!

function Sobre(){
    return( //barra somente é a nossa raiz
        <div>
            <h1>Sobre</h1>
            {/* Esse link trata-se do mesmo de: <a href='/' </a> */}
            <Link to="/">Voltar para Principal</Link> 
        </div>
    )
}

export default Sobre