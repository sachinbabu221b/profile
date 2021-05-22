import React, { Fragment } from "react";
import { Row, Col, Card } from "antd";
import "./style.css";
const { Meta } = Card;

const ProjectCard = (props) => {
  const { link, description, title } = props;
  return (
    <Col
      xs={{ span: 0 }}
      md={{ span: 22 }}
      xl={{ span: 22 }}
      className="mg_top32"
    >
      <Card
        hoverable
        className="card_projects"
        onClick={() => window.open(link)}
      >
        <Meta title={title} description={description} />
      </Card>
    </Col>
  );
};

const Projects = () => {
  return (
    <Fragment>
      <Row>
        <Col xs={{ span: 0 }} md={{ span: 24 }}>
          <Col span={24} className="company_style mg_top_20">
            PROJECTS
          </Col>
          <Col span={24} className="about_contents">
            <Row className="mg_top32">
              <ProjectCard
                link="https://www.linkedin.com/feed/update/urn:li:activity:6655311031889420288/"
                title="E-Commerce Vegeseller"
                description="Simple vegetable selling e-commerce application made using ReactJs, MongoDB, AWS, Razorpay, AntD and Figma"
              />
              <ProjectCard
                link="https://www.linkedin.com/feed/update/urn:li:activity:6652901513150767104/"
                title="Image Filters"
                description="Altering the image by applying various filters using ReactJs. We can choose filters from a given list and customize the ratio's"
              />
              <ProjectCard
                link="https://www.linkedin.com/feed/update/urn:li:activity:6659678211812786176/"
                title="Animation Using Vue.JS"
                description="Illustrating animations using animation libraries like GSAP and Vue.JS libraries for a static animation website."
              />
              <ProjectCard
                link="https://www.linkedin.com/feed/update/urn:li:activity:6655311031889420288/"
                title="HTML Converter"
                description="A simple javascript application to convert the given code into designed elements."
              />
            </Row>
          </Col>
        </Col>
      </Row>
    </Fragment>
  );
};

export default Projects;
