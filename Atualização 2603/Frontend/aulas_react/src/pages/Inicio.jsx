import { Link } from 'react-router-dom' //importação de um componente!

function Inicio(){
    return( //barra somente é a nossa raiz
        <div>
            <h1>Bem Vindo!</h1>
            {/* Esse link trata-se do mesmo de: <a href='/' </a> */}
            <Link to="/detalhes">Página de Detalhes</Link> 
            <br />
            <Link to="/">Voltar para página Principal</Link> 
        </div>
    )
}

export default Inicio