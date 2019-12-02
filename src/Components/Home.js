import React from "react";
import { Link } from 'react-router-dom';
import { token } from '../utils/axiosWithAuth';
import Header from "./Header";
import Footer from './Footer';
import ItemList from './ItemList';

function Home() {
  const loggedIn = token;

  return (
    <div className="Home">
    <Header />
    <nav>
        {loggedIn && <Link to="/home">Home</Link>}
    </nav>
      <ItemList />

    <Footer />
    </div>
  );
}

export default Home;