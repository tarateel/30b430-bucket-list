import React from 'react';
import { Provider } from 'react-redux';
import store from '../store';
import ItemList from '../Components/ItemList';
import Header from '../Components/Header';
import Routes from '../Components/Routes';
import Footer from '../Components/Footer';

function Home() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <ItemList />
        <Routes />
        <Footer />
      </div>
    </Provider>
  );
}

export default Home;