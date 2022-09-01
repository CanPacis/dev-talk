import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Presentation } from "./components/Presentation";
import "./index.css";
import { MantineProvider } from "@mantine/core";
import { RecoilRoot } from "recoil";
import { NotificationsProvider } from "@mantine/notifications";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <RecoilRoot>
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          withCSSVariables
          theme={{
            headings: {
              fontFamily: "Poppins",
              fontWeight: 600,
            },
            components: {
              Title: {
                styles: (theme) => ({
                  root: {
                    color: theme.white,
                  },
                }),
              },
              Text: {
                styles: (theme) => ({
                  root: {
                    color: theme.white,
                    fontFamily: "Poppins",
                  },
                }),
              },
            },
            colorScheme: "dark",
          }}
        >
          <NotificationsProvider>
            <Routes>
              <Route path="/" element={<Presentation />} />
              <Route path="interactive" element={<App />} />
            </Routes>
          </NotificationsProvider>
        </MantineProvider>
      </RecoilRoot>
    </BrowserRouter>
  </React.StrictMode>
);
