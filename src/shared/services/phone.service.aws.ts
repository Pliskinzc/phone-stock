import { API, graphqlOperation } from 'aws-amplify';
import { createPhone, deletePhone, updatePhone } from './path-to-your-graphql-mutations';
import { listPhones } from './path-to-your-graphql-queries';

export async function fetchPhones() {
  try {
    const response = await API.graphql(graphqlOperation(listPhones));
    return response.data.listPhones.items;
  } catch (error) {
    console.error('Error fetching phones:', error);
    throw error;
  }
}

export async function addPhone(phone) {
  try {
    const response = await API.graphql(graphqlOperation(createPhone, { input: phone }));
    return response.data.createPhone;
  } catch (error) {
    console.error('Error adding phone:', error);
    throw error;
  }
}

export async function removePhone(phoneId) {
  try {
    await API.graphql(graphqlOperation(deletePhone, { input: { id: phoneId } }));
  } catch (error) {
    console.error('Error deleting phone:', error);
    throw error;
  }
}

export async function modifyPhone(phoneId, update) {
  try {
    const response = await API.graphql(graphqlOperation(updatePhone, { input: { id: phoneId, ...update } }));
    return response.data.updatePhone;
  } catch (error) {
    console.error('Error updating phone:', error);
    throw error;
  }
}
