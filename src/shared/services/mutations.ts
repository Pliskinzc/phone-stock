export const createPhone = /* GraphQL */ `
  mutation CreatePhone($input: CreatePhoneInput!) {
    createPhone(input: $input) {
      id
      imei
      model
      storage
      color
      editMode
      createdAt
      updatedAt
    }
  }
`;

export const updatePhone = /* GraphQL */ `
  mutation UpdatePhone($input: UpdatePhoneInput!) {
    updatePhone(input: $input) {
      id
      imei
      model
      storage
      color
      editMode
      createdAt
      updatedAt
    }
  }
`;

export const deletePhoneMutation = /* GraphQL */ `
  mutation DeletePhone($input: DeletePhoneInput!) {
    deletePhone(input: $input) {
      id
      imei
      model
      storage
      color
      editMode
      createdAt
      updatedAt
    }
  }
`;