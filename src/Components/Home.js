import React from 'react';
import { Provider } from 'react-redux';
import store from '../store';
import ItemList from '../Components/ItemList';

function Home() {
  return (
    <Provider store={store}>
      <div className="App">
        <ItemList />
      </div>
    </Provider>
  );
}

export default Home;