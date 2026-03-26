import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Principal from './pages/Principal';
import Sobre from './pages/Sobre';
import NotFound from './pages/NotFound';
import Perfil from './pages/Perfil';

function App() {
    return (
        <BrowserRouter>
            <Routes> {/* Nesse PATH nos estamos ensinando nosso computador para onde ele deve ir */}
                <Route path='/' element={<Principal />} />
                <Route path='/sobre' element={<Sobre />} />
                {/* Se eu entrar em uma página que não exista, chamamos ela! */}
                <Route path='*' element={<NotFound />} />
                {/* O nome é como se fosse a passagem do ID - porem como NOME, pois foi nomeado assim */}
                <Route path='/perfil/:nome' element={<Perfil />} />
            </Routes>
        </BrowserRouter>

    )
}

export default App