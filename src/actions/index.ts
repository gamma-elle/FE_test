export const getGroup = (groupName: string[])=> ({
    type: 'GROUP_NAME',
    groupName: groupName
  });

  export const getStudentList = (List:any[])=> ({
    type: 'GET_STUDENT_LIST',
    studentList: List
  });
