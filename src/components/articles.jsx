import React, { Fragment } from "react";
import { Row, Col, Card } from "antd";
import CrossBrowser from "../assets/crossBrowser.png";
import "./style.css";
const { Meta } = Card;

const ArticleCard = (props) => {
  const { link, altText, title } = props;
  return (
    <Card
      hoverable
      style={{ width: 500, borderColor: "#202020" , background: '#202020'}}
      onClick={() => window.open(link)}
      cover={<img alt={altText} src={CrossBrowser} />}
    >
      {/* <Meta title={title} /> */}
      <h3 style={{ color: "#808080" }}>{title}</h3>
    </Card>
  );
};
const Articles = () => {
  return (
    <Fragment>
      <Row>
        <Col xs={{ span: 0 }} md={{ span: 24 }}>
          <Col span={24} className="company_style">
            ARTICLES
          </Col>
          <Col span={24} className="about_contents">
            <ArticleCard
              title="Cross Browser Extension"
              altText="cross_browser_sachinbabu"
              link="https://sachinbabu6174.medium.com/cross-browser-extension-d7422bc06445"
            />
          </Col>
        </Col>
      </Row>
    </Fragment>
  );
};

export default Articles;
