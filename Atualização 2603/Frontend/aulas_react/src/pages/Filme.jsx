import { Link, useParams } from 'react-router-dom' //importação de um componente!

function Filme(){
    const { nomeFilme } = useParams();

    return( 
        <div>
            <h1>Exibindo dados de: {nomeFilme}</h1>
            <img src="https://tse3.mm.bing.net/th/id/OIP.UDHW8_ZumUz62WQ6urbBFwAAAA?rs=1&pid=ImgDetMain&o=7&rm=3" />
            <br />
            <Link to="/">Voltar para página Principal</Link> 
        </div>
    )
}

export default Filme 