import React, { Fragment } from "react";
import { Row, Col } from "antd";
import {
  InstagramOutlined,
  GoogleOutlined,
  GitlabOutlined,
  GithubOutlined,
  MediumOutlined,
} from "@ant-design/icons";
import profile from "../assets/profile.png";
import "./style.css";

const Profile = () => {
  return (
    <Fragment>
      <Col xs={24} lg={8}>
        <Col span={24} className="name_heading">
          <Row align="middle" justify="center">
            <Col xs={24} lg={8}></Col>
            <Col
              xs={{ span: 0, order: 0 }}
              md={{ span: 18, order: 1 }}
              className="sub_heading"
            >
              Design Minded Front-End Developer_.
            </Col>
            <Col span={6}></Col>
            <Col
              xs={{ span: 18, order: 2 }}
              sm={{ span: 18, order: 1 }}
              className="first_name"
            >
              Sachin
            </Col>
            <Col span={6}></Col>
            <Col
              xs={{ span: 18, order: 3 }}
              sm={{ span: 18, order: 1 }}
              className="last-name"
            >
              Babu
            </Col>
            <Col xs={{ span: 24, order: 1 }} className="pd_top36">
              <img alt="sachinbabu_profile" width="242px" src={profile} />
            </Col>

            <Col xs={{ span: 24, order: 4 }} md={{ span: 24, order: 1 }}>
              <Col
                xs={{ span: 12, order: 4, offset: 0 }}
                md={{ span: 6, order: 1, offset: 8 }}
                lg={{ span: 12, order: 1, offset: 4 }}
                xl={{ span: 8, order: 1, offset: 4 }}
                className="style_connect"
              >
                Connect_.
              </Col>

              <Col
                xs={{ span: 22, order: 5, offset: 0 }}
                md={{ span: 18, order: 5, offset: 3 }}
                lg={{ span: 22, order: 5, offset: 3 }}
                className="social_section"
              >
                <MediumOutlined
                  onClick={() =>
                    window.open("https://sachinbabu6174.medium.com/")
                  }
                  className="social_icon"
                />
                <GoogleOutlined className="social_icon" />
                <GithubOutlined className="social_icon" />
                <GitlabOutlined className="social_icon" />
                <InstagramOutlined className="social_icon" />
              </Col>
            </Col>
            <Col
              xs={{ span: 0, order: 6 }}
              lg={{ span: 24, order: 6 }}
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
    </Fragment>
  );
};

export default Profile;
