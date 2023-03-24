import { gql } from "@apollo/client";

export const ALL_CONTINENTS = gql`
  {
    continents{
      name
      code
      countries{
        code
        name
        emoji
      }
    }
  }
`;

export const GET_ALL_COUNTRIES_BY_CONTINENT_CODE = gql`
  query getAllCountriesByContinentCode($continentCode: String!) {
    continent(code: $continentCode) {
      name
      code
      countries{
        code
        name
      }
    }
  }
`;

export const GET_COUNTRY_BY_CODE = gql`
  query getCountryByCode($countryCode: String!) {
    country(code: $countryCode) {
      code
      name
      capital
      currencies
      currency
      emoji
      languages{
        code
        name
        native
      }
      native
      phone
      phones
      states{
        code
        name
      }
    }
  }
`;