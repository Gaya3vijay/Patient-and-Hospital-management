import React, { useState } from "react";
import "../styles/loginAndSignupModules.css";
import { BUTTON_LABEL1, HEADER_LABEL1, HEADER_LABEL2, HEADER_LABEL3, HEADER_LABEL4, HEADER_LABEL5, HEADER_LABEL6, INPUT_LABEL1, INPUT_LABEL2, INPUT_LABEL3 } from "../constant/loginAndSignupConstant";

function LoginAndSignin() {
  const [active, setActive] = useState(false);

  return (
    <div>
      <div class={`wrapper ${active ? "active" : ""}`}>
        <span class="rotate-bg"></span>
        <span class="rotate-bg2"></span>

        <div class="form-box login">
          ,
          <h2 class="title animation" style={{ "--i": 0, "--j": 21 }}>
            {HEADER_LABEL1}
          </h2>
          <form action="#">
            <div class="input-box animation" style={{ "--i": 1, "--j": 22 }}>
              <input type="text" required />
              <label for="">{INPUT_LABEL1}</label>
              <i class="bx bxs-user"></i>
            </div>

            <div class="input-box animation" style={{ "--i": 2, "--j": 23 }}>
              <input type="password" required />
              <label for="">{ INPUT_LABEL2}</label>
              <i class="bx bxs-lock-alt"></i>
            </div>

            <button
              type="submit"
              class="btn animation"
              style={{ "--i": 3, "--j": 24 }}
            >
              {BUTTON_LABEL1}
            </button>

            <div class="linkTxt animation" style={{ "--i": 5, "--j": 25 }}>
              <p>
                {HEADER_LABEL6}{" "}
                <a
                  href="#"
                  class="register-link"
                  onClick={() => {
                    setActive(!active);
                  }}
                >
                  {HEADER_LABEL4}
                </a>
              </p>
            </div>
          </form>
        </div>

        <div class="info-text login">
          <h2 class="animation" style={{ "--i": 0, " --j": 20 }}>
            {HEADER_LABEL2}
          </h2>
          <p class="animation" style={{ "--i": 1, "--j": 21 }}>
            {HEADER_LABEL3}
          </p>
        </div>

        <div class="form-box register">
          <h2 class="title animation" style={{ "--i": 17, "--j": 0 }}>
           {HEADER_LABEL4}
          </h2>

          <form action="#">
            <div class="input-box animation" style={{ "--i": 18, "--j": 1 }}>
              <input type="text" required />
              <label for="">{INPUT_LABEL1}</label>
              <i class="bx bxs-user"></i>
            </div>

            <div class="input-box animation" style={{ "--i": 19, "--j": 2 }}>
              <input type="email" required />
              <label for="">{INPUT_LABEL3}</label>
              <i class="bx bxs-envelope"></i>
            </div>

            <div class="input-box animation" style={{ "--i": 20, "--j": 3 }}>
              <input type="password" required />
              <label for="">{INPUT_LABEL2}</label>
              <i class="bx bxs-lock-alt"></i>
            </div>

            <button
              type="submit"
              class="btn animation"
              style={{ "--i": 21, "--j": 4 }}
            >
              {HEADER_LABEL4}
            </button>

            <div class="linkTxt animation" style={{ "--i": 22, "--j": 5 }}>
              <p>
                {HEADER_LABEL5}{" "}
                <a
                  href="#"
                  class="login-link"
                  onClick={() => {
                    setActive(!active);
                  }}
                >
                  {HEADER_LABEL1}
                </a>
              </p>
            </div>
          </form>
        </div>

        <div class="info-text register">
          <h2 class="animation" style={{ "--i": 17, "--j": 0 }}>
           {HEADER_LABEL2}
          </h2>
          <p class="animation" style={{ "--i": 18, "--j": 1 }}>
           {HEADER_LABEL3}
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginAndSignin;
