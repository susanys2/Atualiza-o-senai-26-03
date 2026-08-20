import { Routes, Route, Link } from 'react-router-dom';
import TelaLED from './TelaLED';
import TelaNivel from './TelaNivel';
import { useState } from 'react';
import { MdClose, MdSettings, MdMenu } from 'react-icons/md'
import { PiHouseBold, PiUserFill } from 'react-icons/pi'

export default function Principal() {
    const [menuAberto, setMenuAberto] = useState(false);
    return(
        <div className='flex h-screen font-sans' >
            {/* Sidebar responsivo  */}
            <div className={`fixed z-30 inset-y-0 left-0 transform md:relative md:translate-x-0 w-64 bg-linear-to-r from-slate-950 via purple-500 to-pink-800
             text-white p-4 transition-transform duration-300 ease-in-out 
             ${menuAberto ? '-translate-x-0' : '-translate-x-full'}`}>

                <div className='flex justify-between items-center mb-6'>
                    <span className='text-xl font-bold'> Menu </span>
                    <button onClick={() => setMenuAberto(!menuAberto)} className='md:hidden' >
                        <MdClose className='w-5 h-5' />
                    </button>
                </div>

                <nav className='space-y-4' >
                    <Link onClick={() => setMenuAberto(false)} to="/TelaLED" className='flex items-center gap-4 hover:bg-gray-700 p-2 rounded' >
                        <PiHouseBold />
                        <span>Controle de LED</span>
                    </Link>
                    <Link onClick={() => setMenuAberto(false)} to="/TelaNivel" className='flex items-center gap-4 hover:bg-gray-700 p-2 rounded' >
                        <PiHouseBold />
                        <span>Tela Nível</span>
                    </Link>
            
                </nav>

            </div>

            {/* CONTEÚDO TELA PRINCIPAL */}
            <div className='flex-1 p-6 bg-pink-200 text-black w-full overflow-auto'>
                <button onClick={() => setMenuAberto(!menuAberto)} className='md:hidden mb-4 text-gray-900' >
                    <MdMenu className='w-6 h-6'/>
                </button>
            <Routes>
                <Route path='/' element={<TelaLED />} />
                <Route path='/TelaLED' element={<TelaLED />} />
                <Route path='/TelaNivel' element={<TelaNivel />} />
            </Routes>
            </div>
        </div>
    )
}