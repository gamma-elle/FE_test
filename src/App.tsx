import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { getGroup,getStudentList } from './actions';
import Bg from './asset/images/bg.svg';
import CardLeft from './components/CardLeft';
import CardRight from './components/card-right/CardRight';
const Container = styled.div`
  width:100vw;
  height:100vh;
  background-image: url(${Bg});
  background-size: cover;
  background-position: center;
  padding:1%;
  box-sizing: border-box;
  display: flex; 
  flex-direction: row;
  justify-items: left;
  min-height:340px;
  min-width:500px;
`;

const App= () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data.json'); // 請求 API 或靜態文件
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        dispatch(getGroup(data.group)); 
        dispatch(getStudentList([...data.student]));
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    };

    fetchData();
  }, [dispatch]);
  return (
    <Container>
      <CardLeft />
      <CardRight />
    </Container>
  );
};

export default App;
