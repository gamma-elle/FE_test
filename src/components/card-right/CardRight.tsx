import React, { useState } from 'react';
import styled from 'styled-components';
import StudentCon from './StudentCon';
import Group from './Group';
import ToolBar from './ToolBar';
// Container 樣式
const Container = styled.div<{show:boolean}>`
  border-radius: 10px;
  flex: 1;
  min-width: 350px;
  overflow: hidden;
  background-color: #ebebeb;
  flex-direction: column;
  display:${props=>props.show?'flex':'none'}
`;

// Header 樣式
const Bar = styled.div`
  display: flex;
  align-items: center;
  height: 30px;
  padding: 1% 5%;
  margin: 0px 0 10px;
`;

const CloseIcon = styled.div`
  display: flex;
  justify-content: end;
  padding: 3.5%;
  font-size: 12px;
  cursor: pointer;
`;

const Info = styled.div`
  display: flex;
  align-items: center;
`;

const MemberIcon = styled.div`
  padding: 3px;
  margin-right: 10px;
`;

const Label = styled.div`
  font-weight: bold;
  font-size: 20px;
  margin-right: 10px;
`;

const Member = styled.div`
  font-weight: bold;
  font-size: 16px;
`;

const TabBar = styled.div`
  display: flex;
  margin: 0 5%;
  height: 32px;
  width: 90%;
  position: relative;
`;

const Tab = styled.div<{ inx?: number; activeInx?: number }>`
  height: 32px;
  line-height: 32px;
  text-align: center;
  border-radius: 5px 5px 0 0;
  min-width: 110px;
  font-weight: bold;
  font-size: 14px;
  background-color: ${(props) =>
    props.inx === props.activeInx ? '#ffffff' : '#d6d6d6'};
  color: ${(props) =>
    props.inx === props.activeInx ? '#38a1ef' : '#000000'};
  box-shadow: ${(props) =>
    props.inx === props.activeInx ? 'none' : 'inset 0 -2px 4px rgba(0, 0, 0, 0.1)'};
  cursor: pointer;
  position: relative;
  margin-right: 4px;
`;

const TabContent = styled.div`
  padding:13px 3px 10px 10px;
  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1);
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const TooBarIcon = styled.div`
  position: absolute;
  right: 0;
  padding: 7px 0;
  cursor: pointer;
`;


const CardRight = () => {
  const [tabIndex, setTabIndex] = useState<number>(0);
  const [show,setShow] = useState<boolean>(true);
  const [showToolbar, setShowToolbar] = useState(false);
  const handleIconClick = () => {
    setShowToolbar((prev) => !prev);
  };
  const handleClick = (inx: number) => {
    if (tabIndex === inx) return;
    setTabIndex(inx);
  };
  const handleClose =()=>{
    setShow(false);
  }
  return (
    <Container show={show}>
      <CloseIcon className="pi pi-times" onClick={handleClose}/>
      <Bar>
        <Info>
          <Label>302 Science</Label>
          <MemberIcon className="pi pi-user" />
          <Member>16/30</Member>
        </Info>
      </Bar>
      <TabBar>
        <Tab inx={0} activeInx={tabIndex} onClick={() => handleClick(0)}>
          Student List
        </Tab>
        <Tab inx={1} activeInx={tabIndex} onClick={() => handleClick(1)}>
          Group
        </Tab>
        <TooBarIcon className="pi pi-ellipsis-v" onClick={handleIconClick}/>
        {showToolbar&&<ToolBar/>}
      </TabBar>
      <TabContent>
        {
          tabIndex===0&&<StudentCon/>
        }
        {
          tabIndex===1&&<Group/>
        }
      </TabContent>
    </Container>
  );
};

export default CardRight;