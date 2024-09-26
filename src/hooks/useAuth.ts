import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { customAxios } from "@src/api/axios";

const useAuth = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [error, setError] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [refreshToken, setRefreshToken] = useState<string | null>(null);

  const navigate = useNavigate();

  // 쿠키에서 사용자 정보 및 토큰 초기화
  useEffect(() => {
    const storedId = Cookies.get("id");
    const storedAccessToken = Cookies.get("accessToken");
    const storedRefreshToken = Cookies.get("refreshToken");

    if (storedId) {
      setId(storedId);
      setIsLoggedIn(true);
    }

    if (storedAccessToken) {
      setAccessToken(storedAccessToken);
    }

    if (storedRefreshToken) {
      setRefreshToken(storedRefreshToken);
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

      // 쿠키에 사용자 정보 및 토큰 저장
      Cookies.set("id", id, { expires: 7 }); // 7일 동안 유효
      Cookies.set("accessToken", response.data.accessToken, { expires: 7 });
      Cookies.set("refreshToken", response.data.refreshToken, { expires: 7 });

      setAccessToken(response.data.accessToken);
      setRefreshToken(response.data.refreshToken);

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
    setAccessToken(null);
    setRefreshToken(null);

    alert("로그아웃되었습니다.");

    // 쿠키에서 사용자 정보 및 토큰 제거
    Cookies.remove("id");
    Cookies.remove("accessToken");
    Cookies.remove("refreshToken");
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
