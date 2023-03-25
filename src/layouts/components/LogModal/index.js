import React from "react";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";

import images from "../../../assets/img/image";
import { XtimesIcon } from "../../../icons/Icons";
import { offModal } from "../../../feature/modal/Modal";
import "./styles.scss";

function LogModal() {
    const dispatch = useDispatch();

    const [formType, setFormType] = useState("login");

    const [emailErrorMessage, setEmailErrorMessage] = useState("");
    const [emailInput, setEmailInput] = useState("");

    const [fullnameErrorMessage, setFullnameErrorMessage] = useState("");
    const [fullnameInput, setFullnameInput] = useState("");

    const [phoneNumErrorMessage, setPhoneNumErrorMessage] = useState("");
    const [phoneNumInput, setPhoneNumInput] = useState("");

    const [passwordErrorMessage, setPasswordErrorMessage] = useState("");
    const [passwordInput, setPasswordInput] = useState("");

    const [passwordLoginErrorMsg, setPasswordLoginErrorMsg] = useState("");
    const [pwdLoginInput, setPwdLoginInput] = useState("");

    const [confirmPwdErrorMessage, setConfirmPwdErrorMessage] = useState("");
    const [confirmPwd, setConfirmPwd] = useState("");

    const modalInside = useRef();

    useEffect(() => {
        const emailRegex = /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        const phoneRegex = /(84|0[3|5|7|8|9])+([0-9]{8})\b/;

        if (fullnameInput.trim() !== "") {
            setFullnameErrorMessage("");
        }

        if (phoneNumInput.trim() === "") {
            setPhoneNumErrorMessage("");
        } else if (!phoneNumInput.trim().match(phoneRegex)) {
            setPhoneNumErrorMessage("This Phone Number is not valid");
        } else {
            setPhoneNumErrorMessage("");
        }

        if (emailInput.trim() === "") {
            setEmailErrorMessage("");
        } else if (!emailInput.trim().match(emailRegex)) {
            setEmailErrorMessage("This email is not valid");
        } else {
            setEmailErrorMessage("");
        }

        if (pwdLoginInput.trim() !== "") {
            setPasswordLoginErrorMsg("");
        }

        if (
            passwordInput.trim().length < 8 &&
            passwordInput.trim().length >= 1
        ) {
            setPasswordErrorMessage(
                "Password must be at least 8 characters including uppercase, lowercase, numbers and special characters!"
            );
        } else if (passwordInput.trim() !== "") {
            setPasswordErrorMessage("");
        }

        if (confirmPwd !== passwordInput) {
            setConfirmPwdErrorMessage("Password NOT match!");
        } else {
            setConfirmPwdErrorMessage("");
        }
    }, [
        confirmPwd,
        emailInput,
        fullnameInput,
        passwordInput,
        phoneNumInput,
        pwdLoginInput,
    ]);

    const checkFullname = () => {
        if (fullnameInput.trim() === "") {
            setFullnameErrorMessage("Please enter your Fullname!");
        } else {
            setFullnameErrorMessage("");
        }
    };

    const checkPhoneNum = () => {
        if (phoneNumInput.trim() === "") {
            setPhoneNumErrorMessage("Please enter your Phone Number!");
        } else {
            setPhoneNumErrorMessage("");
        }
    };

    const checkEmail = () => {
        const emailRegex = /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/;

        if (emailInput.trim() === "") {
            setEmailErrorMessage("Please enter your Email!");
        } else if (!emailInput.trim().match(emailRegex)) {
            setEmailErrorMessage("This email is not valid");
        } else {
            setEmailErrorMessage("");
        }
    };

    const checkPassword = () => {
        if (passwordInput.trim() === "") {
            setPasswordErrorMessage("Please enter your Password!");
        } else if (
            passwordInput.trim().length < 8 &&
            passwordInput.trim().length >= 1
        ) {
            setPasswordErrorMessage(
                "Password must be at least 8 characters including uppercase, lowercase, numbers and special characters!"
            );
        } else {
            setPasswordErrorMessage("");
        }
    };

    const checkPwdLogin = () => {
        if (passwordInput.trim() === "") {
            setPasswordLoginErrorMsg("Please enter your Password!");
        } else {
            setPasswordLoginErrorMsg("");
        }
    };

    const checkConfirmPwd = () => {
        if (confirmPwd.trim() === "") {
            setConfirmPwdErrorMessage("Please confirm your Password!");
        } else {
            setConfirmPwdErrorMessage("");
        }
    };

    const handleLogin = () => {
        setFormType("login");
        setEmailInput("");
        setPasswordInput("");
    };

    const handleSignin = () => {
        setFormType("register");
        setEmailInput("");
        setPasswordInput("");
    };

    const handleOffModal = () => {
        modalInside.current.style.animation = "slide-out-btt .6s ease-in-out";
        setTimeout(() => {
            dispatch(offModal());
        }, 500);
    };

    return (
        <div className="body">
            <div onClick={handleOffModal} className="modal-outside" />
            <div ref={modalInside} className={`log-modal-wrapper ${formType}`}>
                <div onClick={handleOffModal} className="xBtn-off-modal">
                    <XtimesIcon fill="white" width="2.5rem" height="2.5rem" />
                </div>
                <div className={`modal-image-wrapper ${formType}`}>
                    <img
                        className="modal-image"
                        alt="modal-register"
                        src={images.modalRegister}
                    />
                </div>
                <div className="content-wrapper">
                    <div className="tab-wrap">
                        <h2
                            className={formType === "login" ? "active" : ""}
                            onClick={handleLogin}
                        >
                            Login
                        </h2>
                        <h2
                            className={formType === "register" ? "active" : ""}
                            onClick={handleSignin}
                        >
                            Register
                        </h2>
                    </div>
                    <div className="content-input">
                        <form className="form-input-modal">
                            {formType === "login" ? (
                                <div>
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input
                                            onChange={(e) => {
                                                setEmailInput(e.target.value);
                                            }}
                                            onBlur={checkEmail}
                                            value={emailInput || ""}
                                            placeholder="Enter your Email"
                                        />
                                        <p>{emailErrorMessage}</p>
                                    </div>
                                    <div className="form-group">
                                        <label>Password</label>
                                        <input
                                            onChange={(e) => {
                                                setPwdLoginInput(
                                                    e.target.value
                                                );
                                            }}
                                            type="password"
                                            onBlur={checkPwdLogin}
                                            value={pwdLoginInput || ""}
                                            placeholder="Enter your Password"
                                        />
                                        <p>{passwordLoginErrorMsg}</p>
                                    </div>
                                </div>
                            ) : (
                                <div>
                                    <div className="form-group">
                                        <label>Full Name</label>
                                        <input
                                            value={fullnameInput || ""}
                                            onChange={(e) =>
                                                setFullnameInput(e.target.value)
                                            }
                                            onBlur={checkFullname}
                                            placeholder="Enter your Full Name"
                                        />
                                        <p>{fullnameErrorMessage}</p>
                                    </div>
                                    <div className="form-group">
                                        <label>Phone Number</label>
                                        <input
                                            onBlur={checkPhoneNum}
                                            onChange={(e) =>
                                                setPhoneNumInput(e.target.value)
                                            }
                                            value={phoneNumInput || ""}
                                            placeholder="Enter your Phone Number"
                                        />
                                        <p>{phoneNumErrorMessage}</p>
                                    </div>
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input
                                            onChange={(e) => {
                                                setEmailInput(e.target.value);
                                            }}
                                            onBlur={checkEmail}
                                            value={emailInput || ""}
                                            placeholder="Enter your Email"
                                        />
                                        <p>{emailErrorMessage}</p>
                                    </div>
                                    <div className="form-group">
                                        <label>Password</label>
                                        <input
                                            onChange={(e) => {
                                                setPasswordInput(
                                                    e.target.value
                                                );
                                            }}
                                            value={passwordInput || ""}
                                            type="password"
                                            onBlur={checkPassword}
                                            placeholder="Enter your Password"
                                        />
                                        <p>{passwordErrorMessage}</p>
                                    </div>
                                    <div className="form-group">
                                        <label>Confirm Password</label>
                                        <input
                                            onChange={(e) =>
                                                setConfirmPwd(e.target.value)
                                            }
                                            value={confirmPwd || ""}
                                            onBlur={checkConfirmPwd}
                                            type="password"
                                            placeholder="Confirm your Password"
                                        />
                                        <p>{confirmPwdErrorMessage}</p>
                                    </div>
                                </div>
                            )}
                            <button>
                                {formType === "login" ? "Sign-in" : "Register"}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LogModal;
