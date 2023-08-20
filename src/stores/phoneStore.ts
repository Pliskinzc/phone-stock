// Local

// import { seed } from '@/shared/data/seed';
// import type { PhoneInterface, PhoneFormInterface } from '@/shared/interfaces';
// import { addPhone, deletePhone, fetchPhone, updatePhoneApi } from '@/shared/services/phone.service'
// import { defineStore } from 'pinia'
// import { ref } from 'vue';

// interface PhoneState {
//   phones: PhoneInterface[]
//   isLoading: boolean;
//   searchQuery: string;
// }

// export const usePhoneListStore = defineStore('phoneList', {
//   state: (): PhoneState => ({
//     phones: [],
//     isLoading: true,
//     searchQuery: ''
//   }),
//   getters: {
//     phoneList: (state: PhoneState): PhoneInterface[] => state.phones,
//     filteredPhoneList(state: PhoneState): PhoneInterface[] {
//       const query = state.searchQuery ? state.searchQuery.toLowerCase() : ''; // Fix here
//       return state.phones.filter((phone) => {
//         const model = phone.model ? phone.model.toLowerCase() : ''; // Fix here
//         const storage = phone.storage ? phone.storage.toLowerCase() : ''; // Fix here
//         const color = phone.color ? phone.color.toLowerCase() : ''; // Fix here
//         const imei = phone.imei ? phone.imei.toLowerCase() : ''; // Fix here
//         return model.includes(query) || storage.includes(query) || color.includes(query) || imei.includes(query);
//       });
//     }
//   },
//   actions: {
//     fetchPhone() {
//       const result = fetchPhone();
//       if(Array.isArray(result)){
//         this.phones = result
//       } else {
//         this.phones = [result]
//       }
//       this.isLoading = false
//     },
//     addPhone(phone: PhoneInterface) {
//     },
//     deletePhone(phoneId: string) {
//        deletePhone(phoneId)
//       this.phones = this.phones.filter(phone => phone._id !== phoneId)
//     },
//      updatePhone(phoneId: string, update: Partial<PhoneInterface>){

//       try {
//         const phoneIndex = this.phones.findIndex(p => p._id === phoneId)
//         const updatedPhone =  updatePhoneApi(phoneId, {
//           ...this.phones[phoneIndex],
//           ...update
//         })
//         this.phones[phoneIndex] = updatedPhone
//       } catch (error) {
//         console.log(error)
//       }


//     },
//     setSearchQuery(query: string) {
//       this.searchQuery = query.trim().replace(/\s+/g, ' ');
//     }
//   }
// })




// En ligne
// import { seed } from '@/shared/data/seed';
// import type { PhoneInterface, PhoneFormInterface } from '@/shared/interfaces';
// import { addPhone, deletePhone, fetchPhone, updatePhoneApi } from '@/shared/services/phone.service'
// import { defineStore } from 'pinia'

// interface PhoneState {
//   phones: PhoneInterface[]
//   isLoading: boolean;
//   searchQuery: string;
// }

// export const usePhoneListStore = defineStore('phoneList', {
//   state: (): PhoneState => ({
//     phones: [],
//     isLoading: true,
//     searchQuery: ''
//   }),
//   getters: {
//     phoneList: (state: PhoneState): PhoneInterface[] => state.phones,
//     filteredPhoneList(state: PhoneState): PhoneInterface[] {
//       const query = state.searchQuery ? state.searchQuery.toLowerCase() : ''; // Fix here
//       return state.phones.filter((phone) => {
//         const model = phone.model ? phone.model.toLowerCase() : ''; // Fix here
//         const storage = phone.storage ? phone.storage.toLowerCase() : ''; // Fix here
//         const color = phone.color ? phone.color.toLowerCase() : ''; // Fix here
//         const imei = phone.imei ? phone.imei.toLowerCase() : ''; // Fix here
//         return model.includes(query) || storage.includes(query) || color.includes(query) || imei.includes(query);
//       });
//     }
//   },
//   actions: {
//     async fetchPhone() {
//       const result = await fetchPhone();
//       if(Array.isArray(result)){
//         this.phones = result
//       } else {
//         this.phones = [result]
//       }
//       this.isLoading = false
//     },
//     async addPhone(phone: PhoneFormInterface) {
//       await addPhone({
//         ...phone,
//         editMode: false
//       })
//     },
//     async deletePhone(phoneId: string) {
//       await deletePhone(phoneId)
//       this.phones = this.phones.filter(phone => phone._id !== phoneId)
//     },
//     async updatePhone(phoneId: string, update: Partial<PhoneInterface>){

//       try {
//         const phoneIndex = this.phones.findIndex(p => p._id === phoneId)
//         const updatedPhone = await updatePhoneApi(phoneId, {
//           ...this.phones[phoneIndex],
//           ...update
//         })
//         this.phones[phoneIndex] = updatedPhone
//       } catch (error) {
//         console.log(error)
//       }


//     },
//     // seed() {
//     //   seed('phoneslist')
//     // },
//     setSearchQuery(query: string) {
//       this.searchQuery = query.trim().replace(/\s+/g, ' ');
//     }
//   }
// })

import { defineStore } from 'pinia';
import { fetchPhone, addPhone, deletePhone, updatePhoneApi } from '@/shared/services/phone.service.aws';
import type { PhoneFormInterface, PhoneInterface } from '@/shared/interfaces';

interface PhoneState {
  phones: PhoneInterface[];
  isLoading: boolean;
  searchQuery: string;
}

export const usePhoneListStore = defineStore('phoneList', {
  state: (): PhoneState => ({
    phones: [],
    isLoading: true,
    searchQuery: ''
  }),
  getters: {
    phoneList: (state: PhoneState): PhoneInterface[] => state.phones,
    filteredPhoneList(state: PhoneState): PhoneInterface[] {
      const query = state.searchQuery ? state.searchQuery.toLowerCase() : '';
      return state.phones.filter((phone) => {
        const model = phone.model ? phone.model.toLowerCase() : '';
        const storage = phone.storage ? phone.storage.toLowerCase() : '';
        const color = phone.color ? phone.color.toLowerCase() : '';
        const imei = phone.imei ? phone.imei.toLowerCase() : '';
        return model.includes(query) || storage.includes(query) || color.includes(query) || imei.includes(query);
      });
    }
  },
  actions: {
    async fetchPhone() {
      try {
        const phones = await fetchPhone();
        this.phones = phones;
        this.isLoading = false;
      } catch (error) {
        console.error('Error fetching phones:', error);
      }
    },
    async addPhone(phone: PhoneFormInterface) {
      try {
        const newPhone = await addPhone(phone);
        this.phones.push(newPhone);
      } catch (error) {
        console.error('Error adding phone:', error);
      }
    },
    async deletePhone(phoneId: string) {
      try {
        await deletePhone(phoneId);
        this.phones = this.phones.filter(phone => phone.imei !== phoneId);
      } catch (error) {
        console.error('Error deleting phone:', error);
      }
    },
    
    async updatePhone(phoneId: string, update: Partial<PhoneInterface>) {
      try {
        const phoneIndex = this.phones.findIndex(p => p.imei === phoneId);
        const updatedPhone = await updatePhoneApi(phoneId, update);
        this.phones[phoneIndex] = updatedPhone;
      } catch (error) {
        console.error('Error updating phone:', error);
      }
    },
    setSearchQuery(query: string) {
      this.searchQuery = query.trim().replace(/\s+/g, ' ');
    }
  }
});