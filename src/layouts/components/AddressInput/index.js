import { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import React from "react";

import fetch from "../../../apiServices/fetchService";
import { delivery } from "../../../feature/addressInput/addressInputSlice";
import { storeAddress } from "../../../feature/addressInput/addressSelectSlice";
import { SearchIcon, XtimesIcon } from "../../../icons/Icons";
import "./styles.scss";

const AddressInput = () => {
    const addressText = useRef(null);
    const [carryOut, setCarryOut] = useState(false);
    const [addressInput, setAddressInput] = useState("");
    const [storeAddressData, setStoreAddressData] = useState("");

    //dropdown data
    const [dropdownShow, setDropdownShow] = useState(false);
    const [selectedValue, setSelectedValue] = useState(null);

    const dispatch = useDispatch();

    // Input handle change value
    const handleChange = (event) => {
        setAddressInput(event.target.value);
    };

    const handleCarryOut = () => {
        if (addressInput.trim().length === 0) {
            alert("Select from the dropdown");
        } else {
            dispatch(storeAddress(addressInput));
        }
    };

    const handleDelivery = () => {
        if (addressInput.trim().length === 0) {
            alert("Please type your Address");
        } else {
            dispatch(delivery(addressInput));
            setAddressInput("");
            setDropdownShow(false);
            addressText.current.focus();
        }
    };

    const handleDelete = () => {
        setAddressInput("");
        addressText.current.focus();
    };

    //Dropdown Address Data Fetching
    useEffect(() => {
        fetch("/storeAddressData").then((addressData) => {
            setStoreAddressData(addressData);
        });
    }, []);

    //dropdown data onclick handle
    const onItemClick = (data) => {
        setSelectedValue(data);
        setAddressInput(data.address);
        setDropdownShow(false);
        addressText.current.focus();
    };

    const isSelected = ({ address }) => {
        if (!selectedValue) {
            return false;
        }
        return storeAddressData.id === address;
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            carryOut === true ? handleCarryOut() : handleDelivery();
        }
    };

    return (
        <div className="address-input">
            <div className="buttons-wrapper">
                <button
                    className={!carryOut ? "btn active" : "btn"}
                    onClick={() => {
                        setDropdownShow(false);
                        setCarryOut(false);
                        setAddressInput("");
                        addressText.current.focus();
                    }}
                >
                    Delivery
                </button>
                <button
                    className={carryOut ? "btn active" : "btn"}
                    onClick={() => {
                        setDropdownShow(true);
                        setCarryOut(true);
                        setAddressInput("");
                    }}
                >
                    Carry Out
                </button>
            </div>
            <div className="input-wrap-border">
                <div className="input-wrap">
                    <input
                        onKeyDown={handleKeyDown}
                        type="text"
                        className={
                            carryOut ? "input-form no-type" : "input-form"
                        }
                        onChange={handleChange}
                        value={addressInput}
                        placeholder={
                            carryOut ? "Select Below" : "Your Address Please"
                        }
                        ref={addressText}
                        onClick={
                            carryOut
                                ? () => setDropdownShow(true)
                                : () => setDropdownShow(false)
                        }
                    />
                    <button className="delete-btn" onClick={handleDelete}>
                        <XtimesIcon height="24px" width="24px" />
                    </button>
                    {dropdownShow && (
                        <div className="dropdown-menu">
                            {storeAddressData &&
                                storeAddressData.map(({ id, address }) => (
                                    <div
                                        onClick={() => onItemClick({ address })}
                                        className={`dropdown-item ${
                                            isSelected(address) && "selected"
                                        }`}
                                        key={id}
                                    >
                                        {address}
                                    </div>
                                ))}
                        </div>
                    )}
                    <button
                        className="submit-btn"
                        type="submit"
                        onClick={() => {
                            carryOut === true
                                ? handleCarryOut()
                                : handleDelivery();
                        }}
                    >
                        <SearchIcon width="16px" height="16px" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddressInput;
