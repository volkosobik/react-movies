import React from "react";
import ReactDOM from "react-dom";
import { Header } from "./layouts/Header";
import { Footer } from "./layouts/Footer";
import { Main } from "./layouts/Main";

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Main />
        <Footer />
      </>
    );
  }
}
const rootElement = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
