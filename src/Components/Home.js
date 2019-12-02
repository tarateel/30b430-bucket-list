import React from "react";
import { withRouter, Link } from 'react-router-dom';
import { token } from '../utils/axiosWithAuth';
import Header from "./Header";
import Footer from './Footer';
import ItemList from './ItemList';
import ItemForm from './ItemForm';

function Home() {
  const loggedIn = token;

  return (
    <div className="Home">
    <Header />
    <nav>
        {loggedIn && <Link to="/home">Home</Link>}
    </nav>
      <ItemList />
      <ItemForm />

    <Footer />
    </div>
  );
}

export default withRouter(Home);