import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


//importacao do banco de dados
import { ApolloProvider } from '@apollo/client'
import client from './graphql/client'
//Autenticacao

import AuthContext from './auth';


ReactDOM.render(
    <ApolloProvider client={client}>
        <AuthContext>
            <App />
        </AuthContext>
    </ApolloProvider>,

    document.getElementById("root"));