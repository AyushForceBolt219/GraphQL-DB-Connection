import {ApolloClient,ApolloProvider,InMemoryCache} from '@apollo/client'
import Tasks from './components/Tasks';
import TodoInput from './components/TodoInput';


const ACCESS_TOKEN = '3q6Szo4gwOJ4UXkqe4JskZlTdNm9vzrDtzBgyzpUu84l8q5J0WPYnKNkm0CvAR36'
const client = new ApolloClient({
  uri:'https://feasible-spaniel-85.hasura.app/v1/graphql',
  cache:new InMemoryCache(),
  headers: {
    'x-hasura-admin-secret':ACCESS_TOKEN
  }
})
console.log(client.cache)
// client object will be used to query the server

function App() {
  return(
    <ApolloProvider client={client}>
      <div className='App'>
        <header className='App-header'>
          {/* <img src={logo} className='App-logo' alt='logo' /> */}
          <p>ToDo App</p>
        </header>
        <br/>
        <TodoInput/>
        {/* <Task/> */}
        <Tasks/>
      </div>
    </ApolloProvider>
  )
}

export default App;