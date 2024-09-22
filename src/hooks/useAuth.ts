import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { customAxios } from "@src/api/axios";

const useAuth = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const handleSignUp = async (e: any) => {
    e.preventDefault();

    try {
      if (!id || !password || !passwordCheck) {
        setError(true);
        alert("빈칸이 있습니다.");
        return;
      }

      if (password !== passwordCheck) {
        setError(true);
        alert("비밀번호가 일치하지 않습니다.");
        return;
      }

      await customAxios.post("/api/user/signup", {
        id,
        name,
        password,
      });

      alert("회원가입이 완료되었습니다.");
      navigate("/signIn");
    } catch (error: any) {
      if (error.response && error.response.data) {
        setError(true);
        console.log(error.response.data);
        return;
      }
    }
  };

  const handleSignIn = async (e: any) => {
    e.preventDefault();

    try {
      if (!id || !password) {
        setError(true);
        alert("빈칸이 있습니다.");
        return;
      }

      await customAxios.post("/api/user/signin", {
        id,
        password,
      });

      alert("로그인이 완료되었습니다.");
      navigate("/");
    } catch (error: any) {
      setError(true);
      console.log(error.response.data);
      return;
    }
  };

  return {
    id,
    name,
    password,
    passwordCheck,
    error,
    setId,
    setName,
    setPassword,
    setPasswordCheck,
    setError,
    handleSignUp,
    handleSignIn,
  };
};
export default useAuth;
