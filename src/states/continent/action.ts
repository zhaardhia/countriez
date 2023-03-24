type Continent = {
  code: String,
  name: String
}
type SelectedContinent = {
  continent: Continent
}

const ActionType = {
  SET_CONTINENT: 'SET_CONTINENT',
};

const setContinentSelected: {} = (continent: SelectedContinent) => {
  return {
    type: ActionType.SET_CONTINENT,
    payload: {
      continent
    }
  }
}

export {
  ActionType,
  setContinentSelected
};  export type { SelectedContinent };

