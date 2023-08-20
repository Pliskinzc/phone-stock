import type { IPhoneModel, StorageCapacity, Color } from './types';

export interface PhoneInterface {
    _id: string,
    createdAt?: string,
    updatedAt?: string
    imei: string,
    model: IPhoneModel,
    storage: StorageCapacity,
    color: Color
    editMode: boolean
}

export interface PhoneFormInterface {
    _id?: string,
    createdAt?: string,
    updatedAt?: string
    imei: string,
    model: IPhoneModel,
    storage: StorageCapacity,
    color: Color
    editMode: boolean
}