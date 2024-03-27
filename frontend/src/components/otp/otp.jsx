import React, { useState, useRef } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #4070f4;
  min-height: 100vh;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #fff;
  padding: 30px 65px;
  border-radius: 12px;
  row-gap: 20px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
`;

const Header = styled.header`
  height: 65px;
  width: 65px;
  background: #4070f4;
  color: #fff;
  font-size: 2.5rem;
  border-radius: 50%;
`;

const H4 = styled.h4`
  font-size: 1.25rem;
  color: #333;
  font-weight: 500;
`;

const InputField = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 10px;
`;

const Input = styled.input`
  height: 45px;
  width: 42px;
  border-radius: 6px;
  outline: none;
  font-size: 1.125rem;
  text-align: center;
  border: 1px solid #ddd;
`;

const Button = styled.button`
  margin-top: 25px;
  width: 100%;
  color: #fff;
  font-size: 1rem;
  border: none;
  padding: 9px 0;
  cursor: pointer;
  border-radius: 6px;
  pointer-events: auto;
  background: ${({ active }) => (active ? "#6e93f7" : "#ccc")};
  transition: all 0.2s ease;
  &:hover {
    background: ${({ active }) => (active ? "#0e4bf1" : "#ccc")};
  }
`;

const OTPForm = () => {
  const [active, setActive] = useState(false);
  const [otpCode, setOtpCode] = useState("");
  const globalotp=useSelector((state)=>state.otpcode.otpcode);
  const inputs = Array.from({ length: 4 }, () => useRef());
  const handleInput = (e, index) => {
    const { value } = e.target;
    const allFilled = inputs.every((inputRef, i) => {
      if (i === index) return value && !isNaN(value) && value.length === 1;
      return inputRef.current.value && !isNaN(inputRef.current.value) && inputRef.current.value.length === 1;
    });

    if (allFilled) {
      setActive(true);
    } else {
      setActive(false);
    }

    if (value && !isNaN(value) && value.length === 1) {
      if (index < inputs.length - 1) {
        inputs[index + 1].current.focus();
      }
    }

    const newOtpCode = inputs.map((inputRef) => inputRef.current.value).join("");
    setOtpCode(newOtpCode);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting OTP code:", otpCode);
    console.log("Submitting OTP global:", globalotp);
    
    
  };

  return (
    <Container>
      <StyledForm onSubmit={handleSubmit}>
        <Header>
          <i className="bx bxs-check-shield"></i>
        </Header>
        <H4>Enter OTP Code</H4>
        <InputField>
          {inputs.map((inputRef, index) => (
            <Input
              key={index}
              ref={inputRef}
              type="text"
              maxLength={1}
              onChange={(e) => handleInput(e, index)}
            />
          ))}
        </InputField>
        <Button type="submit" disabled={!active} active={active}>
          Verify OTP
        </Button>
      </StyledForm>
    </Container>
  );
};

export default OTPForm;
