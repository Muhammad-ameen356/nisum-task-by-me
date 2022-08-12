import React, { useContext, useState } from "react";
import { Col, Container } from "react-bootstrap";
import UserContext from "src/contexts/userContext";
import style from "./style.module.scss";

const Login = () => {
  const { login } = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className={style.createAccountMainContainer}>
      <Container>
        <Col>
          <div className={style.createAccountBox}>
            <div className={style.createAccountForm}>
              <Col md={12}>
                <div className={style.sendMessageMainContainer}>
                  <h2>Sign In</h2>
                  <div className={style.inputDiv}>
                    <input
                      type="email"
                      placeholder="Email address*"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className={style.inputDiv}>
                    <input
                      type="password"
                      placeholder="Password*"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <p className={`p-16-500 ${style.privacyPolicy}`}>
                    Your personal data will be used to support your experience
                    throughout this website, to manage access to your account,
                    and for other purposes described in our
                    <span className={style.privacyPolicyText}>
                      Privacy policy.
                    </span>
                  </p>
                  <button
                    className={`${style.button160} ${style.registerBtn}`}
                    onClick={() => login(email, password)}
                  >
                    Sign In
                  </button>
                  <p className={`p-16 ${style.alreadtHaveAccount}`}>
                    Don't have an account?
                    <a>
                      <span className={style.loginText}>&nbsp;Sign In</span>
                    </a>
                  </p>
                </div>
              </Col>
            </div>
          </div>
        </Col>
      </Container>
    </div>
  );
};

export default Login;
