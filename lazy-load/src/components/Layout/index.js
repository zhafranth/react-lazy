import React from "react";
import { Layout } from "antd";
import Navbar from "./Navbar";
import { Section } from "./style";

const MainLayout = ({ children }) => {
  const { Header, Content } = Layout;
  return (
    <Layout>
      <Header>
        <Navbar />
      </Header>
      <Content>
        <Section>{children}</Section>
      </Content>
    </Layout>
  );
};

export default MainLayout;
