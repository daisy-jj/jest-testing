"use client";
import { Input } from "@/styled";
import { Button, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import IconLogo from "../../public/logo.svg";
import Image from "next/image";

interface HomeProps {
  userName?: string | null;
}

export default function Home({ userName = null }: HomeProps) {
  const [clicked, setClicked] = useState(false);
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [isLoading]);

  const handleClick = () => {
    setClicked((prev) => !prev);
    setIsLoading(true);
  };

  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      width="100vw"
      height="100vh"
      gap={4}
    >
      <Image src={IconLogo} alt="logo" width={80} height={80} />
      <h1 style={{ fontSize: 60, margin: "40px 0" }}>UNIVA AI Platform</h1>
      {userName ? (
        <p style={{ fontSize: 36 }}>
          {userName}님 UNIVA AI Platform에 오신 것을 환영합니다.
        </p>
      ) : (
        <>
          <Input
            type="text"
            placeholder="아이디를 입력해 주세요."
            name="id"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          <Input
            type="password"
            placeholder="비밀번호를 입력해 주세요."
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            variant="contained"
            onClick={handleClick}
            sx={{ width: "600px", fontSize: 24 }}
          >
            로그인
          </Button>
          {/* {clicked && <p>로그인 버튼 클릭!</p>} */}
        </>
      )}
      {isLoading && <p>Loading...</p>}
    </Stack>
  );
}
