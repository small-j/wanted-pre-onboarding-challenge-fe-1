import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { login, signUp } from "../lib/auth.api";

function useAuth() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  useEffect(() => {
    if (!token) navigate("/auth");
  }, [token, navigate]);

  const authSignUp = async (email: string, password: string) => {
    const res = await signUp({ email, password });
    if (res?.token) {
      console.log("????");
      localStorage.setItem("token", res.token);
      navigate("/");
    }
  };

  const authLogin = async (email: string, password: string) => {
    const res = await login({ email, password });

    if (res?.token) {
      localStorage.setItem("token", res.token);
      navigate("/");
    }
  };

  const authLogout = () => {
    localStorage.clear();
  };

  const getToken = () => {
    return token;
  };

  return {
    authSignUp,
    authLogin,
    authLogout,
    getToken,
  };
}

export default useAuth;
