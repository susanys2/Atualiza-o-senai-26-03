import { Link } from 'react-router-dom' //importação de um componente!

function NotFound   (){
    return( 
        <div>
            <h1>Página não encontrada ❌</h1>
            <Link to="/">Voltar para Principal</Link> 
        </div>
    )
}

export default NotFound 