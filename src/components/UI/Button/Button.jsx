import React from "react";
import styled from "styled-components";

const Button = (props) => {
  return (
    < Btn onClick={props.onClick}  >
      {props.title}
    </ Btn>  )
};

export default Button;

const Btn = styled.button`
  display: flex;
 margin-left: 230px;
 padding: 15px 30px;
  width: 228px;
  height: 51px;
  background: #4a026b;
  border-radius: 10px;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
  outline: none;
  border-style: none;
`