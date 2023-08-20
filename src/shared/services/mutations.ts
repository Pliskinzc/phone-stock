export const createPhoneMutation = /* GraphQL */ `
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

export const updatePhoneMutation = /* GraphQL */ `
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

export const deletePhoneMutation = /* GraphQL */ `
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