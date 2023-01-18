import React from "react";
import styled from "styled-components";

const FormInput = ({ id, labelName, placeholder, inputType, ...rest }) => {
  return (
    <ContainerStyled>
      <Label htmlFor={id}>{labelName}</Label>
      <Inputs
        type={inputType}
        placeholder={placeholder || "..."}
        id={id}
        {...rest}
      />
    </ContainerStyled>
  );
};

export default FormInput;

const ContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin-bottom: 10px;
`;
const Label = styled.label`
  font-weight: 500;
  display: flex;
  margin-bottom: 10px;
`;

const Inputs = styled.input`
  outline: none;
  width: 290px;
  height: 40px;
  border-radius: 10px;
  border: none;
`;
