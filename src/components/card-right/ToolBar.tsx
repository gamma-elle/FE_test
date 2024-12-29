import React, { useState } from "react";
import styled from "styled-components";

const Bar = styled.div`
  position: absolute;
  margin:5px;
  top: 25px;
  right: 0;
  background-color: #fff;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 10px;
  z-index: 10;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const ToolbarButton = styled.button`
  background-color: #f4f4f4;
  border: none;
  border-radius: 4px;
  padding: 5px 10px;
  cursor: pointer;
  &:hover {
    background-color: #e0e0e0;
  }
`;

const Toolbar = () => {
  return (
    <Bar>
      <ToolbarButton>Action 1</ToolbarButton>
      <ToolbarButton>Action 2</ToolbarButton>
      <ToolbarButton>Action 3</ToolbarButton>
    </Bar>
  );
};

export default Toolbar;