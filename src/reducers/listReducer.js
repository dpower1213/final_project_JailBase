const listActions ={
    addToList:"addToList",
    removeFromList:"removeFromList",
    emptyList:"emptyList",
}

function listReducer(list, {type, mug}){
    switch(type){
        case listActions.addToList:
            return [...list, mug];
        case listActions.removeFromList:
            let newList = list.slice()
            for (let listMug of newList){
                if(listMug.id === mug.id){
                    newList.splice(newList.indexOf(list),1)
                    return newList
                }
            }
            return newList
        case listActions.emptyList:
            return []
        default:
            throw new Error('I am teaPot!')
    }
}

export {
    listReducer,
    listActions
}