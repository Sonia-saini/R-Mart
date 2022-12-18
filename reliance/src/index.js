import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import { theme } from "./component/sanket/styles/themeConfig";

import { store } from "./store";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <AppContextProvider>
        <ChakraProvider theme={theme}>
          <App />
        </ChakraProvider>
      </AppContextProvider>
    </BrowserRouter>
  </Provider>
);
