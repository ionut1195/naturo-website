import { Content } from "antd/es/layout/layout";
import Hero from "../hero/Hero";
import About from "./about/About";

const Sections = () => {
  return (
    <Content style={{ justifyContent: "center", display: "flex" }}>
      <div style={{ width: "70%" }}>
        <Hero />
        <About />
      </div>
    </Content>
  );
};

export default Sections;
