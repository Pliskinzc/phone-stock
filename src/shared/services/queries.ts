/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPhone = /* GraphQL */ `
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
export const listPhones = /* GraphQL */ `
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
