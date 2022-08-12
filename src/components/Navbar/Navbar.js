import React, { useState } from "react";
import Logo from "src/assets/images/logo_news.png";
import css from "./Navbar.module.scss";
import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
// import "../../App.scss";

const NavbarComponent = () => {
  const navigate = useNavigate();
  return (
    <>
      <style type="text/css">
        {`
            .navbar-toggler:focus{
                box-shadow: none
            }
            .nav-link {
                padding-right: 1.5rem !important;
                padding-left: 1.5rem !important;
                padding-top: 0.7rem !important;
                padding-bottom: 0.7rem !important;
                font-size: 14px;
                font-weight: bold;
            }
            .navlink_container::after {
                border-bottom: solid 3px #ea2129;  
                transform: scaleX(0);  
                transition: transform 250ms ease-in-out;
            }
            .navlink_container:hover::after {
                transform: scaleX(1);
            }
        `}
      </style>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="none"
        variant="light"
        className={css.navbarMainContainer}
        sticky="top"
      >
        <Container>
          <Navbar.Brand href="">
            <img src={Logo} width="50px" alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <NavLink to="/" className="navlink_container">
                <Nav.Link onClick={() => navigate("/")}>Home</Nav.Link>
              </NavLink>
              <NavLink to="about" className="navlink_container">
                <Nav.Link onClick={() => navigate("stepform")}>Step Form</Nav.Link>
              </NavLink>   
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div style={{ marginTop: 20 }}>
        <Outlet />
      </div>
    </>
  );
};

export default NavbarComponent;
