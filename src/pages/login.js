import React, { lazy } from 'react'
import Layout from '../components/shared/Layouts'
import { UserContext } from '../auth'
import { useLazyQuery } from '@apollo/client'
import {GET_LOGIN} from '../graphql/login/query'
import { useNavigate } from 'react-router-dom'

export default function LoginPage() {
    const [username, setUsername] = React.useState("Guilherme Dezena")
    const [password, setPassword] = React.useState("123456789")
    const {setCurrentUser} = React.useContext(UserContext);
    const [loadLogin] = useLazyQuery(GET_LOGIN);
    const navigate = useNavigate()

    function handleLogin(){
        loadLogin({variables : {username}})
        .then((lazy) => {
           const user = lazy.data.user[0];
          // console.log(new Buffer.from(password, 'base64').toString('ascii'));
           if (user.password == btoa(password)){
                const {id, name, username } = user;
                setCurrentUser({id, name, username})
                //redirecionar
                navigate('/');

           }
        })
    }

    return (
        <Layout title="Login">
            <div className="row">
                <div className='col-6 d-none d-lg-block text-end'>
                    <img src='/img/iphone.png' alt='iphone'></img>
                </div>
                <div className='col-4'>
                    <div className='border rounded-1 p-5 my-3'>
                        <h2 className='mb-5 fw-bold' style={{ 'fontsize': '50px', 'fontFamily': 'Cookie' }}>SenacGram</h2>
                        <input type="text" className='form-control my-3' placeholder='Usuario' value={username} onChange={(event)=>setUsername(event.target.value)}/>
                        <input type="password" className='form-control my-3' placeholder='Senha' value={password} onChange={(event)=>setPassword(event.target.value)}/>
                        <button className='btn btn-primary w-180' onClick={handleLogin}>Logar</button>
                        <hr className='mt-7'></hr>
                        <p className='my-3'> Nao tem uma conta? Cadastre-se </p>
                    </div>
                    <div>
                        <p>Obtenha o aplicativo</p>

                        <div className='row justify-content-center'>
                            <img src='/img/google.png' alt='Google Store' style={{ heigth: '40', width: '135px' }}></img>
                            <img src='/img/apple.png' alt='Apple Store' style={{ heigth: '40', width: '135px' }}></img>
                        </div>
                    </div>

                </div>
            </div>
        </Layout>)
}