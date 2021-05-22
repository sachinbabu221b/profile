import React, { Fragment } from "react";
import { Layout, Avatar } from "antd";
import india from "../assets/india.svg";
import "./style.css";
const { Footer } = Layout;

const Footers = () => {
  return (
    <Fragment>
      <Footer className="header_footer_style">
        Designed and created by
        <br />
        Sachin Babu
        <br />
        <Avatar alt="sachinbabu_india" shape="square" src={india} />
      </Footer>
    </Fragment>
  );
};

export default Footers;
