import Footer from "../components/Footer/Footer.js";
import Header from "../components/Header/Header.js";
import React from "react";

function CommonLayout(props) {
    return (
        <div
            style={{
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
            }}
        >
            <Header />
            <div style={{ flexGrow: 1 }}>{props.children}</div>
            <Footer />
        </div>
    );
}

export default CommonLayout;
