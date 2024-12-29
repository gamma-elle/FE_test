import React, { useState } from 'react';
import styled from 'styled-components';

const Card = styled.div<{ active: boolean }>`
  position:relative;
  float:left;
  background-color: #ffffff;
  border: 1px solid ${props => props.active ? '#38a1ef' : '#cccccc'};
  border-radius: 5px;
  text-align: center;
  overflow:hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  min-height:70px;
  margin-left:10px;
  margin-top:10px;
  width:calc(20% - 14px);
`;

const Header = styled.div<{ active: boolean }>`
  width:100%;
  background-color: ${props => props.active ? '#38a1ef' : '#d7dbdf'};
  color: #ffffff;
  font-size: 12px;
  padding: 2px 0;
`;

const Name = styled.div`
  width:100%;
  font-size: 12px;
  color: #000000;
  margin: 8px 0;
`;

const Footer = styled.div`
  width:100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top:1px solid #38a1ef;
`;

const Button = styled.div<{ color: string, disabled: boolean }>`
  background-color: ${(props) => props.disabled ?props.color :'#d7dbdf'};
  color: #ffffff;
  border: none;
  border-radius: 3px;
  width: 20px;
  height: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10px;
  cursor: pointer;
  margin:2px;
  &:hover {
    opacity: 0.8;
  }
`;

const Count = styled.div`
font-size: 10px;
`;
const CardNoA = styled.div`
  position:relative;
  float:left;
  background-color: #ffffff;
  border: 1px solid #cccccc;
  border-radius: 5px;
  text-align: center;
  overflow:hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  min-height:70px;
  margin-left:10px;
  margin-top:10px;
  width:calc(20% - 12px);
`;

const HeaderNoA = styled.div`
  width:100%;
  background-color: #d7dbdf;
  color: #ffffff;
  font-size: 12px;
  padding: 2px 0;
`;
const NameNoA = styled.div`
  width:100%;
  font-size: 12px;
  color: #d7dbdf;
  margin: 8px 0;
`;
const ButtonNoA = styled.button`
  background-color: #d7dbdf;
  color: #ffffff;
  border: none;
  border-radius: 3px;
  width: 20px;
  height: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10px;
  margin:2px;
`;
const CountNoA = styled.div`
font-size: 10px;
  color: #d7dbdf;
`;
const FooterNoA = styled.div`
  width:100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top:1px solid #d7dbdf;
`;
const Student: React.FC<any> = ({ info, inx ,cntClick}) => {
  const handleAddClick = ()=>{
    let cnt = info.cnt+1;
    cntClick(inx,cnt);
  }
  const handleDecClick = ()=>{
    if(info.cnt < 1) return;
    let cnt = info.cnt-1;
    cntClick(inx,cnt);
  }
  return (
    !!info.active ?
      <Card active={info.active}>
        <Header active={info.active}>{inx + 1 < 10 ? `0${inx + 1}` : inx + 1}</Header>
        <Name>{info.name}</Name>
        <Footer >
          <Button color="#ff4d4f" disabled={info.cnt > 0} onClick={handleDecClick}>
            -1
          </Button>
          <Count>{info.cnt}</Count>
          <Button color="#52c41a" disabled={true} onClick={handleAddClick}>
            +1
          </Button>
        </Footer>
      </Card> :
      <CardNoA>
        <HeaderNoA>{inx + 1 < 10 ? `0${inx + 1}` : inx + 1}</HeaderNoA>
        <NameNoA>{info.name}</NameNoA>
        <FooterNoA >
          <ButtonNoA>-1</ButtonNoA>
          <CountNoA>{info.cnt}</CountNoA>
          <ButtonNoA>+1</ButtonNoA>
        </FooterNoA>
      </CardNoA>
  );
};

export default Student;