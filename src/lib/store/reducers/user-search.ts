import { UsersActionsType, UsersState } from 'types';

const initialState: UsersState = {
  data: [],
};

const usersSearch = (state = initialState, action: any) => {
  switch (action.type) {
    case UsersActionsType.SET_DATA_SEARCH:
      return {
        ...state,
        data: action.payload,
      };

    default:
      return state;
  }
};

export default usersSearch;
