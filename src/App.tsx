import React from "react";
import styles from "./App.module.css";
import { Header, Footer, Carousel, SlideMenu } from "components";
import { Row, Col } from "antd";

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <div className={styles["page-content"]}>
        <Row style={{ marginTop: 20 }}>
          <Col span={6}>
            <SlideMenu />
          </Col>
          <Col span={18}>
            <Carousel />
          </Col>
        </Row>
      </div>
      <p>test</p>
      <Footer />
    </div>
  );
}

export default App;
