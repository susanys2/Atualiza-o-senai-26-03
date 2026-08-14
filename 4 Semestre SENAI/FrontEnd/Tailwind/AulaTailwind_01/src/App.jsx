import { Route, BrowserRouter, Routes, Link } from "react-router-dom";

export default function App(){
  return(
    <BrowserRouter>
    <div className="flex min-h-screen items-center justify-center bg-slate-950" >
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/sobre" element={<Sobre/>}></Route>
      </Routes>
    </div>
    </BrowserRouter>
  )
}

function Home() {
  return (
    <div className="flex flex-col items-center gap-4" >
      <h1 className="text-3xl font-bold text-white">Home</h1>
      <Link to="/sobre" className="rounded-lg bg-indigo-500 px-4 py-2 text-white">
        Ir para Sobre
      </Link>
    </div>
  )
}

function Sobre() {
  return (
    <div className="flex flex-col items-center gap-4" >
      <h1 className="text-3xl font-bold text-emerald-400" >Sobre</h1>
      <Link to="/" className="rounded-lg bg-slate-800 px-4 py-2 text-white">Voltar</Link>
    </div>
  )
}

