import React, { Component } from "react";
import Navbar from "./Navbar.js";
import Form from "./Form.js";
import PageContent from "./PageContent.js";
import { ThemeProvider } from "./contexts/ThemeContext";

class App extends Component {
  render() {
    return (
      <ThemeProvider>
        <PageContent>
          <Navbar />
          <Form />
        </PageContent>
      </ThemeProvider>
    );
  }
}

export default App;
