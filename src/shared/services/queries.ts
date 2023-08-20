export const getPhoneQuery = /* GraphQL */ `
  query GetPhone($id: ID!) {
    getPhone(id: $id) {
      id
      imei
      model
      storage
      color
      editMode
      createdAt
      updatedAt
      __typename
    }
  }
`;

export const listPhonesQuery = /* GraphQL */ `
  query ListPhones(
    $filter: ModelPhoneFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPhones(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        imei
        model
        storage
        color
        editMode
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;