import React, { Fragment } from "react";
import { Layout, Row, Col } from "antd";
import logo from "../assets/logo.png";
import "./style.css";
const { Header } = Layout;

const Headers = () => {
  return (
    <Fragment>
      <Header className="header_footer_style">
        <Row align="middle">
          <Col span={12} className="pd_bottom8 txt_align_left">
            <img src={logo} alt="sachinbabu_logo" width="28px" />
          </Col>
          <Col span={12} className="txt_align_right">
            {/* <Switch
                  style={{ background: "#EEE841", color: "#000" }}
                  checkedChildren="Light"
                  unCheckedChildren="Dark"
                  defaultChecked
                /> */}
          </Col>
        </Row>
      </Header>
    </Fragment>
  );
};

export default Headers;
