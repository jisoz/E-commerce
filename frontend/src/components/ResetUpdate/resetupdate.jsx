import React, { useState } from "react";
import styled from "styled-components";
import { useResetpasswordMutation } from "../../redux/api/usersApiSlice";
import { useNavigate, useParams } from 'react-router-dom';

const Section = styled.section`
  background: #efae45;
  width: 100vw;
  @media (min-width: 768px) {
    background: #efae45;
    min-height: 100vh;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px;
  @media (min-width: 768px) {
    margin-top: 0;
    padding: 32px;
  }
`;

const Card = styled.div`
  background: black;
  border-radius: 8px;
  color: #fff;
  padding: 24px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  @media (min-width: 768px) {
    max-width: 400px;
    width: 100%;
  }
`;

const Title = styled.h2`
  margin-bottom: 8px;
  font-size: 1.5rem;
  font-weight: bold;
`;

const Form = styled.form`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Label = styled.label`
  margin-bottom: 4px;
  font-size: 0.875rem;
  font-weight: bold;
`;

const Input = styled.input`
  height: 40px;
  padding: 8px;
  border-radius: 4px;
  border: 3px solid #ddd;
  ${({ isValid }) => isValid ? 'border-color: green;' : 'border-color: red;'}

`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
`;

const CheckboxInput = styled.input`
  margin-right: 8px;
  
`;

const CheckboxLabel = styled.label`
  font-size: 0.875rem;
  
`;

const ResetButton = styled.button`
  margin-top: 16px;
  background: #efae45;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;  
  font-weight: bold;
  transition: background 0.3s;
  &:hover {
    background: #b37a00;
  }
`;

const Ahref=styled.a`
color: #efae45;
text-decoration: underline;

`
const Resetupdate = () => {
  const { id, token } = useParams();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const navigate=useNavigate();
const [Reset]=useResetpasswordMutation();

const handlepasswordChange=(e)=>{
  setPassword(e.target.value);
  if (e.target.value !== confirmPassword) {
    setPasswordsMatch(false);
  } else {
    setPasswordsMatch(true);
  }
}
const handlepasswordconfirmChange=(e)=>{
  setConfirmPassword(e.target.value);
  if (e.target.value !== password) {
    setPasswordsMatch(false);
  } else {
    setPasswordsMatch(true);
  }
}
  const changePassword = async(e) => {
    e.preventDefault();
    const res=await Reset({id,token,password}).unwrap();
    if (res.error) {
      // Handle error
      console.error(res.error.message);
    } else {
      // Handle success
      console.log(res);
      navigate("/");
      
    }

   
  }

  return (
    <Section>
      <Container>
        <Card>
          <Title>Change Password</Title>
          <Form>
            <Label htmlFor="password">New Password</Label>
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              required
              isValid={passwordsMatch}
              onChange={handlepasswordChange}
            />
            <Label htmlFor="confirm-password">Confirm Password</Label>
            <Input
              type="password"
              name="confirm-password"
              id="confirm-password"
              placeholder="••••••••"
              required
              isValid={passwordsMatch}
              onChange={handlepasswordconfirmChange}
            />
            <CheckboxContainer>
              <CheckboxInput
                id="newsletter"
                type="checkbox"
                required
              />
              <CheckboxLabel htmlFor="newsletter">
                I accept the <Ahref>Terms and Conditions</Ahref>
              </CheckboxLabel>
            </CheckboxContainer>
          </Form>
          <ResetButton type="submit" onClick={changePassword}>Reset Password</ResetButton>
        </Card>
      </Container>
    </Section>
  );
};

export default Resetupdate;
