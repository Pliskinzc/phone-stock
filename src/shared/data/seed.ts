import data from './phone'

export async function seed(collectionName:string) {
    await fetch(`x/${collectionName}`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type' : 'application/json'
        }
       }) 
}