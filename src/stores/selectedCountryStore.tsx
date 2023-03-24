import { create } from "zustand";

interface Country {
  code: string;
  emoji: string;
  name: string;
  __typename: string;
}

interface ContinentState {
  continentCode: string;
  setContinentCode: (continentCode: string) => void;
  continentName: string;
  setContinentName: (continentName: string) => void;
  countries: Country[];
  setCountries: (countries: Country[]) => void;
}

const useStore = create<ContinentState>((set) => ({
  continentCode: "",
  setContinentCode: (continentCode) =>
    set((state) => ({
      ...state,
      continentCode
    })),

  continentName: "",
  setContinentName: (continentName) =>
    set((state) => ({
      ...state,
      continentName
    })),

  countries: [],
  setCountries: (countries) =>
    set((state) => ({
      ...state,
      countries
    }))
}));

export default useStore;
