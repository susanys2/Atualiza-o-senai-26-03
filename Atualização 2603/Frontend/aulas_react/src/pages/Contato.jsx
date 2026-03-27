import { Link } from 'react-router-dom' //importação de um componente!

function Contato(){
    return( //barra somente é a nossa raiz
        <div>
            <h1>Entre em Contato</h1>
            {/* Esse link trata-se do mesmo de: <a href='/' </a> */}
            <Link to="/inicio">Página de Inicio</Link> 
        </div>
    )
}

export default Contato