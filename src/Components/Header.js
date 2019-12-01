import React from "react";
import { Link } from "react-router-dom";
import axiosWithAuth from "../utils/axiosWithAuth";
import { Button } from 'reactstrap';

function Header() {
  return (
    <div className="Header">
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/"><h3>Log in</h3></Link>
            </li>
            <li>
              <Link to="/register"><h3>Sign up</h3></Link>
            </li>
            <li>
              <Button onClick = {() => {
                axiosWithAuth()
                  .get('/auth/logout', { username: "", password:"" })
                }}>
                Logout
              </Button>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
