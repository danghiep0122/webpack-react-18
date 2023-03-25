import React from "react";
import { PhoneSolidIcon } from "../../../icons/Icons";
import "./styles.scss";

function CallmeBtn() {
    return (
        <div className="call-me-btn">
            <div className="outer-bubble">
                <button className="phone-tel">
                    <a href="tel:19006099">
                        <PhoneSolidIcon height="30px" width="30px" />
                    </a>
                    <div className="inner-bubble"></div>
                </button>
            </div>
        </div>
    );
}

export default CallmeBtn;
