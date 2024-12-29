import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { RootState } from '../../reducers/store';
import Student from './Student';
import { useDispatch } from 'react-redux';
import { getStudentList } from '../../actions';
const StudentContent = styled.div`
  flex: 1;
  overflow-y:auto;
  box-sizing: border-box;
  &::-webkit-scrollbar {
    width: 8px; 
  }

  &::-webkit-scrollbar-track {
    background: #f9f9f9; 
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: #c1c1c1; 
    border-radius: 10px;
    border: 2px solid #f9f9f9; 
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #a1a1a1;
  }
`;


const StudentCon = () => {
  const dispatch = useDispatch();
  const List = useSelector((state: RootState) => state.student.studentList);
  const changeCntData = (inx:number,num:number)=>{
    const list = [...List];
    list[inx] ={
      ...list[inx],
      cnt:num
    }
    dispatch(getStudentList([...list]));
  }
  return (
    <StudentContent>
      {List.map((info, index) => {
        return <Student info={info} inx={index} key={`st_${index}`} cntClick={changeCntData}/>;
      })}
    </StudentContent>
  );
};

export default StudentCon;