import type { IPhoneModel, StorageCapacity, Color } from './types';

export interface PhoneInterface {
    _id: string,
    imei: string,
    model: IPhoneModel,
    storage: StorageCapacity,
    color: Color
    editMode: boolean
}

export interface PhoneFormInterface {
    _id?: string,
    imei: string,
    model: IPhoneModel,
    storage: StorageCapacity,
    color: Color
    editMode: boolean
}