import React from "react";
import { Nav } from "react-bootstrap";

function Menu() {
  return (
    <Nav defaultActiveKey="/home" as="ul">
      <Nav.Item as="li">
        <Nav.Link href="/home">About</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link eventKey="link-1">Help</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link eventKey="link-2">API</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default Menu;
