import React from "react";
import CommonLayout from "../../layouts/commonLayout/CommonLayout";
import Carousel from "../../layouts/components/Carousel";
import AddressInput from "../../layouts/components/AddressInput";
import Promotion from "../../layouts/components/Promotion";
import CallmeBtn from "./callMeBtn/callMeBtn";
import "./styles.scss";

function Home() {
    return (
        <div>
            <CommonLayout>
                <div className="body-content">
                    <section className="Carousel">
                        <Carousel />
                    </section>
                    <section id="Address-input">
                        <AddressInput />
                    </section>
                    <section className="Promotion">
                        <Promotion />
                    </section>
                    <CallmeBtn />
                </div>
            </CommonLayout>
        </div>
    );
}

export default Home;
