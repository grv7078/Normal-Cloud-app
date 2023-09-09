import styled from "@emotion/styled";

export const MainWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 48px;
`;

export const FormWrapper = styled.div`
  margin: 0 auto;
  max-width: 550px;
  width: 100%;
  background: white;
`;

export const Form = styled.form``;

export const Field = styled.div`
  margin-bottom: 20px;
`;

export const Label = styled.label`
  display: block;
  font-weight: 500;
  font-size: 16px;
  color: #07074d;
  margin-bottom: 12px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px;
  border-radius: 6px;
  border: 1px solid #e0e0e0;
  background: white;
  font-weight: 500;
  font-size: 16px;
  color: #6b7280;
  outline: none;
  box-sizing: border-box;
`;

export const Button = styled.button`
  text-align: center;
  font-size: 16px;
  border-radius: 6px;
  padding: 14px 32px;
  border: none;
  font-weight: 600;
  background-color: #333;
  color: white;
  cursor: pointer;
  width: 100%;
  display: block;
`;
