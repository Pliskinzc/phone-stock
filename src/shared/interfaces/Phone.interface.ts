import type { IPhoneModel, StorageCapacity, Color } from './types';

export interface PhoneInterface {
    imei: string,
    model: IPhoneModel,
    storage: StorageCapacity,
    color: Color
    editMode: boolean
}

export interface PhoneFormInterface {
    imei: string,
    model: IPhoneModel,
    storage: StorageCapacity,
    color: Color
    editMode: boolean
}