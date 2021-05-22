import React, { Fragment } from "react";
import { Row, Col, Divider, Tag } from "antd";
import "./style.css";

const Tags = (props) => {
  const { name } = props;
  return (
    <Tag color="#fddb3a" className="tag_style">
      {name}
    </Tag>
  );
};

const AboutAndSkills = () => {
  return (
    <Fragment>
      <Row>
        <Col xs={{ span: 0 }} md={{ span: 24 }} lg={{ span: 17 }}>
          <Col span={24} className="company_style">
            ABOUT
          </Col>
          <Col span={24} className="about_contents">
            Hello! My name is Sachin and I'm a Indian-based software engineer
            and have three years experience in software developing and started
            working around in ReactJS and Redux. Worked on Tele-medicine and
            Anomaly detection platforms. Also created some sample apps using
            AWS, MongoDB, ReactJS and for Designing purpose use AntD and Figma.
            Fast-forward to today,Mainly working on cross browser extension and
            firebase. I love building things around and my interest lies in
            frontend, backend and deployment. Cheers😁
          </Col>
        </Col>
        <Col xs={{ span: 0 }} lg={{ span: 1 }}>
          <Divider type="vertical" className="divider_about" />
        </Col>
        <Col
          xs={{ span: 0 }}
          md={{ span: 24 }}
          lg={{ span: 6 }}
          className="sub_headings"
        >
          <Col span={24} className="focused_on">
            TOP SKILL
          </Col>
          <Col span={24} className="tag_section">
            <Tags name="ReactJS" />
            <Tags name="JavaScript" />
            <Tags name="Firebase" />
          </Col>
        </Col>
      </Row>
    </Fragment>
  );
};

export default AboutAndSkills;
