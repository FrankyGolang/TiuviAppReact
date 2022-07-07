'use-strict'

const callLocalStorage = {


setObject: function  (storageName , storageValue)  {

    const valueJson = JSON.stringify(storageValue);
    localStorage.setItem(storageName , valueJson);

},
setObjectDefer: async function  (storageName , storageValue)  {

    callLocalStorage.setObject(storageName, storageValue)

},



getObject: function (storageName) {

    const valueJson = localStorage.getItem(storageName)
   
    if (valueJson === undefined || valueJson === null ) return null

    const valueObject = JSON.parse(valueJson)

    if (Object.keys(valueObject).length === 0) return null

    
    return valueObject
},

getObjectDefer: async function  (storageName) {

    return callLocalStorage.getObject(storageName);
    
 },



 getKey: function (storageName , key) {

    const objectStorage = callLocalStorage.getObject(storageName)

    if (objectStorage === null) return null
    if (!objectStorage.hasOwnProperty(key)) return null
    
    return objectStorage[key]
 },

tString: function(value){

    if (value === null) return null

    const objectStorageString = String(value)

    if(objectStorageString === null) return null

    return objectStorageString
},
 // Devuelve un key en formato string
 getKeyString: function (storageName , key) {

    const keyStorage = callLocalStorage.getKey(storageName, key)
    
    return this.tString(keyStorage)
 },

 tNumber: function(value){

    if (value === null) return null

    const objectStorageNumber = Number(value)
    if(objectStorageNumber === NaN) return null

    return objectStorageNumber
 },

 // Devuelve un key en formato numero
 getKeyNumber: function (storageName , key) {

    const keyStorage = callLocalStorage.getKey(storageName, key)
    return this.tNumber(keyStorage)
 },

 tBoolean: function (value){


    if (value === null) return null

    if (value === 'true' || value === true){
        return true
    }else if(value === 'false' || value === false){
        return false
    }else{
        return null
    }

 },
 // Devuelve un key en formato bolean
 getKeyBoolean: function (storageName , key) {

    const keyStorage = callLocalStorage.getKeyString(storageName, key)

    return this.tBoolean(keyStorage.toLowerCase())
 },

 tArray: function (value) {

    if (value === null) return null
    if (!Array.isArray(value)) return null
    return value
 },
 getKeyArray: function (storageName , key) {

    const keyStorage = callLocalStorage.getKey(storageName, key)
    return this.tArray(keyStorage)
 },

 getKeyDefer: async function  (storageName , key) {

    return callLocalStorage.getKey(storageName , key);

 },


}
export default callLocalStorage