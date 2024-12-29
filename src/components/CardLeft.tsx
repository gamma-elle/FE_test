import React, { useEffect,useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { QRCodeSVG } from 'qrcode.react';
const Container = styled.div<{show:boolean}>`
  padding: 1%;
  margin-right:1%;
  border-radius:10px;
  min-width:300px; 
  flex:1;
  overflow:hidden;
  background-color:#ebebeb;
  display:${props=>props.show?'block':'none'};
`;
const Bar = styled.div`
  height:30px;
  padding: 1%;
  padding-left: 3%;
`;
const CloseIcon = styled.div`
  position:relative;
  font-size:12px;
  float: right;
  cursor: pointer;
`;
const BackClassList = styled.div`
  position:relative;
  float: left;
  font-size:12px;
  height:24px;
  cursor: pointer;
`;
const BackClassListIcon = styled.div`
  position:relative;
  top:3px;
  float:left;
  padding:3px;
`;
const BackClassListLabel = styled.div`
  height:24px;
  line-height:24px;
  white-space: nowrap;
`;
const Header = styled.div`
  height:30px;
  line-height:30px;
  font-weight:bold;
  font-size:20px;
  width:100%;
  padding-left: 5%;
  margin-bottom:2%;
`;
const InfoContent = styled.div`
  width:auto;
  height:30px;
  color:#000000;
  font-size:14px;
  font-weight:bold;
  position:relative;
  float:left;
  margin-right:20px;
  margin-left:2%;
`;
const CopyIcon = styled.div`
  margin-left:5px;
  background-color:#38a1ef;
  border-radius:3px;
  width:22px;
  height:22px;
  color:#ffffff;
  text-align:center;
  line-height:21px;
  font-size:14px;
  cursor: pointer;
`;
const QRCodeContent = styled.div`
  display:flex;
  justify-content:center;
  align-items: center;
  width:100%;
`;
const VersionContent = styled.div`
  display:flex;
  justify-content:center;
  align-items: center;
  width:100%;
  height:16px;
  line-height:16px;
  font-size:8px;
`;
const CardLeft = () => {
  const [show,setShow] = useState<boolean>(true);
  const handleCopy =  async (url:string)=>{
    try {
      await navigator.clipboard.writeText(url);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  }
  const handleClose =()=>{
    setShow(false);
  }
    return (
    <Container show={show}>
      <Bar>
        <BackClassList>
          <BackClassListIcon className="pi pi-angle-left" />
          <BackClassListLabel>Back to Class List</BackClassListLabel>
        </BackClassList>
        <CloseIcon className="pi pi-times" onClick={handleClose}/>
      </Bar>
      <Header>Join 302 Science</Header>
      <Bar>
        <InfoContent>
          ID:X58E9647
          <CopyIcon className="pi pi-copy" onClick={()=>handleCopy('X58E9647')}/>
        </InfoContent>
        <InfoContent>
          Link
          <CopyIcon className="pi pi-copy" onClick={()=>handleCopy('https://www.classswift.viewsonic.io/')}/>
        </InfoContent>
      </Bar>
      <QRCodeContent>
        <QRCodeSVG
          value="https://www.classswift.viewsonic.io/"
          width={300}
          height={300}
          style={{
            backgroundColor:"#ffffff",
            border: '15px solid #ffffff',
            borderRadius: '5px'
          }} />
      </QRCodeContent>
      <VersionContent>Version 1.1.7</VersionContent>
    </Container>
  );
};

export default CardLeft;