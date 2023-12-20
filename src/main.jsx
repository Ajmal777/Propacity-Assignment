import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import NotesContextProvider from "./Context/NotesContext.jsx";
import FormContextProvider from "./Context/FormContext.jsx";
import { ConfigProvider } from "antd";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <NotesContextProvider>
            <FormContextProvider>
                <ConfigProvider
                    theme={{
                        token: { fontFamily: "inherit" },
                    }}
                >
                    <App />
                </ConfigProvider>
            </FormContextProvider>
        </NotesContextProvider>
    </React.StrictMode>
);
