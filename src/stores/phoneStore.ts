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
import { seed } from '@/shared/data/seed';
import type { PhoneInterface, PhoneFormInterface } from '@/shared/interfaces';
import { addPhone, deletePhone, fetchPhone, updatePhoneApi } from '@/shared/services/phone.service'
import { defineStore } from 'pinia'

interface PhoneState {
  phones: PhoneInterface[]
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
      const query = state.searchQuery ? state.searchQuery.toLowerCase() : ''; // Fix here
      return state.phones.filter((phone) => {
        const model = phone.model ? phone.model.toLowerCase() : ''; // Fix here
        const storage = phone.storage ? phone.storage.toLowerCase() : ''; // Fix here
        const color = phone.color ? phone.color.toLowerCase() : ''; // Fix here
        const imei = phone.imei ? phone.imei.toLowerCase() : ''; // Fix here
        return model.includes(query) || storage.includes(query) || color.includes(query) || imei.includes(query);
      });
    }
  },
  actions: {
    async fetchPhone() {
      const result = await fetchPhone();
      if(Array.isArray(result)){
        this.phones = result
      } else {
        this.phones = [result]
      }
      this.isLoading = false
    },
    async addPhone(phone: PhoneFormInterface) {
      await addPhone({
        ...phone,
        editMode: false
      })
    },
    async deletePhone(phoneId: string) {
      await deletePhone(phoneId)
      this.phones = this.phones.filter(phone => phone._id !== phoneId)
    },
    async updatePhone(phoneId: string, update: Partial<PhoneInterface>){

      try {
        const phoneIndex = this.phones.findIndex(p => p._id === phoneId)
        const updatedPhone = await updatePhoneApi(phoneId, {
          ...this.phones[phoneIndex],
          ...update
        })
        this.phones[phoneIndex] = updatedPhone
      } catch (error) {
        console.log(error)
      }


    },
    seed() {
      seed('phoneslist')
    },
    setSearchQuery(query: string) {
      this.searchQuery = query.trim().replace(/\s+/g, ' ');
    }
  }
})
