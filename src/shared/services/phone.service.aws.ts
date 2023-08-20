import { API, graphqlOperation } from 'aws-amplify';
import { createPhone, deletePhoneMutation, updatePhone } from './mutations';
import { getPhoneQuery, listPhonesQuery } from './queries';
import type { PhoneInterface, PhoneFormInterface } from './../interfaces';

export async function fetchPhone(): Promise<PhoneInterface[]> {
  try {
    const response = await API.graphql(graphqlOperation(listPhonesQuery));
    const phones: PhoneInterface[] = (response as any).data.listPhones.items;
    return phones;
  } catch (error) {
    console.error('Error fetching phones:', error);
    throw error;
  }
}

export async function addPhone(phone: PhoneFormInterface): Promise<PhoneFormInterface> {
  try {
    const response = await API.graphql(graphqlOperation(createPhone, { input: phone }));
    const newPhone: PhoneFormInterface = (response as any).data.createPhone;
    return newPhone;
  } catch (error) {
    console.error('Error adding phone:', error);
    throw error;
  }
}

export async function deletePhone(phoneId: string): Promise<string> {
  try {
    await API.graphql(graphqlOperation(deletePhoneMutation, { input: { id: phoneId } }));
    return phoneId;
  } catch (error) {
    console.error('Error deleting phone:', error);
    throw error;
  }
}

export async function updatePhoneApi(phoneId: string, phone: Partial<PhoneFormInterface>): Promise<PhoneInterface> {
  try {
    const response = await API.graphql(graphqlOperation(updatePhone, { input: { id: phoneId, ...phone } }));
    const updatedPhone: PhoneInterface = (response as any).data.updatePhone;
    return updatedPhone;
  } catch (error) {
    console.error('Error updating phone:', error);
    throw error;
  }
}