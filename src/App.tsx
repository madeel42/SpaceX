import './App.css';
import { ApolloProvider } from '@apollo/client';
import { client } from './Config/index';
import { LaunchesContainer } from './components/Launches/index'

function App() {
  return <ApolloProvider client={client}>
    <LaunchesContainer />
  </ApolloProvider>
}

export default App;
