import React, { Fragment } from "react";
import { Row, Col, Divider } from "antd";
import "./style.css";

const CompanyInfo = () => {
  return (
    <Fragment>
      <Row align="middle">
        <Col span={24} className="company_info-section">
          <Row>
            <Col xs={{ span: 0 }} md={{ span: 11 }}>
              <Col span={24} className="company_style">
                COMPANY
              </Col>
              <Col span={24} className="color_white">
                42 Square Technologies.
              </Col>
            </Col>
            <Col xs={{ span: 0 }} md={{ span: 2 }}>
              <Divider type="vertical" className="divider_style" />
            </Col>
            <Col xs={{ span: 0 }} md={{ span: 11 }} className="sub_headings">
              <Col span={24} className="focused_on">
                NOW FOCUSED ON
              </Col>
              <Col span={24} className="color_white">
                Cross Browser Extensions
              </Col>
            </Col>
          </Row>
        </Col>
      </Row>
    </Fragment>
  );
};

export default CompanyInfo;
