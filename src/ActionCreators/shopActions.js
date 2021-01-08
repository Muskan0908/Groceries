const ADD_SELECTED_PRODUCT ="ADD_SELECTED_PRODUCT";

export const addProduct = (item) =>{

    return {
        type:ADD_SELECTED_PRODUCT,
        payload: item
    }
}

export const increaseQuantity=(id)=>{
    return {
        type:"INCREASE_QUAN",
        id:id,
    }
}

export const decreaseQuantity=(id)=>{
    return {
        type:"DECREASE_QUAN",
        id:id,
    }
}