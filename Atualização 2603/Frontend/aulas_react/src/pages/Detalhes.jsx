import { Link } from 'react-router-dom' //importação de um componente!

function Detalhes(){
    return( //barra somente é a nossa raiz
        <div>
            <h1>Mais informações</h1>
            {/* Esse link trata-se do mesmo de: <a href='/' </a> */}
            <Link to="/contato">Página de Contato</Link> 
        </div>
    )
}

export default Detalhes