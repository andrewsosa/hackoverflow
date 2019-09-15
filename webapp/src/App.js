import ApolloClient from 'apollo-boost';
import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';
import 'bulma/bulma.sass';

import MainLayout from './layouts/main';
import EventList from './components/EventList';

const client = new ApolloClient({
  uri: 'http://localhost:4000',
});

class App extends Component {
  render = () => {
    return (
      <ApolloProvider client={client}>
        <MainLayout>
          <EventList />
        </MainLayout>
      </ApolloProvider>
    );
  };
}

export default App;
