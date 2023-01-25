import React from 'react'
import ReactDOM from 'react-dom'
import GlobalStyles from './styles'
import Pages from './pages'
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client' //c

const client = new ApolloClient({
	uri: 'https://odyssey-lift-off-part5-server-production-5a59.up.railway.app/', // change to YOUR own production server
	cache: new InMemoryCache(),
	name: 'web',
	version: '1.0',
})

ReactDOM.render(
	<ApolloProvider client={client}>
		<GlobalStyles />
		<Pages />
	</ApolloProvider>,
	document.getElementById('root')
)
