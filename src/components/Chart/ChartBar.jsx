import React from "react";
import styled from "styled-components";

const ChartBar = ({ maximumPrice, currentPrice, label }) => {
  const fillHeight = (100 * currentPrice) / maximumPrice;
  return (
    <ChartBarStyled>
      <ChartBarInnerStyled>
        <ChartBarFillStyled
          style={{ height: ` ${fillHeight}% ` }}
        ></ChartBarFillStyled>
      </ChartBarInnerStyled>

      <ChartBarLabelStyled>{label}</ChartBarLabelStyled>
    </ChartBarStyled>
  );
};

export default ChartBar;

const ChartBarStyled = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ChartBarInnerStyled = styled.div`
  height: 100%;
  width: 100%;
  border: 1px solid #313131;
  border-radius: 12px;
  background-color: #c3b4f3;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;
const ChartBarFillStyled = styled.div`
  background-color: #4826b9;
  width: 100%;
  transition: all 0.3 ease-out;
`;

const ChartBarLabelStyled = styled.p`
  font-weight: bold;
  font-size: 0.5rem;
  text-align: center;
`;
