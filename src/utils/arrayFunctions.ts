export function searchInObject(object: object, search: string, keys:Array<string> = [])
{
    if(keys.length > 0){
        for(let i = 0; i < keys.length; i++){
            // @ts-ignore
            if(object.hasOwnProperty(keys[i]) && object[keys[i]].toString().includes(search)){
                return true;
            }
        }
        return false;
    }
    return Object.values(object).some(value => value.toString().includes(search));
}

export function searchInCollection(collection: Array<object>, search: string, keys:Array<string> = [])
{
    return collection.filter(item => {
        return searchInObject(item, search, keys);
    });
}