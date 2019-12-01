import React from "react";
import { Link } from "react-router-dom";
import axiosWithAuth from "../utils/axiosWithAuth"
import {Button} from "reactstrap"

function Header() {
  return (
    <div className="Header">
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Login</Link>
            </li>
            <li>
              <Link to="/list">Lists</Link>
            </li>
          </ul>
        </nav>
        <Button onClick={()=>{
          axiosWithAuth.get('/auth/logout', { username: 'goodusername', password: 'goodpassword' })
          .then(response => console.log(response))
        }}>
          Logout
        </Button>
      </header>
    </div>
  );
}

export default Header;
