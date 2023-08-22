/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPhone = /* GraphQL */ `
  mutation CreatePhone(
    $input: CreatePhoneInput!
    $condition: ModelPhoneConditionInput
  ) {
    createPhone(input: $input, condition: $condition) {
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
export const updatePhone = /* GraphQL */ `
  mutation UpdatePhone(
    $input: UpdatePhoneInput!
    $condition: ModelPhoneConditionInput
  ) {
    updatePhone(input: $input, condition: $condition) {
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
export const deletePhone = /* GraphQL */ `
  mutation DeletePhone(
    $input: DeletePhoneInput!
    $condition: ModelPhoneConditionInput
  ) {
    deletePhone(input: $input, condition: $condition) {
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
