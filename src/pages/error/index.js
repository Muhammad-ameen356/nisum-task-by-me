import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import notFoundImg from "src/assets/images/page_not_found.png";
import style from "./style.module.scss";

const Error = () => {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col md={6} lg={6} sm={12}>
            <div className={style.leftContainer}>
              <img src={notFoundImg} alt="" />
            </div>
          </Col>
          <Col md={6} lg={6} sm={12}>
            <div className={style.rightContainer}>
              <div className={style.rightInnerContainer}>
                <h2>404! </h2>
                <h4>Page Not Found</h4>
                <h4>Lost? Find your way by going back or asking for help</h4>
                <Link to="/">
                  <button>Home</button>
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Error;
