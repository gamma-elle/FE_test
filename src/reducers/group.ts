export interface GroupState {
  groupName: string[];
}

const initialState: GroupState = {
  groupName: []
};

const groupReducer = (
  state: GroupState = initialState,
  action: any
): GroupState => {
  switch (action.type) {
    case 'GROUP_NAME':
      return {
        ...state,
        groupName: action.groupName,
      };
    default:
      return state;
  }
};

export default groupReducer;