import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { RootState } from '../../reducers/store';

const GroupList = styled.div`
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
const GroupName = styled.div`
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
    width:calc(20% - 14px);
    color: #cccccc;
`;

const Group = () => {
    const List = useSelector((state: RootState) => state.group.groupName);
    return (
        <GroupList>
            {List.map((info, index) => {
                return <GroupName key={`gn_${index}`}>{info}</GroupName>;
            })}
        </GroupList>
    );
};

export default Group;