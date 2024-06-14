import React from "react";
import "../../style/login.scss";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  return (
    <section className="login">
      <button>
        Login with Google <FcGoogle />
      </button>
    </section>
  );
};

export default Login;
