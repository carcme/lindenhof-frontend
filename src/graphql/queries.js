import { gql } from '@apollo/client';

const GET_MENUS = gql`
query {
  data {
    attributes {
      id
      title
      cost
      isSpecial
    }
  }
}
`;
export { GET_MENUS };
