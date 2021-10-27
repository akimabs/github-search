import { UsersActionsType } from 'types';

export const setDataList = (payload: any[]) => ({
  type: UsersActionsType.SET_DATA_LIST,
  payload,
});
