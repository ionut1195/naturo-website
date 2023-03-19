import Layout from "antd/es/layout/layout";
import "./App.css";
import NavBar from "./components/header/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import PagesFooter from "./components/footer/PagesFooter";
import Sections from "./components/sections/Sections";
import Store from "./components/store/Store";
function App() {
  return (
    <Router>
      <Layout>
        <NavBar />
        <Routes>
          <Route element={<Sections />} path="/" />
          <Route element={<Store />} path="/store" />
        </Routes>
        <PagesFooter />
      </Layout>
    </Router>
  );
}

export default App;
