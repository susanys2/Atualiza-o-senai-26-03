import { useState } from 'react'
import { enderecoServidor } from '../utils' //pegando o conteudo e disponibilizando aqui 
import {useNavigate} from 'react-router-dom'

const Aula15_Login = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [mensagem, setMensagem] = useState('')

    //Precisamos modificar apenas o botão de entrar nesse caso!  - Verificando no banco de dados 
    //Se trabalhamos com banco de dados, precisamos trabalhar com nosso AWAIT ! ! ! ! ! ! ! ! ! 
    const botaoEntrar = async (event) => {
        //função para não recarregar a tela
        event.preventDefault(); // por padrão os html recarregam a tela, mas aqui nos interrompemos esse carregamento
        try{
            if(email == '' || senha == ''){
                //Esse new error ele força um erro! diasparando o acesso do Catch
                throw new Error(`Preencha todos os campos!`)
            }

            const login = {
                email: email,
                senha: senha
            }
            //Utilizando autenticação com a API do backend
            const resposta = await fetch(`${enderecoServidor}/login`,{
                method: 'POST',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify(login)
            })
            const dados = await resposta.json()

            if (resposta.ok){
                console.log(`Login bem Sucedido`, dados);
                setMensagem(`✅ Login bem-sucedido!`)
                localStorage.setItem(`UsuarioLogado`, JSON.stringify(dados))
                navigate('/inicio') //aqui é como se tivesse feito login - - abrindo a tela de sucesso
            }else{
                setMensagem(`❌ Email ou Senha incorretos!`)
                console.log(`Erro ao fazer Login`, dados)
            }

        }catch(erro){
            console.error(`Erro ao realizar Login: `, erro)
            setMensagem(erro.message)
        }
        

    }
        

    return (
        <div style={estilos.loginConteudo}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbde4nriDD9cTH89oI4wefdHBvHXZtappHGA&s" 
                style={estilos.logo}/>
            <h2>Login</h2>
            <div style={estilos.grupoInput}>
                <label style={estilos.label} >Email</label>
                <input type="text" placeholder='Digite seu email' style={estilos.input} 
                    onChange={(event) => setEmail(event.target.value)} value={email} />
            </div>
            <div style={estilos.grupoInput}>
                <label style={estilos.label}>Senha</label>
                <input type="password" placeholder='Digite sua senha' style={estilos.input} 
                    onChange={(event) => setSenha(event.target.value)} value={senha}/>
            </div>
            <button onClick={botaoEntrar} style={estilos.botao}>Entrar</button>
            <p style={{fontStyle:'bold'}}>{mensagem}</p>
        </div>
    )


}

/** @type {{ [key: string]: import('react').CSSProperties }} */
const estilos = {
    loginConteudo : {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '300px',
        margin: '10px auto',
        backgroundColor: '#fff',
        padding: '20px',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.2)',
        borderRadius: '8px',
        gap: '5px'
    },
    logo: {
        height: '50px'
    },
    label: {
        display: 'block',
        fontWeight: 'bold'
    },
    input: {
        width: '100%',
        padding: '8px',
        borderRadius: '4px',
        border: '1px solid #ccc'
    },
    botao: {
        width: '100%',
        backgroundColor: '#e30613',
        color: '#fff',
        padding: '10px',
        border: 'none',
        borderRadius: '4px'
    }, 
    grupoInput: {
        width: '100%'
    }
}

export default Aula15_Login