import React from "react";
import { Navbar, Container } from "react-bootstrap";
import { ReactComponent as Logo } from "../images/logo.svg";

const navbarStyle = {
  backgroundColor: "lightblue",
};

const Header = ({ title }) => {
  return (
    <Navbar style={navbarStyle} data-bs-theme="light">
      <Container>
        <Logo
          alt={title}
          style={{ maxWidth: "50rem", display: "block", margin: "0 auto" }}
        />
      </Container>
    </Navbar>
  );
};

export default Header;
