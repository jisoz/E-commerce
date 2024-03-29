import React, { useState, useRef } from "react";
import { useSelector } from "react-redux";
import { FaShieldAlt } from "react-icons/fa";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #efae45;
  min-height: 100vh;
`;
const Icon =styled.div`

display: flex;
justify-content: center;
align-items: center;
padding-top: 10px;


`
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: black;
  padding: 30px 65px;
  border-radius: 12px;
  row-gap: 20px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
`;

const Header = styled.header`
  height: 65px;
  width: 65px;
  background: #efae45;
  color: #fff;
  font-size: 2.5rem;
  border-radius: 50%;
`;

const H4 = styled.h4`
  font-size: 1.25rem;
  color: #ffffffe6;
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
  background: ${({ active }) => (active ? "#e7b15a" : "#ccc")};
  transition: all 0.2s ease;
  &:hover {
    background: ${({ active }) => (active ? "#eea530" : "#ccc")};
  }
`;

const OTPForm = () => {
  const [active, setActive] = useState(false);
  const [otpCode, setOtpCode] = useState("");
  const navigate=useNavigate();
  const globalotp=useSelector((state)=>state.otpcode.otpcode);
  const verifyid=useSelector((state)=>state.verify.id);
  const verifytoken=useSelector((state)=>state.verify.token);
  const inputs = Array.from({ length: 4 }, () => useRef());
  const handleInput = (e, index) => {
    const { value , key } = e.target;
    const allFilled = inputs.every((inputRef, i) => {
      if (i === index) return value && !isNaN(value) && value.length === 1;
      return inputRef.current.value && !isNaN(inputRef.current.value) && inputRef.current.value.length === 1;
    });

    if (allFilled) {
      setActive(true);
    } else {
      setActive(false);
    }
    if (key === "Backspace" && index > 0 && !value) {
        // If backspace is pressed and current input is empty, focus on the previous input
        inputs[index - 1].current.focus();
        return;
      }

    if (value && !isNaN(value) && value.length === 1) {
      if (index < inputs.length - 1) {
        inputs[index + 1].current.focus();
      }
    }else if (value === "") {
        setActive(false);
        if (index > 0) {
          inputs[index - 1].current.focus();
        }
      }
      if (key === "Backspace" && index === 0 && value === "") {
        inputs.forEach((inputRef) => {
          inputRef.current.value = "";
        });
      }
    const newOtpCode = inputs.map((inputRef) => inputRef.current.value).join("");
    setOtpCode(newOtpCode);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (parseInt(otpCode) === globalotp){
        navigate(`/reset-password/${verifyid}/${verifytoken}`);
        
    }else{
        console.log("not verified");
    }
    
    
  };

  return (
    <Container>
      <StyledForm onSubmit={handleSubmit}>
        <Header>
       <Icon><FaShieldAlt></FaShieldAlt></Icon> 
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
