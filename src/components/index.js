import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./style/style.css";

import apps from "./images/apps.png";
import playStore from "./images/pStore.png";
import appStore from "./images/iosIc1.png";

import Menu from "./Menu";

function index() {
  return (
    <>
      <Menu />
      <Container style={{ marginTop: "120px" }}>
        <Row>
          <Col md={6} xs={false}>
            <img src={apps} width="500px" height="auto" />
          </Col>
          <Col md={6} xs={12} className="addres">
            <h1 className="title">Get App Here</h1>
            <Container className="justify-content-md-center">
              <Row style={{ textAlign: "center" }}>
                <Col md={6} xs={2}>
                  <a href="https://play.google.com/store/apps?hl=en">
                    <img
                      src={playStore}
                      width="190"
                      height="auto"
                      className="icons"
                    />
                  </a>
                </Col>
                <Col md={6} xs={2}>
                  <a href="https://www.apple.com/ios/app-store/">
                    <img
                      src={appStore}
                      width="190"
                      height="auto"
                      className="icons"
                    />
                  </a>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default index;
