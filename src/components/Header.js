import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <Navbar bg="dark" variant="dark" className="fixed-top">
        <Container>
          <Navbar.Brand href="/">
            <img src="logo.png" width="50" className="logo" alt="logo" />
            WIKIGame
          </Navbar.Brand>
          <Nav className="me-auto">
            <NavLink to="/" className="nav-link">
              Про гру
            </NavLink>
            <NavLink to="/countries" className="nav-link">
              Країни
            </NavLink>
            <NavLink to="/tutorial" className="nav-link">
              Навчання
            </NavLink>

            <NavLink to="/divdination" className="nav-link">
              Вибір країни
            </NavLink>

            <NavLink
              to="https://store.steampowered.com/join?l=russian"
              className="nav-link"
            >
              Реєстрація STEAM
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
