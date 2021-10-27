import { UsersActionsType, UsersState } from 'types';

const initialState: UsersState = {
  data: [],
};

const users = (state = initialState, action: any) => {
  switch (action.type) {
    case UsersActionsType.SET_DATA_LIST:
      return {
        ...state,
        data: action.payload,
      };

    default:
      return state;
  }
};

export default users;
