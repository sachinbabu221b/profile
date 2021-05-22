import React from "react";
import { Row, Col, Layout } from "antd";
import { Scrollbars } from "react-custom-scrollbars";
import Footers from "./components/footer";
import Headers from "./components/header";
import CompanyInfo from "./components/company";
import AboutAndSkills from "./components/about";
import Articles from "./components/articles";
import Projects from "./components/projects";
import Profile from "./components/profile";

import "antd/dist/antd.css";
import "./App.css";

const { Content } = Layout;

function App() {
  return (
    <Layout>
      <Scrollbars
        style={{ width: "100vw", height: "100vh" }}
        autoHide
        renderThumbVertical={({ style, ...props }) => (
          <div
            {...props}
            style={{
              ...style,
              backgroundColor: "#fddb3a",
              borderRadius: "15px",
            }}
          />
        )}
      >
        <Headers />
        <Content className="content_style">
          <Row justify="center">
            <Profile />
            <Col xs={{ span: 0 }} md={{ span: 20 }} lg={{ span: 16 }}>
              <CompanyInfo />
              <Row align="middle">
                <Col span={24} className="company_info-section">
                  <AboutAndSkills />
                  <Articles />
                  <Projects />
                </Col>
              </Row>
            </Col>
          </Row>
        </Content>
        <Footers />
      </Scrollbars>
    </Layout>
  );
}

export default App;
