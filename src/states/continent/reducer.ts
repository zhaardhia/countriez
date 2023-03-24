import { ActionType, SelectedContinent } from './action';

type ActionT = {
  type: string,
  payload: SelectedContinent
}

function setContinentSelectedReducer(continent: {} | null = null, action: ActionT) {
  switch (action.type) {
    case ActionType.SET_CONTINENT:
      return action.payload.continent
    default:
      return continent
  }
}

export default setContinentSelectedReducer