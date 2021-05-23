/*!

=========================================================
* BLK Design System React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

export default function GloxisHeader() {
  return (
    <div className="page-header header-filter">
      <div className="squares square1" />
      <div className="squares square2" />
      <div className="squares square3" />
      <div className="squares square4" />
      <div className="squares square5" />
      <div className="squares square6" />
      <div className="squares square7" />
      <Container>
        <div className="content-center">
          <Row className="row-grid justify-content-between align-items-center text-left">
            <Col lg="6" md="6">
              <h1 className="h1-seo">Gloxis React</h1>
              <h3 className="d-none d-sm-block">
                A beautiful Design System for Bootstrap 4 (reactstrap) and
                React. It's Free and Open Source.
              </h3>
            </Col>
            <Col lg="4" md="5">
              <img
                alt="..."
                className="img-fluid"
                src={require("assets/img/etherum.png").default}
              />
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}
