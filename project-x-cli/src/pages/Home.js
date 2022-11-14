import React from "react";
import { Row, Col } from "antd";
import Selection from "../components/Selection/Selection";
const styleRow = {
  top: 10,
};

function Home() {
  return (
    <>
      <Row style={styleRow} justify="center">
        <Col>
          <Selection />
        </Col>
      </Row>
    </>
  );
}

export default Home;
