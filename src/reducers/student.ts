export interface StudentState {
  studentList: any[];
}

const initialState: StudentState = {
  studentList: []
};

const studentReducer = (
  state: StudentState = initialState,
  action: any
): StudentState => {
  switch (action.type) {
    case 'GET_STUDENT_LIST':
      return {
        ...state,
        studentList: action.studentList,
      };
    default:
      return state;
  }
};

export default studentReducer;