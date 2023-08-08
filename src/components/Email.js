import React from "react";
import { useState } from "react";
export default function Email() {
  const [val, setVal] = useState("");
  const textChange = (e) => {
    setVal(e.target.value);
  };

  function buttonClick() {
    let textboxText = document.getElementById("textbox");
    textboxText = textboxText.value;
    const checkCondition =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (checkCondition.test(textboxText)) {
      console.log("valid email");
      document.querySelector(".message").classList.add("hide");
      document.querySelector(".textboxpic").classList.add("hide");
    } else {
      console.log("invalid email");
      document.querySelector(".message").classList.remove("hide");
      document.querySelector(".textboxpic").classList.remove("hide");
    }
  }

  return (
    <>
      <div className="email-container">
        <input
          type="text"
          id="textbox"
          onChange={textChange}
          placeholder="Email Address"
          value={val}
        />
      </div>
      <div className="alert">
        <p className="message hide">Please provide a vaild email</p>
      </div>
      <div className="email-container-2">
        <svg
          className="textboxpic hide"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
        >
          <g fill="none" fill-rule="evenodd">
            <circle cx="12" cy="12" r="12" fill="#F96464" />
            <path
              fill="#FFF"
              fillRule="nonzero"
              d="M13.256 6v9.056h-2V6h2zm-.944 12.464c-.384 0-.699-.104-.944-.312a1.027 1.027 0 0 1-.368-.824c0-.33.125-.608.376-.832.25-.224.563-.336.936-.336.373 0 .68.112.92.336.24.224.36.501.36.832 0 .341-.117.616-.352.824-.235.208-.544.312-.928.312z"
            />
          </g>
        </svg>
        <button type="button" id="emailbutton" onClick={buttonClick}>
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="20">
            <path
              fill="none"
              stroke="#FFF"
              strokeWidth="2"
              d="M1 1l8.836 8.836L1 18.671"
            />
          </svg>
        </button>
      </div>
    </>
  );
}
