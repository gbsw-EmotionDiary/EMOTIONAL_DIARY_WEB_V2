import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { customAxios } from "@src/api/axios";

const useAuth = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [error, setError] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();

  // 로컬 스토리지에서 사용자 정보 초기화
  useEffect(() => {
    const storedId = localStorage.getItem("id");
    if (storedId) {
      setId(storedId);
      setIsLoggedIn(true);
    }
  }, []);

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

      const response = await customAxios.post("/api/user/signin", {
        id,
        password,
      });

      setName(response.data.name);
      setIsLoggedIn(true);

      // 로컬 스토리지에서 사용자 정보 저장
      localStorage.setItem("id", id);

      alert("로그인이 완료되었습니다.");
      navigate("/home");
    } catch (error: any) {
      setError(true);
      console.log(error.response.data);
      return;
    }
  };

  const handleLogout = () => {
    setId("");
    setName("");
    setPassword("");
    setPasswordCheck("");
    setIsLoggedIn(false);

    alert("로그아웃되었습니다.");

    // 로컬 스토리지에서 사용자 정보 제거
    localStorage.removeItem("id");
  };

  return {
    id,
    name,
    password,
    passwordCheck,
    error,
    isLoggedIn,
    setId,
    setName,
    setPassword,
    setPasswordCheck,
    setError,
    handleSignUp,
    handleSignIn,
    handleLogout,
  };
};
export default useAuth;
