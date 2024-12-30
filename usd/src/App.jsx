import { ThemeProvider } from "styled-components";
import GlobalStyle from "./components/styled/Global";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/App.css";
import "./styles/Table.css";
import Auth from "./screens/Auth";
import Home from "./screens/Home";
import Task from "./screens/Task";
import Annoucement from "./screens/Annoucement";
import Report from "./screens/Report";
import Project from "./screens/Project";
import Setting from "./screens/Setting";
import Page404 from "./screens/Page404";
import Layout from "./components/Layout";
import Productivity from "./screens/Productivity";

const theme = {
  colors: {
    primary: "rgba(137,7,9,1)",
    white: "#ffffff",
    shade: "#1b0101",
    black: "#000000",
    tint: "#f9f9f9",
    gray: "#666666",
    lightGray: "rgb(140,140,140,0.2)",
    text: "#333",
    hover: "rgba(137, 7, 9, 0.1)",
    accent: "#0D92F4",
    accentOpaq: "rgba(13,146,244, 0.2)",
    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route element={<Layout />}>
            <Route path="home" element={<Home />} />
            <Route path="task" element={<Task />} />
            <Route path="Annoucement" element={<Annoucement />} />
            <Route path="productivity" element={<Productivity />} />
            <Route path="report" element={<Report />} />
            <Route path="project" element={<Project />} />
            <Route path="setting" element={<Setting />} />
            <Route path="*" element={<Page404 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
