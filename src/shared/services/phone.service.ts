// Mode local

// import type { PhoneInterface, PhoneFormInterface } from './../interfaces';

// const BASE_URL = 'https://restapi.fr/api/phoneslist';

// export function fetchPhone(): PhoneInterface[] | PhoneInterface {
//     return [
//         {
//             _id:'123',
//             editMode: false,
//             imei: '525484152145100 / 01',
//             model: 'iPhone 14 Pro Max',
//             storage: '256GO',
//             color: 'Or'
//         },
//         {
//             _id:'234',
//             editMode: false,
//             imei: '8467145467444 / 00',
//             model: 'iPhone 13 Pro Max',
//             storage: '128GO',
//             color: 'Argent'
//         },
//         {
//             _id:'345',
//             editMode: false,
//             imei: '05154484251878 / 01',
//             model: 'iPhone 11 Pro',
//             storage: '64GO',
//             color: 'Graphite'
//         },
//         {
//             _id:'456',
//             editMode: false,
//             imei: '525484152145100 / 01',
//             model: 'iPhone XR',
//             storage: '64GO',
//             color: 'Jaune'
//         }
//     ];
// }

// export function addPhone(phone: PhoneFormInterface): PhoneFormInterface {
//     const newPhone = {
//         _id: 'new-phone-id',
//         ...phone,
//         editMode: false
//     };
//     return newPhone;
// }

// export function deletePhone(phoneId: string): string {
//     // Simuler la suppression du téléphone
//     return phoneId;
// }

// export function updatePhoneApi(phoneId: string, phone: Partial<PhoneFormInterface>): PhoneInterface {
//     // Simuler la mise à jour du téléphone
//     const updatedPhone = {
//         _id: phoneId,
//         ...phone
//     };
//     return updatedPhone as PhoneInterface;
// }

// Mode en ligne

import type { PhoneInterface, PhoneFormInterface } from './../interfaces';

const BASE_URL = 'X'

export async function fetchPhone(): Promise<PhoneInterface[] | PhoneInterface> {
    return await (await fetch(BASE_URL)).json()
}

export async function addPhone(phone: PhoneFormInterface): Promise<PhoneFormInterface> {
    const newPhone = await (await fetch(BASE_URL, {
        method: 'POST',
        body: JSON.stringify(phone),
        headers: {
            'Content-Type': 'application/json'
        }
    })).json()
    return newPhone
}

export async function deletePhone(phoneId: string): Promise<string> {
    await fetch(`${BASE_URL}/${phoneId}`, {
        method: 'DELETE'
    })
    return phoneId
}

const modifiedPhone: Partial<PhoneFormInterface>= {
    imei: '000',
    model: 'iPhone 6',
    storage: '64GO',
    color: 'Argent',
    editMode: false
}

export async function updatePhoneApi(phoneId: string ,phone: Partial<PhoneFormInterface>): Promise<PhoneInterface> {
    const updatedPhone = await (await fetch(`${BASE_URL}/${phoneId}`, {
        method: 'PATCH',
        body: JSON.stringify(phone),
        headers: {
            'Content-Type': 'application/json'
        }
    })).json()
    return updatedPhone
}



// export async function updatePhoneApi(phoneId: string ,phone: Partial<PhoneFormInterface>): Promise<PhoneInterface> {
//     phoneId = '64de8428426896b041a69313'
//     phone = modifiedPhone
//     const updatedPhone = await (await fetch(`${BASE_URL}/${phoneId}`, {
//         method: 'PATCH',
//         body: JSON.stringify(phone),
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     })).json()
//     return updatedPhone
// }

