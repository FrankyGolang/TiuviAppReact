'use-strict'

const callLocalStorage = {


setObject: (storageName , storageValue) => {

    const valueJson = JSON.stringify(storageValue);
    localStorage.setItem(storageName , valueJson);

},
setObjectDefer: async (storageName , storageValue) => {

    callLocalStorage.setObject(storageName, storageValue)

},



getObject: (storageName) =>{

    const valueJson = localStorage.getItem(storageName)
   
    if (valueJson === undefined || valueJson === null ) return false

    const valueObject = JSON.parse(valueJson)

    if (Object.keys(valueObject).length === 0) return false

    
    return valueObject
},

getObjectDefer: async (storageName) =>{

    return callLocalStorage.getObject(storageName);
    
 },



 getKey: (storageName , key) =>{

    const objectStorage = callLocalStorage.getObject(storageName)

    if (!objectStorage) return false
    if (!objectStorage.hasOwnProperty(key)) return false
    
    return String(objectStorage[key])
 },

 getKeyNumber: (storageName , key) =>{

    const objectStorageString = callLocalStorage.getKey(storageName, key)
 
    const objectStorageNumber = Number(objectStorageString)
    if(objectStorageNumber === NaN) return false

    return objectStorageNumber
 },

 getKeyBoolean: (storageName , key) =>{

    const objectStorageString = callLocalStorage.getKey(storageName, key)

    if (objectStorageString === 'true'){
        return true
    }else {
        return false
    }

 },

 getKeyDefer: async (storageName , key) =>{

    return callLocalStorage.getKey(storageName , key);

 },


}
export default callLocalStorage