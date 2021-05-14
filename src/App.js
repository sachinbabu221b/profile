import React from "react";
import { Row, Col, Divider, Card, Tag, Layout, Switch } from "antd";
import profile from "./profile.png";
import logo from "./logo.png";
import india from "./india.svg";

import CrossBrowser from "./crossBrowser.png";

import { Scrollbars } from "react-custom-scrollbars";

import "antd/dist/antd.css";
import "./App.css";
import {
  InstagramOutlined,
  LinkedinOutlined,
  GoogleOutlined,
  GitlabOutlined,
  GithubOutlined,
  MediumOutlined,
} from "@ant-design/icons";
import Avatar from "antd/lib/avatar/avatar";
const { Header, Footer, Sider, Content } = Layout;
const { Meta } = Card;

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
        <Header style={{ background: "#000", color: "#fff" }}>
          <Row align="middle">
            <Col
              span={12}
              style={{
                textAlign: "left",
                paddingTop: "8px",
              }}
            >
              <img src={logo} width="42px" />
            </Col>
            <Col
              span={12}
              style={{
                textAlign: "right",
              }}
            >
              {/* <Switch
                  style={{ background: "#EEE841", color: "#000" }}
                  checkedChildren="Light"
                  unCheckedChildren="Dark"
                  defaultChecked
                /> */}
            </Col>
          </Row>
        </Header>
        <Content
          style={{
            background: "#111",
            color: "#fff",
          }}
        >
          <Row justify="center">
            <Col xs={24} sm={24} md={24} lg={8} xl={8}>
              <Col span={24} className="name_heading">
                <Row align="middle" justify="center">
                  <Col xs={24} sm={24} md={24} lg={6} xl={6}></Col>
                  <Col
                    xs={{ span: 0, order: 0 }}
                    sm={{ span: 0, order: 0 }}
                    md={{ span: 18, order: 1 }}
                    lg={{ span: 18, order: 1 }}
                    xl={{ span: 18, order: 1 }}
                    style={{
                      fontFamily: "sans-serif",
                      fontSize: "18px",
                      textAlign: "left",
                      fontWeight: 400,
                    }}
                  >
                    Design Minded Front-End Developer_.
                  </Col>
                  <Col span={6}></Col>
                  <Col
                    xs={{ span: 18, order: 2 }}
                    sm={{ span: 18, order: 1 }}
                    md={{ span: 18, order: 1 }}
                    lg={{ span: 18, order: 1 }}
                    xl={{ span: 18, order: 1 }}
                    style={{
                      fontFamily: "sans-serif",
                      fontSize: "36px",
                      fontWeight: "bolder",
                      textAlign: "left",
                    }}
                  >
                    Sachin
                  </Col>
                  <Col span={6}></Col>
                  <Col
                    xs={{ span: 18, order: 3 }}
                    sm={{ span: 18, order: 1 }}
                    md={{ span: 18, order: 1 }}
                    lg={{ span: 18, order: 1 }}
                    xl={{ span: 18, order: 1 }}
                    style={{
                      fontFamily: "sans-serif",
                      fontSize: "36px",
                      fontWeight: "bolder",
                      marginTop: "-10px",
                      textAlign: "left",
                    }}
                  >
                    Babu
                  </Col>
                  <Col
                    xs={{ span: 24, order: 1 }}
                    sm={{ span: 24, order: 1 }}
                    md={{ span: 24, order: 1 }}
                    lg={{ span: 24, order: 1 }}
                    xl={{ span: 24, order: 1 }}
                    style={{
                      paddingTop: "36px",
                    }}
                  >
                    <img width="242px" src={profile} />
                  </Col>
                  <Col
                    xs={{ span: 0 }}
                    sm={{ span: 7 }}
                    md={{ span: 7 }}
                    lg={{ span: 7 }}
                    xl={{ span: 7 }}
                  />

                  <Col
                    xs={{ span: 12, order: 4 }}
                    sm={{ span: 12, order: 4 }}
                    md={{ span: 7, order: 1 }}
                    lg={{ span: 7, order: 1 }}
                    xl={{ span: 7, order: 1 }}
                    className="style_connect"
                  >
                    Connect_.
                  </Col>
                  <Col span={11} />
                  <Col span={3} />
                  <Col
                    xs={{ span: 22, order: 5 }}
                    sm={{ span: 18, order: 1 }}
                    md={{ span: 18, order: 1 }}
                    lg={{ span: 18, order: 1 }}
                    xl={{ span: 18, order: 1 }}
                    style={{ paddingTop: "24px", marginBottom: "20px" }}
                  >
                    <MediumOutlined
                      onClick={() =>
                        window.open("https://sachinbabu6174.medium.com/")
                      }
                      style={{
                        fontSize: "32px",
                        paddingRight: "24px",
                        cursor: "pointer",
                      }}
                    />
                    <GoogleOutlined
                      style={{ fontSize: "32px", paddingRight: "24px" }}
                    />

                    <GithubOutlined
                      style={{ fontSize: "32px", paddingRight: "24px" }}
                    />

                    <GitlabOutlined
                      style={{ fontSize: "32px", paddingRight: "24px" }}
                    />
                    <InstagramOutlined style={{ fontSize: "32px" }} />
                  </Col>
                  <Col
                    xs={{ span: 0, order: 6 }}
                    sm={{ span: 0, order: 6 }}
                    md={{ span: 0, order: 6 }}
                    lg={{ span: 24, order: 6 }}
                    xl={{ span: 24, order: 6 }}
                    className="linkedIn_padding"
                  >
                    <div
                      class="badge-base LI-profile-badge"
                      data-locale="en_US"
                      data-size="large"
                      data-theme="dark"
                      data-type="HORIZONTAL"
                      data-vanity="sachin-babu-69a93b177"
                      data-version="v1"
                    ></div>
                  </Col>
                </Row>
              </Col>
            </Col>

            <Col
              xs={{ span: 0 }}
              sm={{ span: 0 }}
              md={{ span: 20 }}
              lg={{ span: 16 }}
              xl={{ span: 16 }}
            >
              <Row align="middle">
                <Col
                  span={24}
                  style={{
                    fontFamily: "sans-serif",
                    fontSize: "24px",
                    marginTop: "62px",
                  }}
                >
                  <Row>
                    <Col
                      xs={{ span: 0 }}
                      sm={{ span: 0 }}
                      md={{ span: 11 }}
                      lg={{ span: 11 }}
                      xl={{ span: 11 }}
                    >
                      <Col
                        span={24}
                        style={{
                          fontSize: "14px",
                          textAlign: "left",
                          fontWeight: 400,
                          color: "#fff",
                        }}
                      >
                        COMPANY
                      </Col>
                      <Col span={24} style={{ color: "#fff" }}>
                        42 Square Technologies.
                      </Col>
                    </Col>
                    <Col
                      xs={{ span: 0 }}
                      sm={{ span: 0 }}
                      md={{ span: 2 }}
                      lg={{ span: 2 }}
                      xl={{ span: 2 }}
                    >
                      <Divider
                        type="vertical"
                        style={{ height: "70px", background: "#fff" }}
                      />
                    </Col>
                    <Col
                      xs={{ span: 0 }}
                      sm={{ span: 0 }}
                      md={{ span: 11 }}
                      lg={{ span: 11 }}
                      xl={{ span: 11 }}
                      className="sub_heading"
                    >
                      <Col
                        span={24}
                        style={{
                          fontSize: "14px",
                          textAlign: "left",
                          fontWeight: 400,
                          color: "#fff",
                        }}
                      >
                        NOW FOCUSED ON
                      </Col>
                      <Col span={24} style={{ color: "#fff" }}>
                        Cross Browser Extensions
                      </Col>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row align="middle">
                <Col
                  span={24}
                  style={{
                    fontFamily: "sans-serif",
                    fontSize: "24px",
                    // background: "#aaaa",
                    marginTop: "24px",
                  }}
                >
                  <Row>
                    <Col
                      xs={{ span: 0 }}
                      sm={{ span: 0 }}
                      md={{ span: 24 }}
                      lg={{ span: 17 }}
                      xl={{ span: 17 }}
                    >
                      <Col
                        span={24}
                        style={{
                          fontSize: "14px",
                          textAlign: "left",
                          fontWeight: 400,
                          color: "#fff",
                        }}
                      >
                        ABOUT
                      </Col>
                      <Col
                        span={24}
                        style={{
                          color: "#fff",
                          fontSize: "16px",
                          marginTop: "8px",
                        }}
                      >
                        Hello! My name is Sachin and I'm a Indian-based software
                        engineer and have three years experience in software
                        developing and started working around in ReactJS and
                        Redux. Worked on Tele-medicine and Anomaly detection
                        platforms. Also created some sample apps using AWS,
                        MongoDB, ReactJS and for Designing purpose use AntD and
                        Figma. Fast-forward to today,Mainly working on cross
                        browser extension and firebase. I love building things
                        around and my interest lies in frontend, backend and
                        deployment. Cheers😁
                      </Col>
                    </Col>
                    <Col
                      xs={{ span: 0 }}
                      sm={{ span: 0 }}
                      md={{ span: 0 }}
                      lg={{ span: 1 }}
                      xl={{ span: 1 }}
                    >
                      <Divider
                        type="vertical"
                        style={{ height: "200px", background: "#fff" }}
                      />
                    </Col>
                    <Col
                      xs={{ span: 0 }}
                      sm={{ span: 0 }}
                      md={{ span: 24 }}
                      lg={{ span: 6 }}
                      xl={{ span: 6 }}
                      className="sub_heading"
                    >
                      <Col
                        span={24}
                        style={{
                          fontSize: "14px",
                          textAlign: "left",
                          fontWeight: 400,
                          color: "#fff",
                        }}
                      >
                        TOP SKILL
                      </Col>
                      <Col
                        span={24}
                        style={{ color: "#fff", marginTop: "8px" }}
                      >
                        <Tag
                          color="#fddb3a"
                          style={{
                            fontSize: "24px",
                            padding: "10px",

                            color: "#333",
                            fontWeight: "bolder",
                          }}
                        >
                          ReactJS
                        </Tag>
                        <Tag
                          color="#fddb3a"
                          style={{
                            fontSize: "24px",
                            padding: "10px",
                            marginTop: "16px",
                            color: "#333",
                            fontWeight: "bolder",
                          }}
                        >
                          JavaScript
                        </Tag>
                        <Tag
                          color="#fddb3a"
                          style={{
                            fontSize: "24px",
                            padding: "10px",
                            marginTop: "16px",
                            color: "#333",
                            fontWeight: "bolder",
                          }}
                        >
                          Firebase
                        </Tag>
                      </Col>
                    </Col>
                    <Col
                      xs={{ span: 0 }}
                      sm={{ span: 0 }}
                      md={{ span: 24 }}
                      lg={{ span: 24 }}
                      xl={{ span: 24 }}
                      className="sub_heading"
                      style={{
                        fontSize: "14px",
                        textAlign: "left",
                        fontWeight: 400,
                        color: "#fff",
                      }}
                    >
                      ARTICLES
                    </Col>
                    <Col
                      xs={{ span: 0 }}
                      sm={{ span: 0 }}
                      md={{ span: 24 }}
                      lg={{ span: 24 }}
                      xl={{ span: 24 }}
                      style={{
                        color: "#fff",
                        fontSize: "16px",
                        marginTop: "8px",
                      }}
                    >
                      <Card
                        hoverable
                        style={{ width: 500 }}
                        onClick={() =>
                          window.open(
                            "https://sachinbabu6174.medium.com/cross-browser-extension-d7422bc06445"
                          )
                        }
                        cover={<img alt="example" src={CrossBrowser} />}
                      >
                        <Meta title="Cross Browser Extension" />
                      </Card>
                    </Col>
                    <Col
                      xs={{ span: 0 }}
                      sm={{ span: 0 }}
                      md={{ span: 24 }}
                      lg={{ span: 24 }}
                      xl={{ span: 24 }}
                      style={{
                        fontSize: "14px",
                        textAlign: "left",
                        fontWeight: 400,
                        color: "#fff",
                        marginTop: "20px",
                      }}
                    >
                      PROJECTS
                    </Col>
                    <Col
                      xs={{ span: 0 }}
                      sm={{ span: 0 }}
                      md={{ span: 24 }}
                      lg={{ span: 24 }}
                      xl={{ span: 24 }}
                      style={{
                        color: "#fff",
                        fontSize: "16px",
                        marginTop: "8px",
                      }}
                    >
                      <Row style={{ marginBottom: "32px" }}>
                        <Col
                          xs={{ span: 0 }}
                          sm={{ span: 0 }}
                          md={{ span: 24 }}
                          lg={{ span: 24 }}
                          xl={{ span: 12 }}
                        >
                          <Card
                            hoverable
                            style={{ width: 500, cursor: "pointer" }}
                            onClick={() =>
                              window.open(
                                "https://www.linkedin.com/feed/update/urn:li:activity:6655311031889420288/"
                              )
                            }
                          >
                            <Meta
                              title="E-Commerce Vegeseller"
                              description="Simple vegetable selling e-commerce application made using ReactJs, MongoDB, AWS, Razorpay, AntD and Figma"
                            />
                          </Card>
                        </Col>
                        <Col
                          xs={{ span: 0 }}
                          sm={{ span: 0 }}
                          md={{ span: 24 }}
                          lg={{ span: 24 }}
                          xl={{ span: 12 }}
                          className="sub_heading"
                        >
                          <Card
                            hoverable
                            style={{ width: 500, cursor: "pointer" }}
                            onClick={() =>
                              window.open(
                                "https://www.linkedin.com/feed/update/urn:li:activity:6652901513150767104/"
                              )
                            }
                          >
                            <Meta
                              title="Image Filters"
                              description="Altering the image by applying various filters using ReactJs. We can choose filters from a given list and customize the ratio's"
                            />
                          </Card>
                        </Col>
                        <Col
                          xs={{ span: 0 }}
                          sm={{ span: 0 }}
                          md={{ span: 24 }}
                          lg={{ span: 24 }}
                          xl={{ span: 12 }}
                          style={{ marginTop: "20px" }}
                        >
                          <Card
                            hoverable
                            style={{ width: 500, cursor: "pointer" }}
                            onClick={() =>
                              window.open(
                                "https://www.linkedin.com/feed/update/urn:li:activity:6659678211812786176/"
                              )
                            }
                          >
                            <Meta
                              title="Animation Using Vue.JS"
                              description="Illustrating animations using animation libraries like GSAP and Vue.JS libraries for a static animation website."
                            />
                          </Card>
                        </Col>
                        <Col
                          xs={{ span: 0 }}
                          sm={{ span: 0 }}
                          md={{ span: 24 }}
                          lg={{ span: 24 }}
                          xl={{ span: 12 }}
                          style={{ marginTop: "20px" }}
                        >
                          <Card
                            hoverable
                            style={{ width: 500, cursor: "pointer" }}
                            onClick={() =>
                              window.open(
                                "https://www.linkedin.com/feed/update/urn:li:activity:6655311031889420288/"
                              )
                            }
                          >
                            <Meta
                              title="HTML Converter"
                              description="A simple javascript application to convert the given code into designed elements."
                            />
                          </Card>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </Content>
        <Footer style={{ background: "#000", color: "#fff" }}>
          Designed and created by
          <br />
          Sachin Babu
          <br />
          <Avatar shape="square" src={india} />
        </Footer>
      </Scrollbars>
    </Layout>
  );
}

export default App;
