import styled, { css } from "styled-components";

export const Input = styled.input`
  input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 1000px white inset !important;
    -webkit-text-fill-color: #000 !important;
  }
  border: 1px solid #333;
  border-radius: 4px;
  padding: 16px;
  font-family: "Pretendard";
  font-size: 20px;
  font-weight: 400;
  color: #fff;
  width: 600px;
  outline: none;
  &::placeholder {
    color: #444;
    font-size: 20px;
  }
  &:focus {
    border: 1px solid #fff;
  }
`;
