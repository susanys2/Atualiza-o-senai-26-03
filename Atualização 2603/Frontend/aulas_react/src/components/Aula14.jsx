import { estilos } from "../style/Estilos";
import { Link, useNavigate } from 'react-router-dom';

const Aula14 = () => {
    const navigate = useNavigate();

    return (
        <div style={estilos.cardAula}>
            <h2>Aula 14 - React Router - Navegação em React</h2>
            <h3>Biblioteca que permite criar rotas em React</h3>
            <hr />
            {/* Criação de Links para entrar nas páginas */}
            <h3>Navegação com Links do React Routes</h3>
            <Link to='/'>Página Principal</Link>
            <br />
            <Link to='/sobre'>Página Sobre</Link>
            <br />
            <Link to='/sesisenai'>Página Inexistente</Link>
            <br />
            <h3>Navegação com programação utilizando o useNavigate</h3>
            <button onClick={() => navigate('/sobre')}>Sobre</button>
            <hr />
            <h3>Rota dinamica com useParams</h3> {/* Criação de tela de perfil */}
            <button onClick={() => navigate('/perfil/Ricardo')}>Perfil do Ricardo</button>
            <br />
            <button onClick={() => navigate('/perfil/Susany')}>Perfil da Susany</button>

            <h3>Rotas adicionais - Atividade</h3>
            <button onClick={() => navigate('./inicio')}>Acessar página de inicio 📍</button>
            <br />
            <button onClick={() => navigate('./filme/Lilo e Stitch')}>Acessar página de Filmes 📸 </button>



        </div>
    )
}

export default Aula14