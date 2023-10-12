export const Reducer =(state,action)=>{
    switch (action.type) {
        case 'ADD':
            
            return[
                ...state,{...action.payload}
            ]
    case'DELETE':
    const newArr = [...state];
    newArr.splice(action.index,1)
    return newArr
        default:
            throw new Error
    }
}